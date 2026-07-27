import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { timelineData } from "./timelineData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-22"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm sm:text-sm md:text-sm font-semibold text-cyan-400">
            My Journey
          </span>

          <h2 className="mt-6 font-bold text-white text-2xl sm:text-4xl md:text-4xl">
            Learning & Experience Journey
          </h2>

          <p className="mt-5 leading-8 text-slate-400 text-sm sm:text-base md:text-lg">
            Every project and every technology I learned has helped shape me
            into a better developer. Here's my journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 rounded-full bg-slate-800 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400"
            />
          </div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.title}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-slate-950 bg-cyan-400 shadow-[0_0_15px_#22d3ee] md:left-1/2 md:h-5 md:w-5 md:border-4 md:shadow-[0_0_20px_#22d3ee]" />

                {/* Card */}
                <div className="pl-10 md:pl-0">
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