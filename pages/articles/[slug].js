import { useRouter } from "next/router";
// import DBConnect from "../../utils/DBConnection";
import { articles } from "../../utils/articleData";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

const Article = ({ article }) => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  console.log(article);
  return (
    <main className="px-3 pt-24 pb-10 grid text-blue-800">
      <section className="text-center max-w-lg m-auto">
        <h1 className="font-semibold text-4xl md:text-5xl pb-2">
          {article.title}
        </h1>
        <p className="py-2">Read in 4 minutes</p>
        <p className="py-3 ">{article.body}</p>
        <div className="flex place-content-center gap-3 py-3">
          <span className="rounded-full bg-blue-800 text-white p-3 text-lg flex justify-center items-center">
            <FaLinkedinIn />
          </span>
          <span className="rounded-full bg-blue-800 text-white p-3 text-lg flex justify-center items-center">
            <AiFillFacebook />
          </span>{" "}
          <span className="rounded-full bg-blue-800 text-white p-3 text-lg flex justify-center items-center">
            <AiOutlineTwitter />
          </span>
        </div>
      </section>
      <section className="relative my-10 h-56 md:h-64 overflow-hidden rounded-md">
        <Image
          src={`/img/${article.image}`}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </section>
      <section className="max-w-2xl m-auto">
        <div className="md:flex">
          <p>{article.body}</p>
        </div>
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

export default Article;

export const getStaticProps = (context) => {
  const {
    params: { slug },
  } = context;
  const article = articles.filter((article) => article.Id === Number(slug))[0];
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = () => {
  let paths = articles.map((article) => ({
    params: { slug: article.Id.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
