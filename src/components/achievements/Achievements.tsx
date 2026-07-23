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
      className="relative overflow-hidden bg-slate-950 py-20 lg:py-22"
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
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-lg font-semibold text-cyan-400">
            Highlights
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Highlights & Certifications
          </h2>

          <p className="mt-5 text-slate-400 sm:text-lg">
            My journey of learning, building modern applications and earning
            certifications that strengthen my software development skills.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT */}

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <AchievementCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * .15}
              />
            ))}
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <FaCertificate />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * .12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 6,
                  }}
                  className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition-all hover:border-cyan-400/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />

                    <div>
                      <h4 className="font-semibold text-white">
                        {cert.title}
                      </h4>

                      <p className="mt-1 text-sm text-slate-400">
                        Professional Training
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-400">
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