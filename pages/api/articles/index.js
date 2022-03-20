import withDBConnection from "../../../middleware/database";
import {
  createArticle,
  getAllArticles,
} from "../../../controller/ArticleController";
export default withDBConnection(function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      return getAllArticles(req, res);
    case "POST":
      return createArticle(req, res);
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
});
