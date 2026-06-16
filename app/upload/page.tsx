import type { Metadata } from "next";
import { UploadManager } from "./upload-manager";

export const metadata: Metadata = {
  title: "Gallery Image Uploader",
  robots: { index: false, follow: false },
};

export default function UploadPage() {
  return (
    <section className="section-padding bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
            Admin
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
            Gallery Image Uploader
          </h1>
          <p className="text-foreground-muted leading-relaxed">
            Upload photos here and they&apos;ll appear automatically on the
            public{" "}
            <a href="/gallery" className="text-secondary font-semibold underline">
              gallery page
            </a>
            . You can also remove existing images below.
          </p>
        </div>
        <UploadManager />
      </div>
    </section>
  );
}
