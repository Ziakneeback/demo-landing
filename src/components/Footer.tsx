import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              <a href="tel:+77777777777" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                <span>+7 (777) 777-77-77</span>
              </a>
              <a href="mailto:info@remont.kz" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@remont.kz</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>қ. Алматы, Әл-Фараби даңғылы, 123</span>
              </div>
            </div>
          </div>

          {/* Work Hours */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Режим работы</h3>
            <div className="space-y-2">
              <p>Понедельник - Пятница: 8:00 - 20:00</p>
              <p>Суббота - Воскресенье: 9:00 - 18:00</p>
              <p className="mt-4 text-accent font-semibold">
                Принимаем заявки круглосуточно!
              </p>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Мы в соцсетях</h3>
            <div className="flex gap-4 mb-6">
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary-foreground text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
                onClick={() => window.open("https://wa.me/", "_blank")}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary-foreground text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
                onClick={() => window.open("https://instagram.com/", "_blank")}
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open("https://wa.me/", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Жөндеу қызметі. Барлық құқықтар қорғалған.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
