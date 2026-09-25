import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

const education = [
  {
    title: "Bachelor of Information Management (BIM)",
    institute: "Sudur Paschimanchal Campus",
    university: "Tribhuvan University",
    duration: "2022 – 2026",
    status: "Completed",
    icon: FaGraduationCap,
    color: "cyan",
    description:
      "Focused on web development, database systems, software engineering, and modern full stack development.",
    technologies: ["Web Development", "Databases", "MERN Stack"],
  },
  {
    title: "+2 in Commerce",
    institute: "National Academy of Science and Technology (NAST)",
    university: "",
    duration: "2077 – 2079",
    status: "Completed",
    icon: FaUniversity,
    color: "purple",
    description:
      "Studied commerce and computer subjects while developing analytical, logical, and problem-solving skills.",
    technologies: ["Commerce", "Computer Studies", "Analytics"],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-400">
            <FaGraduationCap />
            My Education
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem]">
            Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-7xl text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
            My academic background has built a strong foundation in information
            management, software development, databases, and modern technology.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12">
          {/* Vertical Line */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/30 to-purple-400/40 sm:left-[9px]" />

          <div className="space-y-10 sm:space-y-12">
            {education.map((item, index) => {
              const Icon = item.icon;
              const isCyan = item.color === "cyan";

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative pl-9 sm:pl-11"
                >
                  {/* Timeline Dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.15 + index * 0.12,
                    }}
                    viewport={{ once: true }}
                    className={`absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full ring-4 ring-slate-950 ${
                      isCyan ? "bg-cyan-400" : "bg-purple-400"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                  </motion.span>

                  {/* Top Row */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={`text-sm sm:text-base ${
                          isCyan ? "text-cyan-400" : "text-purple-400"
                        }`}
                      />

                      <h3 className="text-base font-bold text-white sm:text-lg">
                        {item.title}
                      </h3>
                    </div>

                    {/* Status */}
                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full text-[10px] font-medium ${
                        isCyan ? "text-cyan-400" : "text-purple-400"
                      }`}
                    >
                      <FaCheckCircle className="text-[9px]" />
                      {item.status}
                    </span>
                  </div>

                  {/* Institute */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 sm:text-sm">
                    <span>{item.institute}</span>

                    {item.university && (
                      <>
                        <span className="text-slate-700">•</span>
                        <span className="text-slate-500">
                          {item.university}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Duration */}
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500 sm:text-xs">
                    <FaCalendarAlt
                      className={
                        isCyan ? "text-cyan-400/70" : "text-purple-400/70"
                      }
                    />
                    {item.duration}
                  </div>

                  {/* Description */}
                  <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>

                  {/* Technologies / Subjects */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-2.5 py-1 text-[9px] font-medium sm:text-[10px] ${
                          isCyan
                            ? "border-cyan-400/15 bg-cyan-400/5 text-cyan-400/70"
                            : "border-purple-400/15 bg-purple-400/5 text-purple-400/70"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
      </div>
    </section>
  );
};

export default Education;
