import Image from "next/image";

const CreateArticle = () => {
  return (
    <main className="py-10 capitalize flex h-4/5 bg-gray-100">
      <div className="flex-1 md:flex-auto  max-w-4xl">
        <section className="flex text-lg">
          <p className="flex-1">create article</p>
          <div className="flex gap-4 capitalize">
            <button className="border-b border-blue-800 capitalize">
              edit
            </button>
            <button>preview</button>
          </div>
        </section>
        <form action="">
          <textarea
            name="article-body"
            id="article-body"
            // cols="30"
            // rows="10"
            className="w-full h-full"
            placeholder="New article title here"></textarea>
        </form>
      </div>
      <section className="px-4 relative">explain</section>
    </main>
  );
};

export default CreateArticle;
