const MatricNoInput = ({ register, errors }) => {
  return (
    <section>
      <label
        htmlFor="matricNo"
        className="block text-gray-700 text-sm font-bold mb-2">
        Matric No
      </label>
      <input
        {...register("matricNo", {
          minLength: {
            value: 6,
            message: "matric no number must be at least six characters long",
          },
          required: "matric enter your matric no",
          defaultValue: "",
        })}
        // name="matricNo"
        type="text"
        id="matricNo"
        placeholder={150000}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className=""></div>
      {errors.matricNo?.message ? (
        <p className="text-xs mt-2  text-red-500">{errors.matricNo.message} </p>
      ) : null}
    </section>
  );
};

export default MatricNoInput;
