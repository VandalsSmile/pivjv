import { Check } from "lucide-react";
import Link from "next/link";
import { TARGET_AUDIENCE, CONTACT } from "@/lib/constants";

export function AudienceSection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <Link href="/contact" className="btn-secondary">
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
              <div className="aspect-video bg-primary-light rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
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
