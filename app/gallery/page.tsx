import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
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
      <main className="bg-[#2B2926] min-h-screen pt-20 md:pt-24 pb-16">
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {IMAGES.map((img) => (
              <div
                key={img.src}
                className="aspect-[4/3] overflow-hidden relative group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingMessenger />
    </>
  );
}
