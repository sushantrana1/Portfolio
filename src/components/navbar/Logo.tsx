import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      href="#home"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.25 }}
      className="cursor-pointer select-none"
    >
      <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl lg:text-3xl whitespace-nowrap">
        Sushant Rana
      </h1>

      <p className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-slate-400 lg:text-xs">
        Full Stack Developer
      </p>
    </motion.a>
  );
};

export default Logo;