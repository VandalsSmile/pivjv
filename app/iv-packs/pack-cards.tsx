"use client";

import { ArrowRight, Check } from "lucide-react";
import { IV_PACKS, PRICING, getPackMath } from "@/lib/constants";
import { PACK_SELECT_EVENT } from "./iv-packs-form";

const packPerks: Record<string, string[]> = {
  "6-pack": [
    "6 primary IV drips of your choice",
    "Use them on your schedule — no monthly deadline",
    "Never expires",
    "VIP massage chair with every visit",
  ],
  "12-pack": [
    "12 primary IV drips of your choice",
    "Lowest per-IV price we offer without a membership",
    "Use them on your schedule — no monthly deadline",
    "Never expires",
    "VIP massage chair with every visit",
  ],
};

export function PackCards() {
  const selectPack = (packId: string) => {
    window.dispatchEvent(
      new CustomEvent(PACK_SELECT_EVENT, { detail: { packId } }),
    );
    // Scroll down to the full form rather than back up to the hero card.
    const target =
      document.getElementById("reserve-pack-full") ??
      document.getElementById("reserve-pack");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-start">
      {IV_PACKS.map((pack) => {
        const math = getPackMath(pack);
        const perks = packPerks[pack.id] ?? [];

        return (
          <div
            key={pack.id}
            className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col ${
              pack.highlight
                ? "border-accent shadow-2xl md:-mt-3"
                : "border-border shadow-lg"
            }`}
          >
            {pack.badge && (
              <div className="bg-accent text-white text-center text-xs font-bold uppercase tracking-widest py-2">
                {pack.badge}
              </div>
            )}

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-1">{pack.name}</h3>
              <p className="text-sm text-foreground-muted mb-6 text-pretty">
                {pack.tagline}
              </p>

              {/* Signature element: the per-IV price is the hero number. */}
              <div className="rounded-xl bg-background-alt border border-border p-5 mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold text-primary leading-none tabular-nums">
                    ${math.perIv}
                  </span>
                  <span className="text-foreground-muted font-medium pb-1">
                    / IV
                  </span>
                </div>
                <p className="mt-3 text-sm text-foreground-muted">
                  <span className="line-through">
                    ${PRICING.nonMemberDrip} each
                  </span>{" "}
                  paid one at a time
                </p>
                <div className="mt-4 pt-4 border-t border-border flex items-baseline justify-between gap-2">
                  <span className="text-sm text-foreground-muted">
                    Pay today
                  </span>
                  <span className="text-2xl font-bold text-foreground tabular-nums">
                    ${pack.price.toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <span className="text-sm text-foreground-muted">
                    You save
                  </span>
                  <span className="text-lg font-bold text-accent-dark tabular-nums">
                    ${math.savings.toLocaleString()} ({math.percentOff}%)
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-foreground text-sm leading-relaxed">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => selectPack(pack.id)}
                className={`w-full justify-center ${
                  pack.highlight ? "btn-accent" : "btn-secondary"
                }`}
              >
                Choose the {pack.name}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
