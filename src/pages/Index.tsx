import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import CalculatorSection from "@/components/CalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <GallerySection />
      <CalculatorSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
