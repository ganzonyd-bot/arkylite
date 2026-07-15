import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

interface GalleryItem {
  src: string;
  alt: string;
  span: string;
  type?: "image" | "video";
}

const ITEMS: GalleryItem[] = [
  { src: "/images/gallery/gallery-1.jpg", alt: "Project photo 1", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Project photo 2", span: "" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Project photo 3", span: "" },
  { src: "/images/gallery/gallery-4.jpg", alt: "Project photo 4", span: "" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Project photo 5", span: "" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Project photo 6", span: "" },
  { src: "/images/gallery/gallery-7.jpg", alt: "Project photo 7", span: "md:col-span-2" },
  { src: "/images/gallery/gallery-8.jpg", alt: "Project photo 8", span: "" },
  { src: "/images/gallery/gallery-9.jpg", alt: "Project photo 9", span: "" },
  { src: "/images/gallery/gallery-10.jpg", alt: "Project photo 10", span: "" },
  { src: "/images/gallery/gallery-11.jpg", alt: "Project photo 11", span: "" },
  { src: "/images/gallery/gallery-12.jpg", alt: "Project photo 12", span: "md:col-span-2" },
  { src: "/images/gallery/gallery-13.jpg", alt: "Project photo 13", span: "" },
  { src: "/images/gallery/gallery-14.jpg", alt: "Project photo 14", span: "" },
  { src: "/images/gallery/gallery-15.jpg", alt: "Project photo 15", span: "" },
  { src: "/images/gallery/gallery-16.jpg", alt: "Project photo 16", span: "" },
  { src: "/images/gallery/gallery-17.jpg", alt: "Project photo 17", span: "md:col-span-2" },
  { src: "/images/gallery/gallery-18.jpg", alt: "Project photo 18", span: "" },
  { src: "/images/gallery/gallery-19.jpg", alt: "Project photo 19", span: "" },
  { src: "/images/gallery/gallery-20.jpg", alt: "Project photo 20", span: "" },
  { src: "/images/gallery/gallery-21.jpg", alt: "Project photo 21", span: "" },
  { src: "/images/gallery/gallery-22.jpg", alt: "Project photo 22", span: "md:col-span-2" },
  { src: "/images/gallery/gallery-23.jpg", alt: "Project photo 23", span: "" },
  { src: "/images/gallery/gallery-24.jpg", alt: "Project photo 24", span: "" },
  { src: "/images/gallery/gallery-25.jpg", alt: "Project photo 25", span: "" },
  { src: "/images/gallery/gallery-26.jpg", alt: "Project photo 26", span: "" },
];

export default function Gallery() {
  const FEATURED: GalleryItem[] = [
    ...ITEMS.slice(0, 7),
    { src: "", alt: "Project Reel 1", span: "", type: "video" },
    { src: "", alt: "Project Reel 2", span: "", type: "video" },
    { src: "", alt: "Project Reel 3", span: "", type: "video" },
  ];

  return (
    <section id="gallery" className="bg-[#2B2926] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4 text-center">
            Gallery
          </h2>
          <p className="text-[#D6D2CD] text-center max-w-xl mx-auto mb-16 text-base">
            A visual look at our completed and ongoing work.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {FEATURED.map((item, i) =>
              item.type === "video" ? (
                <Link
                  key={`video-${i}`}
                  href="/gallery"
                  className="aspect-[4/3] overflow-hidden relative bg-black/60 flex items-center justify-center group"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="absolute bottom-2 left-2 text-white/50 text-[10px] tracking-widest uppercase group-hover:text-white/90 transition-colors duration-200">
                    Watch Reel
                  </p>
                </Link>
              ) : (
                <div
                  key={item.src}
                  className={`${item.span} aspect-[4/3] overflow-hidden relative group`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              )
            )}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/gallery"
              className="border-2 border-white/40 text-white/80 px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:border-white hover:text-white hover:scale-[1.02]"
            >
              See All Projects
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
