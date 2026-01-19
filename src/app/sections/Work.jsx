import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Digital Lab",
    description: "Digital transformation agency website",
    image: "/assets/projects/digitallabsite.png",
    link: "/projects/digitallab",
    color: "#1a1a1a", // Example card background color
  },
  {
    id: 2,
    title: "File Fleet",
    description: "SaaS file management platform",
    image: "/assets/projects/filefleetsite.png",
    link: "/projects/filefleet",
    color: "#222222",
  },
  {
    id: 3,
    title: "Quick AI",
    description: "AI-powered content generation tool",
    image: "/assets/projects/quickaisite.png",
    link: "/projects/quickai",
    color: "#2a2a2a",
  },
  {
    id: 4,
    title: "Talentro",
    description: "HR & Recruitment solution",
    image: "/assets/projects/talentrosite.png",
    link: "/projects/talentro",
    color: "#333333",
  },
];

const Work = () => {
  return (
    <section id="work" className="w-full py-20 flex flex-col items-center">
        <h2 className="text-6xl font-semibold mb-10">Selected Work</h2>
      <div className="w-full max-w-2xl px-4 flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="sticky top-28 w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 flex flex-col shadow-2xl"
            style={{ 
                backgroundColor: "#0a0a0a",
                top: `calc(100px + ${index * 40}px)` 
            }}
          >
            {/* Header Content */}
            <div className="p-6 flex flex-row justify-between items-center gap-4 shrink-0">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400 text-xs max-w-xs">{project.description}</p>
              </div>
              
              <Link 
                href={project.link}
                className="group flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-teal-300 transition-colors"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Image Container */}
            <div className="flex-1 relative w-full overflow-hidden bg-neutral-900/50 mx-auto mt-0">
               <div className="absolute inset-x-4 top-0 bottom-0 rounded-t-lg overflow-hidden border-t border-x border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
               </div>
            </div>
          </div>
        ))}
        {/* Spacer to allow the last card to be scrolled past fully if needed, or simply margin-bottom on section */}
      </div>
    </section>
  );
};

export default Work;
