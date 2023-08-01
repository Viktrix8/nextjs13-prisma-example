import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  if (token) {
    if (request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/register")) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  } else {
    if (request.nextUrl.pathname.startsWith("/profile")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/profile"],
};
