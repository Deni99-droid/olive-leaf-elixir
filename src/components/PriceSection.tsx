
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
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10">
                    <p className="text-xl font-light text-green-soft leading-relaxed">
                        Давайте посмотрим на цифры. Месячный курс O'Life стоит <span className="text-secondary-foreground font-bold">6600₽</span>.
                        Это всего <span className="text-primary font-bold text-2xl">236₽ в день</span> — цена одной чашки кофе.
                        <br /><br />
                        <span className="text-secondary-foreground font-bold uppercase tracking-wider">ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ:</span> С подпиской и скидкой <span className="text-primary font-bold">30%</span> стоимость падает до <span className="font-bold text-secondary-foreground">4620₽</span> за курс.
                        Это всего <span className="text-primary font-bold text-xl">165₽ в день</span>!
                        <br /><br />
                        <span className="text-primary font-bold text-lg block mb-4">🌿 Порция здоровья всего за 165₽ в день!</span>
                        <span className="italic text-olive-light">☕️ Кофе дает бодрость на час. O'Life дает здоровье на годы.</span>
                    </p>
                </div>

                {/* Right: Unified Comparison Block */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                    <div className="grid grid-cols-2 bg-muted/50 border-b border-border">
                        <div className="p-4 text-center font-bold text-muted-foreground uppercase text-xs tracking-wider">Аптечные средства</div>
                        <div className="p-4 text-center font-bold text-primary uppercase text-xs tracking-wider bg-primary/5">Напиток O'Life</div>
                    </div>
                    <div className="divide-y divide-border">
                        {[
                            { label: "Состав", pharmacy: "💊 Синтетика / Химия", olife: "🌿 100% Натуральный" },
                            { label: "Действие", pharmacy: "🎯 Узконаправленное", olife: "🌐 Весь организм" },
                            { label: "Усвоение", pharmacy: "⏳ Плохо / Частично", olife: "⚡ 100% (жидкая форма)" },
                            { label: "Эффект", pharmacy: "🩹 Снятие симптомов", olife: "🛠 Глубинное оздоровление" },
                            { label: "Побочки", pharmacy: "⚠️ Часто присутствуют", olife: "✅ Отсутствуют" },
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-2 group">
                                <div className="p-4 text-sm text-muted-foreground border-r border-border flex flex-col gap-1">
                                    <span className="text-[10px] uppercase opacity-50 font-bold">{row.label}</span>
                                    {row.pharmacy}
                                </div>
                                <div className="p-4 text-sm text-secondary-foreground font-medium bg-primary/5 flex flex-col gap-1">
                                    <span className="text-[10px] uppercase text-primary/50 font-bold">{row.label}</span>
                                    {row.olife}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-muted/30 text-center text-[11px] text-muted-foreground italic">
                        * Сравнение основано на биодоступности и составе продуктов
                    </div>
                </div>
            </div>

            {/* 10 points quick list */}
            <div className="mt-16 bg-surface-2 rounded-3xl p-8 md:p-12 border border-border">
                <h3 className="text-2xl font-display tracking-wider text-center text-secondary-foreground mb-10">
                    ЧТО ВЫ ПОЛУЧАЕТЕ ЗА <span className="text-primary">ЦЕНУ ЧАШКИ КОФЕ?</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "🛡 Укрепляет иммунитет",
                        "🗑 Детокс и вывод токсинов",
                        "⚖️ Нормализация веса",
                        "⚡ Энергия и фокус",
                        "😊 Гормон счастья (серотонин)",
                        "✨ Молодость и антиэйдж",
                        "💚 Здоровые сосуды и сердце",
                        "🩸 Сахар и холестерин в норме",
                        "💓 Нормализация давления",
                        "🦠 Антибактериальный эффект",
                        "🐛 Антипаразитарное средство",
                        "🚫 Противовирусное действие",
                        "🍄 Противогрибковое свойство"
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
