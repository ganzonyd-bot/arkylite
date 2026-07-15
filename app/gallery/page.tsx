"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import ImageLightbox from "@/app/components/ImageLightbox";
import Footer from "@/app/components/Footer";
import FloatingMessenger from "@/app/components/FloatingMessenger";

const IMAGES = [
  ...Array.from({ length: 26 }, (_, i) => ({
    src: `/images/gallery/gallery-${i + 1}.jpg`,
    alt: `Gallery photo ${i + 1}`,
  })),
  { src: "/images/gallery/742362660_122173776932730152_2039494084442974680_n.jpg", alt: "Gallery photo 27" },
  { src: "/images/gallery/742429441_122173776374730152_8013232902253390532_n.jpg", alt: "Gallery photo 28" },
  { src: "/images/gallery/742684223_122173776344730152_6205196953189067169_n.jpg", alt: "Gallery photo 29" },
  { src: "/images/gallery/742771221_122173776098730152_3134179668470169620_n.jpg", alt: "Gallery photo 30" },
  { src: "/images/gallery/742859103_122173776980730152_3815781710115326169_n.jpg", alt: "Gallery photo 31" },
  { src: "/images/gallery/743425423_122173777076730152_4849914365183130715_n.jpg", alt: "Gallery photo 32" },
  { src: "/images/gallery/743497740_122173777634730152_1397926414788969398_n.jpg", alt: "Gallery photo 33" },
  { src: "/images/gallery/743633195_122173777616730152_8166320623494690150_n.jpg", alt: "Gallery photo 34" },
  { src: "/images/gallery/743777763_122173776926730152_2156799455612407488_n.jpg", alt: "Gallery photo 35" },
  { src: "/images/gallery/744488387_122173776500730152_3477665604738018064_n.jpg", alt: "Gallery photo 36" },
];

interface VideoEntry {
  url: string;
  title: string;
}

const VIDEOS: VideoEntry[] = [
  { url: "https://web.facebook.com/reel/1893603844616152/", title: "Project Reel 1" },
  { url: "https://web.facebook.com/reel/1005261031918696/", title: "Project Reel 2" },
  { url: "https://web.facebook.com/reel/2598454797263565/", title: "Project Reel 3" },
  { url: "https://web.facebook.com/reel/868604082339294/", title: "Project Reel 4" },
  { url: "https://web.facebook.com/reel/1554074339413022/", title: "Project Reel 5" },
  { url: "https://web.facebook.com/reel/2066463024302351/", title: "Project Reel 6" },
  { url: "https://web.facebook.com/reel/2145247052875047/", title: "Project Reel 7" },
  { url: "https://web.facebook.com/reel/1517915193217625/", title: "Project Reel 8" },
  { url: "https://web.facebook.com/reel/2526465537832981/", title: "Project Reel 9" },
  { url: "https://web.facebook.com/reel/1015512947745483/", title: "Project Reel 10" },
  { url: "https://web.facebook.com/reel/1024834100281107/", title: "Project Reel 11" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"Pictures" | "Videos">("Pictures");

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
              <ImageLightbox images={IMAGES} />
            </>
          )}

          {activeTab === "Videos" && (
            <>
              <p className="text-[#D6D2CD] max-w-xl mb-16 text-base">
                Project walkthroughs, site updates, and more.
              </p>
              {VIDEOS.length > 0 ? (
                <div className="max-w-sm mx-auto space-y-8">
                  {VIDEOS.map((video, i) => (
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
              ) : (
                <div className="text-center py-20">
                  <p className="text-white/30 text-sm tracking-wider uppercase">
                    No videos added yet
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
      <FloatingMessenger />
    </>
  );
}
