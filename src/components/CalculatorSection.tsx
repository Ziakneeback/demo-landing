import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

const CalculatorSection = () => {
  const [roomType, setRoomType] = useState("");
  const [area, setArea] = useState("");
  const [workType, setWorkType] = useState("");
  const [cost, setCost] = useState(0);

  const calculateCost = () => {
    if (!roomType || !area || !workType) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    let basePrice = 0;
    const areaNum = parseInt(area);

    // Base price calculation
    if (workType === "cosmetic") basePrice = 3000;
    if (workType === "major") basePrice = 8000;
    if (workType === "designer") basePrice = 15000;
    if (workType === "minor") basePrice = 1500;

    const totalCost = basePrice * areaNum;
    setCost(totalCost);
    toast.success("Стоимость рассчитана!");
  };

  const sendToWhatsApp = () => {
    if (cost === 0) {
      toast.error("Сначала рассчитайте стоимость");
      return;
    }
    
    const message = encodeURIComponent(
      `Здравствуйте! Хочу узнать о ремонте:\nТип помещения: ${roomType}\nПлощадь: ${area} м²\nВид работ: ${workType}\nРасчетная стоимость: ${cost.toLocaleString()} ₽`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section id="calculator" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Рассчитайте стоимость ремонта
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Быстрая оценка за 1 минуту
        </p>

        <Card className="max-w-2xl mx-auto shadow-medium border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground">Калькулятор стоимости</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="room-type">Тип помещения</Label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger id="room-type" className="bg-background">
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="apartment">Квартира</SelectItem>
                  <SelectItem value="house">Дом</SelectItem>
                  <SelectItem value="office">Офис</SelectItem>
                  <SelectItem value="commercial">Коммерческое помещение</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="area">Площадь (м²)</Label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger id="area" className="bg-background">
                  <SelectValue placeholder="Выберите площадь" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="20">до 20 м²</SelectItem>
                  <SelectItem value="40">20-40 м²</SelectItem>
                  <SelectItem value="60">40-60 м²</SelectItem>
                  <SelectItem value="80">60-80 м²</SelectItem>
                  <SelectItem value="100">80-100 м²</SelectItem>
                  <SelectItem value="120">более 100 м²</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="work-type">Вид работ</Label>
              <Select value={workType} onValueChange={setWorkType}>
                <SelectTrigger id="work-type" className="bg-background">
                  <SelectValue placeholder="Выберите вид работ" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="minor">Мелкий ремонт</SelectItem>
                  <SelectItem value="cosmetic">Косметический ремонт</SelectItem>
                  <SelectItem value="major">Капитальный ремонт</SelectItem>
                  <SelectItem value="designer">Дизайнерский ремонт</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={calculateCost} 
              className="w-full"
              size="lg"
            >
              Рассчитать стоимость
            </Button>

            {cost > 0 && (
              <div className="p-6 bg-primary/10 rounded-lg text-center space-y-4">
                <div>
                  <p className="text-muted-foreground mb-2">Примерная стоимость:</p>
                  <p className="text-4xl font-bold text-primary">
                    {cost.toLocaleString()} ₽
                  </p>
                </div>
                <Button 
                  onClick={sendToWhatsApp}
                  className="w-full bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Отправить расчёт в WhatsApp
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CalculatorSection;
