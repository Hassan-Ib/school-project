import withDBConnection from "../../../middleware/database";
import {
  createArticle,
  getAllArticles,
} from "../../../controller/ArticleController";

export default withDBConnection(async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      return getAllArticles(req, res);
      break;
    case "POST":
      return createArticle(req, res);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
});
