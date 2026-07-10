"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const GALLERY_IMAGES = Array.from({ length: 8 }, (_, i) => `/images/gallery/gallery-${i + 1}.jpg`);

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative flex items-center bg-[#2B2926] overflow-hidden">
      {GALLERY_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          fetchPriority={i === 0 ? "high" : undefined}
          loading={i === 0 ? "eager" : "lazy"}
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-60" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-[#2B2926]/20" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 w-full">
        <div className="hero-content text-center max-w-4xl mx-auto">
          <span className="text-[#D6D2CD] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase block mb-5">
            Plaridel, Philippines
          </span>
           <h1 className="text-white text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
             Crafting QUALITY, Constructing TRUST
           </h1>
          <div className="w-16 h-px bg-white/30 mx-auto mb-6" />
          <p className="text-[#D6D2CD] text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Full-service architecture, engineering &amp; construction — from
            concept to completion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="flex w-[280px] max-w-full items-center justify-center bg-[#ECE9E6] text-[#2B2926] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#D6D2CD] hover:scale-[1.02]"
            >
              <span className="whitespace-nowrap">Schedule a Consultation</span>
            </a>
            <a
              href="#services"
              className="flex w-[280px] max-w-full items-center justify-center border-2 border-white text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:border-transparent hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
          <p className="mt-8 text-[#D6D2CD]/60 text-xs tracking-wider">
            Licensed Architect &middot; Engineer &middot; Master Plumber
          </p>
        </div>
      </div>
    </section>
  );
}
