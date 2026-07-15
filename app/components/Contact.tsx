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
                    href="tel:09283096283"
                    className="text-[#4A4743] hover:text-[#7D7873] transition-colors duration-200"
                  >
                    0928 309 6283
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13" />
                  </svg>
                  <span>Chat on Messenger</span>
                </a>
                <a
                  href="https://wa.me/639283096283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full border-2 border-[#4A4743] text-[#4A4743] px-6 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#4A4743] hover:text-white hover:scale-[1.02]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:09283096283"
                  className="flex items-center gap-4 w-full border-2 border-[#4A4743] text-[#4A4743] px-6 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#4A4743] hover:text-white hover:scale-[1.02]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-xs sm:text-sm tracking-normal sm:tracking-widest">Call 0928 309 6283</span>
                </a>
                <a
                  href="mailto:arkylite.rset@gmail.com"
                  className="flex items-center gap-4 w-full border-2 border-[#4A4743] text-[#4A4743] px-6 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#4A4743] hover:text-white hover:scale-[1.02]"
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
