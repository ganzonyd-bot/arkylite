import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  return (
    <section id="about" className="bg-[#ECE9E6] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="max-w-xl">
            <span className="section-number block text-[#D6D2CD]/30 text-8xl md:text-9xl font-bold leading-none mb-2 tracking-tight">
              01
            </span>
<h2 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-6">
  About Arkylite Design + Build
</h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#D6D2CD]" />
              <div className="w-2 h-2 rotate-45 border border-[#7D7873]" />
              <div className="w-8 h-px bg-[#D6D2CD]" />
            </div>
            <div className="space-y-5 text-[#7D7873] leading-relaxed">
              <p>
                We provide Architectural Design &amp; Engineering Consultancy and
                Construction Services. We Supply and Deliver different equipment as
                well. Design + Build.
              </p>
              <p>
                Based in Plaridel, Philippines, our team brings together licensed
                professionals — an Architect, Engineer, and Master Plumber — to
                deliver integrated design and construction solutions for residential,
                commercial, and industrial projects.
              </p>
              <p>
                From concept development and structural planning to project execution
                and equipment supply, we handle every phase of the build process with
                precision and accountability.
              </p>
            </div>
            <a
              href="#services"
              className="inline-flex items-center mt-10 bg-[#4A4743] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#2B2926] hover:scale-[1.02]"
            >
              Our Services
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/gallery/gallery-1.jpg"
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ECE9E6] via-[#ECE9E6]/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
