// import catchAsync from "../../../utils/apiHandler";
import cloudinary from "cloudinary";

export default async function handler(req, res) {
  const { method, body } = req;
  console.log("body", body.imageUrl ? true : false);
  console.log(
    process.env.CLOUDINARY_API_KEY,
    process.env.CLOUDINARY_API_SECRET,
    process.env.CLOUDINARY_CLOUD_NAME
  );

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  switch (method) {
    case "POST":
      try {
        if (!body || !body.imageUrl)
          throw new Error("image must be provided for uploaded");
        const response = await cloudinary.v2.uploader.upload(body.imageUrl, {
          upload_preset: "articles_img",
        });
        console.log("server response", response);
        const { public_id, width, height, format, bytes, url } = response;
        const imageData = {
          url,
          public_id,
          width,
          height,
          format,
          bytes,
        };
        res.status(201).json({
          success: true,
          data: { imageData },
        });
      } catch (error) {
        console.log("server error", error);
        res.status(400).json({
          success: false,
          data: null,
          message: error.message,
          error,
        });
      }
      break;
    default:
      return res.status(403).json({
        success: false,
        message: "POST request only",
      });
  }
}
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
