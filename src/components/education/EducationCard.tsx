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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className={`group overflow-hidden rounded-2xl border ${theme.border} bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:shadow-xl`}
    >
      <div className="grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="p-5 sm:p-6 lg:p-7">

          <div
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${theme.bg} sm:h-14 sm:w-14`}
          >
            <Icon className={`text-2xl sm:text-3xl ${theme.text}`} />
          </div>

          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {title}
          </h3>

          <div className="mt-4 space-y-3">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className={theme.text} />
              <span className="text-sm text-slate-300 sm:text-base">
                {institute}
              </span>
            </div>

            {university && (
              <div className="ml-6 text-sm text-slate-400 sm:text-base">
                {university}
              </div>
            )}

            <div className="flex items-center gap-3">
              <FaCalendarAlt className={theme.text} />
              <span className="text-sm text-slate-300 sm:text-base">
                {duration}
              </span>
            </div>

          </div>

          <div
            className={`mt-5 inline-flex items-center gap-2 rounded-full ${theme.bg} px-4 py-2 text-xs font-semibold sm:text-sm ${theme.text}`}
          >
            <FaCheckCircle />
            {status}
          </div>

        </div>

        {/* RIGHT */}
        <div className="border-t border-slate-800 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-7">

          <h4 className={`mb-4 text-lg font-bold sm:text-xl ${theme.text}`}>
            Key Highlights
          </h4>

          <ul className="space-y-3">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className={`mt-1 text-sm ${theme.text}`} />

                <span className="text-sm leading-6 text-slate-300 sm:text-base">
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