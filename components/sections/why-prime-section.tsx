import { Check } from "lucide-react";
import Image from "next/image";
import { WHY_PRIME_IV, CONTACT } from "@/lib/constants";

const IMAGES = {
  waterPouring: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIVJV%2BIV%2Bwater-ZeSxSfFFahs1Nomqu67WXr3FapbpUf.png",
  flyers: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIV-FRONT-FLYERS.png-sXywETVTh7AEfDyGbS4zu9MykUqA6a.jpeg",
};

export function WhyPrimeSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.flyers}
                alt="Prime IV treatment menu and flyers"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.waterPouring}
                alt="Prime IV staff preparing refreshments"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Why Prime IV in {CONTACT.address.city}, AL?
            </h2>

            <div className="space-y-4">
              {WHY_PRIME_IV.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
