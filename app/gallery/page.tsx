import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Gallery | Inside Our IV Therapy Lounge",
  description: `Take a look inside Prime IV Hydration & Wellness in ${CONTACT.address.city}, AL — our relaxing VIP lounge, zero-gravity massage chairs, and welcoming wellness space.`,
  keywords: [
    "IV therapy spa photos",
    "Prime IV gallery",
    "wellness lounge Huntsville",
    "IV bar interior",
  ],
};

const IMAGES = [
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

export default function GalleryPage() {
  return (
    <>
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
            {IMAGES.map((img) => (
              <figure
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl shadow-sm ${img.span}`}
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg drop-shadow">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
