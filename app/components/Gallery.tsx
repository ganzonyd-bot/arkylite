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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {IMAGES.slice(0, 10).map((img) => (
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
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/gallery"
              className="border-2 border-white/40 text-white/80 px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 hover:border-white hover:text-white hover:scale-[1.02]"
            >
              See All Projects
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
