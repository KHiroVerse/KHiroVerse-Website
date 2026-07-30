import { ArrowUpRight, Github, Terminal } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";

const accentGrad: Record<Project["accent"], string> = {
  purple:
    "from-primary-600/40 via-primary-800/10 to-transparent",
  orange:
    "from-accent-600/40 via-accent-800/10 to-transparent",
  mixed:
    "from-primary-600/30 via-primary-800/5 to-accent-600/30",
};

const accentRing: Record<Project["accent"], string> = {
  purple: "hover:border-primary-500/50 hover:shadow-glow",
  orange: "hover:border-accent-500/50 hover:shadow-glow-orange",
  mixed: "hover:border-primary-500/40 hover:shadow-glow",
};

const accentLabel: Record<Project["accent"], string> = {
  purple: "text-primary-300",
  orange: "text-accent-300",
  mixed: "text-primary-300",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container mx-auto">
        <div className="reveal mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">
              <span className="h-px w-6 bg-accent-500" />
              /* 03. Selected Work */
            </p>
            <h2 className="section-heading">
              Things I&apos;ve <span className="gradient-text">built</span>{" "}
              lately.
            </h2>
            <p className="text-dark-300">
              A collection of fun web experiments, side projects, and tools I've built for fun.
            </p>
          </div>
          <a
            href="https://github.com/KHiroVerse"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost !px-4 !py-2 text-sm"
          >
            <Github size={16} />
            See all on GitHub
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`reveal card-surface group relative flex h-full flex-col p-6 ${accentRing[project.accent]}`}
              style={{ animationDelay: `${i * 70}ms` }}
              data-delay={String(i * 90)}
            >
              {/* Background glow */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accentGrad[project.accent]} opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative flex items-start justify-between">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-dark-800/80 ${accentLabel[project.accent]}`}
                >
                  <Terminal size={20} />
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repo`}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-dark-800/70 text-dark-300 transition hover:-translate-y-0.5 hover:border-primary-500/60 hover:text-primary-300"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-dark-800/70 text-dark-300 transition hover:-translate-y-0.5 hover:border-accent-500/60 hover:text-accent-300"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative mt-6 flex-1">
                <h3 className="text-xl font-bold text-white transition group-hover:text-primary-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-300">
                  {project.description}
                </p>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
