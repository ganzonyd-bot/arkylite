import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const PROJECTS = [
  { title: "Residential Project", tag: "Design + Build", image: "/images/projects/project-2.jpg" },
  { title: "Commercial Space", tag: "Architectural Design", image: "/images/projects/project-10.jpg" },
  { title: "Industrial Facility", tag: "Engineering Consultancy", image: "/images/projects/project-13.jpg" },
  { title: "Renovation Project", tag: "Construction", image: "/images/projects/project-16.jpg" },
  { title: "Equipment Installation", tag: "Supply & Delivery", image: "/images/projects/project-19.jpg" },
  { title: "Mixed-Use Development", tag: "Design + Build", image: "/images/projects/project-22.jpg" },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div className="group relative transition-all duration-500 ease-out hover:-translate-y-1">
      <div className="overflow-hidden relative aspect-[4/3] shadow-md transition-shadow duration-300 group-hover:shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-[#4A4743] text-[10px] tracking-widest uppercase px-2.5 py-1">
          {project.tag}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 mt-4">
        <h3 className="text-[#4A4743] text-base font-medium">
          {project.title}
        </h3>
        <a
          href="#contact"
          className="shrink-0 text-[#7D7873] text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[#4A4743]"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#ECE9E6] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <span className="section-number block text-[#D6D2CD]/30 text-8xl md:text-9xl font-bold leading-none mb-3 tracking-tight">
            05
          </span>
          <h2 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-4">
            Projects
          </h2>
          <p className="text-[#7D7873] max-w-2xl mb-16 text-base">
            A selection of completed projects across residential, commercial, and
            industrial sectors.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="border-2 border-[#4A4743]/40 text-[#4A4743]/80 px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 hover:border-[#4A4743] hover:text-[#4A4743] hover:scale-[1.02]"
            >
              See All Projects
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
