import {
  Atom,
  Layout,
  Server,
  ServerOff,
  Database,
  Network,
  GitBranch,
  Box,
  Palette,
  Zap,
  Boxes,
  Github,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  react: Atom,
  typescript: Boxes,
  framework: Layout,
  layout: Layout,
  server: Server,
  "server-off": ServerOff,
  database: Database,
  network: Network,
  "git-branch": GitBranch,
  box: Box,
  palette: Palette,
  zap: Zap,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container mx-auto">
        <div className="reveal mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">
              <span className="h-px w-6 bg-accent-500" />
              /* 02. My Skills */
            </p>
            <h2 className="section-heading">
              The <span className="gradient-text">superpowers</span> I bring to
              the table.
            </h2>
            <p className="text-dark-300">
              The tools, languages, and frameworks I play with to build my web projects.
            </p>
          </div>
          <div className="hidden font-mono text-xs text-dark-500 md:block">
            <p>
              <span className="text-primary-400">// </span>
              sorted by muscle memory
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="reveal card-surface p-6 sm:p-7"
              data-delay={String(gi * 120)}
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-accent-400">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent-500 shadow-glow-orange" />
                  {group.category}
                </h3>
                <span className="rounded-full border border-white/10 bg-dark-800/70 px-2 py-0.5 font-mono text-[10px] text-dark-400">
                  {group.items.length}/libs
                </span>
              </div>

              <ul className="reveal-group space-y-4">
                {group.items.map((skill) => {
                  const Icon = iconMap[skill.icon] ?? Zap;
                  const accent =
                    gi % 2 === 0
                      ? "text-primary-400"
                      : "text-accent-400";
                  const accentBg =
                    gi % 2 === 0
                      ? "bg-primary-500/15 border-primary-500/30"
                      : "bg-accent-500/15 border-accent-500/30";
                  return (
                    <li
                      key={skill.name}
                      className="reveal group rounded-xl border border-white/5 bg-dark-900/40 p-3 transition hover:-translate-y-0.5 hover:border-primary-500/40 hover:bg-dark-900"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-xl border ${accentBg}`}
                        >
                          <Icon size={18} className={accent} />
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-dark-100 group-hover:text-white">
                              {skill.name}
                            </p>
                            <p className="font-mono text-xs text-dark-400">
                              {skill.level}%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-dark-700/70">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background:
                              gi % 2 === 0
                                ? "linear-gradient(90deg,#6b21a8,#9333ea,#c084fc)"
                                : "linear-gradient(90deg,#c2410c,#f97316,#fb923c)",
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
