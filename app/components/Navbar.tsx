"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setHeroVisible(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 animate-navbar ${
        heroVisible ? "bg-transparent" : "bg-[#D5D0CA] backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className={`flex items-center gap-2.5 text-lg md:text-xl font-semibold tracking-tight ${
            heroVisible ? "text-white" : "text-[#2B2926]"
          }`}
        >
          <span className={`relative block h-9 md:h-10 w-9 md:w-10 shrink-0 ${
            heroVisible ? "bg-[#D5D0CA] rounded" : ""
          }`}>
            <Image
              src="/images/logo/logo-icon.png"
              alt="Arkylite"
              fill
              sizes="40px"
              className="object-contain"
              loading="eager"
            />
          </span>
          Arkylite<span className="font-light"> Design+Build</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wider uppercase transition-colors duration-200 ${
                heroVisible
                  ? "text-white/80 hover:text-white"
                  : "text-[#2B2926]/70 hover:text-[#2B2926]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-sm tracking-wider uppercase px-5 py-2 transition-all duration-200 ${
              heroVisible
                ? "border-2 border-white text-white hover:border-transparent hover:bg-white/10"
                : "bg-[#2B2926] text-white hover:bg-[#3D3A35]"
            }`}
          >
            Schedule a Consultation
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-4"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-transform duration-200 ${
              open
                ? "bg-white rotate-45 translate-y-2"
                : heroVisible
                  ? "bg-white"
                  : "bg-[#2B2926]"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-opacity duration-200 ${
              open
                ? "bg-white opacity-0"
                : heroVisible
                  ? "bg-white"
                  : "bg-[#2B2926]"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-transform duration-200 ${
              open
                ? "bg-white -rotate-45 -translate-y-2"
                : heroVisible
                  ? "bg-white"
                  : "bg-[#2B2926]"
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#D5D0CA] border-t border-[#2B2926]/10">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wider uppercase text-[#2B2926]/70 hover:text-[#2B2926] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm tracking-wider uppercase bg-[#2B2926] text-white px-5 py-2 text-center hover:bg-[#3D3A35] transition-all duration-200"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
