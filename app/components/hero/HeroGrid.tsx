import ProfilePhoto from "./ProfilePhoto";
import { IconPlaneTilt, IconMapPin } from "@tabler/icons-react";
import { personalInfo } from "@/data/portfolio";

export default function HeroGrid() {
  return (
    /*
      main already has pt-16 (64 px) to clear the fixed navbar.
      min-h-[calc(100vh-4rem)] fills exactly the remaining viewport height,
      so the hero occupies the whole first screen and the next section
      doesn't peek in on load. flex items-center vertically centers the
      content within that space.
      A soft top-to-bottom violet-to-white gradient keeps the first view
      calm rather than a flat wash of color.
    */
    <section
      id="about"
      className="relative overflow-hidden flex items-center min-h-[calc(100vh-4rem)] py-10"
      style={{
        background: "linear-gradient(165deg, #F3F1FC 0%, #F6F4FC 40%, #FFFFFF 85%)",
      }}
    >
      <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

        {/* ── Left: greeting, role, badges, CTA ── */}
        <div className="flex flex-col animate-fade-in-up">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(99,85,199,0.25)] bg-[#ede8fe] px-3 py-1 font-inter text-xs font-medium text-[#6355c7] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6355c7] animate-pulse" />
            Open to work
          </span>

          <h1 className="font-syne text-5xl sm:text-6xl font-bold leading-[1.05] tracking-tight text-[#1a1040]">
            Hi, I&apos;m Manasi
            <br />
            Manoj Koppal
          </h1>

          <p className="mt-4 font-inter text-base sm:text-lg text-[#6355c7] tracking-wide font-medium">
            Data Scientist · ML Engineer · Analyst
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(99,85,199,0.2)] bg-[rgba(99,85,199,0.07)] px-3 py-1.5 font-inter text-[11px] text-[#6b64a0]">
              <IconMapPin size={13} stroke={1.75} className="shrink-0" />
              {personalInfo.location}
            </span>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(99,85,199,0.25)] bg-[#ede8fe] px-3 py-1.5 font-inter text-[11px] text-[#6355c7]">
              <IconPlaneTilt size={13} stroke={1.75} className="shrink-0" />
              Open to relocation
            </span>
          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#6355c7] px-7 py-3
              font-inter text-sm font-semibold text-white
              transition-all duration-300 ease-out
              hover:bg-[#564ab3] hover:shadow-[0_8px_24px_rgba(99,85,199,0.35)] hover:-translate-y-0.5"
          >
            Let&apos;s Connect
          </a>
        </div>

        {/* ── Right: photo ── */}
        <div
          className="relative flex justify-center md:justify-end md:-mr-3 animate-fade-in-up"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative w-[310px] h-[380px] sm:w-[380px] sm:h-[460px] md:w-[425px] md:h-[520px] animate-float">
            {/* Soft violet halo */}
            <div
              className="absolute -inset-12 -z-10 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,85,199,0.38) 0%, rgba(99,85,199,0) 70%)",
              }}
              aria-hidden
            />

            {/* Photo, oval crop */}
            <div className="relative h-full w-full overflow-hidden rounded-[42%] border border-[rgba(99,85,199,0.2)] shadow-[0_20px_60px_rgba(99,85,199,0.25)]">
              <ProfilePhoto />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
