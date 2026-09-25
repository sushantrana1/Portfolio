import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactMethods = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sushantrana1121@gmail.com",
    href: "mailto:sushantrana1121@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+977 9815631275",
    href: "tel:+9779815631275",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Dhangadhi, Kailali, Nepal",
    href: "https://www.google.com/maps/place/Dhangadhi/",
  },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    href: "https://github.com/Sushantrana1",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sushant-rana-5770a6266/",
  },
  {
    icon: <FaFacebook />,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61558983760722",
  },
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    href: "https://wa.me/9779815631275",
  },
];

const availability = [
  "Internship",
  "Freelance",
  "Full-Time",
  "Collaboration",
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_oabcspt",
        "template_09r0x6i",
        form.current,
        "x6x_k0tleaHZcojSy"
      )
      .then(() => {
        form.current?.reset();
        setStatus("success");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Contact Me
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem]">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-8xl text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
            Have an internship opportunity, project idea, or simply want to
            connect? Send me a message and I'll get back to you.
          </p>
        </motion.div>

        {/* ================= CONTACT WORKSPACE ================= */}
        <div className="relative mt-10 sm:mt-12">

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-800/80
              bg-slate-900/30
              backdrop-blur-xl
              sm:rounded-3xl
            "
          >
            {/* TRUE TWO COLUMN DESKTOP LAYOUT */}
            <div className="grid lg:grid-cols-2">

              {/* ================= LEFT ================= */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true, amount: 0.2 }}
                className="
                  relative
                  p-5
                  sm:p-7
                  lg:p-10
                "
              >
                {/* Left Accent */}
                <div className="absolute left-0 top-0 h-24 w-px bg-gradient-to-b from-cyan-400 to-transparent" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Get In Touch
                </p>

                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl lg:text-[1.65rem]">
                  Let's start a conversation.
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                  I'm interested in internships, freelance opportunities,
                  full-time roles, and meaningful collaborations. If you have
                  something in mind, I'd be happy to hear about it.
                </p>

                {/* Contact Methods */}
                <div className="mt-7 space-y-2 sm:mt-8 sm:space-y-2.5">
                  {contactMethods.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={
                        item.label === "Location" ? "_blank" : undefined
                      }
                      rel={
                        item.label === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-2
                        py-2.5
                        transition-colors
                        duration-300
                        hover:bg-slate-800/40
                        sm:gap-3.5
                        sm:px-3
                      "
                    >
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-slate-800
                          bg-slate-950/70
                          text-xs
                          text-cyan-400
                          transition-all
                          duration-300
                          group-hover:border-cyan-400/30
                          group-hover:bg-cyan-400/5
                          sm:h-10
                          sm:w-10
                          sm:text-sm
                        "
                      >
                        {item.icon}
                      </span>

                      <span className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-wider text-slate-600 sm:text-[11px]">
                          {item.label}
                        </span>

                        <span className="mt-0.5 block truncate text-xs font-medium text-slate-300 transition-colors group-hover:text-cyan-300 sm:text-sm">
                          {item.value}
                        </span>
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Availability */}
                <div className="mt-7 border-t border-slate-800/80 pt-6 sm:mt-8 sm:pt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Open To
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {availability.map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full
                          border
                          border-cyan-400/10
                          bg-cyan-400/5
                          px-2.5
                          py-1
                          text-[9px]
                          font-medium
                          text-cyan-400/80
                          transition-colors
                          hover:border-cyan-400/25
                          hover:text-cyan-300
                          sm:px-3
                          sm:py-1.5
                          sm:text-[10px]
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Find Me Online
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-slate-800
                          bg-slate-950/70
                          text-xs
                          text-slate-500
                          transition-all
                          duration-300
                          hover:border-cyan-400/30
                          hover:bg-cyan-400/5
                          hover:text-cyan-400
                          sm:h-10
                          sm:w-10
                          sm:text-sm
                        "
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ================= RIGHT ================= */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true, amount: 0.2 }}
                className="
                  border-t
                  border-slate-800/80
                  p-5
                  sm:p-7
                  lg:border-l
                  lg:border-t-0
                  lg:p-10
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                      Send A Message
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl lg:text-[1.65rem]">
                      Tell me about your idea.
                    </h3>
                  </div>

                  <div
                    className="
                      hidden
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-cyan-400/15
                      bg-cyan-400/5
                      text-cyan-400
                      sm:flex
                    "
                  >
                    <FaPaperPlane className="text-xs" />
                  </div>
                </div>

                <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-6">
                  Fill out the form below. I'll respond as soon as possible.
                </p>

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="from_name"
                        className="mb-1.5 block text-[11px] font-medium text-slate-400 sm:text-xs"
                      >
                        Full Name
                      </label>

                      <input
                        id="from_name"
                        type="text"
                        name="from_name"
                        required
                        placeholder="Your name"
                        className="
                          w-full
                          rounded-lg
                          border
                          border-slate-800
                          bg-slate-950/70
                          px-3
                          py-2.5
                          text-xs
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-slate-600
                          focus:border-cyan-400/50
                          focus:bg-slate-950
                          sm:rounded-xl
                          sm:px-4
                          sm:py-3
                          sm:text-sm
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="from_email"
                        className="mb-1.5 block text-[11px] font-medium text-slate-400 sm:text-xs"
                      >
                        Email Address
                      </label>

                      <input
                        id="from_email"
                        type="email"
                        name="from_email"
                        required
                        placeholder="you@example.com"
                        className="
                          w-full
                          rounded-lg
                          border
                          border-slate-800
                          bg-slate-950/70
                          px-3
                          py-2.5
                          text-xs
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-slate-600
                          focus:border-cyan-400/50
                          focus:bg-slate-950
                          sm:rounded-xl
                          sm:px-4
                          sm:py-3
                          sm:text-sm
                        "
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-[11px] font-medium text-slate-400 sm:text-xs"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      placeholder="Internship / Project / Collaboration"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-slate-800
                        bg-slate-950/70
                        px-3
                        py-2.5
                        text-xs
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-600
                        focus:border-cyan-400/50
                        focus:bg-slate-950
                        sm:rounded-xl
                        sm:px-4
                        sm:py-3
                        sm:text-sm
                      "
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[11px] font-medium text-slate-400 sm:text-xs"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me a little about your project or opportunity..."
                      className="
                        w-full
                        resize-none
                        rounded-lg
                        border
                        border-slate-800
                        bg-slate-950/70
                        px-3
                        py-2.5
                        text-xs
                        leading-6
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-600
                        focus:border-cyan-400/50
                        focus:bg-slate-950
                        sm:rounded-xl
                        sm:px-4
                        sm:py-3
                        sm:text-sm
                      "
                    />
                  </div>

                  {/* Status */}
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`
                        rounded-lg
                        border
                        px-3
                        py-2.5
                        text-xs
                        ${
                          status === "success"
                            ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-400"
                            : "border-red-400/20 bg-red-400/5 text-red-400"
                        }
                      `}
                    >
                      {status === "success"
                        ? "✓ Message sent successfully. Thanks for reaching out!"
                        : "Something went wrong. Please try again or contact me directly."}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.button
                    whileHover={!loading ? { scale: 1.01 } : undefined}
                    whileTap={!loading ? { scale: 0.98 } : undefined}
                    type="submit"
                    disabled={loading}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      px-5
                      py-3
                      text-xs
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-cyan-500/10
                      transition-all
                      duration-300
                      hover:shadow-cyan-500/20
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      sm:rounded-xl
                      sm:py-3.5
                      sm:text-sm
                    "
                  >
                    {loading ? (
                      <>
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1.5, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 h-px max-w-5xl origin-center bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default Contact;
