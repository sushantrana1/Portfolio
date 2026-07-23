import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-5xl font-extrabold tracking-wider"
        >
          <span className="text-white">Sushant</span>
          <span className="text-cyan-400">.</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-8 h-1 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />

        <p className="mt-6 text-sm tracking-[6px] text-slate-400 uppercase">
          Loading Portfolio
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;