import bottleImg from "@/assets/olife-bottle.jpg";

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
            Независимый партнёр Evergreen Life Products
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

          <div className="animate-fade-up-2 flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2.5 bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-olive-light">
              <span>🔬</span>
              ПРОШЁЛ КЛИНИЧЕСКИЕ ИСПЫТАНИЯ
            </div>
            <div className="inline-flex items-center gap-2.5 bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-olive-light">
              <span>🏛️</span>
              ОДОБРЕН МИНИСТЕРСТВОМ ЗДРАВООХРАНЕНИЯ
            </div>
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
            <a href="https://evergreenlife.io/oksanatokarenko" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-primary text-primary-foreground font-bold text-xs tracking-[2px] uppercase hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,124,30,.35)] transition-all">
              🛒 Заказать OLife
            </a>
            <a href="https://t.me/oksanao_life" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded border border-border text-olive-light font-bold text-xs tracking-[2px] uppercase hover:border-olive-light hover:bg-olive/10 transition-all" title="Написать в Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.24.24-.48.24l.195-2.84 5.17-4.67c.223-.19-.054-.297-.356-.1l-6.39 4.02-2.76-.86c-.6-.18-.61-.6.12-.89l10.79-4.16c.5-.18.93.11.77.89z" />
              </svg>
              Telegram
            </a>
            <a href="https://vk.com/id199239124" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded border border-border text-olive-light font-bold text-xs tracking-[2px] uppercase hover:border-olive-light hover:bg-olive/10 transition-all" title="VK">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M23.45 5.948c.166-.546 0-.948-.795-.948h-2.625c-.668 0-.976.347-1.14.73 0 0-1.336 3.248-3.233 5.353-.612.612-.89.807-1.223.807-.166 0-.41-.195-.41-.755V5.948c0-.668-.195-.948-.75-.948H9.035c-.417 0-.668.31-.668.604 0 .634.948.78 1.045 2.56v3.867c0 .846-.153.998-.487.998-.89 0-3.055-3.263-4.338-7.003-.25-.724-.5-1.025-1.171-1.025H.79c-.75 0-.9.347-.9.73 0 .685.89 4.07 4.14 8.628 2.17 3.055 5.23 4.71 8.01 4.71 1.67 0 1.875-.375 1.875-1.02V15.02c0-.75.16-1 .694-1 .4 0 1.085.2 2.68 1.737 1.833 1.833 2.134 2.65 3.16 2.65H23.06c.75 0 1.125-.375.91-1.117-.233-.734-1.08-1.8-2.205-3.046-.612-.71-1.53-1.475-1.81-1.868-.39-.494-.28-.71 0-1.15 0 0 3.233-4.524 3.565-5.99z" />
              </svg>
              VK
            </a>
          </div>

          <div className="animate-fade-up-3 mt-6">
            <a href="tel:+79216915231" className="inline-flex items-center gap-2 text-lg font-bold text-secondary-foreground hover:text-primary transition-colors tracking-wider">
              📞 8-921-691-52-31
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
