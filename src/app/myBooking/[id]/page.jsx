import React from "react";
import EditBookingForm from "../components/EditBookingForm/EditBookingForm";
import { headers } from "next/headers";

async function UpdateBookingForm({ params }) {
  const p = await params;
  try {
    const res = await fetch(`https://next-car-doctor-tan.vercel.app/api/my-booking/${p.id}`, {
      cache: "no-store",
     headers:new Headers (await headers())
 

    });

    if (!res.ok) {
      throw new Error(`Failed to fetch booking. Status: ${res.status}`);
    }

    const data = await res.json();

    return (
      <div>
        <EditBookingForm data={data} />
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <div className="text-red-600">Failed to load booking data.</div>;
  }
}

export default UpdateBookingForm;
