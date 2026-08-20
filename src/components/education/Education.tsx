import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

import EducationCard from "./EducationCard";

const education = [
  {
    title: "Bachelor of Information Management (BIM)",
    institute: "Sudur Paschimanchal Campus",
    university: "Tribhuvan University",
    duration: "2022 – 2026",
    status: "Completed",
    icon: FaGraduationCap,
    color: "cyan" as const,
    highlights: [
      "Completed all 8 semesters successfully",
      "Final Year Project: MediStock Inventory Management System",
      "Focused on Web Development, Database Systems & Software Engineering",
      "Built a strong foundation in MERN Stack Development",
      "Participated in technical seminars and workshops",
    ],
  },

  {
    title: "+2 in Commerce",
    institute:
      "National Academy of Science and Technology (NAST)",
    university: "",
    duration: "2077 – 2079",
    status: "Completed",
    icon: FaUniversity,
    color: "purple" as const,
    highlights: [
      "Studied Commerce with Computer Studies",
      "Developed analytical and logical thinking",
      "Participated in college activities and academic programs",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[110px]" />

      {/* Container */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-9 max-w-2xl text-center sm:mb-11"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400 sm:px-4 sm:py-2 sm:text-sm">
            <FaGraduationCap />
            My Education
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:mt-5 sm:text-3xl lg:text-4xl">
            Academic Journey
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:text-base sm:leading-7">
            My academic journey has built a strong foundation in information
            management, software engineering, databases, and modern web
            development.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-5 sm:space-y-6">
          {education.map((item, index) => (
            <EducationCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;