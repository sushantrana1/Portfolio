import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8"
    >
      <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
        Contact Form
      </span>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Send Me a Message
      </h2>

      <p className="mt-3 text-slate-400">
        Have a project, internship, or collaboration opportunity? Fill out the
        form below and I'll get back to you as soon as possible.
      </p>

      <form className="mt-10 space-y-6">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Subject
          </label>

          <input
            type="text"
            placeholder="Project / Internship / Collaboration"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/30"
        >
          <FaPaperPlane />
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;