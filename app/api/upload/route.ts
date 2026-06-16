import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { type NextRequest, NextResponse } from "next/server";

// Client uploads send the file directly from the browser to Vercel Blob,
// bypassing the ~4.5MB serverless request body limit. This route only mints
// short-lived upload tokens and records completions, so large mobile phone
// photos (HEIC/JPEG, often 5-15MB+) upload reliably.
//
// This route is protected by middleware basic auth. The browser automatically
// attaches the Authorization header to these same-origin requests after the
// user has signed in on /upload.
export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Namespace gallery uploads under a "gallery/" prefix and allow a
        // generous size ceiling suitable for full-resolution phone photos.
        return {
          allowedContentTypes: [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif",
            "image/heic",
            "image/heif",
            "image/avif",
          ],
          addRandomSuffix: true,
          maximumSizeInBytes: 50 * 1024 * 1024, // 50 MB
          tokenPayload: JSON.stringify({ pathname }),
        };
      },
      onUploadCompleted: async ({ blob }) => {
        // Fires after the browser finishes the direct-to-Blob upload.
        console.log("[v0] Gallery upload completed:", blob.pathname);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 400 },
    );
  }
}
