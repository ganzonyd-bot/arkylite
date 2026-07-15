"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We are based in Gumaca, Quezon Province and serve projects across Quezon, Metro Manila, and nearby provinces. For larger commercial or industrial projects, we can coordinate nationwide.",
  },
  {
    q: "Do you offer free estimates?",
    a: "We charge a minor fee for estimates and consultations. Contact us to schedule a visit and we will discuss your project scope, timeline, and budget.",
  },
  {
    q: "What types of projects do you handle?",
    a: "We handle residential, commercial, and industrial projects — including new construction, renovations, additions, and equipment supply. Each project is assigned a licensed professional based on the scope.",
  },
  {
    q: "Do you handle building permits?",
    a: "Yes. We prepare and process the necessary permit applications, ensuring your project complies with local building codes and regulations. This is included in our design and planning phase.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope and site conditions. A residential renovation may take 3–4 months, new construction about 5–6 months, while a full commercial build can take 6–12 months. We provide a realistic schedule during the consultation.",
  },
  {
    q: "Can I supply my own materials?",
    a: "Yes. We can work with owner-supplied materials or handle procurement on your behalf. We will advise on material specifications to ensure compatibility and quality.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ScrollAnimation><section id="faq" className="bg-[#ECE9E6] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <span className="section-number block text-[#D6D2CD]/30 text-8xl md:text-9xl font-bold leading-none mb-3 tracking-tight text-center">
          06
        </span>
        <h2 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-[#7D7873] text-center max-w-xl mx-auto mb-14 text-base">
          Common questions clients ask before starting a project.
        </p>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-[#D6D2CD] bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[#4A4743] text-base font-medium pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 text-[#7D7873] text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#7D7873] text-sm leading-relaxed px-6 pb-5">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section></ScrollAnimation>
  );
}
