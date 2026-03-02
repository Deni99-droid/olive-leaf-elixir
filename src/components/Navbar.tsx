
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Что это", href: "#about" },
        { name: "Польза", href: "#benefits" },
        { name: "Преимущества", href: "#advantages" },
        { name: "Отзывы", href: "#reviews" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-lg"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-[1240px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="font-display text-2xl tracking-[3px] text-secondary-foreground group-hover:text-primary transition-colors">
                        OLIFE
                    </span>
                    <span className="hidden sm:block w-6 h-px bg-primary/40" />
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold tracking-[2px] uppercase text-olive-light hover:text-primary transition-colors hover:-translate-y-0.5"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <a
                    href="https://evergreenlife.io/oksanatokarenko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-primary-foreground font-bold text-[10px] tracking-[2px] uppercase hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(232,124,30,.3)] transition-all shrink-0"
                >
                    🛒 Заказать
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
