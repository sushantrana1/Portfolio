import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const documentHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress =
          documentHeight > 0
            ? Math.min((currentScrollY / documentHeight) * 100, 100)
            : 0;

        setScrollProgress(progress);

        // Show button after scrolling down
        setVisible(currentScrollY > 350);

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          title="Back to top"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={scrollToTop}
          className="
            fixed
            bottom-5
            right-4
            z-[999]
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/30
            bg-slate-900/90
            text-cyan-400
            shadow-lg
            shadow-cyan-500/10
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-cyan-400/60
            hover:bg-slate-900
            hover:text-white
            hover:shadow-cyan-500/20
            sm:bottom-6
            sm:right-6
            sm:h-12
            sm:w-12
          "
        >
          {/* Progress Ring */}
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r="21"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-slate-700/70"
            />

            <motion.circle
              cx="24"
              cy="24"
              r="21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={131.95}
              animate={{
                strokeDashoffset:
                  131.95 - (131.95 * scrollProgress) / 100,
              }}
              transition={{ duration: 0.15, ease: "linear" }}
              className="text-cyan-400"
            />
          </svg>

          {/* Arrow */}
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <FaArrowUp className="text-sm sm:text-base" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
