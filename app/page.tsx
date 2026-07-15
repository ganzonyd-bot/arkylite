import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";

const Stats = dynamic(() => import("@/app/components/Stats"));
const About = dynamic(() => import("@/app/components/About"));
const Process = dynamic(() => import("@/app/components/Process"));
const Services = dynamic(() => import("@/app/components/Services"));
const TrustBar = dynamic(() => import("@/app/components/TrustBar"));
const Projects = dynamic(() => import("@/app/components/Projects"));
const Gallery = dynamic(() => import("@/app/components/Gallery"));
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
      <Stats />
      <About />
      <Process />
      <Services />
      <TrustBar />
      <Projects />
      <Gallery />
      <FAQ />
      <EstimateBanner />
      <Contact />
      <Footer />
      <FloatingMessenger />
    </>
  );
}
