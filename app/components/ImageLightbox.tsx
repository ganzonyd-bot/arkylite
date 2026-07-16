"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageLightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center transition-colors duration-300"
        aria-label="Close"
      >
        &#x2715;
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl z-10 w-12 h-12 flex items-center justify-center transition-colors duration-300"
        aria-label="Previous"
      >
        &#8249;
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl z-10 w-12 h-12 flex items-center justify-center transition-colors duration-300"
        aria-label="Next"
      >
        &#8250;
      </button>

      {/* Image */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[85vh] m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-contain"
          sizes="100vw"
          loading="eager"
          priority
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 text-white/50 text-sm tracking-wider">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
