import Link from "next/link";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const highlights = [
  "Support glowing, healthy-looking skin",
  "Refreshed energy for back-to-back celebrations",
  "Beauty-focused add-ons like glutathione & biotin",
];

export function WeddingSeasonSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-white shadow-lg">
          {/* Decorative bubbles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <span className="absolute bottom-6 left-10 w-24 h-24 rounded-full bg-white/10" />
            <span className="absolute -bottom-12 right-24 w-36 h-36 rounded-full bg-white/5" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 md:p-12">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                Wedding Season in the South
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Bridal Glow Starts With Hydration
              </h2>
              <p className="text-white/85 text-lg leading-relaxed mb-6 text-pretty">
                Southern wedding season is here—engagement shoots, bridal
                showers, bachelorette trips, and the big day. Between late nights,
                travel, and packed schedules, IV hydration helps brides and bridal
                parties feel refreshed, energized, and camera-ready from the
                inside out.
              </p>

              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-secondary-light" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/bridal-glow-starts-with-hydration"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors duration-200 hover:bg-white/90"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/bridal-party.jpg"
                  alt="A smiling bride and groom holding hands outdoors on their wedding day"
                  className="w-full h-72 md:h-96 object-cover object-[center_65%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent h-24" />
              </div>
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                <Sparkles className="w-3 h-3" />
                The Glow IV
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
