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
    color: "cyan",
    highlights: [
      "Completed all 8 semesters successfully",
      "Final Year Project: MediStock Inventory Management System",
      "Focused on Web Development, Database Systems & Software Engineering",
      "Strong foundation in MERN Stack Development",
      "Participated in technical seminars and workshops",
    ],
  },
  {
    title: "+2 in Commerce",
    institute: "National Academy of Science and Technology (NAST)",
    university: "",
    duration: "2077 – 2079",
    status: "Completed",
    icon: FaUniversity,
    color: "purple",
    highlights: [
      "Commerce with Computer Studies",
      "Developed analytical and logical thinking",
      "Participated in college activities",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 py-22"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-lg font-semibold text-cyan-400">
            <FaGraduationCap />
            My Education
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Academic Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My academic journey has equipped me with strong knowledge in
            information management, software engineering, databases and modern
            web development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;