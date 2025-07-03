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
      <section>
        <Image src={data.img} width={480} height={200} alt={data.title} />
        <h1 className=" font-bold">{data.title}</h1>
      </section>

      <h1>Service details of {JSON.stringify(p)}</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}

export default page;
