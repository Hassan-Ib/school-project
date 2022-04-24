import { useState, useEffect } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import PasswordInput from "../../components/Inputs/PasswordInput";
import MatricNoInput from "../../components/Inputs/MatricInput";
import { useRouter } from "next/router";
import SubmitButton from "../../components/Buttons/SubmitButton";
import Banner from "../../components/Banner";

const LogIn = () => {
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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = async function (data) {
    try {
      setLoading(true);
      const res = await signIn("credentials", { ...data, redirect: false });
      if (res.ok || res.status === 200) {
        router.back();
        return;
      }
      if (!res.ok || res.error) {
        throw res.error;
      }
    } catch (error) {
      // console.log(error);
      setLoading(false);
      setError({
        message:
          "Sign in error, invalid credentail check if your details are correct",
      });
    }
  };

  return (
    <>
      <main className=" h-screen flex place-content-center place-items-center">
        <div className=" flex shadow-xl w-fit sm:w-full max-w-2xl justify-center rounded-md overflow-hidden">
          <Banner />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-white rounded px-8 pt-6 pb-8 max-w-xs form flex flex-col gap-6">
            {error ? (
              <div className="absolute top-0 text-red-500 py-4 text-sm font-medium">
                {error.message}
              </div>
            ) : null}
            <article className=" my-4 mt-10">
              <h1 className=" text-2xl font-bold mb-3">Login to Continue</h1>
              <p className="text-xs opacity-50">
                please provide your matric number and password to continue
              </p>
            </article>
            <MatricNoInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <SubmitButton loading={loading} text="Get started" />
          </form>
        </div>
      </main>
    </>
  );
};

export default LogIn;
