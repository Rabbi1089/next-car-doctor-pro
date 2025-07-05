"use client";
import React, { useEffect } from "react";

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
      redirect: false,
    });

    if (res?.ok) {
      router.push("/");
      toast.success("Successfully Logged in!");
    } else {
      console.error("Login failed", res);
      toast.error("logged in failed");
    }
  };
  return (
    <form onSubmit={handleLogin} action="">
      <div className="border-2  border-white p-12 shadow-2xl">
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
        {/* social sign in  */}
        <SocialSignin />
      </div>
    </form>
  );
};

export default LoginFrom;
