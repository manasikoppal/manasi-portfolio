"use client";

import RevealOnScroll from "@/app/components/ui/RevealOnScroll";

export default function AboutSection() {

  return (
    <section className="pt-8 pb-0">
      <div className="site-container">
        <RevealOnScroll>
          <div
            className="flex flex-col md:flex-row items-center gap-10 md:gap-14
              rounded-2xl bg-[#f0ecfc] p-10 sm:p-12"
          >

            {/* ── Left: Video ── */}
            <div
              className="shrink-0 flex items-center justify-center"
              style={{ background: "#f0ecfc" }}
            >
              <img
                src="/memoji.gif"
                alt="Manasi memoji"
                style={{
                  width: "300px",
                  mixBlendMode: "multiply",
                  background: "transparent",
                  display: "block",
                }}
              />
            </div>

            {/* ── Right: Text ── */}
            <div className="flex-1 min-w-0">
              <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-[#6355c7] mb-3">
                About Me
              </p>

              <h2 className="font-syne text-4xl sm:text-5xl font-bold text-[#6355c7] mb-6 leading-tight">
                Hi, I&apos;m Manasi
              </h2>

              <div className="space-y-4 font-inter text-[15px] sm:text-[16px] leading-relaxed text-[#3d3560]">
                <p>
                  A data girl from India, chasing opportunities one coffee at a time.
                  I got into data through a Big Data Analytics class that just clicked, and
                  honestly, some good vibes. I haven&apos;t stopped since.
                </p>
                <p>
                  Most days start with a coffee and end with me still staring at dataframes.
                  Somewhere in between, I&apos;m wrangling messy pipelines, training ML models
                  to spot patterns humans would miss, or building dashboards that turn a wall
                  of numbers into something people actually want to look at. My data superpower
                  is taking a chaotic, disaster of a dataset and turning it into something clean
                  and genuinely beautiful. It&apos;s the same feeling I get untangling a slow
                  burn plot twist a few chapters in.
                </p>
                <p>
                  Outside of work, I&apos;m either buried in a book with a fresh cup of coffee,
                  hunting down a new recipe to butcher in the kitchen, or wishing I could
                  teleport home for my mom&apos;s cooking instead. I&apos;m currently based in
                  Ohio, but always open to the next city, the next problem, and the next good
                  cup of coffee.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center rounded-xl border-2 border-[#6355c7] bg-transparent px-6 py-3
                    font-inter text-sm font-semibold text-[#6355c7]
                    transition-all duration-200 cursor-pointer
                    hover:bg-[#ede8fe] hover:shadow-[0_6px_24px_rgba(99,85,199,0.15)] hover:-translate-y-0.5"
                >
                  Explore my work
                </button>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
