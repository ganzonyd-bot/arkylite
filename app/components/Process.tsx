import ScrollAnimation from "./ScrollAnimation";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We meet with you to understand your project scope, requirements, budget, and timeline. This is where we identify what you need and how we can help.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our team develops architectural drawings, engineering plans, and material specifications tailored to your project goals and site conditions.",
  },
  {
    number: "03",
    title: "Permits & Approvals",
    description:
      "We handle permit applications and regulatory submissions, ensuring your project complies with local building codes and standards.",
  },
  {
    number: "04",
    title: "Construction & Turnover",
    description:
      "Licensed professionals execute the build. We manage the site, coordinate suppliers, and deliver the completed project on schedule.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <span className="block text-[#D6D2CD]/30 text-6xl font-bold leading-none mb-3 tracking-tight">
            02
          </span>
          <h2 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-4">
            How We Work
          </h2>
          <p className="text-[#7D7873] max-w-2xl mb-16 text-base">
            A straightforward process from first conversation to project completion.
          </p>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#D6D2CD] hidden md:block" />
            <div className="space-y-14 md:space-y-0 stagger-children">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className="md:grid md:grid-cols-[60px_1fr] md:gap-10 relative"
                >
                  <div className="flex md:block items-center gap-5 mb-3 md:mb-0">
                    <span className="relative z-10 inline-flex items-center justify-center w-[38px] h-[38px] rounded-full border border-[#7D7873] text-[#7D7873] text-sm font-medium">
                      {step.number}
                    </span>
                    <h3 className="text-[#4A4743] text-base font-medium md:hidden">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:pb-14">
                    <h3 className="text-[#4A4743] text-lg font-medium mb-2 hidden md:block">
                      {step.title}
                    </h3>
                    <p className="text-[#7D7873] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
