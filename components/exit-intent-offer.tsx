"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, Sparkles, Clock, ChevronRight } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { MOMENTUM_PROGRAM } from "@/lib/momentum-program";

// Bumped when the offer content changes so returning visitors see the new one.
const STORAGE_KEY = "momentum-offer-seen";

export function ExitIntentOffer() {
  const [open, setOpen] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    // Only show once per browser session.
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) {
      dismissedRef.current = true;
      return;
    }

    const trigger = () => {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    // Desktop exit intent: cursor leaves the top of the viewport.
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) {
        trigger();
      }
    };

    // Mobile exit intent: a quick upward scroll near the top of the page
    // (a common gesture right before leaving), plus a time fallback.
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastY - 12 && currentY < 200) {
        trigger();
      }
      lastY = currentY;
    };

    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    document.addEventListener("mouseout", handleMouseOut);
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
    if (isTouch) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      // Fallback so touch users who never scroll up still see the offer.
      fallbackTimer = setTimeout(trigger, 25000);
    }

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, []);

  // Close on Escape key.
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-offer-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close offer"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm animate-offer-fade-in"
      />

      {/* Card */}
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-primary text-white shadow-2xl animate-offer-pop-in">
        {/* Decorative bubbles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="absolute -top-12 -right-10 h-40 w-40 rounded-full bg-secondary/25" />
          <span className="absolute -bottom-14 -left-10 h-44 w-44 rounded-full bg-accent/20" />
          <span className="absolute top-1/2 right-6 h-10 w-10 rounded-full bg-white/10" />
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close offer"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-6 text-center sm:p-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Clock className="h-3.5 w-3.5" />
            Before You Go
          </span>

          <h2
            id="exit-offer-title"
            className="mt-4 text-2xl font-bold leading-tight text-balance"
          >
            Your First 3 Visits Are Discounted
          </h2>

          <p className="mt-2 text-sm text-white/80 text-pretty">
            New guests get our{" "}
            <span className="font-semibold text-white">
              {MOMENTUM_PROGRAM.name}
            </span>{" "}
            card — three visits, three discounts, no promo code to remember.
          </p>

          {/* Mini 3-step ladder */}
          <ol className="mt-5 flex items-stretch justify-center gap-1.5">
            {MOMENTUM_PROGRAM.steps.map((step, index) => (
              <li key={step.number} className="flex flex-1 items-center gap-1.5">
                <div className="flex-1 rounded-lg bg-white/10 px-2 py-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-white/60">
                    Visit {step.number}
                  </p>
                  <p className="mt-1 text-lg font-bold leading-none text-accent-light">
                    {step.value}
                  </p>
                </div>
                {index < MOMENTUM_PROGRAM.steps.length - 1 && (
                  <ChevronRight
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-white/40"
                  />
                )}
              </li>
            ))}
          </ol>

          <Link
            href="/intro-offer"
            onClick={() => setOpen(false)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-secondary-dark"
          >
            <Sparkles className="h-4 w-4" />
            Book Visit 1 for ${PRICING.introOffer.price}
          </Link>

          <p className="mt-3 text-[0.7rem] leading-relaxed text-white/50">
            Visit 2 within 60 days &middot; Visit 3 within 45 days of visit 2.
            Eligible regular-price IVs only.
          </p>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 text-xs font-medium text-white/60 underline-offset-2 transition-colors hover:text-white/90 hover:underline"
          >
            No thanks, maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
