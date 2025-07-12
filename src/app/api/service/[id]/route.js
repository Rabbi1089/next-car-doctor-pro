import { NextResponse } from "next/server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import status from "daisyui/components/status";

export const DELETE = async (req, { params }) => {
  const p = await params;
  const query = { _id: new ObjectId(p.id) };
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);

  //validation
  const session = await getServerSession();
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOk = session.user.email == currentBooking.email;

  if (isOwnerOk) {
    const deleteResponse = await bookingCollection.deleteOne(query);
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "forbidden access",
      },
      { status: 401 }
    );
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
  const data = await serviceCollection.findOne({
    _id: new ObjectId(p.id),
  });

  return NextResponse.json(data);
};
