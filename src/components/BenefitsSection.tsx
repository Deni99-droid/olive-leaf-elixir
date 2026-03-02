import SectionHeader from "./SectionHeader";

const benefits = [
  { icon: "🛡", desc: "Укрепляет иммунитет" },
  { icon: "🗑", desc: "Очищает организм и выводит токсины" },
  { icon: "⚖️", desc: "Улучшает метаболизм жиров и углеводов (нормализует вес)" },
  { icon: "⚡", desc: "Даёт энергию на весь день" },
  { icon: "🧠", desc: "Стимулирует умственную деятельность" },
  { icon: "😊", desc: "Вырабатывает серотонин, гормон счастья" },
  { icon: "✨", desc: "Сохранение молодости и замедление старения кожи" },
  { icon: "💚", desc: "Укрепляет сосуды. Стимулирует работу сердца" },
  { icon: "🩸", desc: "Нормализует уровень сахара и холестерина в крови" },
  { icon: "💓", desc: "Нормализует артериальное давление" },
  { icon: "🦠", desc: "Имеет антибактериальные свойства" },
  { icon: "🫁", desc: "Нормализует работу ЖКТ" },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-24 lg:py-28">
    <div className="max-w-[1140px] mx-auto px-5 md:px-10">
      <SectionHeader label="Польза">
        ЗАБОТА О <span className="text-primary">ЗДОРОВЬЕ</span>
      </SectionHeader>

      {/* What does OLife give */}
      <div className="bg-card border border-border rounded-xl p-8 md:p-10 mb-12">
        <h3 className="font-display text-[clamp(32px,4vw,48px)] text-secondary-foreground tracking-wide leading-none mb-2">
          ЧТО ДАЁТ <span className="text-primary">ОЛАЙФ?</span>
        </h3>
        <div className="flex items-baseline gap-3 mt-4 mb-4">
          <span className="font-display text-5xl text-primary">70мл</span>
          <span className="text-lg text-muted-foreground font-light">OLife раз в день</span>
        </div>
        <p className="text-lg font-light text-green-soft leading-relaxed max-w-2xl">
          Всего один небольшой стакан запускает мощные процессы восстановления организма.
        </p>
      </div>

      {/* Benefits list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-4 transition-all hover:border-primary/40 hover:-translate-y-0.5"
          >
            <span className="text-2xl flex-shrink-0">{b.icon}</span>
            <p className="text-base text-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
