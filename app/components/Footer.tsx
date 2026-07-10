const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

import ScrollAnimation from "./ScrollAnimation";

export default function Footer() {
  return (
    <ScrollAnimation><footer className="bg-[#2B2926] border-t border-[#D6D2CD]/10 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold tracking-tight mb-4">
              Arkylite<span className="font-light"> Design+Build</span>
            </h3>
            <p className="text-[#D6D2CD] text-sm leading-relaxed max-w-xs">
              Architectural Design &amp; Engineering Consultancy and Construction
              Services. Licensed Architect, Engineer and Master Plumber.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#D6D2CD] text-sm transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-[#D6D2CD] text-sm">
              <li>Purok 3, Manuel L. Quezon St.</li>
              <li>Plaridel, Philippines 4306</li>
              <li>
                <a
                  href="tel:09950342055"
                  className="hover:text-white transition-colors duration-200"
                >
                  0995 034 2055
                </a>
              </li>
              <li>
                <a
                  href="mailto:arkylite.rset@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  arkylite.rset@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D6D2CD]/10 mt-6 pt-4 text-center text-[#D6D2CD] text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Arkylite Design + Build. All rights
          reserved.
        </div>
      </div>
    </footer></ScrollAnimation>
  );
}
