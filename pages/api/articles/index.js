import withDBConnection from "../../../middleware/database";
import Articles from "../../../models/ArticleModel";

export default withDBConnection(async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const query = await Articles.find();

        console.log(query);
        return res.status(200).json({
          susses: true,
          data: query,
        });
      } catch (error) {
        console.log(error);
        return res.status(404).json({
          susses: false,
          data: null,
          error,
        });
      }
      break;
    case "POST":
      try {
        const doc = await Articles.create({ ...req.body });

        console.log("doc : ", doc);

        res.status(201).json({
          success: true,
          data: doc,
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          success: false,
          data: null,
          error,
        });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
});
