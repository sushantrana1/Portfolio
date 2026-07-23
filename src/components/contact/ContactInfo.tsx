import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "sushantrana1121@example.com",
    link: "mailto:sushantrana1121@example.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+977 9815631275",
    link: "tel:+977-9814631275",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Dhangadhi, Nepal",
    link: "https://www.google.com/maps/place/Dhangadhi/@28.6984673,80.5435839,15883m/data=!3m1!1e3!4m6!3m5!1s0x39a1ed0ffb42cc37:0x7fe89470a724b11c!8m2!3d28.6991842!4d80.6028567!16zL20vMDg3aHAy!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D",
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
    name: "LinkedIn",
    link: "https://www.facebook.com/profile.php?id=61558983760722",
  },
  {
    icon: <FaWhatsapp />,
    name: "LinkedIn",
    link: "https://wa.me/977 9815631275",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
    >
      <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
        Contact Information
      </span>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Let's Work Together
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        I'm currently available for internships, freelance projects, and
        full-time opportunities. Feel free to reach out if you'd like to work
        together or simply say hello.
      </p>

      {/* Contact Items */}
      <div className="mt-10 space-y-5">
        {contactInfo.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-400/30"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-400 transition group-hover:scale-110">
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-slate-400">{item.title}</p>
              <h4 className="font-semibold text-white">{item.value}</h4>
            </div>
          </a>
        ))}
      </div>

      {/* Available For */}
      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Available For
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Internship",
            "Freelance",
            "Full-Time",
            "Collaboration",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-slate-900 px-4 py-2 text-sm text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Connect With Me
        </h3>

        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-xl text-cyan-400 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Resume Button */}
      <a
        href="/resume/Sushant_CV.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        <FaDownload />
        Download Resume
      </a>
    </motion.div>
  );
};

export default ContactInfo;