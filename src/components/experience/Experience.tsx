import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

import TimelineCard from "./TimelineCard";
import { timelineData } from "./timelineData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-20 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400 sm:px-4 sm:py-2 sm:text-sm">
            <FaBriefcase />
            My Journey
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:mt-5 sm:text-3xl lg:text-4xl">
            Learning & Experience
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:mt-4 sm:text-base sm:leading-7">
            A timeline of my development journey, from learning the
            fundamentals of web development to building full-stack
            applications with modern technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-800 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15,
                  }}
                  viewport={{ once: true }}
                  className="absolute left-4 top-7 z-20 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-slate-950 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] md:left-1/2 md:h-4 md:w-4"
                />

                {/* Card */}
                <div className="pl-9 md:pl-0">
                  <TimelineCard
                    item={item}
                    index={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;