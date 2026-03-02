import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Анна Ракова",
    age: "63 года",
    city: "Москва",
    details: "Владелец языковой студии · Курс 18 бутылок",
    text: "Врач-иммунолог посоветовала Олайф при метеозависимости и мигренях. С первого глотка — интересный вкус с приятной горчинкой. Появилась энергия, ясность мысли и хорошее настроение. Через 3 месяца ушли лишние объёмы в талии, наладился ЖКТ, улучшился состав крови.",
    quote: "Олайф наполнил меня энергией, снова появилась ясность мысли. Вместе с достаточным количеством воды он омолаживает организм и ведёт к активному долголетию.",
  },
  {
    name: "Наталья",
    city: "Великий Новгород",
    details: "Результат через 1,5 месяца",
    text: "Маме 72 года. Начала принимать Олайф в середине декабря 2025. Утреннее повышение давления практически исчезло — можно обходиться без таблеток. Прошли боли в спине от грыжи позвоночника. Исчезла пульсация и боли в области почек после ходьбы. Наладилась работа ЖКТ. Ушли проблемы с мочевым пузырём — теперь может гулять до двух часов без дискомфорта. Головокружения стали значительно реже.",
    quote: "Я рада, что мама послушала меня и начала приём Олайф.",
  },
  {
    name: "Наргиза",
    city: "Окуловка",
    details: "Результат за 4 месяца",
    text: "Начала принимать Олайф с апреля. За четыре месяца значительно улучшилось здоровье: прошли боли от фиброзной кисты, нормализовался цикл. Ушли головные боли и высокое давление. Прошла боль в правом боку, наладился сон и работа желудка.",
    quote: "Благодаря Оксаночке я узнала про Олайф и решила попробовать. Результаты радуют день за днём. Спасибо что есть Олайф!",
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 lg:py-28 bg-card/50">
    <div className="max-w-[1140px] mx-auto px-5 md:px-10">
      <SectionHeader label="Отзывы">
        РЕАЛЬНЫЕ <span className="text-primary">РЕЗУЛЬТАТЫ</span>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.name} className="bg-card border-border flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <h3 className="font-display text-lg tracking-wide text-secondary-foreground">
                  {review.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {review.age && `${review.age} · `}{review.city}
                </p>
                <span className="inline-block mt-2 text-xs font-semibold tracking-wider uppercase text-primary">
                  {review.details}
                </span>
              </div>

              <p className="text-sm text-green-soft leading-relaxed mb-4 flex-1">
                {review.text}
              </p>

              <blockquote className="border-l-2 border-primary pl-4 text-sm italic text-olive-light leading-relaxed">
                «{review.quote}»
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
