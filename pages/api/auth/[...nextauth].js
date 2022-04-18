import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import DBConnect from "../../../utils/DBConnection";
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
        try {
          await DBConnect();
          const user = await login(credentials);
          return user;
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
    async session({ session, token }) {
      // session.image = "name/you";
      session.user.matricNo = token.matricNo;
      return session;
    },
  },
  pages: {
    signin: "/auth/log-in",
    error: "auth/log-in",
  },
};

const auth = (req, res) => NextAuth(req, res, options);
export default auth;
