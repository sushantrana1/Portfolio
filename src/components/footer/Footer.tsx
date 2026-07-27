import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Sushant
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-7">
              Full Stack Developer specializing in the MERN Stack, passionate
              about building modern, responsive and scalable web applications
              with clean code and exceptional user experiences.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex flex-wrap gap-3 sm:mt-6 sm:gap-4">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/Sushantrana1",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/sushant-rana-5770a6266/",
                },
                {
                  icon: <FaFacebook />,
                  link: "https://www.facebook.com/profile.php?id=61558983760722",
                },
                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.me/9779815631275",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-base text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 sm:h-11 sm:w-11 sm:rounded-xl sm:text-lg"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Mobile Layout */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:contents">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white sm:mb-6 sm:text-xl">
                Quick Links
              </h3>

              <FooterLinks />
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white sm:mb-6 sm:text-xl">
                Contact
              </h3>

              <div className="space-y-4 text-slate-400 sm:space-y-5">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 shrink-0 text-cyan-400" />
                  <span className="break-all text-xs sm:text-sm">
                    sushantrana1121@gmail.com
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 shrink-0 text-cyan-400" />
                  <span className="text-xs sm:text-sm">
                    +977 9815631275
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" />
                  <span className="text-xs sm:text-sm">
                    Dhangadhi, Kailali, Nepal
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white sm:mb-6 sm:text-xl">
              Let's Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400 sm:mb-6 sm:text-base sm:leading-7">
              I'm actively looking for internship and full-stack developer
              opportunities. Feel free to connect with me for collaboration,
              freelance work, or career opportunities.
            </p>

            <Link
              to="home"
              smooth
              duration={700}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3 sm:text-base"
            >
              <FaArrowUp />
              Back to Top
            </Link>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center sm:mt-12 sm:pt-8">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear}{" "}
            <span className="font-semibold text-cyan-400">
              Sushant Rana
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;