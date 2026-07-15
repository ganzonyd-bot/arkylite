import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const IMAGES = [
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
];

const VIDEOS_FEATURED = [
  { url: "https://web.facebook.com/reel/1893603844616152/", title: "Project Reel 1" },
  { url: "https://web.facebook.com/reel/1005261031918696/", title: "Project Reel 2" },
  { url: "https://web.facebook.com/reel/2598454797263565/", title: "Project Reel 3" },
];

export default function Gallery() {
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

          <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
            Images
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`${img.span} aspect-[4/3] overflow-hidden relative group`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
              Videos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {VIDEOS_FEATURED.map((video, i) => (
                <div key={i} className="aspect-[9/16] overflow-hidden relative bg-black/50">
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=267`}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                    title={video.title}
                  />
                </div>
              ))}
            </div>
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
