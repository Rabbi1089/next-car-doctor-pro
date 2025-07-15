//"use client";

import AllBooking from "../login/components/table/AllBooking";
import { headers } from "next/headers";

const fetchMyBooking = async () => {
  
  const res = await fetch("https://next-car-doctor-tan.vercel.app/api/service", {
    headers:new Headers (await headers())
  });
  const data = await res.json();
  return data;
};

export default async function mmyBookingPage() {
  const data = await fetchMyBooking();

  return (
    <div>
      <AllBooking data={data} />
    </div>
  );
}
