import { motion } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaBookOpen,
  FaCertificate,
} from "react-icons/fa";
import AchievementCard from "../achievements/AchievementCard"

const highlights = [
  {
    icon: <FaRocket />,
    title: "10+ Projects Built",
    description:
      "Developed academic and personal full-stack projects using React, TypeScript, PHP, MySQL and the MERN Stack.",
  },
  {
    icon: <FaLaptopCode />,
    title: "MERN Stack Developer",
    description:
      "Building modern, scalable and responsive web applications with React, TypeScript, Node.js, Express and MongoDB.",
  },
  {
    icon: <FaBookOpen />,
    title: "Continuous Learner",
    description:
      "Passionate about learning AI, modern frontend technologies and writing clean, maintainable code.",
  },
];

const certifications = [
  {
    title: "MERN Stack Course",
    year: "2025",
  },
  {
    title: "Artificial Intelligence for Development",
    year: "2025",
  },
  {
    title: "Hardware & Networking Training",
    year: "2024",
  },
  {
    title: "Basic Computer Course",
    year: "2022",
  },
];

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-22"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 
          text-sm sm:text-sm md:text-sm font-semibold text-cyan-400">
            Highlights
          </span>

          <h2 className="mt-6 font-bold text-2xl sm:text-4xl md:text-4xl">
            Highlights & Certifications
          </h2>

          <p className="mt-5 text-slate-400 text-sm sm:text-base md:text-lg">
            My journey of learning, building modern applications and earning
            certifications that strengthen my software development skills.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {highlights.map((item, index) => (
              <AchievementCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * 0.15}
              />
            ))}
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl sm:p-6 lg:rounded-3xl lg:p-8"
          >
            <div className="mb-5 flex items-center gap-3 lg:mb-8">
              <div className="rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400 lg:rounded-xl lg:p-3">
                <FaCertificate className="text-lg lg:text-xl" />
              </div>

              <h3 className="text-xl font-bold text-white lg:text-2xl">
                Certifications
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 6,
                  }}
                  className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 p-3 transition-all hover:border-cyan-400/30 sm:p-4 lg:rounded-2xl lg:p-5"
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60 lg:h-3 lg:w-3" />

                    <div>
                      <h4 className="text-sm font-semibold text-white lg:text-base">
                        {cert.title}
                      </h4>

                      <p className="mt-0.5 text-xs text-slate-400 lg:mt-1 lg:text-sm">
                        Professional Training
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-400 lg:px-3 lg:text-sm">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;