"use client";
import React, { useEffect, useState } from "react";
import AllBooking from "../login/components/table/AllBooking";

function mmyBookingPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/service");
        const d = await res.json();
        console.log("from fetchBooking", d);
        setData(d);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooking(); // ✅ call the function here
  
  }, []);
  return (
    <div>
      <AllBooking data={data}/>
    </div>
  );
}

export default mmyBookingPage;
