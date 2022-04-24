import { getSession, useSession } from "next-auth/react";
import React from "react";
import { getLayoutWithNavAndFooter, Loader } from "../components";
import DBConnect from "../utils/DBConnection";
import { default as ArticlesModel } from "../models/ArticleModel";
import { default as UserModel } from "../models/UserModel";

import { getToken } from "next-auth/jwt";
import { useRouter } from "next/router";
const secret = process.env.JWT_SECRET;

const Dashboard = ({ articles }) => {
  const router = useRouter;
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/auth/log-in");
    },
  });
  console.log(aticles);
  // if(status)
  return <div> profile</div>;
};

Dashboard.getLayout = getLayoutWithNavAndFooter;

export default Dashboard;

export const getServerSideProps = async (context) => {
  try {
    const session = await getSession(context);
    console.log("session ", session);
    if (!session?.user) throw "pls login first";

    await DBConnect();

    let query = await UserModel.find(
      { matricNo: session.user.matricNo },
      { __v: 0 }
    ).lean();

    let articles = await ArticlesModel.find(
      { authorId: query[0]._id },
      { _id: 0, __v: 0 }
    ).lean();

    console.log("query ", query);
    console.log("articles ", articles, articles.length);

    return {
      props: { articles },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
      redirect: "/auth/log-in",
    };
  }
};
