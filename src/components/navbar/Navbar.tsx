import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Link } from "react-scroll";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // NEW
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY < 80) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: showNavbar ? 0 : -120,
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed top-3 left-0 z-50 w-full px-3 sm:top-4 sm:px-5 lg:px-8"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-2xl sm:px-6 lg:px-8"
            : "bg-slate-900/70 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8"
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <Link
                to={item.to}
                smooth
                spy
                duration={500}
                offset={-80}
                activeClass="text-cyan-400"
                className="group relative cursor-pointer text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CV Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href="/resume/Sushant_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 lg:flex"
        >
          <Download size={18} />
          Download CV
        </motion.a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 12 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="mx-2 mt-3 rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-2xl sm:mx-4 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={item.to}
                    smooth
                    spy
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    activeClass="text-cyan-400"
                    className="block cursor-pointer border-b border-white/5 pb-3 text-base font-medium text-slate-300 transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/resume/Sushant_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;