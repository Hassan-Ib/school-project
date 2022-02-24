import withDBConnection from "../../../middleware/database";
import {
  createArticle,
  getAllArticles,
} from "../../../controller/ArticleController";

export default withDBConnection(async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      await getAllArticles(req, res);
      break;
    case "POST":
      return createArticle(req, res);
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
});
