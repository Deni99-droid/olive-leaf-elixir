import SectionHeader from "./SectionHeader";
import oksanaImg from "@/assets/oksana2.jpg";

const OksanaSection = () => (
  <section className="py-24 lg:py-28 bg-surface-2 border-t border-border">
    <div className="max-w-[1140px] mx-auto px-5 md:px-10">
      <SectionHeader label="О партнёре">
        ТОКАРЕНКО <span className="text-primary">ОКСАНА</span>
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <img
          src={oksanaImg}
          alt="Токаренко Оксана — независимый партнёр Evergreen Life Products"
          className="w-full rounded-2xl border border-border shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
        />
        <div>
          <p className="text-lg font-light text-green-soft leading-relaxed mb-5">
            Я сама попробовала O’Life и была очень удивлена результатом. После долгих поисков решения для здоровья этот продукт стал для меня настоящим открытием, которым я теперь искренне делюсь.
          </p>
          <p className="text-lg font-light text-green-soft leading-relaxed">
            Рада приветствовать вас в моём интернет-магазине! Приглашаю познакомиться с уникальной продукцией O’Life на основе экстракта оливковых листьев — возможно, она станет такой же поддержкой для вашей семьи, как и для моей.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OksanaSection;
