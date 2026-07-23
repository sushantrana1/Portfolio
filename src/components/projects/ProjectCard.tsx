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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {featured && (
          <span className="absolute left-4 top-4 z-20 rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
            ⭐ Featured
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-60 md:h-64"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          {subtitle}
        </p>

        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-white transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-600"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;