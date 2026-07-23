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
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              Sushant
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Full Stack Developer specializing in the MERN Stack, passionate
              about building modern, responsive and scalable web applications
              with clean code, intuitive user experiences and high-performance
              solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap gap-4">
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
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Mobile Layout: Quick Links + Contact */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-xl font-semibold text-white">
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
              <h3 className="mb-6 text-xl font-semibold text-white">
                Contact
              </h3>

              <div className="space-y-5 text-slate-400">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 shrink-0 text-cyan-400" />

                  <span className="break-all text-sm">
                    sushantrana1121@gmail.com
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 shrink-0 text-cyan-400" />

                  <span className="text-sm">
                    +977-9815631275
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" />

                  <span className="text-sm">
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
            <h3 className="mb-6 text-xl font-semibold text-white">
              Let's Connect
            </h3>

            <p className="mb-6 leading-7 text-slate-400">
              I'm actively looking for internship and full-stack developer
              opportunities. Feel free to connect with me for collaboration,
              projects or career opportunities.
            </p>

            <Link
              to="home"
              smooth
              duration={700}
              className="inline-flex cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              <FaArrowUp />
              Back to Top
            </Link>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
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