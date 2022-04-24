const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const util = require("util");
const { Schema } = mongoose;

const UserSchema = new Schema({
  matricNo: {
    type: Number,
    require: [true, "A user must have a matric number"],
    unique: true,
    validate: {
      validator: function (el) {
        const elString = el.toString().length;
        return elString > 5 && elString <= 10;
      },
      message: "matric no must be between 6 to 10 characters",
    },
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    select: false,
    minlength: [8, "password must be of at least 8 characters long"],
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "password does not match",
    },
  },
  passwordChangedAt: {
    type: Date,
  },
  name: {
    first: {
      type: String,
      required: [true, "first name is required"],
      minlength: [2, "first name must be at least 2 characters long"],
      trim: true,
    },
    last: {
      type: String,
      required: [true, "last name is required"],
      minlength: [2, "last name must be at least 2 characters long"],
      trim: true,
    },
  },
  image: {
    type: String,
    default: "/person-user.png",
  },
  role: {
    type: String,
    enum: ["ADMIN", "STUDENT", "STAFF"],
    default: "STUDENT",
    // required : true
  },
});

UserSchema.pre("save", async function (next) {
  // if password is not modified or save for the first time return from function
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  // console.log(this.password);
  // validation would have ran before this so its safe to change password change to null
  this.passwordConfirm = null;

  next();
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  // passwordChanged at only gets updated when document is not new and password is getting modified

  this.passwordChangedAt = Date.now() - 1000;

  next();
});

UserSchema.methods.comparePassword = async function (credentialPassword) {
  return await bcrypt.compare(credentialPassword, this.password); // => boolean
};

UserSchema.methods.checkPasswordChangedAfterTokenSign = function (JWTIssuedAt) {
  if (!this.passwordChangedAt) return false;

  const timeOfMod = this.passwordChangedAt.getTime() / 1000;

  console.log(timeOfMod, JWTIssuedAt);

  return timeOfMod > JWTIssuedAt;
};

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = UserModel;
