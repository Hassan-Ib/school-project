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
        const doc = await Articles.getByIdAndPopulate(id, body);
        await doc.save();
        return res.status(201).json({
          success: true,
          data: doc,
        });
      } catch (error) {
        console.log(" error form catch ", error.message);
        return res.status(400).json({ success: false, message: error.message });
      }
    default:
      res
        .status(404)
        .json({ success: false, message: `${method} is Not Allowed` });
  }
});
