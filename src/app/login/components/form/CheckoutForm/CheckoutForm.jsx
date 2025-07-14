"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ data }) => {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log(" session is ", session);
  const handleBookService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const email = form.email.value;
    const bookingPayload = {
      customerName: name,
      email,
      date,
      phone,
      address,

      //extra information

      service_id: data._id,
      service_name: data.title,
      service_img: data.img,
      service_price: data.price,
    };
    console.log(bookingPayload);
    const res = await fetch("http://localhost:3000/api/service", {
      method: "post",
      body: JSON.stringify(bookingPayload),
    });
    const postedResponse = await res.json();
    if (postedResponse) {
      router.push("/myBooking");
    }
  };
  return (
    <div className="container mx-auto">
      {/*   <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={data.img}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Checkout {data.title}
          </h1>
        </div>
      </div> */}
      <h2 className=" text-3xl font-semibold text-center m-6">
        Book Service : {data.title}
      </h2>
      <div className="max-w-8xl mx-auto my-12 bg-slate-300 p-8 rounded-lg">
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="form-control col-span-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={session.user?.name}
                readOnly
                type="text"
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control col-span-1">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={new Date().toISOString().split("T")[0]}
                type="date"
                name="date"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control col-span-1">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={session.user?.email}
                readOnly
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control col-span-1">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                defaultValue={data.price}
                readOnly
                type="text"
                name="price"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control col-span-1">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                required
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control col-span-1">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn bg-red-600 hover:bg-red-700 text-white font-bold w-full"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
