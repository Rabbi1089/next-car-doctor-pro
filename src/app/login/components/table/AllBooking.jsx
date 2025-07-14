import DeleteBookingButton from "@/app/myBooking/components/DeleteBookingButton";
import { FaEdit } from "react-icons/fa";

import React from "react";
import Link from "next/link";

const AllBooking = ({ data }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Price</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.service_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.service_name}</td>
                  <td>{item.date}</td>
                  <td>{item.service_price}</td>
                  <td>{item.address}</td>
                  <th className="font-bold text-3xl">
                    <div className=" flex justify-center space-x-4">
                      {" "}
                      <Link href={`/myBooking/${item._id}`}>
                        <FaEdit />
                      </Link>
                      <DeleteBookingButton id={item._id} />
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooking;
