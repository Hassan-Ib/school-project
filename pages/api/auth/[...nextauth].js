import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import DBConnect from "../../../utils/DBConnection";
import UserModel from "../../../models/UserModel";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        matricNo: { label: "matric no", type: "text", placeholder: "150000" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { matricNo } = credentials;
        console.log(matricNo);

        try {
          await DBConnect();
          const user = await UserModel.findOne({ matricNo: Number(matricNo) });
          const userInfo = {
            name: user.name,
            email: user.matricNo,
            image: user.password,
          };
          console.log(user);
          const userExist = user ? true : false;

          if (userExist) {
            // Any object returned will be saved in `user` property of the JWT
            // req.body.user = user;
            return userInfo;
          } else {
            // If you return null or false then the credentials will be rejected
            // return false;
            // You can also Reject this callback with an Error or with a URL:
            throw new Error("error message"); // Redirect to error page
            // throw '/path/to/redirect'        // Redirect to a URL
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  // secret: "nextauthjssecretformyjsonwebtokenimplementation",
};

const auth = (req, res) => NextAuth(req, res, options);
export default auth;
