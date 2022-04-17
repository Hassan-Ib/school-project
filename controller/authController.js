import { getToken } from "next-auth/jwt";
import UserModel from "../models/UserModel";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
const secret = process.env.JWT_SECRET;

export async function login(credentials) {
  const { matricNo, password } = credentials;

  if (!matricNo || !password)
    throw new AppError("please provide your matric no and password", 400);

  const user = await UserModel.findOne({ matricNo }).select("+password");
  if (!user) throw new AppError("invalid credentials", 401);

  const isPasswordValid = await user.comparePassword(password);

  console.log("compare output from login", isPasswordValid);

  if (!isPasswordValid) throw new AppError("invalid credentials", 401);

  return user;
}

export async function protect(req) {
  // 1 - check if token exists
  // 2 - check if user with the token exists
  // 3 - check if the password has changed after token was created

  const token = await getToken({ req, secret });
  // console.log("backend token", token);

  if (!token) {
    throw new AppError("unAuthorized", 401);
  }

  const user = await UserModel.findOne({ matricNo: token.matricNo });

  if (!user) {
    throw new AppError("user with this token no longer exits", 401);
  }

  const isPasswordChangedAfterTokenSign =
    user.checkPasswordChangedAfterTokenSign(token.iat);

  if (isPasswordChangedAfterTokenSign)
    throw new AppError("please check your credentials", 401);
  // console.log("user", user);

  req.user = user ?? null;

  return user;
}

export const signup = catchAsync(async (req, res) => {
  const {
    matricNo,
    name: { first: firstName, last: lastName },
    password,
    passwordConfirm,
  } = req.body;

  // console.log(matricNo, password, passwordConfirm);

  // if at least one of the credentail fields does not exist res => 400 bad request
  // check if user already exist => true / false
  // false
  // -- res => 422 user already exist
  // true
  // -- create user
  // res => 201 user created

  if (
    !firstName ||
    !lastName ||
    !password ||
    !passwordConfirm ||
    !matricNo ||
    password.trim(" ").length < 8
  )
    throw new AppError("bad request : invalid credentails", 400);

  await UserModel.create(req.body);

  return res.status(201).json({ message: "user sussecfully created ." });
});
