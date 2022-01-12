// import catchAsync from "../../../utils/apiHandler";

export default async function handler(req, res) {
  const { method, body } = req;
  console.log(method, body);
  res.status(201).json({
    success: true,
    data: { url: "imageurl" },
  });
}
