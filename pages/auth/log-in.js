import React from "react";
import { useForm } from "react-hook-form";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = function (data) {
    console.log(data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="matricNo">matric No</label>
        <input
          {...register("matricNo", {
            type: Number,
            minLength: 6,
            maxLength: 6,
            min: 150000,
            max: 169000,
            name: "matric number",
          })}
          id="matricNo"
          placeholder={150000}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="matricNo"
          placeholder="************"
        />
      </form>

      {/* sign up */}
    </>
  );
};

export default LogIn;
