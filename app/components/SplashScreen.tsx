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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#D5D0CA] ${
        leaving ? "animate-splash-leave" : ""
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="flex flex-col items-center -mt-16 md:mt-0">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/images/logo/logo-icon.png"
            alt="Arkylite"
            fill
            sizes="144px"
            className="object-contain"
            priority
          />
        </div>

      </div>
    </div>
  );
}
