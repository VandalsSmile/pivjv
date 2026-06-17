import { type NextRequest, NextResponse } from "next/server";
import { UPLOAD_AUTH_COOKIE, UPLOAD_AUTH_TOKEN } from "@/lib/upload-auth";

// Protects the gallery write API routes. Auth uses a password-only login form
// (see /upload and /api/upload-login) backed by an httpOnly session cookie —
// there is no username field.
export function middleware(request: NextRequest) {
  const token = request.cookies.get(UPLOAD_AUTH_COOKIE)?.value;

  if (token === UPLOAD_AUTH_TOKEN) {
    return NextResponse.next();
  }

  return NextResponse.json(
    { error: "Authentication required." },
    { status: 401 },
  );
}

export const config = {
  // Protect the gallery write API routes. The /upload page renders its own
  // password gate, and /api/upload-login must stay public to authenticate.
  matcher: ["/api/upload", "/api/delete"],
};
