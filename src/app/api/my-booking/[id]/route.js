import { getToken } from "next-auth/jwt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const bookingCollection = await dbConnect(collectionNameObj.bookingCollection);
    const booking = await bookingCollection.findOne({
      _id: new ObjectId(params.id),
    });

    if (!booking) return NextResponse.json({ message: "Not found" }, { status: 404 });

    if (booking.email !== token.email) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json(booking);
  } catch (err) {
    console.error("GET booking error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const bookingCollection = await dbConnect(collectionNameObj.bookingCollection);
    const query = { _id: new ObjectId(params.id) };
    const currentBooking = await bookingCollection.findOne(query);

    if (!currentBooking) return NextResponse.json({ message: "Not found" }, { status: 404 });

    if (currentBooking.email !== token.email) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();

    const updateResponse = await bookingCollection.updateOne(query, {
      $set: body,
    });

    return NextResponse.json(updateResponse);
  } catch (err) {
    console.error("PATCH booking error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};
