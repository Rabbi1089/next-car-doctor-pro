import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  console.log("Id is ---------> from route get", p.id);
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const singleBooking = await bookingCollection.findOne(query);

  return NextResponse.json(singleBooking);
};

export const PATCH = async (req, { params }) => {
  const p = await params;
  console.log("Id is ---------> from route patch", p.id);
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const body = await req.json();
  console.log("Incoming PATCH data:", body);
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
};
