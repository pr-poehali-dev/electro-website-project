import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [calcValues, setCalcValues] = useState({
    sockets: 0,
    switches: 0,
    lights: 0,
    panel: false,
  });

  const calculateTotal = () => {
    return (
      calcValues.sockets * 500 +
      calcValues.switches * 400 +
      calcValues.lights * 800 +
      (calcValues.panel ? 5000 : 0)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Свяжусь с вами в ближайшее время',
    });
  };

  const services = [
    { icon: 'Zap', title: 'Замена электропроводки', desc: 'Полная или частичная замена проводки в квартире или доме', price: 'от 70 ₽' },
    { icon: 'Power', title: 'Установка розеток и выключателей', desc: 'Монтаж, перенос и замена электроустановочных изделий', price: 'от 500 ₽' },
    { icon: 'Lightbulb', title: 'Монтаж освещения', desc: 'Установка люстр, светильников, светодиодной подсветки', price: 'от 800 ₽' },
    { icon: 'Shield', title: 'Сборка электрощитов', desc: 'Проектирование и монтаж распределительных щитов', price: 'до 2500 ₽' },
    { icon: 'Plug', title: 'Подключение электроприборов', desc: 'Подключение плит, стиральных машин, водонагревателей', price: 'от 1500 ₽' },
    { icon: 'Package', title: 'Закупка материалов', desc: 'Приобретение материалов по ценам ниже рыночных', price: 'экономия до 30%' },
  ];

  const portfolio = [
    { title: 'Электрика в новостройке 80м²', desc: 'Полный монтаж, 45 точек, автоматика ABB', image: 'https://cdn.poehali.dev/projects/54ea4e22-e01d-4c1f-a3b8-06a265d68c46/files/2ca31746-8287-4927-857a-cce0c5ac3934.jpg' },
    { title: 'Замена проводки в квартире', desc: 'Панельный дом, скрытая проводка', image: 'https://cdn.poehali.dev/projects/54ea4e22-e01d-4c1f-a3b8-06a265d68c46/files/a7025290-87c1-4f49-aac5-bcf4abbba48e.jpg' },
    { title: 'Сборка щита на 24 модуля', desc: 'С УЗО и дифавтоматами Legrand', image: 'https://cdn.poehali.dev/projects/54ea4e22-e01d-4c1f-a3b8-06a265d68c46/files/67124828-9bd9-4306-bca1-4240e578a9cb.jpg' },
  ];

  const reviews = [
    { name: 'Алексей М.', text: 'Отличная работа! Заменили всю проводку за 3 дня, чисто и аккуратно', rating: 5 },
    { name: 'Ирина С.', text: 'Профессионально собрал щиток, объяснил всю схему. Рекомендую!', rating: 5 },
    { name: 'Дмитрий К.', text: 'Быстро установили розетки и выключатели, всё работает отлично', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="font-bold text-2xl">Василий Анатольевич</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-primary transition">Главная</a>
            <a href="#about" className="hover:text-primary transition">О мастере</a>
            <a href="#services" className="hover:text-primary transition">Услуги</a>
            <a href="#price" className="hover:text-primary transition">Цены</a>
            <a href="#portfolio" className="hover:text-primary transition">Портфолио</a>
            <a href="#reviews" className="hover:text-primary transition">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section id="hero" className="py-20 bg-gradient-to-r from-primary to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
            Электромонтаж квартир, домов <br />и промышленных объектов
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Новосибирск • Рейтинг 5.0 • 8 отзывов
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary text-foreground hover:bg-secondary/90 text-lg px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О мастере</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="User" size={80} className="text-white" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold mb-4">Василий Анатольевич</h3>
                <p className="text-lg mb-4">
                  Профессиональный электромонтаж квартир, домов и промышленных объектов под ключ. 
                  Монтаж электрических коммуникаций с закупкой материалов по ценам ниже рыночных.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary">Новосибирск</Badge>
                  <Badge className="bg-secondary text-foreground">Рейтинг 5.0</Badge>
                  <Badge className="bg-primary">8 отзывов</Badge>
                  <Badge className="bg-secondary text-foreground">Под ключ</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Прайс-лист</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    ['Установка розетки скрытой проводки', '500 ₽'],
                    ['Установка выключателя', '400 ₽'],
                    ['Монтаж люстры/светильника', '800 ₽'],
                    ['Прокладка кабеля (скрытая)', '350 ₽/м'],
                    ['Прокладка кабеля (открытая)', '200 ₽/м'],
                    ['Сборка щита (1 модуль)', '250 ₽'],
                    ['Штробление стен под проводку', '400 ₽/м'],
                    ['Подключение варочной панели', '2000 ₽'],
                    ['Подключение стиральной машины', '1500 ₽'],
                    ['Замена автомата в щите', '600 ₽'],
                  ].map(([service, price], idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="font-medium">{service}</span>
                      <span className="font-bold text-primary text-lg">{price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Калькулятор стоимости</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Рассчитайте примерную стоимость</CardTitle>
                <CardDescription>Укажите количество точек для расчёта</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-lg">Количество розеток (500 ₽/шт)</Label>
                  <Input
                    type="number"
                    min="0"
                    value={calcValues.sockets}
                    onChange={(e) => setCalcValues({ ...calcValues, sockets: +e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="text-lg">Количество выключателей (400 ₽/шт)</Label>
                  <Input
                    type="number"
                    min="0"
                    value={calcValues.switches}
                    onChange={(e) => setCalcValues({ ...calcValues, switches: +e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="text-lg">Количество светильников (800 ₽/шт)</Label>
                  <Input
                    type="number"
                    min="0"
                    value={calcValues.lights}
                    onChange={(e) => setCalcValues({ ...calcValues, lights: +e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="panel"
                    checked={calcValues.panel}
                    onChange={(e) => setCalcValues({ ...calcValues, panel: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <Label htmlFor="panel" className="text-lg cursor-pointer">
                    Сборка электрощита (5000 ₽)
                  </Label>
                </div>
                <Separator />
                <div className="bg-secondary/20 p-6 rounded-lg text-center">
                  <p className="text-lg mb-2">Примерная стоимость:</p>
                  <p className="text-5xl font-bold text-primary">{calculateTotal().toLocaleString()} ₽</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Точная стоимость определяется после осмотра объекта
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Примеры работ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&ldquo;{review.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-red-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Связаться со мной</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} />
                  <div>
                    <p className="font-bold text-lg">Телефон</p>
                    <p className="text-white/90">+7 (900) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} />
                  <div>
                    <p className="font-bold text-lg">Email</p>
                    <p className="text-white/90">info@elektromaster.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} />
                  <div>
                    <p className="font-bold text-lg">Район работы</p>
                    <p className="text-white/90">Новосибирск</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} />
                  <div>
                    <p className="font-bold text-lg">Режим работы</p>
                    <p className="text-white/90">Пн-Вс: 8:00 - 22:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку, и я свяжусь с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Ваше имя</Label>
                    <Input placeholder="Иван Иванов" required className="mt-1" />
                  </div>
                  <div>
                    <Label>Телефон</Label>
                    <Input type="tel" placeholder="+7 (900) 123-45-67" required className="mt-1" />
                  </div>
                  <div>
                    <Label>Сообщение</Label>
                    <Textarea placeholder="Опишите вашу задачу..." rows={4} required className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" className="text-secondary" size={28} />
            <span className="font-bold text-xl">Василий Анатольевич</span>
          </div>
          <p className="text-gray-400">© 2024 Все права защищены</p>
          <p className="text-sm text-gray-500 mt-2">Электромонтажные работы в Новосибирске</p>
        </div>
      </footer>
    </div>
  );
}