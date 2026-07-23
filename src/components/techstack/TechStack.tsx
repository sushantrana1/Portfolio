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
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const techStack = [
  {
    name: "React",
    icon: <SiReact />,
    color: "text-cyan-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
  },
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
    icon: <VscCode  />,
    color: "text-blue-400",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-400",
  },
];

const TechStack = () => {
  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-22"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
         className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 
          px-4 py-2 text-lg font-semibold tracking-wide text-cyan-400 sm:text-lg">
            My Tech Stack
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
            I build fast, scalable and responsive web applications using
            modern technologies focused on performance, maintainability,
            and great user experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .45,
                delay: index * .05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="group relative flex min-h-[170px] flex-col justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4
               text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 
               hover:shadow-xl hover:shadow-cyan-500/10 sm:min-h-[190px] sm:rounded-3xl sm:p-6"
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                className={`relative z-10 mb-3 text-4xl sm:mb-5 sm:text-5xl ${tech.color}`}
              >
                {tech.icon}
              </motion.div>

              <h3 className="relative z-10 text-sm font-semibold text-white sm:text-base lg:text-lg">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;