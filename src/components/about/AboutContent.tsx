import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiDownload } from "react-icons/fi";
import {
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <FaCode />,
    title: "Clean & Maintainable Code",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimized",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
  },
];

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 
          px-4 py-2 font-semibold tracking-wide text-cyan-400 text-sm sm:text-sm md:text-sm">
        About Me
      </span>

      {/* Heading */}
      <h2 className="mt-5 font-bold leading-tight text-white text-2xl sm:text-4xl md:text-4xl ">
        Passionate Full Stack Developer Building
        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Modern Web Experiences
        </span>
      </h2>

      {/* Description */}
      <p className="mt-6 leading-8 text-slate-400 text-sm sm:text-base md:text-lg">
        I'm a passionate Full Stack Developer who enjoys building modern,
        scalable, and responsive web applications using React, TypeScript,
        Node.js, Express, MongoDB, and Tailwind CSS. I love transforming ideas
        into intuitive digital experiences while writing clean, maintainable,
        and efficient code.
      </p>

      <p className="mt-4 leading-8 text-slate-400 text-sm sm:text-base md:text-lg">
        I continuously improve my skills through real-world projects, learning
        new technologies, and focusing on delivering high-quality user
        experiences with attention to detail and performance.
      </p>

      {/* Feature Cards */}
      <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
            />
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:gap-4">
        <a
          href="/resume/Sushant_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
        >
          <FiDownload size={17} />
          Download CV
        </a>

        <Link
          to="contact"
          smooth
          duration={500}
          offset={-80}
          className="flex items-center justify-center rounded-full border border-cyan-500 px-4 py-3 text-center text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white sm:px-8 sm:py-3 sm:text-base"
        >
          Let's Talk
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutContent;