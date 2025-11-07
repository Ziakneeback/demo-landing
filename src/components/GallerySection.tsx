import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import galleryBefore1 from "@/assets/gallery-before-1.jpg";
import galleryAfter1 from "@/assets/gallery-after-1.jpg";
import galleryBefore2 from "@/assets/gallery-before-2.jpg";
import galleryAfter2 from "@/assets/gallery-after-2.jpg";
import galleryBefore3 from "@/assets/gallery-before-3.jpg";
import galleryAfter3 from "@/assets/gallery-after-3.jpg";

const galleryItems = [
  {
    before: galleryBefore1,
    after: galleryAfter1,
    title: "Гостиная"
  },
  {
    before: galleryBefore2,
    after: galleryAfter2,
    title: "Кухня"
  },
  {
    before: galleryBefore3,
    after: galleryAfter3,
    title: "Ванная комната"
  }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Наши работы
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          До и после ремонта
        </p>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-medium">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-center py-6 text-card-foreground">
                      {item.title}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative group overflow-hidden">
                        <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-md font-semibold z-10">
                          До
                        </div>
                        <img 
                          src={item.before} 
                          alt={`${item.title} до ремонта`}
                          className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="relative group overflow-hidden">
                        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md font-semibold z-10">
                          После
                        </div>
                        <img 
                          src={item.after} 
                          alt={`${item.title} после ремонта`}
                          className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;
