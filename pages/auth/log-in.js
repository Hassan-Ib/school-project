import React from "react";
import { useForm } from "react-hook-form";
import { ImQuotesLeft } from "react-icons/im";
import { signIn } from "next-auth/react";
import PasswordInput from "../../components/Inputs/PasswordInput";
import MatricNoInput from "../../components/Inputs/MatricInput";
import router from "next/router";
import { useRouter } from "next/router";
const LogIn = () => {
  return (
    <>
      <main className="h-screen flex place-content-center place-items-center">
        <div className="flex shadow-xl w-fit sm:w-full max-w-2xl justify-center rounded-md overflow-hidden">
          <Banner />
          <Form />
        </div>
      </main>
    </>
  );
};

export default LogIn;

const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      matricNo: "",
      password: "",
    },
  });
  const onSubmit = async function (data) {
    const res = await signIn("credentials", { ...data, redirect: false });
    if (res.ok || res.status === 200) {
      router.back();
      console.log(window.history);
    }
    console.log(res);
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white  rounded px-8 pt-6 pb-8 max-w-xs form flex flex-col gap-6">
      <FormHeader />
      <MatricNoInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  return (
    <input
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      value="Get started"
    />
  );
};

const FormHeader = () => {
  return (
    <article className="">
      <h1 className=" text-2xl font-bold">Welcome to FCI</h1>

      <p className="text-xs opacity-60">
        please provide your matric number and password to continue
      </p>
    </article>
  );
};

const Banner = () => {
  return (
    <article className=" hidden bg-blue-500 sm:block flex-1 text-white px-16 py-10 ">
      <div className="bg-white p-2 max-w-max rounded-full mb-3 ">
        <ImQuotesLeft className="text-blue-500" />
      </div>
      <h1 className="text-4xl capitalize max-w-[8rem] ">Make a dream.</h1>
    </article>
  );
};
