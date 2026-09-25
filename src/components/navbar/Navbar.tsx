import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { Link } from "react-scroll";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        setScrolled(currentScrollY > 30);

        if (currentScrollY <= 80) {
          setShowNavbar(true);
        } else if (currentScrollY > lastScrollY.current + 5) {
          setShowNavbar(false);
          setIsOpen(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setShowNavbar(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: showNavbar ? 0 : -120,
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-3 z-50 w-full px-3 sm:top-4 sm:px-5 lg:px-8"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/90 px-4 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-5 lg:px-7"
            : "bg-slate-900/70 px-4 py-3 backdrop-blur-xl sm:px-5 lg:px-7"
        }`}
      >
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + index * 0.06,
                duration: 0.4,
              }}
              className="relative"
            >
              <Link
                to={item.to}
                smooth
                spy
                duration={650}
                offset={-90}
                activeClass="!text-cyan-400"
                className="group relative flex cursor-pointer items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.04] hover:text-cyan-400"
              >
                <span className="absolute inset-0 -z-10 rounded-xl bg-cyan-500/10 opacity-0 transition-opacity duration-300 group-[.active]:opacity-100" />

                {item.name}

                <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-5" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Resume */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          href="/resume/Sushant_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hidden items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 lg:flex"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <Download
            size={16}
            className="relative transition-transform duration-300 group-hover:-translate-y-0.5"
          />

          <span className="relative">View Resume</span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-2 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:mx-4 lg:hidden"
          >
            <div className="space-y-1">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                >
                  <Link
                    to={item.to}
                    smooth
                    spy
                    duration={650}
                    offset={-85}
                    onClick={() => setIsOpen(false)}
                    activeClass="!text-cyan-400 !bg-cyan-500/10"
                    className="group flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.04] hover:text-cyan-400"
                  >
                    <span>{item.name}</span>

                    <ChevronRight
                      size={16}
                      className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Resume */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                whileTap={{ scale: 0.97 }}
                href="/resume/Sushant_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                <Download size={17} />
                View Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

