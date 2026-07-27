import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  technologies,
  github,
  live,
  featured,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 lg:rounded-3xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {featured && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-semibold text-white shadow-lg sm:left-4 sm:top-4 sm:text-xs">
            ⭐ Featured
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-44 lg:h-52"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 sm:text-xs">
          {subtitle}
        </p>

        <h3 className="mt-2 text-lg font-bold text-white sm:text-xl lg:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400 lg:mt-4 lg:text-[15px] lg:leading-7">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2 lg:mt-5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium text-cyan-300 sm:px-3 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-2 sm:mt-6 sm:gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <FaGithub className="text-sm sm:text-base" />
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-500 px-3 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-cyan-600 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <FaExternalLinkAlt className="text-sm sm:text-base" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;