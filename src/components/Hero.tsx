import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Github, Sparkles, TerminalSquare, X } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { bio, typewriterRoles } from "@/data/portfolio";

type Particle = {
  id: number;
  emoji: string;
  x: number;
  y: number;
  angle: number;
  distance: number;
  delay: number;
  duration: number;
};

const EMOJIS = ["💻", "⚡", "🚀", "✨", "🦄", "🌈", "🔥", "🪐", "🎮", "☕", "🧠", "🎨"];

const SECRET_LINES = [
  { prompt: true, text: "sudo unlock --easter-egg" },
  { text: "🔓 Access granted: you found the secret terminal!", delay: 260 },
  { prompt: true, text: "fortune --developer", delay: 260 },
  {
    text: '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
    delay: 260,
  },
  { prompt: true, text: "cowsay 'Thanks for clicking!'", delay: 260 },
  { text: " ___________________________", mono: true, delay: 120 },
  { text: "< Thanks for clicking! 🎉 >", mono: true },
  { text: " ---------------------------", mono: true },
  { text: "        \\   ^__^", mono: true },
  { text: "         \\  (oo)\\_______", mono: true },
  { text: "            (__)\\       )\\/\\", mono: true },
  { text: "                ||----w |", mono: true },
  { text: "                ||     ||", mono: true },
  { prompt: true, text: "neofetch --short", delay: 260 },
  {
    text: "KHiroVerse-OS · kernel v1.0.0 · mood: playful · caffeine: 92% · bugs: 0 (allegedly)",
    delay: 260,
  },
  { prompt: true, text: "", delay: 260, class: "cursor-blink" },
];

export default function Hero() {
  const typed = useTypewriter(typewriterRoles);
  const [eggs, setEggs] = useState(0);
  const [eggTriggered, setEggTriggered] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!showSecret) return;
    if (visibleLines >= SECRET_LINES.length) return;
    const prev = SECRET_LINES[visibleLines - 1];
    const current = SECRET_LINES[visibleLines];
    const wait =
      current?.delay ?? (prev?.mono ? 40 : prev ? 180 : 0);
    const t = setTimeout(() => setVisibleLines((v) => v + 1), wait);
    return () => clearTimeout(t);
  }, [showSecret, visibleLines]);

  useEffect(() => {
    if (!eggTriggered) return;
    if (eggs >= 3) {
      setShowSecret(true);
      setEggTriggered(false);
    }
    const t = setTimeout(() => setEggTriggered(false), 2200);
    return () => clearTimeout(t);
  }, [eggTriggered, eggs]);

  const spawnParticles = (rect: DOMRect) => {
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    const count = 24;
    const batch: Particle[] = Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
      const distance = 110 + Math.random() * 150;
      return {
        id: Date.now() + i + Math.random(),
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        x: originX,
        y: originY,
        angle,
        distance,
        delay: Math.random() * 60,
        duration: 900 + Math.random() * 600,
      };
    });
    setParticles((prev) => [...prev, ...batch]);
    setTimeout(
      () =>
        setParticles((prev) =>
          prev.filter((p) => !batch.find((b) => b.id === p.id)),
        ),
      1800,
    );
  };

  const logConsoleEgg = useMemo(
    () => () => {
      const styleHeader =
        "font-family:JetBrains Mono,monospace;font-size:14px;font-weight:bold;color:#c084fc;";
      const styleBody =
        "font-family:Figtree,sans-serif;font-size:12px;color:#d4d4d8;line-height:1.6;";
      const styleAccent =
        "color:#fb923c;font-weight:600;font-family:JetBrains Mono,monospace;";
      // eslint-disable-next-line no-console
      console.clear();
      // eslint-disable-next-line no-console
      console.log("%c 🔓 SECRET UNLOCKED", styleHeader);
      // eslint-disable-next-line no-console
      console.log(
        "%cYou found the hidden easter egg by clicking the giant spinning TerminalSquare icon. Nice one, curious dev 🧠✨",
        styleBody,
      );
      // eslint-disable-next-line no-console
      console.log(
        "%cQuick tip:%c click the icon %c3 times%c in a row for the full secret terminal.",
        styleBody,
        "",
        styleAccent,
        styleBody,
      );
      // eslint-disable-next-line no-console
      console.log("%c\n  pssst… try these commands in your head:\n", styleBody);
      [
        "help — show this message again",
        "about — prints the site owner bio",
        "sudo party_mode on — toggle 🎊",
        "coffee --refill — self-explanatory ☕",
      ].forEach((c) =>
        // eslint-disable-next-line no-console
        console.log("    %c$ %c%s", styleAccent, styleBody, c),
      );
    },
    [],
  );

  const handleTerminalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spawnParticles(rect);
    setEggs((prev) => (prev + 1) % 10);
    setEggTriggered(true);
    logConsoleEgg();
  };

  const closeSecret = () => {
    setShowSecret(false);
    setVisibleLines(0);
    setEggs(0);
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />

      <div className="container mx-auto">
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Text */}
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-600/30 bg-primary-900/20 px-4 py-1.5 text-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-accent-400" />
              <span className="font-mono text-primary-200">
                Learning Database & Backend
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              <span className="block text-dark-50">Hi, I&apos;m </span>
              <span className="gradient-text inline-block">{bio.name}</span>
              <span className="text-accent-500">.</span>
            </h1>

            <div className="mt-6 flex items-center gap-3 text-xl font-semibold text-dark-100 sm:text-2xl">
              <span className="text-dark-400">I&apos;m a </span>
              <div className="relative min-w-[10ch]">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text font-mono text-transparent">
                  {typed}
                </span>
                <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 rounded-sm bg-accent-400 animate-blink sm:h-7" />
              </div>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dark-300">
              {bio.tagline} I blend code, color, and a little chaos to build
              interfaces that feel as fun as they are fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary group">
                View my projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a href="https://github.com/KHiroVerse" className="btn-ghost">
                <Github size={18} />
                My GitHub
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-dark-400">
              <div>
                <p className="font-mono text-2xl font-bold text-primary-400">
                  2+
                </p>
                <p className="uppercase tracking-widest">Years coding</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-mono text-2xl font-bold text-accent-400">
                  5+
                </p>
                <p className="uppercase tracking-widest">Projects</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-mono text-2xl font-bold text-primary-300">
                  5+
                </p>
                <p className="uppercase tracking-widest">Tech stacks tried</p>
              </div>
            </div>
          </div>

          {/* Right: Terminal card */}
          <div className="reveal" data-delay="200">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-30 blur-2xl" />
              <div className="terminal-window relative animate-float">
                <div className="terminal-header">
                  <span className="terminal-dot bg-red-500/90" />
                  <span className="terminal-dot bg-yellow-500/90" />
                  <span className="terminal-dot bg-green-500/90" />
                  <span className="ml-2 truncate font-mono text-xs text-dark-400">
                    ~/khiroverse/portfolio — zsh
                  </span>
                </div>
                <div className="code-block space-y-2 p-5 text-dark-200">
                  <p>
                    <span className="text-primary-400">$</span>{" "}
                    <span className="text-dark-400">whoami</span>
                  </p>
                  <p className="text-dark-50">{bio.name} — self-taught dev</p>
                  <p>
                    <span className="text-primary-400">$</span>{" "}
                    <span className="text-dark-400">cat /etc/passions</span>
                  </p>
                  <ul className="pl-1 text-dark-100">
                    <li>
                      <span className="text-accent-400">•</span> turning random ideas into code
                    </li>
                    <li>
                      <span className="text-accent-400">•</span> learning new tech stacks
                    </li>
                    <li>
                      <span className="text-accent-400">•</span> crafting colorful & fast UI
                    </li>
                    <li>
                      <span className="text-accent-400">•</span> coding just for
                      <span className="text-primary-300"> for</span> the fun of it
                    </li>
                  </ul>
                  <p className="pt-1">
                    <span className="text-primary-400">$</span>{" "}
                    <span className="animate-blink text-dark-300">▊</span>
                  </p>
                </div>
              </div>

              <div className="absolute -right-2 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 opacity-70 blur-xl animate-float-slow" />
              <div className="absolute -left-3 bottom-4 h-14 w-14 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 opacity-70 blur-xl animate-float" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-28 z-10 hidden -translate-x-1/2 lg:block">
        <button
          type="button"
          onClick={handleTerminalClick}
          aria-label="Surprise! Click me..."
          title="Try clicking this a few times 😉"
          className={[
            "group relative grid h-[160px] w-[160px] place-items-center rounded-full transition-transform active:scale-95",
            eggTriggered ? "animate-pulse-glow" : "",
          ].join(" ")}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-hero opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />
          <TerminalSquare
            className={[
              "transition-all duration-300 group-hover:text-primary-400/80 group-hover:drop-shadow-[0_0_14px_rgba(147,51,234,0.55)]",
              eggTriggered ? "text-accent-400/80 scale-110" : "text-primary-400/30",
            ].join(" ")}
            size={140}
            strokeWidth={1.2}
            style={{
              animation: `spin-slow ${eggTriggered ? "1.2s" : "18s"} linear infinite`,
            }}
          />
          <span className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary-500/40 bg-dark-950/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary-300 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            click me · {eggs}/3
          </span>
        </button>
      </div>

      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none fixed z-[100] select-none text-2xl"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%,-50%)",
            animation: `egg-burst ${p.duration}ms cubic-bezier(.15,.8,.25,1) ${p.delay}ms both`,
            // inline CSS vars for keyframe target (used in index.css keyframes)
            ["--egg-angle" as string]: `${p.angle}rad`,
            ["--egg-dist" as string]: `${p.distance}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}

      {showSecret && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-[fadeIn_.25s_ease-out]"
          onClick={closeSecret}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="terminal-window w-full max-w-2xl scale-100 animate-[popIn_.35s_cubic-bezier(.2,.8,.2,1)_both] shadow-[0_30px_120px_-20px_rgba(147,51,234,0.55)]"
          >
            <div className="terminal-header">
              <span className="terminal-dot bg-red-500/90" />
              <span className="terminal-dot bg-yellow-500/90" />
              <span className="terminal-dot bg-green-500/90" />
              <span className="ml-2 truncate font-mono text-xs text-dark-400">
                🕵️ ~/.secret/unlocked.sh — sudo mode
              </span>
              <div className="ml-auto">
                <button
                  type="button"
                  onClick={closeSecret}
                  aria-label="Close secret terminal"
                  className="grid h-7 w-7 place-items-center rounded-md transition hover:bg-white/10 hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            <div className="code-block max-h-[60vh] space-y-1 overflow-y-auto p-5 text-sm text-dark-200 sm:p-6">
              {SECRET_LINES.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className={[
                    "animate-[lineIn_.3s_ease-out_both]",
                    line.mono ? "whitespace-pre text-dark-300" : "",
                    line.class ?? "",
                  ].join(" ")}
                  style={{ animationDelay: "10ms" }}
                >
                  {line.prompt ? (
                    <p className="flex items-start gap-2">
                      <span className="text-primary-400">$</span>
                      <span className="text-accent-300">{line.text}</span>
                      {i === SECRET_LINES.length - 1 && line.text === "" ? (
                        <span className="inline-block h-[1.1em] w-[2px] translate-y-1 animate-blink rounded-sm bg-accent-400" />
                      ) : null}
                    </p>
                  ) : (
                    <p>{line.text}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 bg-dark-800/50 px-4 py-3 text-xs text-dark-400">
              <span className="font-mono">
                ✨ achievement unlocked:{" "}
                <span className="text-accent-300">curious_clicker</span>
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setVisibleLines(0);
                    setTimeout(() => setVisibleLines(1), 50);
                  }}
                  className="rounded-lg border border-white/10 bg-dark-900/70 px-3 py-1.5 font-mono text-[11px] transition hover:border-primary-500/60 hover:text-primary-300"
                >
                  ⟲ replay
                </button>
                <button
                  type="button"
                  onClick={closeSecret}
                  className="rounded-lg bg-gradient-btn px-3 py-1.5 font-mono text-[11px] font-semibold text-white shadow-glow-btn transition hover:-translate-y-0.5"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
