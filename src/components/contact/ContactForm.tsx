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
        "service_oabcspt", // Service ID
        "template_09r0x6i", // Template ID
        form.current,
        "x6x_k0tleaHZcojSy" // Public Key
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
      className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl sm:p-6 lg:p-8"
    >
      <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-400 sm:text-sm">
        Contact Form
      </span>

      <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
        Send Me a Message
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
        Have a project, internship, or collaboration opportunity? Fill out the
        form below and I'll get back to you as soon as possible.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 space-y-5 sm:mt-10 sm:space-y-6"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            name="from_name"
            required
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 sm:px-5 sm:text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            name="from_email"
            required
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 sm:px-5 sm:text-base"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            required
            placeholder="Project / Internship / Collaboration"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 sm:px-5 sm:text-base"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>

          <textarea
            rows={5}
            name="message"
            required
            placeholder="Write your message..."
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 sm:px-5 sm:text-base"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70 sm:py-4"
        >
          <FaPaperPlane />

          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;