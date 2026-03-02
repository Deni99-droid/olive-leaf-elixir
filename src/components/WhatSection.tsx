import SectionHeader from "./SectionHeader";
import olifeGrass from "@/assets/olife-grass.jpg";

const WhatSection = () => (
  <section id="about" className="py-24 lg:py-28">
    <div className="max-w-[1140px] mx-auto px-5 md:px-10">
      <SectionHeader label="Что такое OLife">
        ЭКСТРАКТ ОЛИВКОВОГО<br /><span className="text-primary">ЛИСТА</span>
      </SectionHeader>

      <img
        src={olifeGrass}
        alt="Бутылка OLife на зелёной траве"
        className="w-full max-h-[420px] object-cover rounded-2xl border border-border shadow-[0_24px_60px_rgba(0,0,0,0.5)] mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg font-light text-green-soft leading-relaxed mb-5">
            Олайф — это 100% натуральный водный экстракт оливковых ЛИСТЬЕВ из Италии. Это не масло и не вытяжка из оливок, а уникальный терапевтический напиток доказательной медицины.
          </p>
          <p className="text-lg font-light text-green-soft leading-relaxed mb-6">
            Содержит более 260 биодоступных молекул, включая <strong>Олеуропеин</strong> и <strong>Гидрокситирозол</strong> — самый мощный антиэйдж компонент в мире.
          </p>

          <ul className="space-y-3">
            {[
              "Антивирусное, антибактериальное и антипаразитарное средство",
              "Природный антидепрессант",
              "Без противопоказаний и возрастных ограничений",
              "Запатентован, сертифицирован и одобрен Минздравом",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start text-green-soft leading-relaxed">
                <span className="text-primary flex-shrink-0 mt-1">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <h3 className="font-display text-2xl tracking-[2px] text-secondary-foreground mb-5 uppercase">СОСТАВ</h3>
          {[
            "93% — Экстракт оливковых листьев",
            "7% — Экстракты календулы, рябины и лимона",
            "Олеуропеин — антиоксидант и защита сердца",
            "Гидрокситирозол — молекула молодости и красоты",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start py-3 border-b border-border last:border-none text-green-soft leading-relaxed">
              <span className="text-primary flex-shrink-0 mt-0.5">▸</span>
              {item}
            </div>
          ))}
          <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-sm text-olive-light leading-relaxed">
            🌿 100% натуральный продукт. Одобрен Министерством здравоохранения.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatSection;
