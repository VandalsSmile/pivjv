import Link from "next/link";
import { Zap, Droplets, Shield, Sparkles } from "lucide-react";
import { BENEFITS } from "@/lib/constants";

const iconMap = {
  Zap: Zap,
  Droplets: Droplets,
  Shield: Shield,
  Sparkles: Sparkles,
};

export function BenefitsSection() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/iv-therapy"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors font-semibold"
          >
            Schedule your IV therapy
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
