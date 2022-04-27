import mongoose from "mongoose";
const DB = process.env.DB_CONNECTION;
// const DB = process.env.DB_CONNECTION_ATLAS;

// console.log("DB STRING", DB);

const connection = {};
export default async function DBConnect() {
  try {
    if (connection?.isConnected) {
      return;
    }
    const db = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // require("../models/ArticleModel");
    // require("../models/UserModel");

    connection.isConnected = mongoose.connections[0].readyState;
    console.log("DB CONNECTION SUCCESSFUL 👌", mongoose.models);
    return db;
  } catch (error) {
    console.log("ERROR IN CONNECTION 🤯");
    console.log(error);
  }
}
