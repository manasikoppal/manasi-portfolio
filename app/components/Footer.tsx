import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(99,85,199,0.1)] py-6">
      <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-inter text-[11px] text-[#b8b0d0]">
          © {year} {personalInfo.name}
        </p>
        <p className="font-inter text-[11px] text-[#b8b0d0]">
          Built with{" "}
          <span className="text-[#9990c0]">Next.js</span>
          {" · "}
          <span className="text-[#9990c0]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
