"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignIn } from "@/types/auth";
import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";
import Error from "@/components/common/Error";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

// export const Error = ({ msg }: { msg: string }) => {
//   return <p className="font-medium text-red-500">{msg}</p>;
// };

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ISignIn>({ resolver: yupResolver(validationSchema) });

  const router = useRouter();

  const handleLogin = async (data: any) => {
    const { email, password } = data;

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user) router.push("/");
    } catch (error) {
      setError("authError", {
        type: "manual",
        message: "Invalid login credentials",
      });
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background">
        <div className="flex h-full w-full flex-wrap items-center">
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
                  Sign In
                </span>
                <p className="leading-none">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-sm font-medium text-primary"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
              <form
                onSubmit={handleSubmit(handleLogin)}
                className="flex w-full flex-col gap-4"
              >
                <div>
                  <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
                    Email address
                  </label>
                  <div className="relative">
                    <Input type="email" {...register("email")} />
                    {errors?.email?.message && (
                      <Error msg={errors?.email?.message} />
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      {...register("password")}
                      icon={
                        isPasswordVisible ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )
                      }
                      onIconClick={() =>
                        setIsPasswordVisible(!isPasswordVisible)
                      }
                    />
                    {errors.password?.message && (
                      <Error msg={errors.password?.message} />
                    )}
                  </div>
                </div>

                {errors?.authError?.message && (
                  <Error msg={errors.authError.message} />
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
