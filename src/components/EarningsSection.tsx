import SectionHeader from "./SectionHeader";
import { Gift, ArrowRight, Heart, Sprout, Sparkles, ClipboardCheck } from "lucide-react";

const EarningsSection = () => {
    return (
        <section id="earnings" className="py-24 lg:py-28 bg-surface border-t border-border">
            <div className="max-w-[1140px] mx-auto px-5 md:px-10">
                <SectionHeader label="Возможности">
                    ЗАРАБОТОК <span className="text-primary text-nowrap">С O’LIFE</span>
                </SectionHeader>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-2xl font-display text-secondary-foreground tracking-wide mb-6">
                            Путь с заботой о людях и о себе
                        </h3>

                        <p className="text-lg font-light text-muted-foreground leading-relaxed">
                            Когда-то я даже не думала, что буду развиваться в этом направлении. У меня были сомнения и предрассудки о сетевом бизнесе. Но всё изменилось, когда в моей жизни появился продукт O’Life и я увидела реальные изменения у себя и близких.
                        </p>

                        <p className="text-lg font-light text-muted-foreground leading-relaxed">
                            Я просто начала делиться своим опытом — искренне и по-доброму. Так шаг за шагом пришло понимание, что здесь можно не только помогать людям, но и создавать достойный доход.
                        </p>

                        <p className="text-lg font-light text-muted-foreground leading-relaxed">
                            В нашем бизнесе нет принуждения и обязательств — мы просто делимся информацией и личным опытом. Не гонимся только за прибылью, а делимся ценным. Для меня это не просто работа — это возможность быть полезной, расти самой и видеть, как меняется жизнь других людей.
                        </p>

                        <div className="pt-8">
                            <div className="p-8 rounded-2xl bg-surface-2 border border-primary/20 shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Gift size={80} className="text-primary" />
                                </div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                        <Gift size={14} />
                                        Подарок для вас
                                    </div>

                                    <h4 className="text-xl font-display text-secondary-foreground mb-4">
                                        Бесплатная 20-минутная консультация
                                    </h4>

                                    <p className="text-muted-foreground mb-8 font-light">
                                        Я хочу поддержать вас в первых шагах, поэтому дарю бесплатную личную консультацию.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h5 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">На ней вы сможете:</h5>
                                            <ul className="space-y-3">
                                                {[
                                                    { icon: <Heart size={16} />, text: "Задать любые вопросы" },
                                                    { icon: <Sprout size={16} />, text: "Понять, с чего начать" },
                                                    { icon: <Sparkles size={16} />, text: "Выбрать формат для себя" },
                                                    { icon: <ClipboardCheck size={16} />, text: "Разобраться в выгоде" },
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                                                        <span className="text-primary">{item.icon}</span>
                                                        {item.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Записывайтесь, если вы:</h5>
                                            <ul className="space-y-3 text-sm text-secondary-foreground/80">
                                                <li className="flex gap-2">
                                                    <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
                                                    Хотите сделать первый заказ
                                                </li>
                                                <li className="flex gap-2">
                                                    <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
                                                    Ищете дополнительный доход
                                                </li>
                                                <li className="flex gap-2">
                                                    <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
                                                    Хотите узнать о бизнесе
                                                </li>
                                                <li className="flex gap-2">
                                                    <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
                                                    Чувствуете желание расти
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <a
                                            href="https://t.me/oksanao_life"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 w-full justify-center md:w-auto px-8 py-4 rounded bg-primary text-primary-foreground font-bold text-xs tracking-[2px] uppercase hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,124,30,.35)] transition-all"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.24.24-.48.24l.195-2.84 5.17-4.67c.223-.19-.054-.297-.356-.1l-6.39 4.02-2.76-.86c-.6-.18-.61-.6.12-.89l10.79-4.16c.5-.18.93.11.77.89z" />
                                            </svg>
                                            Написать мне и записаться
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-colors" />
                            <div className="relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-xl">
                                <blockquote className="text-xl font-light italic leading-relaxed text-secondary-foreground/90">
                                    "Для меня это не просто работа — это возможность быть полезной, расти самой и видеть, как меняется жизнь других людей. Я буду рада познакомиться с вами и помочь сделать первый шаг. Будем расти вместе 🌿"
                                </blockquote>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-xl">
                                        О
                                    </div>
                                    <div>
                                        <div className="font-bold text-secondary-foreground uppercase tracking-wider text-sm">Оксана Токаренко</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-[2px]">Партнёр Evergreen Life</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarningsSection;
