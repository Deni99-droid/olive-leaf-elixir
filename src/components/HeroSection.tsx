import bottleImg from "@/assets/olife-bottle.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_60%_40%,hsl(110_40%_15%),hsl(var(--background))_70%)]" />
      
      {/* Grid lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(106,158,56,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(106,158,56,.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen px-6 md:px-20 gap-10 lg:gap-16">
        {/* Left */}
        <div className="py-24 lg:py-28">
          <div className="animate-fade-up inline-flex items-center gap-2.5 text-xs font-bold tracking-[4px] uppercase text-primary mb-7">
            <span className="block w-8 h-0.5 bg-primary" />
            Независимый партнёр OLife
          </div>

          {/* Ticker */}
          <div className="animate-fade-up flex gap-8 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl text-primary">10</span>
              <div>
                <div className="text-sm font-bold text-secondary-foreground tracking-wide">ЛЕТ В РОССИИ</div>
                <div className="text-xs text-muted-foreground">Десять лет вместе — это только начало!</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇹</span>
              <div>
                <div className="text-sm font-bold text-secondary-foreground tracking-wide">ИТАЛЬЯНСКАЯ КОМПАНИЯ</div>
                <div className="text-xs text-muted-foreground">15 лет на рынке</div>
              </div>
            </div>
          </div>

          <h1 className="animate-fade-up-1 font-display text-[clamp(70px,8vw,120px)] leading-[0.95] text-secondary-foreground tracking-wide">
            СИЛА<br />ПРИРОДЫ<br />В КАЖДОМ<br />
            <span className="text-primary">ГЛОТКЕ</span>
          </h1>

          <p className="animate-fade-up-2 text-lg font-light text-muted-foreground leading-relaxed mt-7 mb-10 max-w-[440px]">
            Уникальная научно запатентованная продукция на основе экстракта оливкового листа — для энергии, иммунитета и здоровья всей семьи.
          </p>

          <div className="animate-fade-up-2 inline-flex items-center gap-2.5 bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-olive-light mb-8">
            <span>🔬</span>
            ПРОШЁЛ КЛИНИЧЕСКИЕ ИСПЫТАНИЯ
          </div>

          {/* Stats */}
          <div className="animate-fade-up-3 grid grid-cols-3 gap-4 mb-10 max-w-md">
            {[
              { num: "9+", label: "ЛЕТ ИССЛЕДОВАНИЙ" },
              { num: "~100", label: "БИОХИМИЧЕСКИХ ПРОЦЕССОВ" },
              { num: "260+", label: "МОЛЕКУЛ В УСВОЯЕМОЙ ФОРМЕ" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl text-primary">{s.num}</div>
                <div className="text-[10px] tracking-wider text-muted-foreground mt-1 uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="animate-fade-up-3 flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-primary text-primary-foreground font-bold text-xs tracking-[2px] uppercase hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,124,30,.35)] transition-all">
              🛒 Заказать OLife
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-border text-olive-light font-bold text-xs tracking-[2px] uppercase hover:border-olive-light hover:bg-olive/10 transition-all">
              Узнать больше
            </a>
          </div>
        </div>

        {/* Right — bottle */}
        <div className="hidden lg:flex justify-center items-center py-20 animate-fade-up-5">
          <div className="relative">
            <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--olive)/.25),transparent_70%)] rounded-full animate-pulse-glow" />
            <img
              src={bottleImg}
              alt="OLife — экстракт оливкового листа"
              className="w-[min(400px,45vw)] rounded-2xl relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute bottom-8 -right-5 bg-primary text-primary-foreground font-display text-xs tracking-[2px] px-4 py-2 rounded z-20 shadow-[0_8px_24px_rgba(232,124,30,.4)]">
              MADE IN ITALY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
