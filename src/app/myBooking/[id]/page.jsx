import React from "react";
import EditBookingForm from "../components/EditBookingForm/EditBookingForm";
//http://localhost:3000/api/my-booking/687215de264ec3519d039e42

async function UpdateBookingForm({ params }) {
    const [data, setBooking] = useState([]);
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/my-booking/${p.id}`);
  const updatadata = await res.json();
  setBooking(updatadata)
  return (
    <div>
      <EditBookingForm data={data} />
    </div>
  );
}

export default UpdateBookingForm;
