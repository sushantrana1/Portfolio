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
  SiPostgresql,
  SiNextdotjs,
  SiBootstrap,
  SiPhp,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and modern user interfaces.",
    skills: [
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        level: 95,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: <SiCss />,
        level: 92,
        color: "text-blue-400",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        level: 88,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 82,
        color: "text-blue-500",
      },
      {
        name: "React",
        icon: <SiReact />,
        level: 88,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        level: 75,
        color: "text-white",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 90,
        color: "text-sky-400",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        level: 82,
        color: "text-purple-400",
      },
    ],
  },

  {
    title: "Backend & Database",
    description:
      "Developing APIs, server-side applications, and data-driven systems.",
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
        level: 78,
        color: "text-slate-300",
      },
      {
        name: "PHP",
        icon: <SiPhp />,
        level: 78,
        color: "text-indigo-400",
      },
      {
        name: "Python",
        icon: <SiPython />,
        level: 72,
        color: "text-yellow-300",
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
        level: 85,
        color: "text-blue-500",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        level: 70,
        color: "text-sky-400",
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description:
      "Managing development, testing, version control, and collaboration.",
    skills: [
      {
        name: "Git",
        icon: <SiGit />,
        level: 86,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: <SiGithub />,
        level: 88,
        color: "text-white",
      },
      {
        name: "VS Code",
        icon: <VscCode />,
        level: 94,
        color: "text-blue-500",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        level: 82,
        color: "text-orange-400",
      },
    ],
  },
];

const coreStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-cyan-00/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-64 w-64 rounded-full bg-blue-00/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
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
          className="mx-auto max-w-7xl text-center"
        >
          {/* Badge */}

          <motion.span
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            My Skills
          </motion.span>

          {/* Heading */}

          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-7xl text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
            A practical set of technologies and tools I use across frontend,
            backend, databases, development, and application workflows.
          </p>
        </motion.div>

        {/* =========================
            SKILL GROUPS
        ========================== */}

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: groupIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/5 sm:p-5 lg:p-6"
            >
              {/* Animated Top Border */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + groupIndex * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent"
              />

              {/* Hover Glow */}

              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/5 blur-[50px] transition-all duration-500 group-hover:bg-cyan-400/10" />

              <div className="relative">
                {/* Category Header */}

                <div className="mb-5 sm:mb-6">
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {group.title}
                  </h3>

                  <p className="mt-1 max-w-[280px] text-[11px] leading-5 text-slate-500 sm:text-xs">
                    {group.description}
                  </p>
                </div>

                {/* Skills */}

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-1 sm:gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15 + skillIndex * 0.04,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="group/skill rounded-xl border border-slate-800/80 bg-slate-950/40 p-2.5 transition-all duration-300 hover:border-slate-700 hover:bg-slate-950/80 sm:p-3"
                    >
                      {/* Skill Name */}

                      <div className="flex items-center gap-2">
                        <span
                          className={`shrink-0 text-base sm:text-lg ${skill.color}`}
                        >
                          {skill.icon}
                        </span>

                        <span className="truncate text-[10px] font-medium text-slate-200 sm:text-[13px]">
                          {skill.name}
                        </span>
                      </div>

                      {/* Skill Progress */}

                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          transition={{
                            duration: 0.9,
                            delay: 0.25 + skillIndex * 0.04,
                            ease: "easeOut",
                          }}
                          viewport={{
                            once: true,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================
            CORE STACK
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-10 max-w-5xl border-t border-slate-800 pt-6 sm:mt-12 sm:pt-7"
        >
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Core Stack
            </span>

            <div className="hidden h-4 w-px bg-slate-800 sm:block" />

            <div className="flex flex-wrap items-center justify-center gap-2">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-[10px] font-medium text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300 sm:px-3 sm:py-1.5 sm:text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Divider */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1.5,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-10 h-px max-w-5xl origin-center bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default Skills;

