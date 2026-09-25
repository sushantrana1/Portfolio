import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Link to="home" smooth duration={650} offset={-80} className="cursor-pointer">
      <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }} className="group flex flex-col">
        
        <div className="flex items-center">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-lg font-extrabold tracking-tight text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-indigo-300 sm:text-xl lg:text-[22px]">
            Sushant
          </span>

          <span className="text-lg font-extrabold text-cyan-400 sm:text-xl lg:text-[22px]">
            .
          </span>
        </div>

        <div className="mt-0.5 flex items-center gap-1.5">

          <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-slate-400 sm:text-[9px] lg:text-[10px]">
            Full Stack Developer
          </span>
        </div>

      </motion.div>
    </Link>
  );
};

export default Logo;