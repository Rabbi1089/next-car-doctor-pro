"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const DeleteBookingButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
  };

  return (
    <MdDeleteSweep
      onClick={() => handleDelete(id)}
      className="h-8 w-8 font-bold"
    />
  );
};

export default DeleteBookingButton;
