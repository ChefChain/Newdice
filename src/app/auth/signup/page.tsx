"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ISignUp } from "@/types/auth";
import { useRouter } from "next/navigation";
import Error from "@/components/common/Error";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ISignUp>({ resolver: yupResolver(validationSchema) });

  const router = useRouter();

  const handleSignup = async (data: any) => {
    const { email, password, firstName, lastName } = data;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = response.user;
      if (response.user) {
        router.push("/signin");
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
      }
    } catch (error) {}
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background">
        <div className="flex h-full flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="text-center">LIVEWAGER.IO</div>
          </div>
          <div className="flex w-full items-center justify-center border-stroke p-4 dark:border-border xl:w-1/2 xl:border-l-2">
            <div className="flex w-full max-w-[420px] flex-col items-center justify-start gap-8">
              <div className="w-full">
                <Image
                  src="/assets/livewager.svg"
                  width={122}
                  height={32}
                  alt="Logo"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <span className="w-full text-2xl font-bold text-black dark:text-white">
                  Sign Up
                </span>
                <p className="leading-none">
                  Already have an account?{" "}
                  <Link
                    href="/auth/signin"
                    className="text-sm font-medium text-primary"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
              <form
                onSubmit={handleSubmit(handleSignup)}
                className="flex w-full max-w-lg flex-col gap-4"
              >
                <div>
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    First Name
                  </label>
                  <div className="relative">
                    <Input type="text" {...register("firstName")} />
                    {errors?.firstName?.message && (
                      <Error msg={errors?.firstName?.message} />
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Last Name
                  </label>
                  <div className="relative">
                    <Input type="text" {...register("lastName")} />
                    {errors?.lastName?.message && (
                      <Error msg={errors?.lastName?.message} />
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <Input type="email" {...register("email")} />
                    {errors?.email?.message && (
                      <Error msg={errors?.email?.message} />
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <Input type="password" {...register("password")} />
                    {errors.password?.message && (
                      <Error msg={errors.password?.message} />
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <Input type="password" {...register("confirmPassword")} />
                    {errors.confirmPassword?.message && (
                      <Error msg={errors.confirmPassword?.message} />
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
