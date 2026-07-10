import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function EstimateBanner() {
  return (
    <ScrollAnimation><section className="relative overflow-hidden py-8 md:py-6">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/gallery-14.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2B2926]/60" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#ECE9E6] text-base text-center sm:text-left">
          Get a free consultation and site estimate — no obligation, no pressure.
        </p>
        <a
          href="tel:09950342055"
          className="shrink-0 inline-flex items-center border-2 border-[#ECE9E6] text-[#ECE9E6] px-6 py-3 text-xs tracking-widest uppercase transition-all duration-200 hover:border-transparent hover:bg-white/10"
        >
          Call 0995 034 2055
        </a>
      </div>
    </section></ScrollAnimation>
  );
}
