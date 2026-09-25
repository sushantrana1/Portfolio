import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const navigation = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/Sushantrana1",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sushant-rana-5770a6266/",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/profile.php?id=61558983760722",
    label: "Facebook",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/9779815631275",
    label: "WhatsApp",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <Link
              to="home"
              smooth
              duration={700}
              offset={-70}
              className="inline-block cursor-pointer"
            >
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Sushant
                <span className="text-cyan-400">.</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
              Full Stack Developer focused on building responsive, practical,
              and user-friendly web applications with modern technologies.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2.5 sm:mt-6 sm:gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-sm text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400 sm:h-10 sm:w-10 sm:text-base"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-0 sm:gap-x-0 gap-y-3 sm:mt-5">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-70}
                  className="group flex w-fit cursor-pointer items-center gap-2 text-xs text-slate-500 transition-colors duration-300 hover:text-cyan-400 sm:text-sm"
                >
                  <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h3>

            <div className="mt-4 space-y-3.5 sm:mt-5">
              {/* Email */}
              <a
                href="mailto:sushantrana1121@gmail.com"
                className="group flex items-center gap-3 text-xs text-slate-500 transition-colors hover:text-cyan-400 sm:text-sm"
              >
                <FaEnvelope className="shrink-0 text-cyan-400/80" />
                <span className="break-all">
                  sushantrana1121@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+9779815631275"
                className="group flex items-center gap-3 text-xs text-slate-500 transition-colors hover:text-cyan-400 sm:text-sm"
              >
                <FaPhoneAlt className="shrink-0 text-cyan-400/80" />
                <span>+977 9815631275</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-xs text-slate-500 sm:text-sm">
                <FaMapMarkerAlt className="shrink-0 text-cyan-400/80" />
                <span>Dhangadhi, Kailali, Nepal</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-500/[0.06] via-blue-500/[0.04] to-purple-500/[0.06] px-5 py-6 sm:mt-12 sm:px-7 sm:py-7"
        >
          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-[60px]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                Let's build something meaningful.
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Open to opportunities, collaboration, and interesting projects.
              </p>
            </div>

            <Link
              to="contact"
              smooth
              duration={700}
              offset={-70}
              className="inline-flex w-fit shrink-0 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/20 sm:px-5 sm:py-3 sm:text-sm"
            >
              Let's Connect
            </Link>
          </div>
        </motion.div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 sm:mt-10 sm:flex-row sm:pt-7">
          <p className="text-center text-[10px] text-slate-600 sm:text-left sm:text-xs">
            © {currentYear}{" "}
            <span className="font-medium text-slate-400">Sushant Rana</span>
            {" "}• Built with React, TypeScript & Tailwind CSS
          </p>

          {/* Back To Top */}
          <Link
            to="home"
            smooth
            duration={700}
            offset={-70}
            aria-label="Back to top"
            className="group flex cursor-pointer items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-cyan-400 sm:text-xs"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/5">
              <FaArrowUp className="text-[10px]" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
