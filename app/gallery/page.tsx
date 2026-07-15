"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import ImageLightbox from "@/app/components/ImageLightbox";
import Footer from "@/app/components/Footer";
import FloatingMessenger from "@/app/components/FloatingMessenger";

const IMAGES = Array.from({ length: 23 }, (_, i) => ({
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  alt: `Gallery photo ${i + 1}`,
}));

interface VideoEntry {
  url: string;
  title: string;
}

const VIDEOS: VideoEntry[] = [
  { url: "https://web.facebook.com/share/r/14pyzd31yQc/", title: "Project Reel 1" },
  { url: "https://web.facebook.com/share/v/1EdeADrAfY/", title: "Project Video 2" },
  { url: "https://web.facebook.com/share/v/197JKZVBwZ/", title: "Project Video 3" },
  { url: "https://web.facebook.com/share/v/1DKGR5tv1n/", title: "Project Video 4" },
  { url: "https://web.facebook.com/share/v/19K5TABNuS/", title: "Project Video 5" },
  { url: "https://web.facebook.com/share/r/1GyWa19f23/", title: "Project Reel 6" },
  { url: "https://web.facebook.com/share/r/19EjbLYxVN/", title: "Project Reel 7" },
  { url: "https://web.facebook.com/share/r/1EAHUFdDy5/", title: "Project Reel 8" },
  { url: "https://web.facebook.com/share/r/1dW7QyzxvM/", title: "Project Reel 9" },
  { url: "https://web.facebook.com/share/r/18JqBEmuhd/", title: "Project Reel 10" },
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {VIDEOS.map((video, i) => (
                    <div key={i} className="aspect-video overflow-hidden relative bg-black/50">
                      <iframe
                        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false`}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
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
