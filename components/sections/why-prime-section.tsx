import { Check } from "lucide-react";
import Link from "next/link";
import { WHY_PRIME_IV, CONTACT } from "@/lib/constants";

export function WhyPrimeSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          Why Prime IV in {CONTACT.address.city}, AL?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_PRIME_IV.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-background-alt rounded-xl"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
