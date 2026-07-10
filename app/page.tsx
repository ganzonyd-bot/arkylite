import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";

const About = dynamic(() => import("@/app/components/About"));
const Process = dynamic(() => import("@/app/components/Process"));
const TrustBar = dynamic(() => import("@/app/components/TrustBar"));
const Services = dynamic(() => import("@/app/components/Services"));
const Projects = dynamic(() => import("@/app/components/Projects"));
const Gallery = dynamic(() => import("@/app/components/Gallery"));
const Testimonials = dynamic(() => import("@/app/components/Testimonials"));
const FAQ = dynamic(() => import("@/app/components/FAQ"));
const EstimateBanner = dynamic(() => import("@/app/components/EstimateBanner"));
const Contact = dynamic(() => import("@/app/components/Contact"));
const Footer = dynamic(() => import("@/app/components/Footer"));
const FloatingMessenger = dynamic(() => import("@/app/components/FloatingMessenger"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <TrustBar />
      <Services />
      <Projects />
      <Gallery />
      <Testimonials />
      <FAQ />
      <EstimateBanner />
      <Contact />
      <Footer />
      <FloatingMessenger />
    </>
  );
}
