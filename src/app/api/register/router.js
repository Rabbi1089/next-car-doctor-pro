"use server";
import bcrypt from "bcrypt";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const register = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);

  //validation
  const { email, password } = payload;

  if (!email || !password) {
    return { success: false };
  }

  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashPassword =await bcrypt.hashSync(password, 10);
    payload.password = hashPassword;
    const result = await userCollection.insertOne(payload);
    

    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
      // ✅ convert ObjectId to string
    };
  }
};
