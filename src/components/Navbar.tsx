import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-dark-950/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2 rounded-full px-2 py-1 transition-all hover:scale-[1.02]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-hero text-dark-950 shadow-glow transition group-hover:rotate-6">
            <Code2 size={20} strokeWidth={2.5} />
          </span>
          <span className="font-mono text-lg font-bold tracking-tight">
            <span className="gradient-text">KHiro</span>
            <span className="text-accent-400">Verse</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-dark-200 transition hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 z-0 scale-90 rounded-full bg-primary-600/0 transition hover:scale-100 hover:bg-primary-600/15" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary !px-5 !py-2 text-sm">
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-dark-900/60 text-dark-100 transition md:hidden hover:border-primary-500/50 hover:text-primary-300"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-dark-950/95 backdrop-blur-xl md:hidden">
          <ul className="container mx-auto flex flex-col gap-1 py-4">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ animationDelay: `${i * 40}ms` }}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-dark-100 transition hover:bg-primary-600/15 hover:text-primary-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Let&apos;s talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
