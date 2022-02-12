module.exports = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
  reactStrictMode: true,
  images: {
    domains: ["blob:http://localhost:400", "res.cloudinary.com"],
  },
};
