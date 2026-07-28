import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Sushant from "../../assets/images/Sushant.png";

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
  className="
    relative
    h-44 w-44
    rounded-full
    border-4 border-cyan-400
    object-cover
    object-[center_25%]
    shadow-2xl
    sm:h-56 sm:w-56
    md:h-64 md:w-64
    lg:h-80 lg:w-80
  "
/>
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
          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
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
          <p className="mx-auto max-w-xl text-base leading-7 text-gray-400 md:text-justify sm:text-sm lg:text-lg md:text-sm sm:leading-8 lg:mx-0">
            I specialize in building modern, scalable, and high-performance web applications using React, TypeScript, Node.js, and the MERN stack.
            I enjoy turning complex ideas into elegant digital experiences with clean code and intuitive user interfaces.
          </p>

          {/* Buttons */}
          <div className="mt-8 grid w-full max-w-sm grid-cols-2 gap-3 sm:mt-10 sm:max-w-md sm:gap-4 lg:flex lg:w-auto lg:max-w-none lg:justify-start">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
            >
              Hire Me
            </a>

            <a
              href="/resume/Sushant_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-cyan-500 px-4 py-2.5 text-sm font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-white sm:px-6 sm:py-3 sm:text-base"
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