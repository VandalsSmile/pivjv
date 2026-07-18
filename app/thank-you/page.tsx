import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Zap,
  ShieldPlus,
  HeartHandshake,
  Phone,
  ArrowRight,
  Home,
  Sparkles,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for your request. Our Prime IV Jones Valley team in Huntsville, AL will reach out shortly to confirm your appointment details.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

const BENEFITS = [
  {
    icon: Zap,
    title: "Renewed Energy & Clarity",
    description:
      "Medical-grade hydration and nutrients delivered straight to your bloodstream for a fast, noticeable lift.",
  },
  {
    icon: ShieldPlus,
    title: "Stronger Immunity & Recovery",
    description:
      "Support your body's defenses and bounce back faster from stress, travel, workouts and busy weeks.",
  },
  {
    icon: HeartHandshake,
    title: "Care Tailored to You",
    description:
      "A licensed medical professional customizes every drip around how you want to feel — no guesswork, all wellness.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-secondary text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Request Received
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Thank you — you&apos;ve taken an important step toward feeling your
              best
            </h1>
            <p className="text-white/80 text-lg text-pretty">
              Your request is on its way to our Prime IV Jones Valley team in
              Huntsville, and we&apos;ll reach out shortly to confirm the
              details. Choosing IV therapy is a meaningful investment in your
              energy, immunity and overall well-being — and you&apos;re already
              one step closer.
            </p>
          </div>
        </div>
      </section>

      {/* Why IV therapy is worth it */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why IV therapy is worth it
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              IV therapy delivers hydration, vitamins and nutrients directly
              into your bloodstream for near-complete absorption — so you feel
              the benefits faster than pills or drinks can deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-background-alt rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/" className="btn-secondary w-full sm:w-auto">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link href="/specials" className="btn-primary w-full sm:w-auto">
              <Sparkles className="w-4 h-4" />
              View This Month&apos;s Specials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Have questions in the meantime?
            </h2>
            <p className="text-white/80 text-lg mb-8 text-pretty">
              Our team is happy to help you choose the right drip or answer
              anything about your upcoming visit. Give us a call anytime.
            </p>
            <Link
              href={`tel:${CONTACT.phoneClean}`}
              className="btn-primary text-lg"
            >
              <Phone className="w-5 h-5" />
              Call {CONTACT.phone}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
