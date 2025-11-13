import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DEFAULT_LANG = "es";
const SUPPORTED_LANGS = ["en", "es"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname starts with a supported language
  const langMatch = pathname.match(/^\/([a-z]{2})(?:\/|$)/);

  // If root path, redirect to default language
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LANG}`, request.url));
  }

  // If path doesn't start with a language code, redirect to default language
  if (!langMatch) {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LANG}${pathname}`, request.url),
    );
  }

  const lang = langMatch[1];

  // If language is not supported, redirect to default language
  if (!SUPPORTED_LANGS.includes(lang)) {
    return NextResponse.redirect(
      new URL(
        `/${DEFAULT_LANG}${pathname.replace(/^\/[a-z]{2}/, "")}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
