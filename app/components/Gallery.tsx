import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import { getGalleryImages, VIDEOS } from "@/lib/get-gallery-images";

const allImages = getGalleryImages();
const IMAGES = allImages.slice(0, 10);

const VIDEOS_FEATURED = VIDEOS.slice(0, 3);

function getRatio(index: number): string {
  const ratios = ["3/4", "1/1", "4/3", "3/4", "4/3", "1/1"];
  return ratios[index % ratios.length];
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#2B2926] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4 text-center">
            Gallery
          </h2>
          <p className="text-[#D6D2CD] text-center max-w-xl mx-auto mb-16 text-base">
            A visual look at our completed and ongoing work.
          </p>

          {/* Images - masonry layout */}
          <div className="gallery-stagger">
            <div
              className="columns-2 md:columns-3 gap-4"
              style={{ columnGap: "1rem" }}
            >
              {IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className="break-inside-avoid mb-4 overflow-hidden relative group rounded-sm"
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: getRatio(i) }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white text-xs tracking-widest uppercase">
                          Project {i + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos - polaroid cards */}
          <div className="mt-24">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-8 text-center">
              Project Videos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {VIDEOS_FEATURED.map((video, i) => (
                <div
                  key={i}
                  className="polaroid group"
                  style={{ "--rot": `${(i - 1) * 0.8}deg` } as React.CSSProperties}
                >
                  <div className="aspect-[9/16] overflow-hidden relative bg-black">
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=267`}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      loading="lazy"
                      title={video.title}
                    />

                  </div>
                  <p className="text-center text-xs mt-2 text-[#2B2926] font-medium tracking-wider truncate">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA banner */}
          <div className="flex justify-center mt-16">
            <Link
              href="/gallery"
              className="group relative inline-flex items-center gap-3 border border-white/20 text-white/80 px-10 py-5 text-xs tracking-widest uppercase transition-all duration-500 hover:border-white hover:text-white overflow-hidden"
            >
              <span className="relative z-10">View Full Gallery</span>
              <span className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
              <span className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
