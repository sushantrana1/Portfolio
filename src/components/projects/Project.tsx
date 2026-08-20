import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import MediStock from "../../assets/projects/medistock.webp";
import RepairService from "../../assets/projects/repair_service.png";
import RecipeFinder from "../../assets/projects/recipe_finder.png";
import Weather from "../../assets/projects/weather.png";

const projects = [
  {
    title: "MediStock Inventory Management System",
    subtitle: "Academic Project",
    description:
      "A pharmacy inventory management system built with PHP and MySQL featuring medicine management, billing, suppliers, employees, sales tracking and reports.",
    image: MediStock,
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/sushantrana1/Medi-Stock",
    live: "#",
    featured: true,
  },

  {
    title: "Repair Service Website",
    subtitle: "Frontend Project",
    description:
      "A modern and responsive repair service website built with React, TypeScript and Tailwind CSS, featuring reusable components, smooth animations and a clean user interface.",
    image: RepairService,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sushantrana1/Frontend_Repair_Service",
    live: "https://frontend-repair-service.vercel.app/",
  },

  {
    title: "Recipe Finder",
    subtitle: "Frontend Project",
    description:
      "A responsive recipe discovery application that allows users to search recipes, explore meals and view detailed recipe information through a simple and modern interface.",
    image: RecipeFinder,
    technologies: ["React", "JavaScript", "Tailwind CSS", "API"],
    github: "https://github.com/sushantrana1/Recipe_Finder",
    live: "https://recipe-finder-three-zeta.vercel.app/",
  },

  {
    title: "Weather Forecast App",
    subtitle: "Frontend Project",
    description:
      "A responsive weather application that provides real-time weather information using a weather API, with a clean interface designed for both desktop and mobile devices.",
    image: Weather,
    technologies: ["HTML", "JavaScript", "Tailwind CSS", "Weather API"],
    github: "https://github.com/sushantrana1/Weather-App",
    live: "https://weather-app-lac-seven-79.vercel.app/",
  },
];

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-9 max-w-2xl text-center sm:mb-11"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-400 sm:px-4 sm:py-2 sm:text-sm">
            My Work
          </span>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            A selection of projects I've built while developing my skills in
            frontend and full-stack web development.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;