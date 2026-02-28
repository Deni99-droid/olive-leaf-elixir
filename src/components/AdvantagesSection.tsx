import SectionHeader from "./SectionHeader";

const advantages = [
  { title: "100% натуральный", desc: "Никакой химии — только экстракт оливкового листа" },
  { title: "Научный патент", desc: "Уникальная технология экстракции, подтверждённая патентом" },
  { title: "Клинические исследования", desc: "9+ лет научных исследований и испытаний" },
  { title: "Сертификация", desc: "Европейские сертификаты качества и безопасности" },
  { title: "Для всей семьи", desc: "Подходит взрослым и детям от 3 лет" },
  { title: "Итальянское качество", desc: "Произведено в Италии из отборного сырья" },
];

const AdvantagesSection = () => (
  <section className="py-24 lg:py-28 bg-surface-2 border-y border-border">
    <div className="max-w-[1140px] mx-auto px-5 md:px-10">
      <SectionHeader label="Преимущества">
        ПОЧЕМУ <span className="text-primary">OLIFE</span>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 border border-border rounded-xl overflow-hidden mt-12">
        {advantages.map((a, i) => (
          <div
            key={a.title}
            className="flex gap-5 items-start p-7 border-b border-r border-border hover:bg-olive/5 transition-colors"
          >
            <span className="font-display text-5xl text-primary/30 leading-none flex-shrink-0 w-[52px] text-right">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <strong className="block text-[17px] font-bold text-secondary-foreground mb-1">{a.title}</strong>
              <span className="text-[15px] font-light text-muted-foreground leading-relaxed">{a.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
