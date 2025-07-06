"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import { register } from "../api/register/router";
import SocialSignin from "../login/components/SocialSignin";

const page = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await register({ name, email, password });
  };
  return (
    <div className="container mx-auto p-12">
      <div className=" grid grid-cols-2 gap-12 ">
        <Image
          src={"/assets/images/login/login.svg"}
          width={560}
          height={560}
          alt="Login image"
        />

        <div className=" border-2   p-12 shadow-2xl border-white">
          <h6 className=" text-3xl font-semibold text-center mb-6">Sign Up</h6>
          <form onSubmit={handleRegister}>
            <label htmlFor="email">Name</label>
            <input
              type="text"
              placeholder="Type Your Name"
              className=" w-full input mb-3 mt-2"
              name="name"
            />{" "}
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Type Your Email"
              className=" w-full input mb-3 mt-2"
              name="email"
            />{" "}
            <br />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Type Your Password"
              className="input mb-5 w-full mt-2"
              name="password"
            />{" "}
            <br />
            <button type="submit" className=" btn btn-primary w-full mt-6">
              {" "}
              Login
            </button>
          </form>
          <br />
          <SocialSignin />
        </div>
      </div>
    </div>
  );
};

export default page;
