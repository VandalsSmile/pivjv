import Link from "next/link";
import { Calendar, Check, Medal, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const PERKS = [
  "30% off every IV drip, booster, and add-on",
  "Valid for veterans and active-duty service members",
  "Bring a military ID, VA card, or DD-214 to your visit",
];

export function VeteransDaySpecial() {
  return (
    <section
      aria-labelledby="veterans-day-heading"
      className="section-padding bg-background-alt"
    >
      <div className="container-custom mx-auto">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border-2 border-secondary bg-background shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="flex flex-col items-center justify-center gap-3 bg-primary p-8 text-center text-white lg:col-span-2 lg:p-10">
              <Medal className="h-10 w-10 text-secondary" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                Veterans Day Special
              </p>
              <p className="text-7xl font-bold leading-none text-secondary md:text-8xl">
                30%
              </p>
              <p className="text-xl font-bold uppercase tracking-wide">
                Off Everything
              </p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Nov 11 – Nov 15
              </p>
            </div>

            <div className="flex flex-col gap-6 p-8 lg:col-span-3 lg:p-10">
              <div>
                <h2
                  id="veterans-day-heading"
                  className="text-3xl font-bold text-foreground text-balance md:text-4xl"
                >
                  Thank You for Your Service
                </h2>
                <p className="mt-3 leading-relaxed text-foreground-muted text-pretty">
                  In honor of Veterans Day on November 11, Prime IV{" "}
                  {CONTACT.address.city} is offering all veterans 30% off
                  everything from November 11 through November 15. It&apos;s
                  our way of saying thank you to those who served.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {PERKS.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <span className="text-foreground">{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call to Book
                </Link>
                <Link href="#claim-form" className="btn-secondary">
                  Claim This Offer
                </Link>
              </div>

              <p className="text-xs text-foreground-muted">
                Offer valid 11/11–11/15 with proof of service. Cannot be
                combined with other offers or memberships. Telehealth medical
                clearance may be required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
