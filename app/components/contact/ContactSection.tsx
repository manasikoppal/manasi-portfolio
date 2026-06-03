import { personalInfo } from "@/data/portfolio";
import {
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";

const buttons = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: IconMail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "manasikoppal",
    href: personalInfo.linkedin,
    icon: IconBrandLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "manasikoppal",
    href: personalInfo.github,
    icon: IconBrandGithub,
    external: true,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: IconPhone,
    external: false,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="pt-12 pb-16">
      <div className="site-container flex flex-col items-center">

        <RevealOnScroll className="w-full max-w-2xl">
          <div
            className="rounded-2xl border border-[rgba(99,85,199,0.2)] bg-[#f0ecfc] p-8 sm:p-12
              text-center
              bg-[radial-gradient(ellipse_at_top,rgba(99,85,199,0.08)_0%,transparent_65%)]
              transition-all duration-300 ease-out
              hover:border-[rgba(99,85,199,0.38)] hover:shadow-[0_0_40px_rgba(99,85,199,0.1)]"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(99,85,199,0.25)] bg-[#ede8fe] px-3 py-1 font-inter text-xs font-medium text-[#6355c7] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6355c7] animate-pulse" />
              Available May 2026
            </span>

            <h2 className="font-syne text-2xl sm:text-3xl font-bold text-[#1a1040] mb-3">
              Open to Full-Time Opportunities
            </h2>

            <p className="font-inter text-sm text-[#3d3560] mb-10 leading-relaxed">
              Data Scientist · ML Engineer · Data Analyst · Data Engineer
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {buttons.map(({ label, value, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3 rounded-xl
                    border border-[rgba(99,85,199,0.2)] bg-[rgba(99,85,199,0.06)] px-4 py-3.5
                    text-left
                    transition-all duration-200
                    hover:border-[rgba(99,85,199,0.45)] hover:bg-[#ede8fe] hover:shadow-[0_0_18px_rgba(99,85,199,0.12)] hover:-translate-y-0.5"
                >
                  <Icon
                    size={16}
                    stroke={1.75}
                    className="shrink-0 text-[#6b64a0] transition-colors duration-200 group-hover:text-[#6355c7]"
                  />
                  <div className="min-w-0">
                    <p className="font-inter text-[10px] uppercase tracking-widest text-[#9990c0] mb-0.5">
                      {label}
                    </p>
                    <p className="font-inter text-[12px] text-[#3d3560] truncate transition-colors duration-200 group-hover:text-[#6355c7]">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
