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
            OLife — это уникальный напиток на основе водного экстракта оливковых листьев, созданный итальянской компанией Evergreen Life Products. Он содержит более 260 молекул в биодоступной форме.
          </p>
          <p className="text-lg font-light text-green-soft leading-relaxed">
            Продукт прошёл клинические исследования и получил научный патент. Это не БАД и не лекарство — это функциональный продукт питания, созданный самой природой.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="font-display text-2xl tracking-[2px] text-secondary-foreground mb-5">СОСТАВ</h3>
          {[
            "Олеуропеин — мощный природный антиоксидант",
            "Гидрокситирозол — защита клеток от окислительного стресса",
            "Тирозол — поддержка сердечно-сосудистой системы",
            "Рутин — укрепление стенок сосудов",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start py-2.5 border-b border-border last:border-none text-green-soft leading-relaxed">
              <span className="text-primary flex-shrink-0 mt-0.5">▸</span>
              {item}
            </div>
          ))}
          <div className="mt-4 bg-olive/10 border border-border rounded-lg px-4 py-3 text-sm text-olive-light leading-relaxed">
            🏅 Сертифицировано в Европе. Без ГМО, без глютена, без сахара.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatSection;
