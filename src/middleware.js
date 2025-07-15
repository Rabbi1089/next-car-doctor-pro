import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (token) {
    return NextResponse.next();
  }
  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = "/login";

return NextResponse.redirect(loginUrl);

}
export const config = {
  // matcher: ["/checkout/:path*"],
  matcher: ["/myBooking", "/myBooking/:path*", "/checkout/:path*"],
};
