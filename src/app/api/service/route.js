import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession({ req, ...authOptions }); // ✅ Correct
  //console.log("Session: is----------->", session);

  if (!session) {
    console.log("No session found");
    return NextResponse.json({ message: "Unauthorized", result: [] });
  }

  if (session) {
    const email = session.user?.email;
  //  console.log("✅ Session email: -------->", email);
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
    const result = await bookingCollection.find({ email }).toArray();
    //console.log("result from" , result);

    return NextResponse.json(result);
  }

  return NextResponse.json([]);
};

export const POST = async (req) => {
  const body = await req.json();
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const result = await bookingCollection.insertOne(body);

  return NextResponse.json({ result });
};
