import React from "react";
import EditBookingForm from "../components/EditBookingForm/EditBookingForm";

async function UpdateBookingForm({ params }) {
  const p = await params;
console.log("UpdateBookingForm ====" , p.id);
  try {
    const res = await fetch(`http://localhost:3000/api/my-booking/${p.id}`, {
      cache: "no-store",
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
