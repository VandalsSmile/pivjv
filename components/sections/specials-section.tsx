import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";

export function SpecialsSection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
            Limited Time Offers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Current Specials
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Summer Special */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
            <div className="bg-primary p-6 text-white">
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                Summer Special
              </span>
              <h3 className="text-2xl font-bold mb-2">Skinny Mermaid Drip</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">$299</span>
                <span className="text-white/60 line-through">$450</span>
                <span className="text-secondary font-semibold">Save $151</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-foreground-muted mb-4">
                Glow + Slim in one drip. Combines our Skinny Drip + Glow Drip
                with 2000mg Glutathione.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Metabolism boost",
                  "Radiant glow",
                  "Energy & focus",
                  "Detox & hydrate",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-secondary w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                Call to Book Now
              </Link>
              <p className="text-xs text-foreground-muted text-center mt-3">
                Perfect for beach season, weddings & feeling your best.
              </p>
            </div>
          </div>

          {/* Intro Offer */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-secondary">
            <div className="bg-secondary p-6 text-white">
              <span className="inline-block bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3">
                New Client Offer
              </span>
              <h3 className="text-2xl font-bold mb-2">Your First VIP IV Therapy</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">
                  ${PRICING.introOffer.price}
                </span>
                <span className="text-white/60 line-through">
                  ${PRICING.introOffer.regularPrice}
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-foreground-muted mb-4">
                Includes a primary IV drip, use the zero-gravity massage chair,
                and get a free vitamin consult.
              </p>
              <Link
                href="/specials"
                className="btn-primary w-full justify-center mb-4"
              >
                Claim Your First IV
              </Link>
              <p className="text-xs text-foreground-muted text-center">
                *One-time state-mandated ${PRICING.medicalClearance} telehealth
                screening required at first visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
