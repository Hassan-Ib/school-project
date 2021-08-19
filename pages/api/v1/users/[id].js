import { getUser } from "../../../../controller/userController";

export default async function user(req, res) {
  const httpMethod = req.method;

  switch (httpMethod) {
    case "GET":
      getUser(req, res);
      break;
    default:
      res.status(404).json({
        success: false,
        data: null,
      });
  }
}
