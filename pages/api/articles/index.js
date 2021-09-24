import DBConnect from "../../../utils/DBConnection";
// import Articles from "../../../../models/ArticleModel";

export default async function article(req, res) {
  await DBConnect();

  switch (req.method) {
    case "GET":
      try {
        const mockRes = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await mockRes.json();
        console.log(data);
        return res.status(200).json({
          susses: true,
          data,
        });
      } catch (error) {
        console.log(error);
        return res.status(404).json({
          susses: false,
          data: null,
        });
      }
      break;
    case "POST":
      try {
        console.log(req.body);
        const body = req.body;
        // const article = ArticleSchema.create(req.body)
        res.status(201).json({
          success: true,
          data: body,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          data: null,
        });
      }
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
