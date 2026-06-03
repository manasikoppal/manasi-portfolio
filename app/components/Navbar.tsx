"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const offset = y + 80;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-[#f8f6ff]/92 backdrop-blur-md border-b border-[rgba(99,85,199,0.12)] shadow-[0_1px_24px_rgba(99,85,199,0.08)]"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="site-container flex items-center justify-between h-16">
        <a
          href="#about"
          className="font-syne font-bold text-xl text-[#6355c7] tracking-tight hover:opacity-75 transition-opacity"
        >
          MMK
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative font-inter text-sm tracking-wide transition-colors duration-200
                    ${isActive ? "text-[#6355c7]" : "text-[#3d3560] hover:text-[#6355c7]"}`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[rgba(99,85,199,0.5)] rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
