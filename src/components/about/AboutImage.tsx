import { motion } from "framer-motion";
import Sushant_2 from "../../assets/images/Sushant_2.jpg";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mx-auto flex w-full justify-center px-4 pb-36 sm:pb-32 lg:pb-28"
    >
      {/* Background Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px] sm:h-96 sm:w-96" />
      <div className="absolute h-60 w-60 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Outer Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-2 rounded-[40px] border border-cyan-400/20"
      />

      {/* Inner Rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-2 rounded-[34px] border border-cyan-500/10"
      />

      {/* Image */}
      <motion.img
        whileHover={{
          scale: 1.04,
          y: -8,
        }}
        transition={{ duration: 0.35 }}
        src={Sushant_2}
        alt="Sushant Rana"
        className="
          relative z-10
          h-[320px] w-[250px]
          rounded-[28px]
          border border-cyan-400/20
          object-cover
          shadow-[0_20px_60px_rgba(6,182,212,0.25)]
          sm:h-[380px] sm:w-[290px]
          md:h-[430px] md:w-[340px]
          lg:h-[500px] lg:w-[390px]
        "
      />

      {/* Fresher Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-20
          sm:bottom-24
          left-1/2
          z-20
          w-[170px]
          sm:w-[220px]
          md:w-[250px]
          -translate-x-1/2
          rounded-xl
          sm:rounded-2xl
          border border-cyan-400/20
          bg-slate-900/85
          px-3 py-2
          sm:px-5 sm:py-4
          text-center
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <h3 className="text-lg font-bold text-cyan-400 sm:text-2xl md:text-3xl">
          Fresher
        </h3>

        <p className="mt-1 text-[11px] text-slate-300 sm:text-sm">
          Full Stack Developer
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="
          absolute
          bottom-0
          left-1/2
          z-20
          w-[92%]
          max-w-[300px]
          -translate-x-1/2
          sm:max-w-[360px]
          md:max-w-[400px]
        "
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { value: "10+", label: "Projects" },
            { value: "1+", label: "Learning" },
            { value: "100%", label: "Dedication" },
          ].map((item) => (
            <div
              key={item.label}
              className="
                rounded-xl
                border border-cyan-400/20
                bg-slate-900/85
                px-2 py-3
                sm:px-4 sm:py-4
                text-center
                backdrop-blur-xl
                shadow-lg
              "
            >
              <h3 className="text-base font-bold text-cyan-400 sm:text-xl md:text-2xl">
                {item.value}
              </h3>

              <p className="mt-1 text-[9px] leading-tight text-slate-400 sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Dot */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-3 top-6 h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/60 sm:right-6 sm:top-8 sm:h-5 sm:w-5"
      />

      {/* Decorative Circle */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-28 left-3 h-5 w-5 rounded-full border-2 border-cyan-400/60 sm:bottom-32 sm:left-6 sm:h-7 sm:w-7"
      />
    </motion.div>
  );
};

export default AboutImage;