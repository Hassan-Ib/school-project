const mongoose = require("mongoose");
// const DBConnect = require ("./DBConnection");
const UserModel = require("../models/UserModel");
const { users } = require("./user");

console.log("user", users);

mongoose
  .connect("mongodb://localhost:27017/FCI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTION SUCCESSFUL 👌"))
  .catch((err) => console.log("ERROR IN CONNECTION 🤯"));

async function seedingDb() {
  try {
    console.log(mongoose.models);
    await UserModel.create(users);
    console.log("db successfully seeded ✨");
    process.exit();
  } catch (error) {
    console.log("user creation error", error);
    process.exit();
  }
}

async function unSeedDb() {
  try {
    await UserModel.deleteMany();
    console.log(" user db successfully unSeeded 👀");
    process.exit();
  } catch (error) {
    console.log("error while seeding user db 🤷‍♀️");
    process.exit();
  }
}

const command = process.argv[2];
if (command === "--import") {
  seedingDb();
} else if (command === "--delete") {
  unSeedDb();
}
console.log(process.argv);
// process.exit();
