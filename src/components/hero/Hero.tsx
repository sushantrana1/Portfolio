import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiCode } from "react-icons/fi";
import { Link } from "react-scroll";
import Sushant from "../../assets/images/Sushant.png";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24 sm:pt-24 lg:pt-18"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-10 right-[-120px] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] sm:h-96 sm:w-96" />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-8 sm:px-8 sm:py-12 md:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-10 lg:py-10 xl:gap-20">
        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            {/* Outer Glow */}
            <motion.div
              animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"
            />

            {/* Rotating Ring */}
            {!shouldReduceMotion && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-cyan-400/30 sm:-inset-3 lg:-inset-4"
              />
            )}

            {/* Second Ring */}
            <div className="absolute -inset-1 rounded-full border border-blue-400/20 sm:-inset-2" />

            {/* Image */}
            <motion.img
              whileHover={shouldReduceMotion ? {} : { scale: 1.035 }}
              transition={{ duration: 0.3 }}
              src={Sushant}
              alt="Sushant Rana - Full Stack Developer"
              className="relative h-48 w-48 rounded-full border-4 border-cyan-400/90 object-cover object-[center_25%] shadow-[0_0_50px_rgba(34,211,238,0.18)] sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
            />
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          {/* Availability Badge */}
          {/* <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-5 flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Open to opportunities
            </div>
          </motion.div> */}
          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-3 text-sm font-medium text-cyan-400 sm:text-base lg:text-lg"
          >
            Hello, I'm
          </motion.p>
          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
    mb-3
    text-3xl
    font-extrabold
    leading-[1.05]
    tracking-tight
    text-white
    sm:text-4xl
    md:text-5xl
    lg:text-5xl
    xl:text-[3.5rem]
  "
          >
            Sushant{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Rana
            </span>
          </motion.h1>
          {/* Typing Role */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2200,
                "React Developer",
                2200,
                "MERN Stack Developer",
                2200,
                "UI/UX Enthusiast",
                2200,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="
      mb-4 block
      text-base font-semibold
      text-slate-300
      sm:text-lg
      md:text-xl
      lg:text-xl
    "
            />
          </motion.div>
          {/* Description */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
    mx-auto max-w-xl
    text-sm leading-6
    text-slate-400
    sm:text-base sm:leading-7
    lg:mx-0 lg:max-w-xl
  "
          >
            I build responsive, scalable web applications with React,
            TypeScript, Node.js, and the MERN stack, combining clean code,
            thoughtful UX, and modern development practices to turn ideas into
            reliable digital products.
          </motion.p>
          
          {/* Tech Stack */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PHP",
              "Python",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.45 + index * 0.05,
                }}
                whileHover={{
                  y: -2,
                  scale: 1.04,
                }}
                className="
        rounded-full
        border border-white/10
        bg-white/[0.03]
        px-2.5 py-1
        text-[10px]
        font-medium
        text-slate-400
        backdrop-blur-sm
        transition-all duration-300
        hover:border-cyan-400/30
        hover:bg-cyan-400/5
        hover:text-cyan-300
        hover:shadow-[0_0_15px_rgba(34,211,238,0.08)]
        sm:px-3 sm:py-1.5
        sm:text-xs
      "
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        
          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
          >
            <Link
              to="contact"
              smooth
              duration={650}
              offset={-80}
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40 sm:px-6 sm:py-3.5 sm:text-base"
            >
              Let's Work Together
              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="projects"
              smooth
              duration={650}
              offset={-80}
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <FiCode size={17} />
              View Projects
            </Link>

            <a
              href="/resume/Sushant_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition-all duration-300 hover:text-white sm:px-4 sm:py-3.5"
            >
              <FiDownload size={17} />
              Resume
            </a>
          </motion.div>
          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-7 flex items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="https://github.com/Sushantrana1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-lg text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sushant-rana-5770a6266/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-lg text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/9779815631275"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-lg text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-400"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61558983760722"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-lg text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-400"
            >
              <FaFacebook />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-7 w-px bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
