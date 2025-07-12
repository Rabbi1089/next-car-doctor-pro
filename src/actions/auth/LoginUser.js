"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

const LoginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNameObj.userCollection);
  const user = await userCollection.findOne({ email });
  //console.log("from login user", user);
  if (!user) {
    return null;
  }
  const isPasswordOk = await bcrypt.compare(password, user.password);

  if (!isPasswordOk) {
    return null;
  }

  return user;
};

export default LoginUser;
