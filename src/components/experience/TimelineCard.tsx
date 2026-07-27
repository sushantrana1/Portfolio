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
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`relative flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      <div className="relative w-full md:w-[46%]">
        {/* Featured Badge */}
        {item.featured && (
          <span className="absolute -top-2 right-3 z-20 rounded-full bg-cyan-500 px-2.5 py-1 text-[10px] font-semibold text-white sm:px-3 sm:text-[11px] lg:-top-4 lg:right-5 lg:px-4 lg:py-1 lg:text-xs">
            ⭐ Featured Project
          </span>
        )}

        {/* Card */}
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,.15)] sm:p-5 lg:rounded-3xl lg:p-6"
        >
          {/* Year */}
          <p className="mb-2 text-[11px] font-semibold tracking-wider text-cyan-400 sm:text-xs lg:text-sm">
            {item.year}
          </p>

          {/* Icon */}
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-lg text-cyan-400 sm:h-12 sm:w-12 sm:text-xl lg:mb-4 lg:h-14 lg:w-14 lg:rounded-2xl lg:text-2xl">
            <Icon />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white lg:text-2xl">
            {item.title}
          </h3>

          {/* Subtitle */}
          <p className="mt-1 text-xs text-cyan-300 lg:text-sm">
            {item.subtitle}
          </p>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-slate-400 lg:mt-5 lg:leading-7">
            {item.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-4 flex flex-wrap gap-2 lg:mt-6">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium text-cyan-300 lg:px-3 lg:text-xs"
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