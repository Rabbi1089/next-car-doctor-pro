"use client";
import React from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialSignin from "./SocialSignin";
import toast from "react-hot-toast";

const LoginFrom = () => {
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    toast.success("Form submitting");

    const res = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    });
    console.log(res);
    if (res?.ok) {
      router.push("/");
      toast.success("Successfully Logged in!");
    } else {
      console.error("Login failed", res);
      toast.error("logged in failed");
    }
  };
  return (
    <div className="border-2  border-white p-12 shadow-2xl">
      <form onSubmit={handleLogin} action="">
        <h6 className=" text-3xl font-semibold text-center mb-4">Sign In</h6>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Type Your Email"
          className=" w-full input mb-3"
          name="email"
        />{" "}
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="Type Your Password"
          className="input mb-5 w-full"
          name="password"
        />{" "}
        <br />
        <button type="submit" className=" btn btn-primary w-full mt-6">
          {" "}
          Login
        </button>
        <br />
      </form>{" "}
      {/* social sign in  */}
      <SocialSignin />
    </div>
  );
};

export default LoginFrom;
