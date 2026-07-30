import { Code2, Heart } from "lucide-react";
import { footerQuote, navLinks, socials } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-12 border-t border-white/5 bg-dark-950/80">
      <div className="container mx-auto py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="group flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-hero text-dark-950 shadow-glow transition group-hover:rotate-6">
                <Code2 size={20} strokeWidth={2.5} />
              </span>
              <span className="font-mono text-lg font-bold tracking-tight">
                <span className="gradient-text">KHiro</span>
                <span className="text-accent-400">Verse</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-dark-400">
              Crafted with code, color, and a little chaos. Building web stuff line by line.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-400">
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-1 text-dark-300 transition hover:text-primary-300"
                  >
                    <span className="text-primary-500">›</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-400">
              Handcrafted
            </h4>
            <p className="font-mono text-xs leading-relaxed text-dark-400">
              {footerQuote}
            </p>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-dark-400">
              Built with
              <span className="inline-flex items-center text-primary-400">
                React
              </span>
              +
              <span className="text-accent-400">Tailwind</span>
              <Heart
                size={12}
                className="ml-1 fill-accent-500 text-accent-500"
              />
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-dark-900/60 text-dark-300 transition hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-300"
                >
                  <span className="font-mono text-[11px] font-bold">
                    {s.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-dark-500 sm:flex-row">
          <p>
            © {year} KHiroVerse. If anything <span className="font-mono text-accent-400">breaks</span>, refresh the page and pretend you saw
            <span className="font-mono text-accent-400"> nothing</span>.
          </p>
          <p className="font-mono text-[11px] text-dark-600">
            v1.0.0 · last deploy: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </footer>
  );  
}
