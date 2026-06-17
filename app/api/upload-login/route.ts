import { type NextRequest, NextResponse } from "next/server";
import {
  UPLOAD_AUTH_COOKIE,
  UPLOAD_AUTH_TOKEN,
  UPLOAD_PASSWORD,
} from "@/lib/upload-auth";

// Password-only login for the admin gallery uploader. On success we set an
// httpOnly session cookie that the middleware checks for /upload and the
// write API routes — no username required.
export async function POST(request: NextRequest): Promise<NextResponse> {
  let password = "";
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    password = "";
  }

  if (password !== UPLOAD_PASSWORD) {
    return NextResponse.json(
      { error: "Incorrect password." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(UPLOAD_AUTH_COOKIE, UPLOAD_AUTH_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return response;
}
