
import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const PriceSection = () => (
    <section id="price" className="py-24 lg:py-28 bg-card/30">
        <div className="max-w-[1140px] mx-auto px-5 md:px-10">
            <SectionHeader label="Стоимость">
                O'LIFE — ЭТО <span className="text-primary">ДОРОГО?</span>
            </SectionHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">
                {/* Left: Comparison Card */}
                <div className="space-y-6">
                    <p className="text-xl font-light text-green-soft leading-relaxed">
                        Давайте посмотрим на цифры. Месячный курс O'Life стоит <span className="text-secondary-foreground font-bold">6600₽</span>.
                        Это всего <span className="text-primary font-bold text-2xl">236₽ в день</span> — цена одной чашки кофе.
                    </p>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                        <h4 className="text-lg font-bold text-secondary-foreground mb-4 flex items-center gap-2">
                            <span>💎</span> ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ
                        </h4>
                        <p className="text-green-soft mb-4">
                            С подпиской и скидкой 30% стоимость падает до <span className="font-bold text-secondary-foreground">4620₽</span> за курс.
                            Это всего <span className="text-primary font-bold text-xl">165₽ в день</span>!
                        </p>
                        <div className="flex items-center gap-3 text-sm text-olive-light italic">
                            <span>☕️</span>
                            Кофе дает бодрость на час. O'Life дает здоровье на годы.
                        </div>
                    </div>
                </div>

                {/* Right: Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="bg-card border-border shadow-sm">
                        <CardContent className="p-5">
                            <h4 className="font-bold text-primary mb-2">Аптечные средства</h4>
                            <ul className="text-sm text-muted-foreground space-y-1.5">
                                <li>• Устраняют симптомы</li>
                                <li>• Могут иметь побочные эффекты</li>
                                <li>• Работают узконаправленно</li>
                                <li>• Часто плохо усваиваются</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary/10 border-primary/30 shadow-md">
                        <CardContent className="p-5">
                            <h4 className="font-bold text-primary mb-2">Напиток O'Life</h4>
                            <ul className="text-sm text-secondary-foreground space-y-1.5">
                                <li>• 100% натуральный состав</li>
                                <li>• Работает со всем организмом</li>
                                <li>• Усваивается на 100% (жидкий)</li>
                                <li>• Нет аналогов и побочек</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* 10 points quick list */}
            <div className="mt-16 bg-surface-2 rounded-3xl p-8 md:p-12 border border-border">
                <h3 className="text-2xl font-display tracking-wider text-center text-secondary-foreground mb-10">
                    ЧТО ВЫ ПОЛУЧАЕТЕ ЗА <span className="text-primary">ЦЕНУ ЧАШКИ КОФЕ?</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "🛡 Крепкий иммунитет",
                        "🗑 Детокс и вывод токсинов",
                        "⚖️ Нормализация веса",
                        "⚡ Энергия и фокус",
                        "😊 Гормон счастья (серотонин)",
                        "✨ Молодость и антиэйдж",
                        "💚 Здоровые сосуды и сердце",
                        "🩸 Сахар и холестерин в норме",
                        "🦠 Антибактериальный эффект"
                    ].map((item, i) => (
                        <div key={i} className="flex gap-3 text-green-soft font-light">
                            <span className="text-primary">▸</span>
                            {item}
                        </div>
                    ))}
                </div>
                <p className="mt-10 text-center text-muted-foreground italic text-sm">
                    И это далеко не весь список. Хорошие витамины стоят 3000-5000₽, но O'Life заменяет целый комплекс средств.
                </p>
            </div>

            <div className="mt-12 text-center">
                <p className="text-lg text-secondary-foreground font-medium">
                    Просто начните пить O'Life и почувствуйте результат. Он стоит каждого рубля.
                </p>
            </div>
        </div>
    </section>
);

export default PriceSection;
