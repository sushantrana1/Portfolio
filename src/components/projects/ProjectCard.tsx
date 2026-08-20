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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {featured && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-cyan-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
            Featured
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-36 lg:h-40"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Subtitle */}
        <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 sm:text-xs">
          {subtitle}
        </p>

        {/* Title */}
        <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 line-clamp-3 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium text-cyan-300 sm:text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-700 px-3 py-2 text-[11px] font-medium text-white transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 sm:gap-2 sm:py-2.5 sm:text-xs"
          >
            <FaGithub className="text-xs sm:text-sm" />
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-2 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-cyan-600 sm:gap-2 sm:py-2.5 sm:text-xs"
          >
            <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;