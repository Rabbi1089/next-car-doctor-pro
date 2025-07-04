"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className=" container mx-auto py-24 px-24">
      <div className=" grid grid-cols-2 gap-12">
        <div className="">
          <Image
            src={"/assets/images/login/login.svg"}
            width={560}
            height={560}
            alt="Login image"
          />
        </div>
        <div className=" border-2  border-white p-12 shadow-2xl">
          <h6 className=" text-3xl font-semibold text-center mb-4">Sign In</h6>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Type Your Email"
            className=" w-full input mb-3"
          />{" "}
          <br />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="Type Your Password"
            className="input mb-5 w-full"
          />{" "}
          <br />
          <button type="submit" className=" btn btn-primary w-full mt-6">
            {" "}
            Login
          </button>
          <br />
          <h1 className=" text-center text-2xl mt-4 font-semibold">
            Or Sign In With
          </h1>
          <div className=" flex justify-center m-10 gap-6">
            <button className="btn bg-slate-100 text-2xl text-primary">
              {" "}
              <FaGoogle />
            </button>
            <button className="btn  bg-slate-100 text-2xl P-2 text-blue-700">
              {" "}
              <FaLinkedin />{" "}
            </button>
            <button className="btn  bg-slate-100 text-2xl">
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
      </div>
    </div>
  );
};

export default page;
