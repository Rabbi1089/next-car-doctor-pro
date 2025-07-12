"use client";

import React from "react";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SocialSignin = () => {
  const router = useRouter();
  const handleSocialLogin = (provider) => {
    //console.log("social login ", provider);
    signIn(provider, {
      callbackUrl: "/",
    });
  };
  return (
    <div className="social">
      <h1 className=" text-center text-2xl mt-4 font-semibold">
        Or Sign In With
      </h1>
      <div className=" flex justify-center m-10 gap-6">
        <button
          onClick={() => handleSocialLogin("google")}
          className="btn bg-slate-100 text-2xl text-primary"
        >
          {" "}
          <FaGoogle />
        </button>
        <button className="btn  bg-slate-100 text-2xl P-2 text-blue-700">
          {" "}
          <FaLinkedin />{" "}
        </button>
        <button
          onClick={() => handleSocialLogin("github")}
          className="btn  bg-slate-100 text-2xl"
        >
          {" "}
          <FaGithub />
        </button>
      </div>
      <h6 className="text-xl text-center">
        Haven't any account{" "}
        <Link href={"/signup"} className=" text-primary font-semibold">
          Signup
        </Link>{" "}
      </h6>
    </div>
  );
};

export default SocialSignin;
