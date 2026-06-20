import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/profile"];
const authRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cek apakah route dilindungi
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // Cek apakah auth route
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Placeholder — nanti diganti dengan session check dari NextAuth
  const isAuthenticated = true;

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
