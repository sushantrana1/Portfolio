import { motion } from "framer-motion";
import type { ElementType } from "react";
import { FaCheckCircle } from "react-icons/fa";

type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: ElementType;
  featured?: boolean;
};

type Props = {
  item: TimelineItem;
  index: number;
};

const TimelineCard = ({ item, index }: Props) => {
  const Icon = item.icon;

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={`relative flex ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Card Container */}
      <div className="relative w-full md:w-[44%]">
        {/* Featured Badge */}
        {item.featured && (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -top-3 right-3 z-20 inline-flex items-center gap-1 rounded-full border border-cyan-400/20 bg-cyan-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg shadow-cyan-500/20 sm:right-4 sm:px-3 sm:text-xs"
          >
            ⭐ Featured
          </motion.span>
        )}

        {/* Card */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          transition={{ duration: 0.25 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-5 lg:p-6"
        >
          {/* Card Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative">
            {/* Top Row */}
            <div className="flex items-start justify-between gap-3">
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-lg text-cyan-400 sm:h-11 sm:w-11 sm:text-xl">
                <Icon />
              </div>

              {/* Year */}
              <span className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[10px] font-semibold text-slate-400 sm:text-xs">
                {item.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-bold leading-snug text-white sm:text-xl">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-1 text-xs font-medium text-cyan-400 sm:text-sm">
              {item.subtitle}
            </p>

            {/* Divider */}
            <div className="my-4 h-px bg-slate-800" />

            {/* Description */}
            <p className="text-sm leading-6 text-slate-400">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="mt-5">
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Technologies
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-2.5 py-1 text-[10px] font-medium text-cyan-300 transition-colors duration-300 group-hover:border-cyan-500/25 sm:text-xs"
                  >
                    <FaCheckCircle className="text-[8px]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;