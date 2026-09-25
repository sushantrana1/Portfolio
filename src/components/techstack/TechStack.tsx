import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiHtml5,
  SiNextdotjs,
  SiBootstrap,
  SiPhp,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";

type Tech = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const techStack: Tech[] = [
  // Frontend
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "text-purple-500",
  },

  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "PHP",
    icon: <SiPhp />,
    color: "text-indigo-400",
  },
  {
    name: "Python",
    icon: <SiPython />,
    color: "text-yellow-400",
  },

  // Databases
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-400",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-sky-400",
  },

  // Tools
  {
    name: "Git",
    icon: <SiGit />,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    color: "text-white",
  },
  {
    name: "VS Code",
    icon: <VscCode />,
    color: "text-blue-400",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-400",
  },
];

// Duplicate technologies for a seamless marquee loop
const rowOne = [...techStack, ...techStack];

const rowTwo = [
  ...techStack.slice(9),
  ...techStack.slice(0, 9),
  ...techStack.slice(9),
  ...techStack.slice(0, 9),
];

const TechItem = ({ tech }: { tech: Tech }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.06,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      className="group flex shrink-0 items-center gap-2.5 rounded-full border border-slate-800/80 bg-slate-900/80 px-4 py-2.5 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800/90 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] sm:gap-3 sm:px-5 sm:py-3"
    >
      {/* Icon */}
      <span
        className={`text-lg transition-transform duration-300 group-hover:scale-110 sm:text-xl ${tech.color}`}
      >
        {tech.icon}
      </span>

      {/* Name */}
      <span className="whitespace-nowrap text-xs font-semibold text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
        {tech.name}
      </span>

      {/* Small indicator */}
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/30 transition-all duration-300 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-00/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-00/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            SECTION HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mx-auto mb-8 max-w-2xl px-4 text-center sm:mb-10 sm:px-6 lg:px-8"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            My Tech Stack
          </motion.span>

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-7xl text-sm leading-6 text-slate-400 sm:text-base">
            Technologies and tools I use to build modern, scalable, and
            responsive applications.
          </p>
        </motion.div>

        {/* =========================
            MARQUEE
        ========================== */}
        <div className="relative space-y-3 overflow-hidden sm:space-y-4">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-14 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent sm:w-24 lg:w-36" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-14 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent sm:w-24 lg:w-36" />

          {/* =========================
              ROW 1
              RIGHT → LEFT
          ========================== */}
          <div className="marquee">
            <div className="marquee-track marquee-left">
              {rowOne.map((tech, index) => (
                <TechItem
                  key={`row-one-${tech.name}-${index}`}
                  tech={tech}
                />
              ))}
            </div>
          </div>

          {/* =========================
              ROW 2
              LEFT → RIGHT
          ========================== */}
          <div className="marquee">
            <div className="marquee-track marquee-right">
              {rowTwo.map((tech, index) => (
                <TechItem
                  key={`row-two-${tech.name}-${index}`}
                  tech={tech}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-7 text-center text-xs text-slate-600 sm:mt-9 sm:text-sm"
        >
          Always learning. Always building. Always improving.
        </motion.p>
      </div>

      {/* =========================
          MARQUEE ANIMATION
      ========================== */}
      <style>{`
        .marquee {
          display: flex;
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 0.75rem;
        }

        .marquee-left {
          animation: marqueeLeft 34s linear infinite;
        }

        .marquee-right {
          animation: marqueeRight 38s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (min-width: 640px) {
          .marquee-track {
            gap: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>

       {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 h-px max-w-5xl origin-center bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        />
    </section>
  );
};

export default TechStack;
