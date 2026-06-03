import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Phone, ArrowRight, Users, Heart, Award } from "lucide-react";
import { CONTACT, WHY_PRIME_IV, TRUST_SIGNALS } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";
import { ReviewsSection } from "@/components/sections/reviews-section";

const IMAGES = {
  owners: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8654-sSSe1uP2SUZ01VrOvVSTJPrS77Cngg.jpeg",
  team: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260211_134131--284-29-cae55c3e-vYBVkXUDmxqmmHmCH9BwUXRjOi75DB.png",
  storefront: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIV%2BOUTSIDE%2B-aGyuXgH9wn19gHbBMYHUzZckqI97vX.jpg",
  nursePrepping: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIVJV-IV--281-29-msErquamFvKcEdfTaz0uhNcfeCmVDA.png",
  ivBagFruits: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/how%2Bdoes%2Biv%2Btherapy%2Bwork-tbWr1MbIWPfBBcJvjLxQEgVLBPhsUC.png",
  nurseHelping: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIVJV%2BIV%2Bhelp-AgKswevjak3keZJB9dMGC1pedKRs0d.png",
};

export const metadata: Metadata = {
  title: "About Us | Why Choose Prime IV Hydration & Wellness",
  description:
    "Learn about Prime IV Hydration & Wellness in Huntsville, AL. Discover our mission, meet our team, and find out why we are the trusted choice for IV therapy.",
  keywords: [
    "about Prime IV",
    "IV therapy Huntsville",
    "wellness spa",
    "medical-grade IV",
    "Prime IV team",
    "Huntsville Alabama",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Your Neighbors in Wellness
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Prime IV Hydration & Wellness {CONTACT.address.city} is dedicated
              to providing medical-grade IV therapy in a comfortable, spa-like
              environment. We&apos;re here to help you feel your best.
            </p>
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.owners}
                alt="Prime IV Huntsville owners in front of the storefront"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                Family-Owned & Local
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Prime IV Hydration & Wellness {CONTACT.address.city} was
                  founded with a simple mission: to give local residents better
                  access to medical-grade wellness therapies and more choices in
                  taking control of their health and quality of life.
                </p>
                <p>
                  We believe everyone deserves to feel their best. Whether
                  you&apos;re seeking relief from fatigue, recovering from a
                  tough week, preparing for an important event, or simply
                  investing in preventative wellness, we&apos;re here to help
                  you achieve your goals.
                </p>
                <p>
                  Our team of licensed healthcare professionals is dedicated to
                  providing safe, effective IV therapy treatments in a clean,
                  comfortable environment. We take the time to understand your
                  unique needs and create personalized treatment plans that work
                  for you.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Family-Owned</p>
                    <p className="text-sm text-foreground-muted">
                      Local business
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Locally Rooted</p>
                    <p className="text-sm text-foreground-muted">
                      Community first
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Excellence</p>
                    <p className="text-sm text-foreground-muted">
                      Premium care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                Meet the Team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Expert Care from Licensed Professionals
              </h2>
              <p className="text-foreground-muted mb-6">
                Our dedicated team of wellness professionals is here to guide
                you on your health journey. From your first consultation to
                your ongoing treatments, we&apos;re committed to your
                well-being.
              </p>
              <p className="text-foreground-muted mb-8">
                Every member of our team is a licensed healthcare professional
                with specialized training in IV therapy. We maintain the highest
                standards of safety and care in everything we do.
              </p>
              <Link href="/contact" className="btn-primary">
                Schedule a Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.team}
                alt="Prime IV Huntsville nursing team"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Storefront Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={IMAGES.storefront}
          alt="Prime IV Hydration & Wellness Huntsville storefront"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Visit Us in {CONTACT.address.city}
          </h3>
          <p className="text-white/80">{CONTACT.address.street}, {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.zip}</p>
        </div>
      </section>

      {/* Why Prime IV */}
      <section id="why-prime-iv" className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Prime IV in {CONTACT.address.city}?
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We&apos;re committed to providing the highest quality IV therapy
              treatments with a focus on safety, effectiveness, and your
              comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {WHY_PRIME_IV.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background-alt rounded-xl shadow-sm border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-medium text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Safe. Professional. Trusted.
              </h3>
              <p className="text-white/80">
                At Prime IV {CONTACT.address.city}, your health is our priority.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TRUST_SIGNALS.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/10 rounded-xl"
                >
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">{signal}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-white/70 mt-8">
              You&apos;re not just getting a drip—you&apos;re getting expert
              care.
            </p>
          </div>
        </div>
      </section>

      {/* What is IV Therapy */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                What is IV Therapy?
              </h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  IV (intravenous) therapy delivers vitamins, minerals, and
                  hydration directly into your bloodstream, bypassing the
                  digestive system for faster, more efficient absorption. This
                  means your body can utilize up to 100% of the nutrients,
                  compared to just 20-50% through oral supplements.
                </p>
                <p>
                  At Prime IV {CONTACT.address.city}, we use only medical-grade
                  ingredients administered by licensed healthcare professionals.
                  Each treatment is customized to your specific needs, and our
                  comfortable spa-like environment ensures a relaxing experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-foreground mb-2">Benefits</h4>
                  <ul className="space-y-1 text-sm text-foreground-muted">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      100% bioavailability
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      Rapid hydration
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      Immediate effects
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-foreground mb-2">Who Benefits</h4>
                  <ul className="space-y-1 text-sm text-foreground-muted">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      Busy professionals
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      Athletes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      Travelers
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/iv-therapy" className="btn-secondary">
                  Explore Our Treatments
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.ivBagFruits}
                alt="IV bag with vitamins and nutrients illustration"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nurse Prepping Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src={IMAGES.nursePrepping}
                alt="Licensed nurse preparing IV treatment in sterile environment"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                Safety First
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Medical-Grade Standards
              </h2>
              <p className="text-foreground-muted mb-6">
                Every IV treatment at Prime IV {CONTACT.address.city} is
                prepared in a sterile environment by licensed healthcare
                professionals. We use only the highest quality, medical-grade
                ingredients to ensure your safety and the effectiveness of your
                treatment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Sterile preparation environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Medical-grade ingredients only</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Licensed healthcare professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Strict safety protocols</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
