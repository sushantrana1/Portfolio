import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Responsive and modern interfaces using React, TypeScript, JavaScript, Tailwind CSS, and Vite.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "REST APIs and backend systems using Node.js, Express.js, PHP, and structured server-side logic.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Responsive Web Development",
    description:
      "Clean and responsive web experiences designed to work smoothly across desktop, tablet, and mobile.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Database-driven applications using MongoDB and MySQL with structured data and efficient CRUD operations.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Full Stack Integration",
    description:
      "Connecting frontend, APIs, backend systems, and databases to create complete application workflows.",
  },
  {
    icon: <FaCloud />,
    title: "Deployment & Tools",
    description:
      "Using Git, GitHub, Vercel, Netlify, Render, and modern tools to manage and deploy applications.",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "PHP",
  "MySQL",
  "Python",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-00/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-00/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            SECTION INTRO
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            About Me
          </motion.span>

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
            Building Digital Experiences{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              With Code & Creativity
            </span>
          </h2>
        </motion.div>

        {/* =========================
            ABOUT DESCRIPTION
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-7 max-w-5xl text-center"
        >
          <p className="text-sm leading-6.5 text-slate-400 sm:text-[15px] sm:leading-7">
            I am a Full Stack Developer focused on building modern, responsive,
            and practical web applications. I work mainly with{" "}
            <span className="font-medium text-slate-200">
              React, TypeScript, JavaScript, Node.js, Express.js, MongoDB, and
              Tailwind CSS
            </span>
            , while also working with PHP, MySQL, Python, Git, and GitHub. I
            enjoy working across frontend and backend development, building
            user-friendly interfaces, REST APIs, database-driven applications,
            and complete application workflows. I continuously improve through
            hands-on projects, practical experience, and learning modern
            development practices.
          </p>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* =========================
            DEVELOPMENT FOCUS
        ========================== */}
        <div className="mt-12 sm:mt-14">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-7 text-center"
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.05em" }}
              whileInView={{
                opacity: 1,
                letterSpacing: "0.2em",
              }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-[11px] font-semibold uppercase text-cyan-400"
            >
              What I Do
            </motion.span>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              My Development Focus
            </h3>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 48, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-3 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            />
          </motion.div>

          {/* =========================
              DEVELOPMENT FOCUS CARDS
              Mobile: 2 columns
              Tablet: 2 columns
              Desktop: 3 columns
          ========================== */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
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
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/5 sm:rounded-2xl sm:p-5"
              >
                {/* Animated Top Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent"
                />

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-500/5 blur-[35px] transition-all duration-500 group-hover:bg-cyan-400/15 sm:-right-10 sm:-top-10 sm:h-28 sm:w-28 sm:blur-[45px]" />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{ duration: 0.25 }}
                    className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-500/10 text-sm text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-500/15 group-hover:text-cyan-300 sm:mb-4 sm:h-10 sm:w-10 sm:rounded-xl sm:text-base"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-[11px] font-semibold leading-4.5 text-white sm:text-[15px] sm:leading-5">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-1.5 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-[13px] sm:leading-6">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: 24 }}
                    className="mt-3 hidden h-px bg-cyan-400 sm:mt-4 sm:block"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================
            BOTTOM FOCUS
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl border-t border-slate-800 pt-6 text-center"
        >
          <p className="text-xs leading-6 text-slate-500 sm:text-[13px]">
            <span className="font-medium text-cyan-400">
              Currently focused on
            </span>{" "}
            building real-world full stack projects, improving development
            skills, and exploring modern technologies.
          </p>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 h-px max-w-5xl origin-center bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default About;
