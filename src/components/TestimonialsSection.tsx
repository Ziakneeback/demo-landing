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
    name: "Анна Петрова",
    text: "Отличная работа! Сделали ремонт квартиры быстро и качественно. Остались очень довольны результатом. Рекомендую!",
    rating: 5,
    initials: "АП"
  },
  {
    name: "Дмитрий Иванов",
    text: "Профессиональная бригада, все сделали в срок. Цена соответствует качеству. Спасибо за отличную работу!",
    rating: 5,
    initials: "ДИ"
  },
  {
    name: "Елена Смирнова",
    text: "Делали косметический ремонт в офисе. Работали аккуратно, убирали за собой. Очень приятно было с ними работать.",
    rating: 5,
    initials: "ЕС"
  },
  {
    name: "Михаил Козлов",
    text: "Капитальный ремонт дома - все прошло на высшем уровне. Мастера знают своё дело. Гарантия 12 месяцев это большой плюс!",
    rating: 5,
    initials: "МК"
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
