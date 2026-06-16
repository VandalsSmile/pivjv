import Link from "next/link";
import {
  Zap,
  Dumbbell,
  Shield,
  Sparkles,
  Plane,
  Dna,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Zap: Zap,
  Dumbbell: Dumbbell,
  Shield: Shield,
  Sparkles: Sparkles,
  Plane: Plane,
  Dna: Dna,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background scroll-mt-24">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
            Featured IV Drips
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our Most Popular Treatments
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Whether you need an energy reset, faster recovery, immune support,
            or a beauty boost, Prime IV has a treatment designed to help you
            feel your best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="card card-hover border border-border"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wide">
                    Popular Drips
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.drips.map((drip, index) => (
                      <span
                        key={index}
                        className="inline-block bg-background-alt text-foreground text-xs px-2 py-1 rounded-full"
                      >
                        {drip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground-muted mb-4">
            Not sure what you need? We&apos;ll guide you.
          </p>
          <Link href="/iv-therapy" className="btn-primary">
            Find Your Perfect IV
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
