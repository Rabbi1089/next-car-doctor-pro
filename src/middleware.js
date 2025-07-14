import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", req.nextUrl));
}
export const config = {
  matcher: ["/myBooking", "/myBooking/:path*", "/checkout/:path*"],
};
