import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard = ({ icon, title }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl hover:border-cyan-400/30"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl text-cyan-400 transition group-hover:rotate-12">
        {icon}
      </div>

      <h3 className="font-semibold text-white">
        {title}
      </h3>
    </motion.div>
  );
};

export default FeatureCard;