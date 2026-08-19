import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Users, Gift } from "lucide-react";
import { MAHJONG_EVENT, EVENT_DATE_LABEL } from "@/lib/mahjong-event";

const facts = [
  {
    icon: CalendarDays,
    label: "When",
    value: EVENT_DATE_LABEL,
  },
  {
    icon: Clock,
    label: "Time",
    value: MAHJONG_EVENT.timeLabel,
  },
  {
    icon: Users,
    label: "Seats",
    value: `${MAHJONG_EVENT.seats} only`,
  },
  {
    icon: Gift,
    label: "Raffle",
    value: "Mahjong set",
  },
];

export function MahjongEventSection() {
  return (
    <section className="section-padding bg-background-dark">
      <div className="container-custom mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-primary-dark text-white shadow-2xl ring-1 ring-white/10">
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-stretch">
            {/* Image side */}
            <div className="relative min-h-72 lg:min-h-full">
              <img
                src="/images/mahjong-night-hero.jpg"
                alt="A pink mahjong tile set and the Mahjong Night event flyer on display at Prime IV Jones Valley"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-primary-dark/30 lg:to-primary-dark"
              />
              <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wide shadow-lg">
                One Night Only · RSVP Required
              </span>
            </div>

            {/* Content side */}
            <div className="relative p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-light mb-3">
                Special Event at Jones Valley
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Mahjong Night + IV Therapy
              </h2>

              <p className="text-white/85 leading-relaxed mb-8 text-pretty">
                Play mahjong, graze a charcuterie board, and get an{" "}
                {MAHJONG_EVENT.drip.name} therapy drip right at your seat with
                our nurses on hand. One winner takes home{" "}
                {MAHJONG_EVENT.raffle.prize}.
              </p>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <fact.icon
                      className="w-5 h-5 flex-shrink-0 text-secondary-light mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-white/60">
                        {fact.label}
                      </dt>
                      <dd className="font-semibold text-white">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6 border-t border-white/15 pt-6">
                <span className="text-4xl font-bold">
                  ${MAHJONG_EVENT.ticketPrice}
                </span>
                <span className="text-white/80">
                  all in — drip, food & raffle entry
                </span>
              </div>

              <Link
                href="/mahjong-night"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 text-lg font-bold text-white shadow-lg transition-colors duration-200 hover:bg-accent-dark"
              >
                RSVP for Mahjong Night
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-xs text-white/70 mt-4">
                First to RSVP, first served — your seat is confirmed once our
                team reaches out. First-time clients need a one-time $
                {MAHJONG_EVENT.screeningFee} telehealth screening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
