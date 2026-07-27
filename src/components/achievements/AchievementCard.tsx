import { motion } from "framer-motion";

interface HighlightsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const HighlightsCard = ({
  icon,
  title,
  description,
  delay = 0,
}: HighlightsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 sm:p-5 lg:rounded-3xl lg:p-6"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex gap-3 lg:gap-5">
        {/* Icon */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl text-cyan-400 lg:h-16 lg:w-16 lg:rounded-2xl lg:text-3xl">
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-bold text-white lg:text-xl">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-400 lg:mt-2 lg:text-base lg:leading-7">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HighlightsCard;