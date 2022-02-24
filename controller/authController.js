import { getToken } from "next-auth/jwt";
import UserModel from "../models/UserModel";
import AppError from "../utils/appError";
const secret = process.env.JWT_SECRET;

export async function protect(req) {
  const token = await getToken({ req, secret });
  console.log("backend token", token);
  if (!token) {
    throw new AppError("unAuthorized", 401);
  }
  const user = await UserModel.findOne({ matricNo: token.email });
  if (!user) {
    throw new AppError("user with this token no longer exits", 401);
  }

  console.log("user", user);

  return user;
}

export async function login(credentials) {
  const { matricNo, password } = credentials;
  if (!matricNo || !password)
    throw new AppError("please provide your matric no and password", 401);
  const user = await UserModel.findOne({ matricNo });
  if (!user)
    // || !(await user.isPasswordCorrect())
    throw new AppError("incorrect email or password", 401);

  return user;
}
