import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import DateDisplay from "../../components/Date";
import DBConnect from "../../utils/DBConnection";
import ArticlesModel from "../../models/ArticleModel";

const Article = ({
  article,
  // author
}) => {
  article = JSON.parse(article);
  const { authorId: author } = article;
  // author = JSON.parse(author);
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
              authored by : {author.name.first} {author.name.last}
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
  console.log("build path");
  await DBConnect();
  let articles = ArticlesModel.find();
  articles = await articles.lean();

  let paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));
  console.log("build path ends");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  await DBConnect();
  let article = ArticlesModel.findOne(
    { slug: params.slug },
    { _id: 0, __v: 0 }
  ).populate({ path: "authorId", select: "-_id -__v", model: "User" });
  article = await article.exec();

  return {
    props: {
      article: JSON.stringify(article),
      // author: JSON.stringify(author),
      events: [],
    },
    // fallback: false,
    revalidate: 10,
  };
};
