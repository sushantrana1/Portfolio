import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

type EducationCardProps = {
  title: string;
  institute: string;
  university: string;
  duration: string;
  status: string;
  icon: React.ElementType;
  color: string;
  highlights: string[];
};

const colors = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
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
  const theme = colors[color as keyof typeof colors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group overflow-hidden rounded-3xl border ${theme.border} bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl`}
    >
      <div className="grid lg:grid-cols-2">
        {/* LEFT */}
        <div className="p-8">
          <div
            className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
          >
            <Icon className={`text-3xl ${theme.text}`} />
          </div>

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className={theme.text} />

              <span className="text-slate-300">
                {institute}
              </span>
            </div>

            {university && (
              <div className="ml-7 text-slate-400">
                {university}
              </div>
            )}

            <div className="flex items-center gap-3">
              <FaCalendarAlt className={theme.text} />

              <span className="text-slate-300">
                {duration}
              </span>
            </div>
          </div>

          <div
            className={`mt-6 inline-flex items-center gap-2 rounded-full ${theme.bg} px-5 py-2 text-sm font-semibold ${theme.text}`}
          >
            <FaCheckCircle />

            {status}
          </div>
        </div>

        {/* RIGHT */}
        <div className="border-t border-slate-800 p-8 lg:border-l lg:border-t-0">
          <h4 className={`mb-6 text-xl font-bold ${theme.text}`}>
            Key Highlights
          </h4>

          <ul className="space-y-4">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <FaCheckCircle
                  className={`mt-1 ${theme.text}`}
                />

                <span className="leading-7 text-slate-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;