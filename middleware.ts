import { type NextRequest, NextResponse } from "next/server";

// Basic auth credentials. Override via env vars in production if desired.
const AUTH_USER = process.env.BASIC_AUTH_USER || "admin";
const AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD || "2566926347";

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const encoded = authHeader.split(" ")[1] || "";
    const decoded = atob(encoded);
    const idx = decoded.indexOf(":");
    const user = decoded.slice(0, idx);
    const password = decoded.slice(idx + 1);

    if (user === AUTH_USER && password === AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area", charset="UTF-8"',
    },
  });
}

export const config = {
  // Protect the admin uploader page and its write API routes.
  matcher: ["/upload", "/api/upload", "/api/delete"],
};
