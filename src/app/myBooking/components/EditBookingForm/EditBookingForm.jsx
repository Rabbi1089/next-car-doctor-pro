"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const EditBookingForm = ({ data }) => {
  console.log("EditBookingForm ==========>", data);
  const { data: session } = useSession();
  const router = useRouter();

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const bookingPayload = {
      // customerName: name,
      // email,
      date,
      phone,
      address,

      //extra information

      // service_id: data._id,
      //  service_name: data.title,
      //  service_img: data.img,
      //  service_price: data.price,
    };
    console.log("form update data ", bookingPayload);

    const res = await fetch(
      `https://next-car-doctor-tan.vercel.app/api/my-booking/${data._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(bookingPayload),
      }
    );
    const postedResponse = await res.json();
    router.push("/myBooking");
    console.log("Updated Data response", postedResponse);
  };
  return (
    <div className="container mx-auto">
      <h2 className=" text-3xl font-semibold text-center m-6">
        Update Book Service : {data.service_name}
      </h2>
      <div className="max-w-8xl mx-auto my-12 bg-slate-300 p-8 rounded-lg">
        <form onSubmit={handleUpdateService}>
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
                defaultValue={data.date}
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
                defaultValue={data.service_price}
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
                defaultValue={data.phone}
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
                defaultValue={data.address}
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
              value="Update Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookingForm;
