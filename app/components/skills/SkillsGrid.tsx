import { skills } from "@/data/portfolio";
import {
  IconBraces,
  IconBrain,
  IconChartBar,
  IconCloud,
  IconChartHistogram,
  IconDatabase,
  IconSparkles,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";

const iconMap: Record<string, TablerIcon> = {
  "Machine Learning": IconBrain,
  "Generative AI & LLMs": IconSparkles,
  Languages: IconBraces,
  Visualization: IconChartBar,
  "Cloud & Big Data": IconCloud,
  Statistics: IconChartHistogram,
  "Data Engineering": IconDatabase,
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="pt-12 pb-0">
      <div className="site-container">

        <RevealOnScroll>
          <div className="mb-6">
            <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-[#6355c7] mb-1.5">
              Expertise
            </p>
            <h2 className="font-syne text-2xl font-bold text-[#1a1040]">
              Technical Skills
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.category];
            return (
              <RevealOnScroll key={skill.category} delay={i * 55}>
                <div
                  className="rounded-xl border border-[rgba(99,85,199,0.15)] bg-[#f0ecfc] p-4
                    transition-all duration-300 ease-out
                    hover:border-[rgba(99,85,199,0.4)] hover:shadow-[0_0_18px_rgba(99,85,199,0.1)] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {Icon && (
                      <Icon size={16} stroke={1.75} className="text-[#6355c7] shrink-0" />
                    )}
                    <h3 className="font-syne font-semibold text-[12.5px] text-[#1a1040] leading-none tracking-wide">
                      {skill.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded px-1.5 py-0.5
                          border border-[rgba(99,85,199,0.18)] bg-[rgba(99,85,199,0.07)]
                          font-inter text-[11px] leading-none text-[#6b64a0]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
