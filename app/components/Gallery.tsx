import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const IMAGES = [
  { src: "/images/gallery/b35af487-d751-452a-be98-2ff8420c542b.jpg", alt: "Project photo 1", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery/83af6d4e-6d88-4fff-92d9-22e937331dd5.jpg", alt: "Project photo 2", span: "" },
  { src: "/images/gallery/cb4e714f-3aab-42dd-a1b3-009724575091.jpg", alt: "Project photo 3", span: "" },
  { src: "/images/gallery/73473f6d-8598-4743-8e04-86d062a0d2f2.jpg", alt: "Project photo 4", span: "" },
  { src: "/images/gallery/f67fa57a-ba6e-466d-afcf-942ca1251623.jpg", alt: "Project photo 5", span: "" },
  { src: "/images/gallery/426ed81d-221a-489e-9161-3f03e507112a.jpg", alt: "Project photo 6", span: "" },
  { src: "/images/gallery/bfc57ffa-db43-4a80-a049-b412ee22943e.jpg", alt: "Project photo 7", span: "md:col-span-2" },
  { src: "/images/gallery/2e9bcaad-06ae-4b8d-8f58-bfea6f7486c3.jpg", alt: "Project photo 8", span: "" },
  { src: "/images/gallery/11569caf-84c4-417c-92b9-d182e2218bce.jpg", alt: "Project photo 9", span: "" },
  { src: "/images/gallery/392bf38a-ea2f-411e-81de-1826022936ec.jpg", alt: "Project photo 10", span: "" },
];

const VIDEOS_FEATURED = [
  { url: "https://web.facebook.com/reel/1024834100281107/", title: "Project Reel 11" },
  { url: "https://web.facebook.com/reel/1015512947745483/", title: "Project Reel 10" },
  { url: "https://web.facebook.com/reel/2526465537832981/", title: "Project Reel 9" },
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
              Open Gallery
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
