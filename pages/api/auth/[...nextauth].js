import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import DBConnect from "../../../utils/DBConnection";
import UserModel from "../../../models/UserModel";
import AppError from "../../../utils/appError";
import { login } from "../../../controller/authController";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        matricNo: { label: "matric no", type: "text", placeholder: "150000" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { matricNo, password } = credentials;
        console.log(matricNo, password);

        try {
          await DBConnect();
          const user = await login(credentials);
          // const user = await UserModel.findOne({ matricNo });

          return {
            name: user.name,
            email: user.matricNo,
            matricNo: user.matricNo,
          };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user?.matricNo) {
        token.matricNo = user.matricNo;
      }
      return token;
    },
  },
  // secret: "nextauthjssecretformyjsonwebtokenimplementation",
};

const auth = (req, res) => NextAuth(req, res, options);
export default auth;
