export default async function article(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const mockRes = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await mockRes.json();
        console.log(data);
        res.status(200).json({
          susses: true,
          data,
        });
      } catch (error) {
        console.log(error);
        res.status(404).json({
          susses: false,
          data: null,
        });
      }

      break;
    case "POST":
      break;
  }
}
