import { projects } from "@/data/portfolio";
import { IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="pt-12 pb-0">
      <div className="site-container">

        <RevealOnScroll>
          <div className="mb-8">
            <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-[#6355c7] mb-1.5">
              Work
            </p>
            <h2 className="font-syne text-2xl font-bold text-[#1a1040]">Projects</h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.title} delay={i * 70}>
              <div
                className="group flex flex-col rounded-2xl border border-[rgba(99,85,199,0.15)] bg-[#f0ecfc] p-6
                  transition-all duration-300 ease-out
                  hover:border-[rgba(99,85,199,0.4)] hover:shadow-[0_0_28px_rgba(99,85,199,0.1)] hover:-translate-y-1
                  h-full"
              >
                {/* Category + GitHub */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-flex items-center rounded-md border border-[rgba(99,85,199,0.2)] bg-[rgba(99,85,199,0.08)] px-2 py-1 font-inter text-[10px] uppercase tracking-widest text-[#6b64a0]">
                    {project.category}
                  </span>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-lg border border-[rgba(99,85,199,0.2)] bg-[rgba(99,85,199,0.07)] px-2.5 py-1.5
                        font-inter text-[11px] text-[#6b64a0]
                        transition-all duration-200
                        hover:border-[rgba(99,85,199,0.45)] hover:bg-[#ede8fe] hover:text-[#6355c7]"
                    >
                      <IconBrandGithub size={13} stroke={1.75} />
                      <span>Code</span>
                      <IconArrowUpRight size={11} stroke={2} />
                    </a>
                  ) : (
                    <span className="font-inter text-[10px] text-[#9990c0] italic">
                      private
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-syne text-[17px] font-bold leading-snug text-[#1a1040] mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-[13px] leading-relaxed text-[#3d3560] line-clamp-3 mb-5">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-5">
                  <p className="font-inter text-[10px] uppercase tracking-[0.14em] text-[#6355c7] mb-2.5">
                    Impact
                  </p>
                  <ul className="space-y-1.5">
                    {project.impact.map((point, j) => (
                      <li key={j} className="flex gap-2.5 items-start">
                        <span className="mt-[5px] h-[5px] w-[5px] shrink-0 rounded-full bg-[rgba(99,85,199,0.45)]" />
                        <p className="font-inter text-[12px] leading-snug text-[#6b64a0]">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="mt-auto flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded px-1.5 py-0.5
                        border border-[rgba(99,85,199,0.18)] bg-[rgba(99,85,199,0.07)]
                        font-inter text-[11px] leading-none text-[#6b64a0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
