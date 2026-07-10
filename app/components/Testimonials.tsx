import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const TESTIMONIALS = [
  {
    quote:
      "They handled our commercial build from start to finish. The team was responsive, transparent about costs, and delivered on time. Would recommend to anyone looking for a reliable design-build partner.",
    author: "Owner, Commercial Project",
  },
  {
    quote:
      "We needed a full renovation — architectural redesign, structural work, plumbing, and finishing. Arkylite managed everything. No delays, no surprises. Professional from day one.",
    author: "Homeowner, Renovation Project",
  },
  {
    quote:
      "As a contractor, I needed reliable equipment delivery and engineering support. Their supply chain coordination saved us weeks. Already planning the next project with them.",
    author: "Project Manager, Industrial Facility",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/gallery-8.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2B2926]/60" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <h2 className="text-white text-3xl md:text-4xl font-normal mb-4 text-center">
            What Our Clients Say
          </h2>
          <p className="text-[#D6D2CD] text-center max-w-xl mx-auto mb-16 text-base">
            Real feedback from real projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="border-t-2 border-[#D6D2CD]/40 pt-8">
                <p className="text-[#D6D2CD] text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-white text-xs tracking-wider uppercase">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
