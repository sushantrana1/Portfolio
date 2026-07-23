import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Sushant from "../../assets/images/Sushant.jpg";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-22"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 lg:grid-cols-2 lg:gap-20">
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 animate-pulse rounded-3xl bg-cyan-500/20 blur-3xl" />

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 sm:-inset-3 rounded-full border border-cyan-400/30"
            />

            {/* Profile Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={Sushant}
              alt="Sushant Rana"
              className="relative h-56 w-56 rounded-full border-4 border-cyan-400 object-cover shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
            />

            {/* React */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -left-3 top-5 rounded-full bg-slate-900 p-2 text-xl text-cyan-400 shadow-lg sm:-left-6 sm:top-6 sm:p-3 sm:text-3xl"
            >
              <SiReact />
            </motion.div>

            {/* TypeScript */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-3 top-10 rounded-full bg-slate-900 p-2 text-xl text-blue-500 shadow-lg sm:-right-6 sm:top-16 sm:p-3 sm:text-3xl"
            >
              <SiTypescript />
            </motion.div>

            {/* Tailwind */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-0 bottom-8 rounded-full bg-slate-900 p-2 text-xl text-sky-400 shadow-lg sm:bottom-10 sm:p-3 sm:text-3xl"
            >
              <SiTailwindcss />
            </motion.div>

            {/* Node */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute right-0 bottom-0 rounded-full bg-slate-900 p-2 text-xl text-green-500 shadow-lg sm:p-3 sm:text-3xl"
            >
              <SiNodedotjs />
            </motion.div>

            {/* Git */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-8 -bottom-3 rounded-full bg-slate-900 p-2 text-xl text-orange-500 shadow-lg sm:left-12 sm:-bottom-5 sm:p-3 sm:text-3xl"
            >
              <SiGit />
            </motion.div>

            {/* MongoDB */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute right-8 -top-3 rounded-full bg-slate-900 p-2 text-xl text-green-400 shadow-lg sm:right-12 sm:-top-5 sm:p-3 sm:text-3xl"
            >
              <SiMongodb />
            </motion.div>

          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          {/* Greeting */}
          <p className="mb-4 text-base font-medium text-cyan-400 sm:text-lg">
            Hello, I'm
          </p>

          {/* Heading */}
          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Sushant{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Rana
            </span>
          </h1>

          {/* Typing */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "UI/UX Enthusiast",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="mb-6 text-xl font-semibold text-gray-300 sm:text-2xl md:text-3xl"
          />

          {/* Description */}
          <p className="mx-auto max-w-xl text-base leading-7 text-gray-400 md:text-justify sm:text-lg sm:leading-8 lg:mx-0">
            I specialize in building modern, scalable, and high-performance web applications using React, TypeScript, Node.js, and the MERN stack.
            I enjoy turning complex ideas into elegant digital experiences with clean code and intuitive user interfaces.
          </p>

          {/* Buttons */}
          <div className="mt-10 grid w-full max-w-md grid-cols-2 gap-4 lg:flex lg:w-auto lg:max-w-none lg:justify-start">
            <a
              href="#contact"
              className="flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-600"
            >
              Hire Me
            </a>

            <a
              href="/resume/Sushant_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-white"
            >
              <FiDownload />
              View Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center px-2 gap-6 text-2xl text-gray-400 lg:justify-start">
            <a
              href="https://github.com/Sushantrana1"
              className="transition duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sushant-rana-5770a6266/"
              className="transition duration-300 hover:-translate-y-1 hover:text-cyan-600"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/9779815631275"
              className="transition duration-300 hover:-translate-y-1 hover:text-green-500"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61558983760722"
              className="transition duration-300 hover:-translate-y-1 hover:text-blue-500"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;