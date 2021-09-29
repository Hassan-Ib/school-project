import {
  getArticle,
  updateArticle,
} from "../../../controller/ArticleController";
import withDBConnection from "../../../middleware/database";

export default withDBConnection(async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getArticle(req, res);
    case "PATCH":
      return updateArticle(req, res);
    default:
      res
        .status(404)
        .json({ success: false, message: `${method} is Not Allowed` });
  }
});
