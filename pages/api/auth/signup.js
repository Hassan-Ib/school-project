import { signup } from "../../../controller/authController";
import withDBConnection from "../../../middleware/database";

function signupHandler(req, res) {
  const { method } = req;
  if (method !== "POST") {
    return res.status(405).end(`Method ${method} is not allowed`);
  }

  return signup(req, res);
}
export default withDBConnection(signupHandler);
