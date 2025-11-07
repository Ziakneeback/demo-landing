import { Shield, Clock, DollarSign, CheckCircle, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Без переплат",
    description: "Честные цены без скрытых доплат"
  },
  {
    icon: Shield,
    title: "Гарантия 12 месяцев",
    description: "Уверенность в качестве работ"
  },
  {
    icon: Clock,
    title: "Выезд в день обращения",
    description: "Быстрое реагирование на заявку"
  },
  {
    icon: CheckCircle,
    title: "Опыт более 10 лет",
    description: "Профессионалы своего дела"
  },
  {
    icon: Users,
    title: "Собственная бригада",
    description: "Контроль на каждом этапе"
  },
  {
    icon: Award,
    title: "Сертифицированные материалы",
    description: "Работаем только с проверенными брендами"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Почему выбирают нас
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
