import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_oabcspt",
        "template_09r0x6i",
        form.current,
        "x6x_k0tleaHZcojSy"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current?.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className=" rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8"
    >
      {/* Badge */}
      <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-400 sm:px-4 sm:py-2 sm:text-xs">
        Contact Form
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-xl font-bold text-white sm:mt-5 sm:text-2xl">
        Send Me a Message
      </h2>

      {/* Description */}
      <p className="mt-2 text-xs leading-6 text-slate-400 sm:mt-3 sm:text-sm sm:leading-7">
        Have a project, internship, or collaboration opportunity? Fill out the
        form below and I'll get back to you as soon as possible.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-3 space-y-4 sm:mt-6 sm:space-y-6"
      >
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-300 sm:mb-2 sm:text-sm">
            Full Name
          </label>

          <input
            type="text"
            name="from_name"
            required
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 sm:rounded-xl sm:px-5 sm:py-3 sm:text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-300 sm:mb-2 sm:text-sm">
            Email Address
          </label>

          <input
            type="email"
            name="from_email"
            required
            placeholder="Enter your email"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 sm:rounded-xl sm:px-5 sm:py-3 sm:text-base"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-300 sm:mb-2 sm:text-sm">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            required
            placeholder="Project / Internship / Collaboration"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 sm:rounded-xl sm:px-5 sm:py-3 sm:text-base"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-300 sm:mb-2 sm:text-sm">
            Message
          </label>

          <textarea
            rows={5}
            name="message"
            required
            placeholder="Write your message..."
            className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 sm:rounded-xl sm:px-5 sm:py-3 sm:text-base"
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-4 sm:text-base"
        >
          <FaPaperPlane />

          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;