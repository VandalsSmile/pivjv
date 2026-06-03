"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS, CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground-muted">
            Get quick answers to common questions about IV therapy at Prime IV{" "}
            {CONTACT.address.city}.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-foreground-muted transition-transform flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6">
                  <p className="text-foreground-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
