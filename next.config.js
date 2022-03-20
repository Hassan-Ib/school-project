module.exports = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
  reactStrictMode: true,
  images: {
    domains: ["blob:http://localhost:4000", "res.cloudinary.com"],
  },
};
