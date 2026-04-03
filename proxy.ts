import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = "ru";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  // e.g. incoming request is /cyberclub
  // The new URL is now /ru/cyberclub
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Do not run the middleware on the following paths:
  // - _next/static, _next/image
  // - images, icons, etc (e.g. /images/...)
  // - favicon.ico, sitemap.xml, robots.txt
  matcher: [
    "/((?!_next/static|_next/image|images/|icons/|favicon.ico|sitemap.xml|robots.txt).*)"
  ]
};
