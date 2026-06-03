import { experience } from "@/data/portfolio";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";

export default function Timeline() {
  return (
    <section id="experience" className="pt-12 pb-0">
      <div className="site-container">

        <RevealOnScroll>
          <div className="mb-10">
            <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-[#6355c7] mb-1.5">
              Work History
            </p>
            <h2 className="font-syne text-2xl font-bold text-[#1a1040]">Experience</h2>
          </div>
        </RevealOnScroll>

        <div className="border-l border-[rgba(99,85,199,0.25)] space-y-12">
          {experience.map((role, i) => (
            <RevealOnScroll key={i} delay={i * 100} className="relative">
              <div className="relative pl-8">
                <span className="absolute -left-1 top-[4px] h-2 w-2 rounded-full bg-[#6355c7] ring-[3px] ring-[#f8f6ff]" />

                <p className="font-inter text-[10px] uppercase tracking-[0.15em] text-[#9990c0] mb-1.5">
                  {role.period}
                </p>

                <h3 className="font-syne text-xl font-bold text-[#1a1040] leading-tight mb-1">
                  {role.role}
                </h3>

                <p className="font-inter text-sm text-[#6b64a0] mb-4">
                  {role.company}
                  <span className="mx-1.5 text-[#9990c0]">·</span>
                  {role.location}
                </p>

                <ul className="space-y-2.5">
                  {role.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[rgba(99,85,199,0.5)]" />
                      <p className="font-inter text-[13px] leading-relaxed text-[#3d3560]">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
