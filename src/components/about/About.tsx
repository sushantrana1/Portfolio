import { motion } from "framer-motion";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-16"
    >
      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* Left */}
          <AboutImage />

          {/* Right */}
          <AboutContent />
        </motion.div>
      </div>
    </section>
  );
};

export default About;