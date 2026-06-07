import Link from "next/link";
import Image from "next/image";
import { Phone, Check, ArrowRight } from "lucide-react";
import { SITE_CONFIG, CONTACT, PRICING } from "@/lib/constants";

// Huntsville IV images
const IMAGES = {
  receptionDesk: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIV%2Bann%2Bbehind%2Bcounter-nfD9wGJQ0aMLfkIdKtnbCSfZsvileV.jpg",
};

export function HeroSection() {
  return (
    <section className="bg-background-alt">
      <div className="container-custom mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content - Dark text on light background */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              Feel Better, Faster — Premium
              <br />
              IV Therapy in
              <br />
              {CONTACT.address.city}, AL
            </h1>

            {/* Primary CTA - Dark teal, full width */}
            <Link
              href="/specials"
              className="btn-primary w-full justify-center text-lg py-4 mb-3"
            >
              Book ${PRICING.introOffer.price} VIP IV
            </Link>

            {/* Secondary CTA - Outline, full width */}
            <Link
              href="/specials"
              className="btn-outline w-full justify-center text-lg py-4 mb-8"
            >
              Check out June Specials!
            </Link>

            {/* Better wellness section */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Better wellness. Better life.
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Boost your energy, recover faster, support longevity, and optimize
                your health with doctor-supervised IV hydration therapy—conveniently 
                located in {CONTACT.address.city}, AL.
              </p>
            </div>

            {/* Checkmarks - Teal colored */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-foreground text-sm">Medical-grade ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-foreground text-sm">Medically licensed professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-foreground text-sm">Same-day appointments</span>
              </div>
            </div>

            {/* Bottom CTAs */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Book Your First Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>

            {/* HSA/FSA Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-white px-3 py-1.5">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 flex-shrink-0 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m8 12 3 3 5-6" />
              </svg>
              <div className="flex flex-col leading-none text-primary">
                <span className="text-sm font-bold tracking-tight">HSA/FSA</span>
                <span className="text-sm font-medium tracking-tight">Eligible</span>
              </div>
            </div>
          </div>

          {/* Right Content - Photo and Special Card */}
          <div className="order-1 lg:order-2 space-y-4">
            {/* Main Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.receptionDesk}
                alt="Prime IV Huntsville reception desk with friendly staff"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-medium">Your Path to Wellness Starts Here</p>
              </div>
            </div>

            {/* Orange Gradient Special Card */}
            <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl p-6 text-white">
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                June Special - $50 OFF
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">The Travel Defense</h3>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-4xl font-bold">$200</span>
                <span className="text-white/70 line-through text-lg">$250</span>
              </div>
              <p className="text-white/90 text-sm mb-4">
                Immunity Armor Drip + a FREE Taurine Injection. Hydrate, recharge, 
                and stay ready for wherever summer takes you.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4" />
                  <span>Immunity Armor Drip</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4" />
                  <span>FREE Taurine shot</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4" />
                  <span>Immune support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4" />
                  <span>Hydration + energy</span>
                </div>
              </div>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="block w-full bg-white text-secondary font-semibold py-3 rounded-full text-center hover:bg-white/90 transition-colors"
              >
                Call to Book Now
              </Link>
              <p className="text-white/60 text-xs mt-3 text-center">
                Book 2-3 days before travel for best results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
