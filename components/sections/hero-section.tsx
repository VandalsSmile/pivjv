import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Check } from "lucide-react";
import { SITE_CONFIG, CONTACT, PRICING } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Prime IV Hydration & Wellness spa interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80" />
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
          <p className="text-white text-sm md:text-base font-medium">
            Your Path to Wellness Starts Here
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white">
        <div className="container-custom mx-auto px-4 py-8 md:py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-6">
              Feel Better, Faster — Premium IV Therapy in{" "}
              {CONTACT.address.city}, AL
            </h1>

            <div className="flex flex-col gap-3 mb-8">
              <Link
                href="/specials"
                className="btn-primary w-full justify-center text-lg py-4 rounded-full"
              >
                Book ${PRICING.introOffer.price} VIP IV
              </Link>
              <Link
                href="/specials"
                className="w-full py-4 px-6 border-2 border-border text-foreground font-semibold rounded-full hover:bg-background-alt transition-colors text-center"
              >
                Check out June Specials!
              </Link>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Better wellness. Better life.
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                {SITE_CONFIG.description}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-foreground">Medical-grade ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-foreground">Licensed professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-foreground">Same-day appointments</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center py-4 rounded-full"
              >
                Book Your First Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="w-full py-4 px-6 border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer Card */}
      <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 py-6">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                June Special - $50 OFF
              </span>
              <h3 className="text-white text-xl font-bold">The Travel Defense</h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-white text-3xl font-bold">$200</span>
                <span className="text-white/70 line-through">$250</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Immunity Armor Drip</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>FREE Taurine shot</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Immune support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Hydration + energy</span>
              </div>
            </div>
            <Link
              href="/specials"
              className="bg-white text-secondary font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors text-center"
            >
              Call to Book Now
            </Link>
          </div>
          <p className="text-white/70 text-xs mt-3">
            Book 2-3 days before travel for best results.
          </p>
        </div>
      </div>

      {/* VIP Offer Card */}
      <div className="bg-primary py-8">
        <div className="container-custom mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-lg mx-auto text-center shadow-xl">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-4xl font-bold text-foreground">
                ${PRICING.introOffer.price}
              </span>
              <span className="text-lg text-foreground-muted line-through">
                ${PRICING.introOffer.regularPrice}
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">
              {PRICING.introOffer.description}
            </h3>

            <p className="text-foreground-muted mb-6">
              Includes a primary IV drip, use the zero-gravity massage chair,
              and get a free vitamin consult.
            </p>

            <div className="flex gap-3">
              <Link
                href="/specials"
                className="flex-1 btn-primary justify-center py-4 rounded-full"
              >
                Claim Your First IV
              </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="flex items-center justify-center w-14 h-14 bg-foreground text-white rounded-full hover:bg-foreground/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-xs text-foreground-muted mt-4">
              *One-time state-mandated ${PRICING.medicalClearance} telehealth
              screening required at first visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
