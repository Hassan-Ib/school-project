import Head from "next/head";
const Meta = ({ title = "Lautech home page", discreption }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Lautech Computer science faculty",
};

export default Meta;
