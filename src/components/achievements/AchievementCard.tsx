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
        y: -6,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex gap-5">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 leading-7 text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HighlightsCard;