const SectionHeader = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-14">
    <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[4px] uppercase text-primary mb-4">
      <span className="block w-6 h-0.5 bg-primary" />
      {label}
    </div>
    <h2 className="font-display text-[clamp(42px,5vw,72px)] text-secondary-foreground leading-none tracking-wide">
      {children}
    </h2>
  </div>
);

export default SectionHeader;
