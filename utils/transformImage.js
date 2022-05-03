import { buildUrl, setConfig } from "cloudinary-build-url";

function transformImage(public_id, transformation) {
  setConfig({
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  });
  const src = buildUrl(public_id, {
    transformation,
  });

  return src;
}

export default transformImage;
