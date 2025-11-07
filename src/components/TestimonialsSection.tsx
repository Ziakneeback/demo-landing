import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Айгерім Нұрланова",
    text: "Өте жақсы жұмыс! Пәтерді тез әрі сапалы жөндеп берді. Нәтижеге қатты разымыз. Ұсынамын!",
    rating: 5,
    initials: "АН"
  },
  {
    name: "Ержан Сатыбалдиев",
    text: "Кәсіби бригада, барлығын мерзімінде орындады. Баға сапаға сәйкес келеді. Керемет жұмыс үшін рахмет!",
    rating: 5,
    initials: "ЕС"
  },
  {
    name: "Мадина Әлімбекова",
    text: "Кеңседе косметикалық жөндеу жүргізді. Ұқыпты жұмыс істеді, өздерінен кейін тазалап кетті. Олармен жұмыс істеу өте жақсы болды.",
    rating: 5,
    initials: "МӘ"
  },
  {
    name: "Бауыржан Қасымов",
    text: "Үйде капиталды жөндеу - барлығы жоғары деңгейде өтті. Шеберлер өз ісін біледі. 12 ай кепілдік - үлкен артықшылық!",
    rating: 5,
    initials: "БҚ"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Отзывы наших клиентов
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Более 500 довольных заказчиков
        </p>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="h-full shadow-soft hover:shadow-medium transition-all border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16 bg-primary text-primary-foreground">
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg text-card-foreground">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
