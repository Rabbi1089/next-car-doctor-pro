import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;

  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const singleBooking = await bookingCollection.findOne(query);
  //check validation
  const session = await getServerSession({ req, ...authOptions });
  const email = session?.user?.email;
  if (email === singleBooking?.email) {
    return NextResponse.json(singleBooking);
  } else {
    return NextResponse.json(
      { message: "forbidden update action" },
      { status: 403 }
    );
  }
};

export const PATCH = async (req, { params }) => {
  const p = await params;

  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };

  //check validation
  const session = await getServerSession({ req, ...authOptions });
  const email = session?.user?.email;
  const currentBookingData = await bookingCollection.findOne(query);

  if (email === currentBookingData?.email) {
    const body = await req.json();

    const filter = {
      $set: { ...body },
    };
    const option = {
      upsert: true,
    };

    const updateResponse = await bookingCollection.updateOne(
      query,
      filter,
      option
    );
    return NextResponse.json(updateResponse);
  } else {
    return NextResponse.json(
      { message: "forbidden update action" },
      { status: 403 }
    );
  }
};
