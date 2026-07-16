"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageLightbox from "@/app/components/ImageLightbox";
import type { GalleryImage, VideoEntry } from "@/lib/get-gallery-images";

interface GalleryClientProps {
  images: GalleryImage[];
  videos: VideoEntry[];
}

function getRatio(index: number): string {
  const ratios = ["3/4", "1/1", "4/3", "3/4", "4/3", "1/1"];
  return ratios[index % ratios.length];
}

export default function GalleryClient({ images, videos }: GalleryClientProps) {
  const [activeTab, setActiveTab] = useState<"Pictures" | "Videos">("Pictures");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase transition-colors duration-200 hover:text-white mb-8"
      >
        ← Back to Home
      </Link>
      <h1 className="text-white text-4xl md:text-5xl font-semibold mb-4">
        Gallery
      </h1>

      <div className="flex gap-8 mb-12 border-b border-white/10">
        {(["Pictures", "Videos"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm tracking-widest uppercase transition-colors duration-200 ${
              activeTab === tab
                ? "text-white border-b-2 border-white"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Pictures" && (
        <>
          <p className="text-[#D6D2CD] max-w-xl mb-16 text-base">
            A visual look at our completed and ongoing work.
          </p>
          {images.length > 0 ? (
            <div
              className="columns-2 md:columns-3 lg:columns-4 gap-4"
              style={{ columnGap: "0.75rem" }}
            >
              {images.map((img, i) => (
                <div
                  key={img.src}
                  className="break-inside-avoid mb-3 overflow-hidden relative group rounded-sm cursor-pointer"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: getRatio(i) }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white text-xs tracking-widest uppercase">
                          {img.alt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/30 text-sm tracking-wider uppercase">
                No images added yet
              </p>
            </div>
          )}
        </>
      )}

      {activeTab === "Videos" && (
        <>
          <p className="text-[#D6D2CD] max-w-xl mb-16 text-base">
            Project walkthroughs, site updates, and more.
          </p>
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {videos.map((video, i) => (
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
          ) : (
            <div className="text-center py-20">
              <p className="text-white/30 text-sm tracking-wider uppercase">
                No videos added yet
              </p>
            </div>
          )}
        </>
      )}

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((current) =>
              current !== null
                ? current === 0
                  ? images.length - 1
                  : current - 1
                : 0
            )
          }
          onNext={() =>
            setLightboxIndex((current) =>
              current !== null
                ? current === images.length - 1
                  ? 0
                  : current + 1
                : 0
            )
          }
        />
      )}
    </>
  );
}
