import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        level: 98,
        color: "text-orange-500",
      },
       {
        name: "CSS3",
        icon: <SiCss />,
        level: 95,
        color: "text-blue-400",
      },
       {
        name: "JavaScript",
        icon: <SiJavascript />,
        level: 90,
        color: "text-yellow-400",
      },
      {
        name: "React",
        icon: <SiReact />,
        level: 90,
        color: "text-cyan-400",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 85,
        color: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 92,
        color: "text-sky-400",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        level: 80,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: 80,
        color: "text-gray-300",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: 78,
        color: "text-green-400",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        level: 88,
        color: "text-blue-500",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: <SiGit />,
        level: 88,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: <SiGithub />,
        level: 90,
        color: "text-white",
      },
      {
        name: "VS Code",
        icon: <VscCode />,
        level: 95,
        color: "text-blue-500",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        level: 85,
        color: "text-orange-400",
      },
    ],
  },
]
const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-22"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-lg font-semibold text-cyan-400">
            My Skills
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Technologies and tools I use to build fast, scalable and modern web
            applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 backdrop-blur-xl"
            >
              <h3 className="mb-8 text-2xl font-bold text-white">
                {group.title}
              </h3>

              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl ${skill.color}`}>
                          {skill.icon}
                        </span>

                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-sm text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;