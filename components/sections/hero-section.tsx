import Link from "next/link";
import Image from "next/image";
import { Phone, Check } from "lucide-react";
import { SITE_CONFIG, CONTACT, PRICING } from "@/lib/constants";

// Huntsville IV images
const IMAGES = {
  receptionDesk: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIV%2Bann%2Bbehind%2Bcounter-nfD9wGJQ0aMLfkIdKtnbCSfZsvileV.jpg",
  ivBagOnStand: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIVJV%2BIV-E9HwwSFOpEDZ5G25bKBw3Xq2tgcN4q.png",
  nurseHelping: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIVJV%2BIV%2Bhelp-AgKswevjak3keZJB9dMGC1pedKRs0d.png",
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container-custom mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-secondary italic">Feel Better, Faster</span> — Premium IV Therapy in {CONTACT.address.city}, AL
            </h1>
            
            <p className="text-lg mb-4 font-medium">Book now:</p>
            <Link 
              href={`tel:${CONTACT.phoneClean}`}
              className="text-2xl md:text-3xl font-bold text-secondary hover:text-secondary-light transition-colors underline mb-8 block"
            >
              {CONTACT.phone}
            </Link>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent" />
                <span className="text-lg">Medical-grade ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent" />
                <span className="text-lg">Administered by licensed healthcare professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent" />
                <span className="text-lg">Same-day appointments available</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center gap-2 text-lg py-4 px-8 rounded-full"
            >
              Book Your First Session
            </Link>
          </div>

          {/* Right Content - Reception Desk Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src={IMAGES.receptionDesk}
                alt="Prime IV Huntsville reception desk with friendly staff"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Bar */}
      <div className="bg-white py-8">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Better wellness. Better life.
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {SITE_CONFIG.description}
            </p>
          </div>
        </div>
      </div>

      {/* Massage Chairs Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src={IMAGES.ivBagOnStand}
          alt="IV therapy treatment room with massage chairs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* VIP Offer Section */}
      <div className="bg-primary py-12">
        <div className="container-custom mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Your First IV Therapy for ${PRICING.introOffer.price}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Start feeling better, faster with doctor-supervised IV therapy in {CONTACT.address.city}. 
              Choose your intro IV and enjoy premium hydration, energy, and recovery support for just{" "}
              <span className="font-bold">${PRICING.introOffer.price}</span> (regular ${PRICING.introOffer.regularPrice}).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link
              href="/specials"
              className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors text-center text-lg"
            >
              Claim Your First IV
            </Link>
            <Link
              href={`tel:${CONTACT.phoneClean}`}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-center text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {CONTACT.phone}
            </Link>
          </div>

          <p className="text-center text-white/60 text-sm">
            Note: For your safety, medical clearance costing ${PRICING.medicalClearance} may be required on your first IV visit.
          </p>
        </div>
      </div>
    </section>
  );
}
