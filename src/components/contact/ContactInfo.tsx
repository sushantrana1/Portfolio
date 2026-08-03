import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "sushantrana1121@gmail.com",
    link: "mailto:sushantrana1121@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+977 9815631275",
    link: "tel:+9779815631275",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Dhangadhi, Kailali, Nepal",
    link: "https://www.google.com/maps/place/Dhangadhi/",
  },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    link: "https://github.com/Sushantrana1",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sushant-rana-5770a6266/",
  },
  {
    icon: <FaFacebook />,
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61558983760722",
  },
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    link: "https://wa.me/9779815631275",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className=" rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8"
    >
      {/* Badge */}
      <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-400 sm:px-4 sm:py-2 sm:text-xs">
        Contact Information
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-xl font-bold text-white sm:mt-5 sm:text-2xl">
        Let's Work Together
      </h2>

      <p className="mt-2 text-xs leading-6 text-slate-400 sm:mt-3 sm:text-sm sm:leading-7">
        I'm currently available for internships, freelance projects, and
        full-time opportunities. Feel free to reach out if you'd like to work
        together or simply say hello.
      </p>

      {/* Contact Items */}
      <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        {contactInfo.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3 transition-all duration-300 hover:border-cyan-400/30 sm:rounded-2xl sm:p-4"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-base text-cyan-400 transition group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-xl sm:text-lg">
              {item.icon}
            </div>

            <div className="min-w-0">
              <p className="text-[11px] text-slate-400 sm:text-sm">
                {item.title}
              </p>

              <h4 className="break-all text-xs font-semibold text-white sm:text-base">
                {item.value}
              </h4>
            </div>
          </a>
        ))}
      </div>

      {/* Available For */}
      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 sm:mt-8 sm:rounded-2xl sm:p-5">
        <h3 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">
          Available For
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "Internship",
            "Freelance",
            "Full-Time",
            "Collaboration",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300 sm:px-4 sm:py-2 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 sm:mt-8">
        <h3 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">
          Connect With Me
        </h3>

        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-base text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 sm:h-11 sm:w-11 sm:rounded-xl sm:text-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Resume Button
      <a
        href="/resume/Sushant_CV.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:mt-8 sm:inline-flex sm:w-auto sm:rounded-xl sm:px-6 sm:py-3 sm:text-base"
      >
        <FaDownload />
        Download Resume
      </a> */}
    </motion.div>
  );
};

export default ContactInfo;