import { education, certifications } from "@/data/portfolio";
import { IconAward } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";

export default function EducationSection() {
  return (
    <section id="education" className="pt-12 pb-0">
      <div className="site-container">

        <RevealOnScroll>
          <div className="mb-6">
            <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-[#6355c7] mb-1.5">
              Academic Background
            </p>
            <h2 className="font-syne text-2xl font-bold text-[#1a1040]">Education</h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {education.map((edu, i) => (
            <RevealOnScroll key={i} delay={i * 90}>
              <div
                className="rounded-2xl border border-[rgba(99,85,199,0.15)] bg-[#f0ecfc] p-6
                  transition-all duration-300 ease-out
                  hover:border-[rgba(99,85,199,0.4)] hover:shadow-[0_0_28px_rgba(99,85,199,0.1)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-md border border-[rgba(99,85,199,0.25)] bg-[#ede8fe] px-2 py-1 font-inter text-[10px] uppercase tracking-widest text-[#6355c7]">
                    {edu.period}
                  </span>
                  <span className="font-inter text-[11px] text-[#9990c0]">
                    {edu.gpa}
                  </span>
                </div>

                <h3 className="font-syne text-[17px] font-bold leading-snug text-[#1a1040] mb-1">
                  {edu.degree}
                </h3>

                <p className="font-inter text-sm text-[#6b64a0] mb-5">
                  {edu.institution}
                  <span className="mx-1.5 text-[#9990c0]">·</span>
                  {edu.location}
                </p>

                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 items-start">
                      <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[rgba(99,85,199,0.45)]" />
                      <p className="font-inter text-[12px] leading-snug text-[#6b64a0]">{h}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={180}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <IconAward size={13} stroke={1.75} className="text-[#9990c0]" />
              <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-[#9990c0]">
                Certifications & Achievements
              </p>
            </div>

            {(() => {
              const publication = certifications.find((c) => c.type === "publication");
              const certList = certifications.filter((c) => c.type !== "publication");

              return (
                <>
                  {publication && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${publication.title} — opens the IEEE Xplore publication in a new tab`}
                      className="flex items-center justify-between gap-4 bg-[#f0ecfc] rounded-lg p-5 mb-3
                        border-l-2 border-[#6355c7]
                        transition-all duration-200
                        hover:border-[rgba(99,85,199,0.5)] hover:shadow-[0_4px_16px_rgba(99,85,199,0.15)] hover:-translate-y-0.5"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-inter text-[10px] uppercase tracking-widest text-[#6355c7]">
                            {publication.issuer} · Publication
                          </p>
                        </div>
                        <p className="font-inter text-[15px] font-semibold leading-snug text-[#1a1040]">
                          {publication.title}
                        </p>
                        <p className="mt-1 font-inter text-[11px] text-[#9990c0]">
                          Conference paper · View publication
                        </p>
                      </div>
                      <ExternalLink
                        size={20}
                        strokeWidth={1.75}
                        className="shrink-0 text-[#6355c7]"
                      />
                    </a>
                  )}

                  <div
                    className="grid gap-3"
                    style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
                  >
                    {certList.map((cert, i) => (
                      <div
                        key={i}
                        className="flex flex-col justify-between bg-[#f0ecfc] rounded-lg p-4
                          border-l-2 border-[#6355c7]
                          transition-all duration-200
                          hover:shadow-[0_4px_16px_rgba(99,85,199,0.1)] hover:-translate-y-0.5"
                      >
                        <p className="font-inter text-[10px] uppercase tracking-widest text-[#6355c7] mb-2">
                          {cert.issuer}
                        </p>
                        <p className="font-inter text-[13px] font-medium leading-snug text-[#1a1040] flex-1 mb-3">
                          {cert.title}
                        </p>
                        <p className="font-inter text-[11px] text-[#9990c0]">{cert.year}</p>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
