const Footer = () => (
  <footer className="bg-background border-t border-border py-8 px-10 text-center">
    <p className="text-sm text-foreground/25 leading-8">
      © 2025 Токаренко Оксана — независимый партнёр{" "}
      <a href="https://evergreenlife.io/oksanatokarenko" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Evergreen Life Products</a>
      <br />
      <div className="flex justify-center gap-6 mt-4 mb-4">
        <a href="https://t.me/oksanao_life" target="_blank" rel="noopener noreferrer" className="text-olive-light hover:text-primary transition-colors font-bold text-xs tracking-widest uppercase flex items-center gap-2">
          Telegram
        </a>
        <a href="https://vk.com/id199239124" target="_blank" rel="noopener noreferrer" className="text-olive-light hover:text-primary transition-colors font-bold text-xs tracking-widest uppercase flex items-center gap-2">
          VK
        </a>
        <a href="tel:+79216915231" className="text-olive-light hover:text-primary transition-colors font-bold text-xs tracking-widest uppercase flex items-center gap-2">
          📞 8-921-691-52-31
        </a>
      </div>
      Продукт не является лекарственным средством. Перед применением проконсультируйтесь со специалистом.
    </p>
  </footer>
);

export default Footer;
