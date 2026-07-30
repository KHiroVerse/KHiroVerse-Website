import { Rocket, Coffee, Code2, Cpu } from "lucide-react";
import { bio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container mx-auto">
        <div className="reveal mb-12 max-w-2xl">
          <p className="section-eyebrow">
            <span className="h-px w-6 bg-accent-500" />
            /* 01. About Me */
          </p>
          <h2 className="section-heading">
            The <span className="gradient-text">story</span> behind the screen.
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Avatar / decorative */}
          <div className="reveal reveal-group order-2 lg:order-1" data-delay="100">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-hero opacity-20 blur-2xl" />
              <div className="card-surface relative p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 flex items-center gap-4 rounded-2xl border border-white/5 bg-dark-900/60 p-4">
                    <div className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-hero text-3xl font-black text-dark-950 shadow-glow">
                      {bio.name.charAt(0)}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_55%)]" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-dark-400">
                        profile.ts
                      </p>
                      <p className="text-lg font-bold text-white">{bio.name}</p>
                      <div className="mt-1 flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                        </span>
                        <span className="text-xs font-medium text-dark-300">
                          Learning & experimenting
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary-500/20 bg-primary-900/20 p-4 transition hover:-translate-y-1 hover:border-primary-500/50">
                    <Rocket className="mb-2 text-primary-400" size={22} />
                    <p className="text-sm font-semibold text-white">Location</p>
                    <p className="text-xs text-dark-300">Somewhere on earth 🌍</p>
                  </div>
                  <div className="rounded-2xl border border-accent-500/20 bg-accent-900/20 p-4 transition hover:-translate-y-1 hover:border-accent-500/50">
                    <Coffee className="mb-2 text-accent-400" size={22} />
                    <p className="text-sm font-semibold text-white">Fuel</p>
                    <p className="text-xs text-dark-300">Music + Curiosity</p>
                  </div>
                  <div className="rounded-2xl border border-primary-500/20 bg-primary-900/20 p-4 transition hover:-translate-y-1 hover:border-primary-500/50">
                    <Code2 className="mb-2 text-primary-300" size={22} />
                    <p className="text-sm font-semibold text-white">Stack</p>
                    <p className="text-xs text-dark-300">React · TS · Tailwind</p>
                  </div>
                  <div className="rounded-2xl border border-accent-500/20 bg-accent-900/20 p-4 transition hover:-translate-y-1 hover:border-accent-500/50">
                    <Cpu className="mb-2 text-accent-300" size={22} />
                    <p className="text-sm font-semibold text-white">Vibe</p>
                    <p className="text-xs text-dark-300">Curious + playful</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio text terminal */}
          <div className="reveal order-1 lg:order-2" data-delay="200">
            <div className="terminal-window overflow-hidden">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500/90" />
                <span className="terminal-dot bg-yellow-500/90" />
                <span className="terminal-dot bg-green-500/90" />
                <span className="ml-2 truncate font-mono text-xs text-dark-400">
                  about.md
                </span>
              </div>
              <div className="code-block space-y-4 p-6 text-dark-200 sm:p-8">
                <p>
                  <span className="text-primary-400">const</span>{" "}
                  <span className="text-accent-300">me</span> = {"{"}
                </p>
                <div className="pl-6">
                  <p>
                    <span className="text-primary-300">name</span>:{" "}
                    <span className="text-green-300">&quot;{bio.name}&quot;</span>,
                  </p>
                  <p>
                    <span className="text-primary-300">role</span>:{" "}
                    <span className="text-green-300">
                      &quot;Self-Taught Developer&quot;
                    </span>
                    ,
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-primary-300">bio</span>:{" "}
                    <span className="text-green-300">&quot;{bio.intro}&quot;</span>
                    ,
                  </p>
                  <p>
                    <span className="text-primary-300">funFacts</span>: [
                  </p>
                  <ul className="pl-6">
                    {bio.funFacts.map((f, i) => (
                      <li key={f}>
                        <span className="text-green-300">&quot;{f}&quot;</span>
                        {i < bio.funFacts.length - 1 ? "," : ""}
                      </li>
                    ))}
                  </ul>
                  <p>]</p>
                </div>
                <p>{"}"};</p>
                <p className="pt-2 text-dark-400">
                  <span className="text-dark-500">// outputs:</span>{" "}
                  <span className="text-accent-400">a creator who builds for the fun of it</span> ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
