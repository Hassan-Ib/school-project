import withDBConnection from "../../../middleware/database";
import Articles from "../../../models/ArticleModel";

export default withDBConnection(async (req, res) => {
  const {
    query: { id },
  } = req;

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const query = await Articles.findById(id);
        res.status(200).json({
          success: true,
          data: query,
        });
      } catch (error) {
        res.status(404).json({ success: false, message: error });
      }
      break;
    case "PATCH":
      try {
        const { body } = req;

        console.log("body : ", body);
        // const article = await Articles.findByIdAndUpdate(id, body, {
        //   new: true,
        //   runValidators: true,
        // });
        const article = await Articles.getByIdAndPopulate(id, body);
        console.log(article);
        await article.save();
        res.status(201).json({
          success: true,
          data: article,
        });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res
        .status(404)
        .json({ success: false, message: `${method} is Not Allowed` });
  }
});
