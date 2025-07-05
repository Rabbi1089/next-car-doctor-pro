"use client";
import Image from "next/image";
import React from "react";
import LoginFrom from "./components/LoginFrom";

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
        <LoginFrom />
      </div>
    </div>
  );
};

export default page;
