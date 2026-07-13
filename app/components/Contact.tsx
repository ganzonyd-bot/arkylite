import ScrollAnimation from "./ScrollAnimation";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <span className="section-number block text-[#D6D2CD]/30 text-8xl md:text-9xl font-bold leading-none mb-3 tracking-tight">
                07
              </span>
              <h2 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-8">
                Contact Us
              </h2>
              <div className="w-12 h-px bg-[#D6D2CD] mb-10" />
              <p className="text-[#7D7873] text-sm leading-relaxed mb-10 max-w-sm">
                Tell us about your project and we&apos;ll get back to you within
                24 hours with a preliminary assessment and next steps.
              </p>
              <div className="space-y-6 text-[#7D7873]">
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#7D7873] mb-1">
                    Address
                  </p>
                  <p className="text-[#4A4743]">
                    Purok 3, Manuel L. Quezon St.
                    <br />
                    Plaridel, Philippines 4306
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#7D7873] mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:09950342055"
                    className="text-[#4A4743] hover:text-[#7D7873] transition-colors duration-200"
                  >
                    0995 034 2055
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#7D7873] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:arkylite.rset@gmail.com"
                    className="text-[#4A4743] hover:text-[#7D7873] transition-colors duration-200"
                  >
                    arkylite.rset@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-[#4A4743] text-xl font-semibold mb-8">
                Get in Touch
              </h3>
              <div className="space-y-4 stagger-children">
                <a
                  href="https://www.messenger.com/t/480464268492479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full border-2 border-[#4A4743] text-[#4A4743] px-6 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#4A4743] hover:text-white hover:scale-[1.02]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M21 12a9 9 0 1 0-9 9 8.9 8.9 0 0 0 4.5-1.3l3.5 1.1-1.1-3.5A9 9 0 0 0 21 12z" />
                    <path d="M9 11l2 2 4-4" />
                  </svg>
                  <span>Chat on Messenger</span>
                </a>
                <a
                  href="tel:09950342055"
                  className="flex items-center gap-4 w-full border-2 border-[#4A4743] text-[#4A4743] px-6 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#4A4743] hover:text-white hover:scale-[1.02]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-xs sm:text-sm tracking-normal sm:tracking-widest">Call 0995 034 2055</span>
                </a>
                <a
                  href="mailto:arkylite.rset@gmail.com"
                  className="flex items-center gap-4 w-full bg-[#4A4743] text-white px-6 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#2B2926] hover:scale-[1.02]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Send an Email</span>
                </a>
              </div>
              <p className="text-[#7D7873] text-xs mt-6">
                Response within 24 hours.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
