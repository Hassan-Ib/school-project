import mongoose from "mongoose";

const DB = process.env.DB_CONNECTION_LOCAL;
// const DB = process.env.DB_CONNECTION_ATLAS;

console.log("DB STRING", DB);

const connection = {};
export default async function DBConnect() {
  try {
    if (connection?.isConnected) {
      return;
    }
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = mongoose.connections[0].readyState;
    console.log("DB CONNECTION SUCCESSFUL 👌");
  } catch (error) {
    console.log("ERROR IN CONNECTION 🤯");
    console.log(error);
  }
}
