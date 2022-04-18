import { useRef, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

const PasswordInput = ({ register, errors }) => {
  const passwordRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const showPassword = () => {
    let input = passwordRef.current;
    if (input?.type === "password") {
      input.type = "text";
      setIsVisible(true);
      return;
    }
    input.type = "password";
    setIsVisible(false);
  };
  return (
    <section className="relative">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password">
        Password
      </label>
      <div className="flex items-center w-full gap-2">
        <input
          {...register("password", {
            required: "please input your password",
            minLength: {
              value: 8,
              message: "password must be at least 8 characters long",
            },
            defaultValue: "",
          })}
          //   ref={passwordRef}
          type="password"
          id="password"
          defaultValue={""}
          placeholder="Awesomeness"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div
          onClick={showPassword}
          aria-hidden="true"
          className="text-xl opacity-70 cursor-pointer">
          {isVisible ? <FiEye /> : <FiEyeOff />}
        </div>
      </div>

      {errors.password?.message ? (
        <p className="text-xs mt-2 text-red-500">{errors.password.message} </p>
      ) : null}
    </section>
  );
};

export default PasswordInput;
