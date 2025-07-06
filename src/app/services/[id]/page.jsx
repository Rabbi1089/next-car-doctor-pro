import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

async function page({ params }) {
  const p = await params;
  const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
  const data = await serviceCollection.findOne({
    _id: new ObjectId(p.id),
  });
  return (
    <>
      <div className=" w-[1200px] mx-auto">
        <section className=" flex justify-center ">
          <figure className="relative">
            <Image
              src={"/assets/images/checkout/checkout.png"}
              height={300}
              width={1130}
              alt="checkout-image"
            />
            <div className="checkout-bg absolute w-full h-full top-0">
              <div className="   flex items-center  w-full h-full ">
                <div className="text-white ps-16 font-bold text-2xl ">
                  <h1>Service Details</h1>
                </div>
              </div>
            </div>
          </figure>
        </section>
        <div className="flex flex-col md:flex-row bg-white justify-between mt-8">
          <div className="md:w-3/5 gap-2 mx-auto">
            <Image src={data.img} width={600} height={200} alt={data.title} />
          </div>
          <div className="md:w-1/5   mx-auto ">
            <button className=" btn btn-ghost bg-primary text-white uppercase w-full">
              checkout
            </button>
            <h1 className="text-center mt-4 text-2xl font-semibold text-black">
              Price: $ <span className=" text-primary">{data.price}</span>
            </h1>
          </div>
        </div>
        <div className="">
          <h1 className=" font- text-2xl font-semibold text-center m-4">
            {" "}
            {data.title}
          </h1>
          <div className=" mb-6">
            <p className=" text-xl">{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
