import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const SERVICES = [
  {
    title: "Architectural Design",
    description:
      "Comprehensive architectural planning and design development for residential, commercial, and industrial projects — from concept to construction documentation.",
    image: "/images/gallery/gallery-26.jpg",
  },
  {
    title: "Engineering Consultancy",
    description:
      "Structural, civil, and MEP engineering services. Licensed professional engineers ensuring code compliance, safety, and structural integrity.",
    image: "/images/gallery/gallery-25.jpg",
  },
  {
    title: "Construction Services",
    description:
      "Full-scale construction management and execution. From site preparation to finishing, delivered with quality craftsmanship and project transparency.",
    image: "/images/gallery/gallery-24.jpg",
  },
  {
    title: "Equipment Supply & Delivery",
    description:
      "Sourcing and delivery of construction equipment and materials. Reliable supply chain coordination to keep your project on schedule.",
    image: "/images/gallery/gallery-18.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#ECE9E6] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <span className="section-number block text-[#D6D2CD]/30 text-8xl md:text-9xl font-bold leading-none mb-3 tracking-tight">
            04
          </span>
          <h2 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-4">
            Services
          </h2>
          <p className="text-[#7D7873] max-w-2xl mb-16 md:mb-20 text-base">
            Integrated architectural, engineering, and construction solutions for
            projects of every scale.
          </p>

          <div className="space-y-16 md:space-y-20">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="grid md:grid-cols-2 gap-8 md:gap-14 items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-[#4A4743] text-2xl md:text-3xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#7D7873] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-[#7D7873] text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[#4A4743]"
                  >
                    Know More
                    <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
