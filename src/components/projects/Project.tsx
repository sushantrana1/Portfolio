import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import MediStock from "../../assets/projects/medistock.webp";
import RepairService from "../../assets/projects/repair_service.png";
import Portfolio from "../../assets/projects/portfolio.png";
import Weather from "../../assets/projects/weather.png"

const projects = [
  {
    title: "MediStock Inventory Management System",
    subtitle: "Academic Project",
    description:
      "A complete Pharmacy Inventory Management System built with PHP, MySQL and JavaScript featuring billing, supplier, medicine management, customer records, employee management and sales reporting.",
    image: MediStock,
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/sushantrana1/Medi-Stock",
    live: "#",
    featured: true,
  },
  {
    title: "Repair Service Website",
    subtitle: "Frontend Project",
    description:
      "A modern responsive repair service website developed using React, TypeScript, Tailwind CSS and Framer Motion with smooth animations and reusable components.",
    image: RepairService,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/sushantrana1/Frontend_Repair_Service",
    live: "https://frontend-repair-service.vercel.app/",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    subtitle: "Personal Portfolio",
    description:
      "A premium portfolio showcasing projects, skills and experience with beautiful animations, responsive layouts and a modern dark UI.",
    image: Portfolio,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
  title: "Weather Forecast App",
  subtitle: "Personal Project",
  description:
    "A weather application built with Html and JavaScript that provides real-time weather conditions, location-based weather and using a weather API.",
  image: Weather, 
  technologies: [
    "HTML",
    "JavaScript",
    "Tailwind CSS",
    "Weather API",
  ],
  github: "https://github.com/sushantrana1/Weather-app",
  live: "https://weather-app-two-rouge-71.vercel.app/",
  featured: true,
},
];

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-22"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-lg font-semibold tracking-wide text-cyan-400 ">
            My Work
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
            Some of my best projects demonstrating full-stack development,
            responsive design, clean architecture, and modern UI/UX.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
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