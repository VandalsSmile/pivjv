import type { Metadata } from "next";
import Image from "next/image";
import { list } from "@vercel/blob";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Gallery | Inside Our IV Therapy Lounge",
  description: `Take a look inside Prime IV Hydration & Wellness in ${CONTACT.address.city}, AL — our relaxing VIP lounge, zero-gravity massage chairs, and welcoming wellness space.`,
  keywords: [
    "IV therapy spa photos",
    "Prime IV gallery",
    "wellness lounge Huntsville",
    "IV bar interior",
  ],
  alternates: {
    canonical: "/gallery",
  },
};

// Revalidate so newly uploaded images appear without a redeploy.
export const revalidate = 60;

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  span: string;
};

const STATIC_IMAGES: GalleryItem[] = [];

async function getUploadedImages(): Promise<GalleryItem[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  try {
    const { blobs } = await list({ prefix: "gallery/" });
    return blobs
      .sort(
        (a, b) =>
          new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
      )
      .map((blob) => ({
        src: blob.url,
        alt: "Photo from inside our IV therapy lounge",
        caption: "",
        span: "",
      }));
  } catch (error) {
    console.error("Failed to load uploaded gallery images:", error);
    return [];
  }
}

export default async function GalleryPage() {
  const uploaded = await getUploadedImages();
  const images: GalleryItem[] = [...uploaded, ...STATIC_IMAGES];
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Gallery
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Step Inside Our Wellness Lounge
            </h1>
            <p className="text-white/80 text-lg">
              {SITE_CONFIG.name} in {CONTACT.address.city}, AL was designed for
              comfort and relaxation. Take a look around before your first visit.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          {images.length === 0 ? (
            <p className="text-center text-foreground/70 text-lg py-12">
              New photos of our lounge are coming soon. Check back shortly!
            </p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {images.map((img, index) => (
                <figure
                  key={`${img.src}-${index}`}
                  className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-sm"
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  {img.caption && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                      <figcaption className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg drop-shadow">
                        {img.caption}
                      </figcaption>
                    </>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
