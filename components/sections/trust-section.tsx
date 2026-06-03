import { Check } from "lucide-react";
import { TRUST_SIGNALS, CONTACT } from "@/lib/constants";

export function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
            Trust & Credibility
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Safe. Professional. Trusted.
          </h2>
          <p className="text-foreground-muted">
            At Prime IV {CONTACT.address.city}, your health is our priority.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TRUST_SIGNALS.map((signal, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-background-alt rounded-xl"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-foreground font-medium">{signal}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground-muted mt-8 max-w-2xl mx-auto">
          You&apos;re not just getting a drip—you&apos;re getting expert care.
        </p>
      </div>
    </section>
  );
}
