import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/common/Loader";
import ScrollProgress from "./components/common/ScrollProgress";
import ScrollToTop from "./components/common/ScrollToTop";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import TechStack from "./components/techstack/TechStack";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Project from "./components/projects/Project";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />

          <Navbar />
          <Hero />
          <TechStack />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Project />
          <Achievements />
          <Contact />

          <ScrollToTop />
          
          <Footer />
        </>
      )}
    </>
  );
}

export default App;