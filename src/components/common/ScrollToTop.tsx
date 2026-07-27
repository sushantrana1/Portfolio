import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only show after scrolling 400px
      if (currentScrollY < 400) {
        setVisible(false);
        setShowButton(true);
      } else {
        setVisible(true);

        if (currentScrollY > lastScrollY) {
          // Scrolling Down
          setShowButton(false);
        } else {
          // Scrolling Up
          setShowButton(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: showButton ? 1 : 0,
            scale: showButton ? 1 : 0.8,
            y: showButton ? 0 : 20,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onClick={scrollToTop}
          className="
            fixed
            bottom-6
            right-6
            z-[999]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            shadow-xl
            shadow-cyan-500/30
            transition-all
            hover:scale-110
            hover:shadow-cyan-500/60
          "
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;