// import Image from "next/image";
import { getLayout } from "../../components";
import { BsImage } from "react-icons/bs";

const CreateArticle = () => {
  return (
    <main className="py-5 capitalize  bg-gray-100 h-screen lg:px-12 ">
      {/* main */}
      <section className="flex items-stretch border border-black h-full">
        <div className="md:flex-auto w-3/5">
          {/* header */}
          <section className="flex text">
            <p className="flex-1 font-semibold">create article</p>
            <div className="flex gap-4 capitalize">
              <button className=" border-b-2 border-blue-800 font-semibold capitalize hover:bg-blue-300 hover:bg-opacity-30 py-1 transition-all">
                edit
              </button>
              <button className="border-b border-transparent capitalize">
                preview
              </button>
            </div>
          </section>
          {/* form */}
          <form
            action=""
            className="shadow-inner bg-white md:px-12 py-6 h-full border border-red-700 flex flex-col items-baseline gap-3">
            <label
              className="cursor-pointer normal-case border-2 border-gray-400 px-4 py-2 rounded-sm inline-block font-medium"
              htmlFor="cover-image-input">
              Add a cover image
            </label>
            <input
              name="cover-image-input"
              id="cover-image-input"
              type="file"
              accept="image/*"
              className=" invisible"
              data-max-file-size-mb="25"
            />
            <textarea
              name="article-title"
              id="article-title"
              className="block text-5xl capitalize font-extrabold resize-none outline-none"
              placeholder="new post title here..."></textarea>

            <div className="bg-gray-100 py-2">
              <label
                htmlFor="upload-article-image"
                className="font-medium px-6 py-2  cursor-pointer inline-block">
                {" "}
                <BsImage className="inline-block mr-1" /> upload image
              </label>

              <input type="file" accept="image/*" className=" invisible" />
            </div>
            <textarea
              name="article-body"
              id="article-body"
              className="block w-full h-full  resize-none  outline-none text-lg"
              placeholder="Write your article content here . . ."></textarea>
          </form>
        </div>
        {/* explain */}
        <section className="px-4 relative border-2 border-black hidden lg:block flex-1">
          explain
        </section>
      </section>

      <footer className=" flex gap-4">
        <button className="bg-blue-700 tracking-wide text-white font-bold capitalize px-4 py-2 rounded">
          publish
        </button>
        <button className="bg-gray-200 tracking-wide font-bold capitalize px-4 py-2 rounded">
          {" "}
          save draft{" "}
        </button>
        <button className="revert"> revert new changes </button>
      </footer>
    </main>
  );
};

// eslint-disable-next-line react/display-name
// CreateArticle.getLayout = getLayout;

export default CreateArticle;
