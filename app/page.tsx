import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { ProductionSection } from "@/components/landing/ProductionSection";
import { ReliabilitySection } from "@/components/landing/ReliabilitySection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";

export default function Home() {
  return (
    <>
      <div className="page">
        <SiteHeader />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <ProductionSection />
          <ReliabilitySection />
          <PricingSection />
          <IndustriesSection />
          <FaqSection />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
