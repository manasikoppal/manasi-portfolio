import AnimatedCounter from "./AnimatedCounter";
import ProfilePhoto from "./ProfilePhoto";
import { IconPlaneTilt } from "@tabler/icons-react";

const tile =
  "rounded-2xl border border-[rgba(99,85,199,0.15)] bg-[#f0ecfc] " +
  "transition-all duration-300 ease-out " +
  "hover:border-[rgba(99,85,199,0.4)] hover:shadow-[0_0_28px_rgba(99,85,199,0.12)] hover:-translate-y-1 " +
  "animate-fade-in-up";

export default function HeroGrid() {
  return (
    /*
      main already has pt-16 (64 px) to clear the fixed navbar.
      pt-6 here adds just 24 px of breathing room beneath the navbar — total ~88 px.
      No justify-center: content flows from the top, not the middle.
    */
    <section
      id="about"
      className="pt-6 pb-0"
    >
      <div className="site-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">

        {/* ── Tile 1: Name — 2 cols × 2 rows ── */}
        <div
          className={`${tile} col-span-1 sm:col-span-2 md:row-span-2
            flex flex-row items-stretch gap-0 p-0 overflow-hidden
            bg-[radial-gradient(ellipse_at_top_left,rgba(99,85,199,0.08)_0%,transparent_60%)]`}
          style={{ animationDelay: "0ms" }}
        >
          {/* Left column: text */}
          <div className="flex flex-1 min-w-0 flex-col justify-between p-6">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(99,85,199,0.25)] bg-[#ede8fe] px-3 py-1 font-inter text-xs font-medium text-[#6355c7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6355c7] animate-pulse" />
              Open to work
            </span>

            <div>
              <h1 className="font-syne text-[2rem] sm:text-4xl md:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-[#1a1040]">
                Manasi Manoj
                <br />
                Koppal
              </h1>
              <p className="mt-2.5 font-inter text-sm text-[#6355c7] tracking-wide font-medium">
                Data Scientist · ML Engineer · Analyst
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(99,85,199,0.2)] bg-[rgba(99,85,199,0.07)] px-3 py-1.5 font-inter text-[11px] text-[#6b64a0]">
                  <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Bloomington, IN
                </span>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(99,85,199,0.25)] bg-[#ede8fe] px-3 py-1.5 font-inter text-[11px] text-[#6355c7]">
                  <IconPlaneTilt size={12} stroke={1.75} className="shrink-0" />
                  Open to relocation
                </span>
              </div>
            </div>
          </div>

          {/* Right column: photo fills the full tile height */}
          <div className="relative shrink-0 w-[150px] sm:w-[180px] md:w-[200px] self-stretch">
            <ProfilePhoto />
          </div>
        </div>

        {/* ── Tile 2: GPA ── */}
        <div
          className={`${tile} flex flex-col justify-between p-6`}
          style={{ animationDelay: "80ms" }}
        >
          <span className="font-inter text-[10px] uppercase tracking-widest text-[#9990c0]">
            GPA
          </span>
          <div>
            <p className="font-syne text-5xl font-bold leading-none text-[#6355c7] tabular-nums">
              <AnimatedCounter end={3.71} decimals={2} />
            </p>
            <p className="mt-2 font-inter text-[10px] uppercase tracking-widest text-[#9990c0]">
              out of 4.0
            </p>
          </div>
        </div>

        {/* ── Tile 3: Location ── */}
        <div
          className={`${tile} flex flex-col justify-between p-6`}
          style={{ animationDelay: "160ms" }}
        >
          <svg
            className="h-5 w-5 text-[#6355c7]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <div>
            <p className="font-syne text-2xl font-semibold leading-tight text-[#1a1040]">
              Bloomington
            </p>
            <p className="mt-1 font-inter text-[10px] uppercase tracking-widest text-[#9990c0]">
              Indiana, USA
            </p>
          </div>
        </div>

        {/* ── Tile 4: Records / day ── */}
        <div
          className={`${tile} flex flex-col justify-between p-6`}
          style={{ animationDelay: "240ms" }}
        >
          <span className="font-inter text-[10px] uppercase tracking-widest text-[#9990c0]">
            Throughput
          </span>
          <div>
            <p className="font-syne text-5xl font-bold leading-none text-[#6355c7] tabular-nums">
              <AnimatedCounter end={100} suffix="K+" />
            </p>
            <p className="mt-2 font-inter text-[10px] uppercase tracking-widest text-[#9990c0]">
              records / day
            </p>
          </div>
        </div>

        {/* ── Tile 5: +15% ── */}
        <div
          className={`${tile} flex flex-col justify-between p-6`}
          style={{ animationDelay: "320ms" }}
        >
          <svg
            className="h-5 w-5 text-[#6355c7]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
          <div>
            <p className="font-syne text-5xl font-bold leading-none text-[#6355c7] tabular-nums">
              <AnimatedCounter end={15} prefix="+" suffix="%" />
            </p>
            <p className="mt-2 font-inter text-[10px] uppercase tracking-widest text-[#9990c0]">
              product adoption
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
