import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-[2px]
        w-full
        origin-left
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-500
        shadow-[0_0_10px_rgba(34,211,238,0.45)]
        sm:h-[2.5px]
      "
    />
  );
};

export default ScrollProgress;
