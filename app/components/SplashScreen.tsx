"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLeaving(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#353330] ${
        leaving ? "animate-splash-leave" : ""
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="flex flex-col items-center -mt-16 md:mt-0">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-3">
          <Image
            src="/images/logo/logo-icon.png"
            alt="Arkylite"
            fill
            sizes="144px"
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-white text-2xl md:text-3xl font-semibold tracking-tight -mt-1">
          Arkylite <span className="font-light">Design+Build</span>
        </h1>
      </div>
    </div>
  );
}
