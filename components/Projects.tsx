import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Game Hub",
    description:
      "A modern, interactive web application built using React, TypeScript, and modern UI libraries to help users discover, browse, and track their favorite games. It provides real-time game details, reviews, and platform-specific information with a seamless user experience.",
    image: "/gamehub.png",
    github: "https://github.com/knsxw/GameHub",
    live: "https://example.com",
  },
  {
    title: "Spreadsheet",
    description:
      "A web-based spreadsheet application built using vanilla JavaScript, designed to provide essential spreadsheet functionalities without relying on external frameworks or libraries. The application allows users to edit cells, apply formulas, navigate using the keyboard, and persist data efficiently.",
    image: "/spreadsheet.png",
    github: "https://github.com/knsxw/Spreadsheet",
    live: "https://spreadsheet.ksx.me",
  },
  {
    title: "IP Address Tracker",
    description:
      "A weather app that displays current and forecasted weather data",
    image: "/iptracker.png",
    github: "https://github.com/knsxw/IpAddressTracker",
    live: "https://iptracker.ksx.me/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
