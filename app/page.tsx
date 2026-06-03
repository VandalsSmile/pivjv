import { HeroSection } from "@/components/sections/hero-section";
import { WhyPrimeSection } from "@/components/sections/why-prime-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SpecialsSection } from "@/components/sections/specials-section";
import { TrustSection } from "@/components/sections/trust-section";
import { MembershipsSection } from "@/components/sections/memberships-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyPrimeSection />
      <AudienceSection />
      <BenefitsSection />
      <ServicesSection />
      <SpecialsSection />
      <TrustSection />
      <MembershipsSection />
      <ReviewsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
