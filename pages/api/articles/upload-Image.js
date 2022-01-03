import apiRouter from "../../../utils/apiHandler";

export default apiRouter(async function handler(req, res) {
  const { method, body } = req;
  console.log(method, body);
  try {
    if (method !== "POST") throw new Error("");
  } catch (error) {}
});
