import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Ambient Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px] sm:h-96 sm:w-96"
      />

      <div className="relative flex w-full max-w-md flex-col items-center px-6 text-center">
    
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          <span className="text-white">Sushant</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            .
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500 sm:text-xs"
        >
          Full Stack Developer
        </motion.p>

        {/* Loading Line */}
        <div className="mt-9 w-full max-w-[240px]">
          <div className="relative h-[3px] overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: "easeInOut",
              }}
              className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
            >
              {/* Moving Shine */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-16 bg-white/30 blur-sm"
              />
            </motion.div>
          </div>

          {/* Loading Text */}
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Initializing
            </span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-mono text-[9px] text-cyan-500/70"
            >
              100%
            </motion.span>
          </div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center gap-2"
        >
          <span className="h-1 w-1 rounded-full bg-cyan-400" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
            Welcome to my portfolio
          </span>
          <span className="h-1 w-1 rounded-full bg-blue-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
