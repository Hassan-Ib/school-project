// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getUsers, createUsers } from "../../../../controller/userController";

export default async function handler(req, res) {
  const httpMethod = req.method;

  switch (httpMethod) {
    case "GET":
      getUsers(req, res, user);
      break;
    case "POST":
      createUsers(req, res);
      break;
    default:
      res.status(404).json({ success: false, data: null });
  }
}
