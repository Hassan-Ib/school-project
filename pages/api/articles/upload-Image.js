// import catchAsync from "../../../utils/apiHandler";
// const cloudinary = import("cloudinary").v2;
import cloudinary from "cloudinary";

export default async function handler(req, res) {
  const { method, body } = req;
  console.log(method, body);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  switch (method) {
    case "POST":
      try {
        res.status(201).json({
          success: true,
          data: { url: "imageurl" },
        });
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      res.status(400).json({
        success: false,
        message: "bad request",
      });
  }
}
