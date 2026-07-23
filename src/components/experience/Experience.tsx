import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { timelineData } from "./timelineData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-24"
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
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-lg font-semibold text-cyan-400">
            My Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Learning & Experience Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Every project and every technology I learned has helped shape me
            into a better developer. Here's my journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-slate-800 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400"
            />
          </div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={item.title}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 top-10 z-20 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_25px_#22d3ee] md:left-1/2" />

                {/* Mobile Line Offset */}
                <div className="pl-14 md:pl-0">
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