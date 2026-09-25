import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";

import RecipeFinder from "../../assets/projects/recipe_finder.png";

import KhanaGo from "../../assets/projects/khanago.png";
import SafaSahar from "../../assets/projects/safa_sahar.png";
import SkillSwap from "../../assets/projects/skillswap.png";
import Ecommerce from "../../assets/projects/ecommerce.png";
import MediStock from "../../assets/projects/medistock.webp";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  technologies: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "KhanaGo",
    subtitle: "Food Delivery App",
    description:
      "A full stack food delivery application where users can explore food, manage orders, and interact with a restaurant-based delivery system.",
    image: KhanaGo,
    technologies: [
      "React",
      "Axios",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    github: "https://github.com/sushantrana1/KhanaGo-Food-Delivery",
    live: "https://khana-go-food-delivery.vercel.app/",
  },

  {
    title: "Safa Sahar",
    subtitle: "Smart City App",
    description:
      "A full stack smart city application featuring interactive maps, data visualization, secure authentication, and practical city-related features designed to provide information.",
    image: SafaSahar,
    technologies: [
      "React",
      "Axios",
      "Leaflet",
      "Recharts",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/sushantrana1/Safa_Sahar_App",
    live: "https://safa-sahar-project.vercel.app/login",
  },

  {
    title: "SkillSwap",
    subtitle: "Skill Sharing Platform",
    description:
      "A full stack platform designed to connect users, exchange skills, and support real-time communication through an interactive web application.",
    image: SkillSwap,
    technologies: [
      "React",
      "Tailwind CSS",
      "Axios",
      "Socket.IO",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/sushantrana1/SkillSwap_App",
    live: "https://skill-swap-project-mu.vercel.app/",
  },

  {
    title: "Recipe Finder",
    subtitle: "Recipe App",
    description:
      "A responsive recipe discovery application where users can search recipes, explore meals, and view recipe information through a clean interface.",
    image: RecipeFinder,
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "React Router",
    ],
    github: "https://github.com/sushantrana1/Recipe_Finder",
    live: "https://recipe-finder-three-zeta.vercel.app/",
  },
  {
    title: "E-Commerce",
    subtitle: "Online Shopping",
    description:
      "A responsive e-commerce application focused on product browsing, navigation, and a clean shopping experience across different screen sizes.",
    image: Ecommerce,
    technologies: ["React", "Tailwind CSS", "React Router", "React Icons"],
    github: "https://github.com/sushantrana1/E-commerce-",
    live: "https://e-commerce-three-zeta-51.vercel.app/",
  },

  {
    title: "MediStock",
    subtitle: "PMS / Inventory System",
    description:
      "A pharmacy management and inventory system designed to manage medicines, suppliers, employees, billing, sales, stock levels, and reports.",
    image: MediStock,
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/sushantrana1/Medi-Stock",
    live: "#",
  },
];

const Projects = () => {
  const [showOtherProjects, setShowOtherProjects] = useState(false);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-100px] top-20 h-64 w-64 rounded-full bg-cyan-500/5 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-10 right-[-100px] h-64 w-64 rounded-full bg-blue-500/5 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-400 sm:px-4 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            My Work
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem]">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-7xl text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
            A selection of projects I've built while working with modern
            frontend, backend, database, and full stack technologies.
          </p>
        </motion.div>
        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className={`
                group overflow-hidden rounded-2xl border border-slate-800/80
                bg-slate-900/40 backdrop-blur-xl transition-all duration-300
                hover:-translate-y-1 hover:border-cyan-400/25
                hover:bg-slate-900/60 hover:shadow-xl hover:shadow-cyan-500/5

                ${
                  index >= 3
                    ? showOtherProjects
                      ? "block"
                      : "hidden sm:block"
                    : "block"
                }
              `}
            >
              {/* Project Image */}
              <div className="relative h-32 overflow-hidden sm:h-40 lg:h-44">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
                    <div className="absolute h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-lg font-bold text-cyan-400 sm:h-16 sm:w-16 sm:text-xl">
                      {project.title.charAt(0)}
                    </div>

                    <span className="absolute bottom-3 left-3 text-[8px] font-medium uppercase tracking-wider text-slate-600">
                      Project Preview
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3.5 sm:p-5">
                {/* Subtitle */}
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-400 sm:text-[10px]">
                  {project.subtitle}
                </p>

                {/* Title */}
                <h3 className="mt-1.5 text-base font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[11px] leading-5 text-slate-400 sm:text-xs sm:leading-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-700/80 bg-slate-950/60 px-2 py-1 text-[8px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300 sm:px-2.5 sm:text-[9px]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/50 px-2.5 py-2 text-[9px] font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300 sm:text-[10px]"
                  >
                    <FaGithub className="text-xs sm:text-sm" />
                    GitHub
                  </a>

                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-2.5 py-2 text-[9px] font-semibold text-white shadow-md shadow-cyan-500/10 transition-all duration-300 hover:shadow-cyan-500/20 sm:text-[10px]"
                    >
                      <FaExternalLinkAlt className="text-[9px] sm:text-[10px]" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/50 px-2.5 py-2 text-[9px] font-medium text-slate-600 sm:text-[10px]"
                    >
                      <FaExternalLinkAlt className="text-[9px]" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects Button - Mobile Only */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowOtherProjects((prev) => !prev)}
            className="group inline-flex items-center gap-2 border-b border-cyan-400/20 pb-1.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300"
          >
            <span>{showOtherProjects ? "Show Less" : "Other Projects"}</span>

            <span
              className={`text-lg leading-none text-cyan-400 transition-transform duration-300 ${
                showOtherProjects
                  ? "rotate-[-90deg]"
                  : "translate-x-0 group-hover:translate-x-1"
              }`}
            >
              →
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1.5, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 h-px max-w-4xl origin-center bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
      />
    </section>
  );
};

export default Projects;
