import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import type { ElementType } from "react";

type EducationColor = "cyan" | "purple";

type EducationCardProps = {
  title: string;
  institute: string;
  university: string;
  duration: string;
  status: string;
  icon: ElementType;
  color: EducationColor;
  highlights: string[];
};

const colors = {
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-400/40",
    iconBg: "bg-cyan-500/10",
    text: "text-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/20",
    glow: "hover:shadow-cyan-500/10",
  },

  purple: {
    border: "border-purple-500/20 hover:border-purple-400/40",
    iconBg: "bg-purple-500/10",
    text: "text-purple-400",
    badge: "bg-purple-500/10 border-purple-500/20",
    glow: "hover:shadow-purple-500/10",
  },
};

const EducationCard = ({
  title,
  institute,
  university,
  duration,
  status,
  icon: Icon,
  color,
  highlights,
}: EducationCardProps) => {
  const theme = colors[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-2xl border bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:shadow-xl ${theme.border} ${theme.glow}`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full ${theme.iconBg} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative grid lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="p-5 sm:p-6 lg:p-7">
          {/* Icon + Status */}
          <div className="flex items-start justify-between gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme.iconBg} sm:h-12 sm:w-12`}
            >
              <Icon className={`text-xl sm:text-2xl ${theme.text}`} />
            </div>

            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold sm:text-xs ${theme.badge} ${theme.text}`}
            >
              <FaCheckCircle />
              {status}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-5 text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
            {title}
          </h3>

          {/* Details */}
          <div className="mt-4 space-y-2.5">
            <div className="flex items-start gap-2.5">
              <FaMapMarkerAlt
                className={`mt-1 shrink-0 text-sm ${theme.text}`}
              />

              <span className="text-sm leading-6 text-slate-300">
                {institute}
              </span>
            </div>

            {university && (
              <div className="pl-6 text-xs text-slate-500 sm:text-sm">
                {university}
              </div>
            )}

            <div className="flex items-center gap-2.5">
              <FaCalendarAlt
                className={`shrink-0 text-sm ${theme.text}`}
              />

              <span className="text-sm text-slate-300">
                {duration}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="border-t border-slate-800/80 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-7">
          <div className="mb-4 flex items-center justify-between">
            <h4 className={`text-base font-bold sm:text-lg ${theme.text}`}>
              Key Highlights
            </h4>

            <span className="text-xs text-slate-600">
              {highlights.length} Points
            </span>
          </div>

          <ul className="space-y-3">
            {highlights.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="flex items-start gap-2.5"
              >
                <FaCheckCircle
                  className={`mt-1 shrink-0 text-xs ${theme.text}`}
                />

                <span className="text-sm leading-6 text-slate-400">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;