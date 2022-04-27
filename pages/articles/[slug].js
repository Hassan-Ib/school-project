import { useRouter } from "next/router";
import DBConnect from "../../utils/DBConnection";
import { default as ArticlesModel } from "../../models/ArticleModel";

// import { FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { getLayout, getLayoutWithNavAndFooter } from "../../components";
import DateDisplay from "../../components/Date";

const Article = ({ article }) => {
  article = JSON.parse(article);
  const { authorId } = article;
  console.log(authorId);

  const router = useRouter();

  return (
    <main className="bg-birch-500 grid place-content-center px-4 py-10">
      <div className="px-10 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-4 btn btn-md text-white border-0 text-lg md:text-xl font-semibold hover:bg-white/30 hover:backdrop-blur">
          {" "}
          <BiArrowBack className="text-2xl" /> Go back
        </button>
      </div>
      <section className="bg-white shadow-inner  border-2 border-birch-500 m-auto prose prose-base prose-slate md:prose-lg p-8 py-12 md:p-16 max-w-5xl rounded-3xl overflow-hidden">
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
        <section className=" overflow-auto ">
          <h1>{article?.title}</h1>
          <section className="text-base leading-normal">
            <p className="font-bold capitalize leading-none">
              {" "}
              authored by : {authorId.name.first} {authorId.name.last}
            </p>
            <p className="leading-none">
              created at : {<DateDisplay date={article.createdAt} />}
            </p>
          </section>
          <section>
            <article dangerouslySetInnerHTML={{ __html: article?.body }} />
          </section>
        </section>
      </section>
    </main>
  );
};

// Article.getLayout = getLayout;

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
    .select("-_id");
  query = await query.exec();
  return {
    props: {
      article: JSON.stringify(query),
      events: [],
    },
  };
};
