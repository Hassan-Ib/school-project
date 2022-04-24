import { BiLoaderAlt } from "react-icons/bi";

const SubmitButton = ({ loading, text, error = false, onClick = () => {} }) => {
  if (error) {
    <button className=""> error </button>;
  }
  return (
    <button
      className={`bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:shadow-outline 
         flex items-center justify-center gap-2 ${
           loading ? "bg-opacity-70 hover:bg-opacity-70 hover:bg-blue-500" : " "
         }`}
      type="submit"
      onClick={onClick}
      disabled={loading}>
      {loading ? (
        <>
          <BiLoaderAlt className="animate-spin text-2xl" />
          Processing...
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;
