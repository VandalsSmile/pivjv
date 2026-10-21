"use client";

import { useEffect } from "react";
import { consumePendingLead } from "@/lib/tracking";

/**
 * Fires the Google Ads conversion, Meta Lead, and generate_lead dataLayer
 * event once after a successful form redirects here. A direct visit has
 * nothing queued, so it does not fire.
 */
export function LeadConversion() {
  useEffect(() => {
    let cancelled = false;
    let timer: number | undefined;

    const tryFire = (attempt: number) => {
      if (cancelled) return;
      const tagsReady =
        typeof window.gtag === "function" && typeof window.fbq === "function";
      // afterInteractive tags are usually already present on a client redirect.
      // A full load of /thank-you can hydrate first; wait briefly so both fire.
      if (!tagsReady && attempt < 40) {
        timer = window.setTimeout(() => tryFire(attempt + 1), 50);
        return;
      }
      consumePendingLead();
    };

    tryFire(0);
    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  return null;
}
