import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
  Users,
  Code2,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    role: "IT Support Intern",
    company: "Dhangadhi Sub-Metropolitan City, Ward No. 11",
    location: "Dhangadhi, Kailali",
    duration: "2 Months",
    type: "Internship",
    icon: Headphones,
    description:
      "Gained practical experience in IT support within a municipal office environment, assisting with day-to-day technical issues and supporting staff with computer and digital system requirements.",
    responsibilities: [
      "Provided basic technical support for computers, printers, networks, and office devices.",
      "Assisted staff with software, system, and common technical issues.",
      "Supported day-to-day IT operations and troubleshooting within the office environment.",
      "Gained practical exposure to professional communication and public-sector IT workflows.",
    ],
    skills: ["IT Support", "Troubleshooting", "Networking", "Hardware", "Technical Support"],
  },
  {
    role: "Full Stack Development Intern",
    company: "Clouds Web Nepal",
    location: "Tinkune, Kathmandu",
    duration: "3 Months",
    type: "Internship",
    icon: Code2,
    description:
      "Worked in a collaborative development environment alongside fellow interns and mentors, contributing to practical web development projects and gaining hands-on experience with modern full stack technologies.",
    responsibilities: [
      "Collaborated with other interns and mentors to plan, develop, and improve web projects.",
      "Built responsive frontend interfaces using React, JavaScript, TypeScript, and Tailwind CSS.",
      "Worked with backend technologies, APIs, databases, and full stack application workflows.",
      "Used Git and GitHub for version control, collaboration, and project management.",
      "Participated in discussions, debugging, testing, and improving project features.",
    ],
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Git & GitHub",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-[-120px] h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-400 sm:px-4 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            My Experience
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem]">
            Experience That{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Builds Skills
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-7xl text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
            Practical experience gained through IT support, full stack
            development, teamwork, and real-world project environments.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mt-12 sm:mt-14">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/30 to-purple-500/20 md:block" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.company}
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
                    delay: index * 0.12,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  className="relative md:pl-16"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-900 text-cyan-400 shadow-lg shadow-cyan-500/5 md:flex">
                    <Icon size={18} />
                  </div>

                  {/* Experience Card */}
                  <div className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-cyan-500/5 sm:p-6 lg:p-7">
                    {/* Top Section */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2 md:hidden">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                            <Icon size={15} />
                          </div>

                          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-400">
                            {experience.type}
                          </span>
                        </div>

                        <p className="hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-400 md:block">
                          {experience.type}
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
                          {experience.role}
                        </h3>

                        <div className="mt-2 flex flex-col gap-1.5 text-xs text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1">
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 size={14} className="text-slate-500" />
                            {experience.company}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} className="text-slate-500" />
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-xs font-medium text-slate-300">
                        <CalendarDays
                          size={14}
                          className="text-cyan-400"
                        />
                        {experience.duration}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-6">
                      <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                        <BriefcaseBusiness
                          size={14}
                          className="text-cyan-400"
                        />
                        Key Contributions
                      </h4>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {experience.responsibilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-xs leading-5 text-slate-400"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-cyan-400/80"
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-700/80 bg-slate-950/60 px-2.5 py-1.5 text-[9px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300 sm:text-[10px]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl text-center sm:mt-12"
        >
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 sm:text-sm">
            <Users size={16} className="text-cyan-400" />
            <span>
              Growing through collaboration, practical experience, and
              continuous learning.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1.5, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 h-px max-w-4xl origin-center bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
      />
    </section>
  );
};

export default Experience;

