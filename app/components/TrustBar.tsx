import ScrollAnimation from "./ScrollAnimation";

const POINTS = [
  {
    number: "01",
    title: "Licensed Professionals",
    description:
      "Every project is handled by licensed architects, engineers, and master plumbers — not general contractors.",
  },
  {
    number: "02",
    title: "End-to-End Service",
    description:
      "From initial consultation and design through permits, construction, and turnover. One team, full accountability.",
  },
  {
    number: "03",
    title: "Quality Guarantee",
    description:
      "We use industry-standard materials and construction methods. Every deliverable is inspected before handover.",
  },
  {
    number: "04",
    title: "Local Expertise",
    description:
      "Based in Plaridel, we know the local regulations, suppliers, and site conditions across Bulacan and nearby provinces.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            <div>
              <span className="section-number block text-[#D6D2CD]/30 text-8xl md:text-9xl font-bold leading-none mb-3 tracking-tight">
                03
              </span>
              <h2 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-4">
                Why Arkylite
              </h2>
              <p className="text-[#7D7873] text-base max-w-sm">
                What sets us apart — beyond the credentials.
              </p>
            </div>
            <div className="space-y-8 stagger-children">
              {POINTS.map((point, i) => (
                <div key={point.number}>
                  <div className="flex gap-5">
                    <span className="shrink-0 text-[#D6D2CD]/50 text-3xl font-bold leading-none mt-0.5">
                      {point.number}
                    </span>
                    <div>
                      <h3 className="text-[#4A4743] text-base font-semibold uppercase tracking-wider mb-1.5">
                        {point.title}
                      </h3>
                      <p className="text-[#7D7873] text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                  {i < POINTS.length - 1 && (
                    <div className="w-full h-px bg-[#D6D2CD]/50 mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
