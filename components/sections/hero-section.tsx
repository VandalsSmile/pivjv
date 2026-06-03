import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { SITE_CONFIG, CONTACT, PRICING } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Feel Better, Faster — Premium IV Therapy in{" "}
              {CONTACT.address.city}, AL
            </h1>

            <div className="flex flex-wrap gap-3">
              <Link href="/specials" className="btn-primary">
                Book ${PRICING.introOffer.price} VIP IV
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/specials" className="btn-outline">
                Check out Specials!
              </Link>
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-semibold mb-3">
                Better wellness. Better life.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {SITE_CONFIG.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-sm">Medical-grade ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-sm">Licensed professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-sm">Same-day appointments</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors font-medium"
              >
                Book Your First Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 mt-4">
              <div className="bg-white text-primary rounded px-2 py-1 text-xs font-bold">
                HSA/FSA
              </div>
              <span className="text-sm text-white/90">Eligible</span>
            </div>
          </div>

          {/* Right Content - Intro Offer Card */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-foreground max-w-md mx-auto lg:ml-auto">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">
                  ${PRICING.introOffer.price}
                </span>
                <span className="text-lg text-foreground-muted line-through">
                  ${PRICING.introOffer.regularPrice}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">
                {PRICING.introOffer.description}
              </h3>

              <p className="text-foreground-muted mb-6">
                Includes a primary IV drip, use the zero-gravity massage chair,
                and get a free vitamin consult.
              </p>

              <Link
                href="/specials"
                className="btn-secondary w-full justify-center mb-4"
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
