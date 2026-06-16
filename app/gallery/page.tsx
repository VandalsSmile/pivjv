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

const STATIC_IMAGES: GalleryItem[] = [
  {
    src: "/images/vip-spa-lounge.jpg",
    alt: "The VIP IV therapy lounge with zero-gravity massage chairs",
    caption: "Our VIP Lounge",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/gallery-reception.png",
    alt: "Bright, modern reception and waiting area",
    caption: "Welcoming Reception",
    span: "",
  },
  {
    src: "/images/gallery-treatment.png",
    alt: "Treatment lounge with reclining massage chairs and IV stands",
    caption: "Relaxing Treatment Chairs",
    span: "",
  },
  {
    src: "/images/owner-ann-rn.png",
    alt: "Ann, registered nurse and owner of Prime IV Huntsville",
    caption: "Cared For by Licensed Pros",
    span: "",
  },
  {
    src: "/images/gallery-iv-detail.png",
    alt: "Close-up of a professional IV drip on a chrome stand",
    caption: "Premium IV Therapies",
    span: "",
  },
];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-4">
            {images.map((img, index) => (
              <figure
                key={`${img.src}-${index}`}
                className={`group relative overflow-hidden rounded-2xl shadow-sm ${img.span}`}
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
        </div>
      </section>
    </>
  );
}
