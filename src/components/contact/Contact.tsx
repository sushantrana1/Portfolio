import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-22"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 
          text-sm sm:text-sm md:text-sm font-semibold text-cyan-400">
            Contact Me
          </span>

          <h2 className="mt-6 font-bold text-white text-2xl sm:text-4xl md:text-4xl">
            Let's Build Something Amazing
          </h2>

          <p className="mt-5 leading-7 text-slate-400 text-sm sm:text-base md:text-lg">
            Whether you have an internship opportunity, or
            simply want to connect, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;