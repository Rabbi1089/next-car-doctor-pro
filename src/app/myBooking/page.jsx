//"use client";

import AllBooking from "../login/components/table/AllBooking";
import { headers } from "next/headers";

const fetchMyBooking = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: headers(),
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
