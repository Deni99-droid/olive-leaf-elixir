import SectionHeader from "./SectionHeader";
import oksanaImg from "@/assets/oksana.png";

const OksanaSection = () => (
  <section className="py-24 lg:py-28 bg-surface-2 border-t border-border">
    <div className="max-w-[1140px] mx-auto px-5 md:px-10">
      <SectionHeader label="О партнёре">
        ТОКАРЕНКО <span className="text-primary">ОКСАНА</span>
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <img
          src={oksanaImg}
          alt="Токаренко Оксана — независимый партнёр OLife"
          className="w-full rounded-2xl border border-border shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
        />
        <div>
          <p className="text-lg font-light text-green-soft leading-relaxed mb-5">
            Оксана — независимый партнёр итальянской компании Evergreen Life Products. Более 5 лет помогает людям улучшить качество жизни с помощью натуральной продукции OLife.
          </p>
          <p className="text-lg font-light text-green-soft leading-relaxed mb-5">
            Консультирует по вопросам применения продукции, подбирает индивидуальные программы оздоровления и помогает начать собственный бизнес в партнёрстве с OLife.
          </p>
          <p className="text-lg font-light text-green-soft leading-relaxed">
            «Я верю в силу природы и в продукт, который рекомендую. OLife изменил мою жизнь, и я хочу поделиться этим с вами.»
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OksanaSection;
