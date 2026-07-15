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
  { src: "/images/gallery/743633195_122173777616730152_8166320623494690150_n.jpg", alt: "Gallery photo 27" },
  { src: "/images/gallery/743497740_122173777634730152_1397926414788969398_n.jpg", alt: "Gallery photo 28" },
  { src: "/images/gallery/743425423_122173777076730152_4849914365183130715_n.jpg", alt: "Gallery photo 29" },
  { src: "/images/gallery/743777763_122173776926730152_2156799455612407488_n.jpg", alt: "Gallery photo 30" },
  { src: "/images/gallery/742859103_122173776980730152_3815781710115326169_n.jpg", alt: "Gallery photo 31" },
  { src: "/images/gallery/742362660_122173776932730152_2039494084442974680_n.jpg", alt: "Gallery photo 32" },
  { src: "/images/gallery/744488387_122173776500730152_3477665604738018064_n.jpg", alt: "Gallery photo 33" },
  { src: "/images/gallery/742684223_122173776344730152_6205196953189067169_n.jpg", alt: "Gallery photo 34" },
  { src: "/images/gallery/742429441_122173776374730152_8013232902253390532_n.jpg", alt: "Gallery photo 35" },
  { src: "/images/gallery/742771221_122173776098730152_3134179668470169620_n.jpg", alt: "Gallery photo 36" },
  { src: "/images/gallery/9449cbf8-bb7f-44cb-af68-52918d6b68a5.jpg", alt: "Gallery photo 37" },
  { src: "/images/gallery/5ad3cfa1-e5d1-4b7e-a54c-b3138b539ae8.jpg", alt: "Gallery photo 38" },
  { src: "/images/gallery/44322de9-45b2-4c32-bfae-cbed3a40de30.jpg", alt: "Gallery photo 39" },
  { src: "/images/gallery/6c8b6591-fdc0-4d17-8e82-95c974368229.jpg", alt: "Gallery photo 40" },
  { src: "/images/gallery/90dd8d43-2dfb-4046-a743-4e1f3114a153.jpg", alt: "Gallery photo 41" },
  { src: "/images/gallery/f76891ae-59ac-4548-bdff-b75e16d4690c.jpg", alt: "Gallery photo 42" },
  { src: "/images/gallery/b2193adf-5eed-4fc9-8e36-5cf184bb0bce.jpg", alt: "Gallery photo 43" },
  { src: "/images/gallery/961bbaa1-9259-4272-8539-9be45eac5697.jpg", alt: "Gallery photo 44" },
  { src: "/images/gallery/950ddef3-c2d1-4da9-b5eb-8a17d5c3f09b.jpg", alt: "Gallery photo 45" },
  { src: "/images/gallery/7f80f70c-a504-4700-8076-8682f38d9101.jpg", alt: "Gallery photo 46" },
  { src: "/images/gallery/845f2098-6767-42cc-9e32-6d601c67ad1b.jpg", alt: "Gallery photo 47" },
  { src: "/images/gallery/abe76c3b-1790-4732-9da9-96c6ed0a04d0.jpg", alt: "Gallery photo 48" },
  { src: "/images/gallery/f427f456-9aab-4cf7-91a0-2200cebe60f1.jpg", alt: "Gallery photo 49" },
  { src: "/images/gallery/4847c13a-9cea-4e8d-a630-dbaffafa30e8.jpg", alt: "Gallery photo 50" },
  { src: "/images/gallery/9ea69ad0-c3ad-4838-8a39-922224b98033.jpg", alt: "Gallery photo 51" },
  { src: "/images/gallery/2b86a220-9951-424b-973e-f03609bb5c02.jpg", alt: "Gallery photo 52" },
  { src: "/images/gallery/4130fcdd-e9a2-4095-86e4-afbbbd272b7d.jpg", alt: "Gallery photo 53" },
  { src: "/images/gallery/26449bf1-3953-4f83-b848-b91c545fc93a.jpg", alt: "Gallery photo 54" },
  { src: "/images/gallery/b21cc88c-8dc9-4564-a41b-aaf28aa53843.jpg", alt: "Gallery photo 55" },
  { src: "/images/gallery/392bf38a-ea2f-411e-81de-1826022936ec.jpg", alt: "Gallery photo 56" },
  { src: "/images/gallery/11569caf-84c4-417c-92b9-d182e2218bce.jpg", alt: "Gallery photo 57" },
  { src: "/images/gallery/2e9bcaad-06ae-4b8d-8f58-bfea6f7486c3.jpg", alt: "Gallery photo 58" },
  { src: "/images/gallery/bfc57ffa-db43-4a80-a049-b412ee22943e.jpg", alt: "Gallery photo 59" },
  { src: "/images/gallery/426ed81d-221a-489e-9161-3f03e507112a.jpg", alt: "Gallery photo 60" },
  { src: "/images/gallery/f67fa57a-ba6e-466d-afcf-942ca1251623.jpg", alt: "Gallery photo 61" },
  { src: "/images/gallery/73473f6d-8598-4743-8e04-86d062a0d2f2.jpg", alt: "Gallery photo 62" },
  { src: "/images/gallery/cb4e714f-3aab-42dd-a1b3-009724575091.jpg", alt: "Gallery photo 63" },
  { src: "/images/gallery/83af6d4e-6d88-4fff-92d9-22e937331dd5.jpg", alt: "Gallery photo 64" },
  { src: "/images/gallery/b35af487-d751-452a-be98-2ff8420c542b.jpg", alt: "Gallery photo 65" },
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
