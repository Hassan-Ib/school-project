const Input = ({ register, registerOption, name, inputOption, errors }) => {
  return (
    <section>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}>
        {name}
      </label>
      <input
        {...register("password", registerOption)}
        type={name}
        id={name}
        name={name}
        {...inputOption}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors[`${name}`]?.message ? (
        <p className="text-xs mt-2 text-red-500">
          {errors[`${matricNo}`].message}
        </p>
      ) : null}
    </section>
  );
};

export default Input;
