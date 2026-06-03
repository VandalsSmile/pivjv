"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";

export function StickyCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary shadow-lg border-t border-white/10">
      <div className="flex items-center justify-between">
        <Link
          href={`tel:${CONTACT.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-medium hover:bg-primary-light transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </Link>
        <Link
          href="/specials"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-secondary text-white font-semibold hover:bg-secondary-dark transition-colors"
        >
          Book ${PRICING.introOffer.price} VIP IV
        </Link>
      </div>
    </div>
  );
}
