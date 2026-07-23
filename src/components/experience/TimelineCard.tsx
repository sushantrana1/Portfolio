import { motion } from "framer-motion";

type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: React.ElementType;
  featured?: boolean;
};

type Props = {
  item: TimelineItem;
  index: number;
};

const TimelineCard = ({ item, index }: Props) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
      className={`relative flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      <div className="relative w-full md:w-[46%]">
        {/* Featured Badge */}
        {item.featured && (
          <span className="absolute -top-4 right-5 z-20 rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
            ⭐ Featured Project
          </span>
        )}

        {/* Card */}
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,.15)]"
        >
          {/* Year */}
          <p className="mb-2 text-sm font-semibold tracking-wider text-cyan-400">
            {item.year}
          </p>

          {/* Icon */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400">
            <Icon />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white">
            {item.title}
          </h3>

          {/* Subtitle */}
          <p className="mt-1 text-sm text-cyan-300">
            {item.subtitle}
          </p>

          {/* Description */}
          <p className="mt-5 leading-7 text-slate-400">
            {item.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;