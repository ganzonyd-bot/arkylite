import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import ImageLightbox from "@/app/components/ImageLightbox";
import Footer from "@/app/components/Footer";
import FloatingMessenger from "@/app/components/FloatingMessenger";

const IMAGES = Array.from({ length: 23 }, (_, i) => ({
  src: `/images/projects/project-${i + 1}.jpg`,
  alt: `Project photo ${i + 1}`,
}));

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#ECE9E6] min-h-screen pt-16 md:pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#7D7873] text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[#4A4743] mb-8"
          >
            ← Back to Home
          </Link>
          <h1 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-4">
            All Projects
          </h1>
          <p className="text-[#7D7873] max-w-xl mb-16 text-base">
            A complete collection of our completed projects across residential,
            commercial, and industrial sectors.
          </p>

          <ImageLightbox images={IMAGES} />
        </div>
      </main>
      <Footer />
      <FloatingMessenger />
    </>
  );
}
