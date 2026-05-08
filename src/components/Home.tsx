import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../img/mypic.png";
import cv from "../doc/Syed-Burhan-Ali-Laravel-Developer.pdf";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home({ setActive }: { setActive: (s: string) => void }) {
  return (
    <>
      <section
        id="home"
        className="relative flex flex-col md:flex-row w-full min-h-screen bg-[#ccd5ae] items-center px-8 md:px-24 pt-32 pb-20 overflow-hidden"
      >
        {/* BG blobs */}
        <div className="absolute right-[-8%] top-[-8%] w-96 h-96 bg-[#a3b18a] rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute left-[-5%] bottom-[-5%] w-72 h-72 bg-[#a3b18a] rounded-full opacity-30 blur-3xl pointer-events-none" />

        {/* Text */}
        <div className="md:w-7/12 z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#2D4030]/10 text-[#2D4030] text-[12px] font-bold tracking-[0.14em] uppercase px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#2D4030] animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="uppercase text-5xl md:text-[72px] font-black leading-[1.05] text-[#2D4030] tracking-tight"
          >
            Let's Build <br />
            <span className="relative inline-block">
              Something
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#a3b18a]/60 -z-10 skew-x-[-3deg]" />
            </span>
            <br /> Great Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-7 text-[17px] text-[#344E41]/80 max-w-lg leading-relaxed"
          >
            I'm a{" "}
            <strong className="text-[#2D4030] font-bold">
              Full Stack Laravel Developer
            </strong>{" "}
            based in{" "}
            <strong className="text-[#2D4030] font-bold">Pakistan</strong>. I
            specialize in building complex backend architectures and interactive
            web applications that scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                setActive("Contact");
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#2D4030] text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-[12px]
              hover:bg-[#1a2a1c] hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-[#2D4030]/20"
            >
              <a href={cv}>
                <span className="text-[#2D4030]">Resume</span>
              </a>
            </button>
            <button
              onClick={() => {
                setActive("Projects");
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-[#2D4030] text-[#2D4030] px-8 py-4 rounded-md font-bold uppercase tracking-widest text-[12px]
              hover:bg-[#2D4030] hover:text-white hover:-translate-y-1 transition-all duration-200"
            >
              {" "}
              <Link to="/projects">
                <span className="text-[#2D4030]"> View Work</span>
              </Link>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-14 flex gap-10"
          >
            {[
              ["2+", "Years Exp."],
              ["40+", "Projects Done"],
              ["20+", "Happy Clients"],
            ].map(([num, label]) => (
              <div key={label} className="flex flex-col">
                <span className="text-3xl font-black text-[#2D4030]">
                  {num}
                </span>
                <span className="text-[12px] text-[#2D4030]/60 font-semibold tracking-wide uppercase">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-5/12 mt-16 md:mt-0 flex justify-center relative"
        >
          <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] bg-[#a3b18a] rounded-full blur-3xl opacity-35 animate-pulse" />
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] overflow-hidden rounded-2xl border-[6px] border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
            {/* Placeholder avatar when no image */}
            <div className="w-full h-full bg-[#a3b18a] flex items-center justify-center">
              <div className="text-center">
                <img src={img} alt="MyPic.jeg" className="w-full h-vh" />
                {/* <p className="text-[#2D4030]/70 font-bold text-lg">
                  Syed Burhan
                </p> */}
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute bottom-6 -left-4 z-20 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#ccd5ae] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#2D4030]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-medium">
                Tech Stack
              </p>
              <p className="text-[13px] font-bold text-[#2D4030]">
                Laravel · React · MySQL
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
