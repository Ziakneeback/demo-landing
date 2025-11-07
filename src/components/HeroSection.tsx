import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/", "_blank");
  };

  const handleCalculate = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Ремонт квартир и мелкие работы под ключ
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          Быстро, чисто и по честной цене — от мастеров с опытом
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleCalculate}
            className="text-lg px-8 py-6 shadow-medium hover:shadow-soft transition-all"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Рассчитать стоимость
          </Button>
          <Button 
            size="lg" 
            onClick={handleWhatsApp}
            className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium transition-all"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Написать в WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
