import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import ImageLightbox from "@/app/components/ImageLightbox";
import Footer from "@/app/components/Footer";
import FloatingMessenger from "@/app/components/FloatingMessenger";

const IMAGES = Array.from({ length: 23 }, (_, i) => ({
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  alt: `Gallery photo ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#2B2926] min-h-screen pt-16 md:pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase transition-colors duration-200 hover:text-white mb-8"
          >
            ← Back to Home
          </Link>
          <h1 className="text-white text-4xl md:text-5xl font-semibold mb-4">
            Gallery
          </h1>
          <p className="text-[#D6D2CD] max-w-xl mb-16 text-base">
            A visual look at our completed and ongoing work.
          </p>

          <ImageLightbox images={IMAGES} />
        </div>
      </main>
      <Footer />
      <FloatingMessenger />
    </>
  );
}
