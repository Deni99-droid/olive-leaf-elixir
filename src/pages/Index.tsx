import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatSection from "@/components/WhatSection";
import BenefitsSection from "@/components/BenefitsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import EarningsSection from "@/components/EarningsSection";
import ReviewsSection from "@/components/ReviewsSection";
import PriceSection from "@/components/PriceSection";
import OksanaSection from "@/components/OksanaSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OksanaSection />
      <WhatSection />
      <BenefitsSection />
      <AdvantagesSection />
      <PriceSection />
      <EarningsSection />
      <ReviewsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
