import { useRouter } from "next/router";
import DBConnect from "../../utils/DBConnection";
import { default as ArticlesModel } from "../../models/ArticleModel";

// import { FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { getLayout, getLayoutWithNavAndFooter } from "../../components";

const Article = ({ article }) => {
  article = JSON.parse(article);
  const { authorId } = article;

  const router = useRouter();

  return (
    <main className="bg-white my-8 py-4 m-auto prose prose-slate lg:prose-xl pb-6">
      {article.coverImage ? (
        <section className="relative h-96 text-center overflow-hidden">
          <Image
            src={article?.coverImage.url}
            width={article?.coverImage.width ?? 700}
            height={article?.coverImage.height ?? 400}
            alt={article?.title}
          />
        </section>
      ) : null}
      <section></section>
      <section className=" overflow-auto my-20 ">
        <h1>{article?.title}</h1>
        <section>
          <article dangerouslySetInnerHTML={{ __html: article?.body }} />
        </section>
        <button
          onClick={() => router.back()}
          className="flex items-center border-b border-blue-800 gap-2 text-lg pt-12 py-1">
          {" "}
          <BiArrowBack /> Go back
        </button>
      </section>
    </main>
  );
};

Article.getLayout = getLayout;

export default Article;

export const getStaticPaths = async () => {
  await DBConnect();
  let articles = ArticlesModel.find();
  articles = await articles.lean();

  let paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  await DBConnect();
  let query = ArticlesModel.findOne({ slug: params.slug })
    .populate({ path: "authorId", select: "-_id" })
    .sort("-createdAt")
    .select("-_id");
  query = await query.exec();
  return {
    props: {
      article: JSON.stringify(query),
      events: [],
    },
  };
};
