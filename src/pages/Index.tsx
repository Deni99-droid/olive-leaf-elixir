import HeroSection from "@/components/HeroSection";
import WhatSection from "@/components/WhatSection";
import BenefitsSection from "@/components/BenefitsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import OksanaSection from "@/components/OksanaSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OksanaSection />
      <WhatSection />
      <BenefitsSection />
      <AdvantagesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
