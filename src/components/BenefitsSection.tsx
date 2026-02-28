import SectionHeader from "./SectionHeader";

const benefits = [
  { icon: "🛡", title: "ИММУНИТЕТ", desc: "Укрепляет защитные силы организма, помогает противостоять вирусам и бактериям" },
  { icon: "⚡", title: "ЭНЕРГИЯ", desc: "Натуральный прилив сил без кофеина и стимуляторов — бодрость на весь день" },
  { icon: "💚", title: "СЕРДЦЕ И СОСУДЫ", desc: "Поддерживает здоровье сердечно-сосудистой системы, нормализует давление" },
  { icon: "🧬", title: "АНТИОКСИДАНТ", desc: "Нейтрализует свободные радикалы, замедляет процессы старения клеток" },
  { icon: "🍃", title: "ДЕТОКС", desc: "Мягко очищает организм от токсинов и продуктов метаболизма" },
  { icon: "✨", title: "КОЖА И ВОЛОСЫ", desc: "Улучшает состояние кожи, ногтей и волос благодаря антиоксидантному действию" },
];

const BenefitsSection = () => (
  <section className="py-24 lg:py-28">
    <div className="max-w-[1140px] mx-auto px-5 md:px-10">
      <SectionHeader label="Польза">
        ЗАБОТА О <span className="text-primary">ЗДОРОВЬЕ</span>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card border border-border rounded-xl p-7 transition-all hover:border-primary/40 hover:-translate-y-1"
          >
            <span className="text-3xl block mb-3.5">{b.icon}</span>
            <h3 className="font-display text-xl tracking-[2px] text-secondary-foreground mb-2">{b.title}</h3>
            <p className="text-base font-light text-green-soft leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
