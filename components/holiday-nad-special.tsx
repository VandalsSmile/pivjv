import Link from "next/link";
import { ArrowRight, Calendar, Check, Gift, Phone } from "lucide-react";
import { CONTACT, NAD_HOLIDAY_SPECIAL } from "@/lib/constants";
import {
  holidaySpecialItems,
  holidaySpecialRangeLabel,
  isHolidaySpecialActive,
  priceToNumber,
  type HolidaySpecialItem,
} from "@/lib/niagen-special";

const GROUP_TITLES: Record<HolidaySpecialItem["group"], string> = {
  "NAD+ injection": "NAD+ Injections",
  "Niagen injection": "Niagen® Injections",
  "NAD+ infusion": "NAD+ Infusion IVs",
};

function lowestByGroup() {
  const lowest = new Map<HolidaySpecialItem["group"], HolidaySpecialItem>();
  for (const item of holidaySpecialItems()) {
    const current = lowest.get(item.group);
    if (!current || priceToNumber(item.sale) < priceToNumber(current.sale)) {
      lowest.set(item.group, item);
    }
  }
  return [...lowest.values()];
}

type HolidayNadSpecialProps = {
  className?: string;
};

export function HolidayNadSpecial({
  className = "section-padding bg-background",
}: HolidayNadSpecialProps) {
  if (!isHolidaySpecialActive()) return null;

  const percentOff = NAD_HOLIDAY_SPECIAL.percentOff;
  const rangeLabel = holidaySpecialRangeLabel();
  const groups = lowestByGroup();

  return (
    <section aria-labelledby="holiday-special-heading" className={className}>
      <div className="container-custom mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary">
            This Month&apos;s Special
          </p>
          <h2
            id="holiday-special-heading"
            className="text-3xl font-bold text-balance md:text-4xl"
          >
            {percentOff}% off NAD+ &amp; Niagen for the holidays
          </h2>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          <div aria-hidden="true" className="h-1.5 w-full bg-secondary" />
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="flex flex-col items-center justify-center gap-3 bg-primary p-8 text-center text-white lg:col-span-2 lg:p-10">
              <Gift className="h-10 w-10 text-secondary" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                {NAD_HOLIDAY_SPECIAL.label}
              </p>
              <p className="text-7xl font-bold leading-none text-secondary md:text-8xl">
                {percentOff}%
              </p>
              <p className="text-xl font-bold uppercase tracking-wide">
                Off NAD+ &amp; Niagen
              </p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {rangeLabel}
              </p>
            </div>

            <div className="flex flex-col gap-6 p-8 lg:col-span-3 lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  {NAD_HOLIDAY_SPECIAL.label} · {rangeLabel}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground text-balance">
                  Every NAD+ and Niagen injection and IV, half off
                </h3>
                <p className="mt-3 leading-relaxed text-foreground-muted text-pretty">
                  {percentOff}% off {NAD_HOLIDAY_SPECIAL.appliesTo}. No promo
                  code needed. Great for a holiday reset, or a gift for
                  someone who needs one.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {groups.map((item) => (
                  <li key={item.group} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-3">
                      <span className="font-semibold text-foreground">
                        {GROUP_TITLES[item.group]}
                      </span>
                      <span className="text-sm text-foreground-muted">
                        from{" "}
                        <span className="font-bold text-secondary">
                          {item.sale}
                        </span>{" "}
                        <span className="line-through">{item.regular}</span>
                      </span>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-foreground">
                    Niagen® Infusion IVs
                    <span className="font-normal text-foreground-muted">
                      {" "}
                      · call for pricing
                    </span>
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call to Book
                </Link>
                <Link href="/nad-niagen-special" className="btn-secondary">
                  See All Holiday Prices
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <p className="text-xs text-foreground-muted">
                Valid {rangeLabel}. {NAD_HOLIDAY_SPECIAL.priceNote} NAD+
                infusions require a pre-order. Telehealth medical clearance may
                be required for IV visits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
