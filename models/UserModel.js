const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  matricNo: {
    type: Number,
    require: [true, "A user must have a matric number"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },

  articles: [String],
});

// UserSchema.pre("save", function (next) {
//   const matricNoArray = String(this.matricNo).split();
//   const matricIsLengthSix = matricNoArray.length === 6 ? true : false;
//   if (!matricIsLengthSix) throw new Error("matric no should be of 6 character");
//   next();
// });
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = UserModel;
