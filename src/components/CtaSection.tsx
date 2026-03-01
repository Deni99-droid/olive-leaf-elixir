const CtaSection = () => (
  <section id="cta" className="relative py-28 px-10 text-center overflow-hidden border-t border-border bg-surface-3">
    {/* Giant watermark */}
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[300px] text-olive/5 whitespace-nowrap pointer-events-none tracking-[20px]">
      OLIFE
    </span>

    <h2 className="relative font-display text-[clamp(48px,6vw,90px)] text-secondary-foreground tracking-[3px] mb-4">
      НАЧНИТЕ <span className="text-primary">СЕГОДНЯ</span>
    </h2>
    <p className="relative text-lg font-light text-muted-foreground max-w-[500px] mx-auto mb-11 leading-relaxed">
      Закажите OLife и почувствуйте разницу. Натуральная сила оливкового листа для вашего здоровья.
    </p>
    <div className="relative flex gap-4 justify-center flex-wrap">
      <a href="https://evergreenlife.io/oksanatokarenko" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-primary text-primary-foreground font-bold text-xs tracking-[2px] uppercase hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,124,30,.35)] transition-all">
        🛒 Заказать OLife
      </a>
      <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-border text-olive-light font-bold text-xs tracking-[2px] uppercase hover:border-olive-light hover:bg-olive/10 transition-all">
        Связаться с Оксаной
      </a>
    </div>
  </section>
);

export default CtaSection;
