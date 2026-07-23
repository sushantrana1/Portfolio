import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 15,
    suffix: "+",
    title: "Projects",
  },
  {
    number: 1,
    suffix: "+",
    title: "Years Learning",
  },
  {
    number: 100,
    suffix: "%",
    title: "Dedication",
  },
];

const AboutStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 gap-6 pt-8"
    >
      {stats.map((item) => (
        <div key={item.title}>
          <h3 className="text-3xl font-bold text-cyan-400">
            {item.number}
            {item.suffix}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;