import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default async function ServiceSectiom() {
  const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="grid grid-cols-12 lg:mx-12 md:mx-6 mx-2 lg:my-4 md:my-2 md:gap-3.5 lg:gap-5">
      {data.map((item) => (
        <div
          className="col-span-12 md:col-span-6 lg:col-span-4 border border-red-600"
          key={item._id}
        >
          <div className="card bg-base-100 w-96 shadow-sm mx-auto">
            <figure className=" w-full h-full object-fit">
              <img src={item.img} width={314} height={108} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h1 className="card-title">
                {" "}
                <p>{item.title}</p>{" "}
              </h1>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="flex justify-between  items-center">
                <div className=" text-primary text-2xl">
                  <p>Price : ${item.price}</p>
                </div>
                <div>
                  <Link href={`/services/${item._id}`}>
                    <FaArrowAltCircleRight  className="text-primary text-4xl m-4"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
