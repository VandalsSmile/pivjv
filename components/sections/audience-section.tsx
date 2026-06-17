import { Check } from "lucide-react";
import Link from "next/link";
import { TARGET_AUDIENCE, CONTACT, BOOKING_LINKS } from "@/lib/constants";

export function AudienceSection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Designed for Busy, High-Performing Lives
            </h2>
            <p className="text-foreground-muted text-lg mb-8">
              Whether you&apos;re balancing a demanding career, pushing your
              fitness limits, or just trying to keep up with life, Prime IV
              helps you stay at your best.
            </p>

            <ul className="space-y-4 mb-8">
              {TARGET_AUDIENCE.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
            <Link
              href={BOOKING_LINKS.introOffer}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Book Your First Visit
            </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-outline border-primary text-primary hover:bg-primary hover:text-white"
              >
                Call {CONTACT.phone}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 text-white">
              <p className="text-white/80 text-sm mb-2">
                Relax & Rejuvenate at our {CONTACT.address.city} location
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img
                  src="/images/vip-spa-lounge.jpg"
                  alt="Two clients relaxing in zero-gravity massage chairs under cozy blankets while receiving IV therapy in the dimly lit, ambient-lit VIP lounge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                  <p className="text-white font-medium">
                    Premium Spa Environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
