
import { motion } from "framer-motion";
import img from "../img/mypic.png";
import "../style.css";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <section className="relative flex flex-col md:flex-row w-full min-h-[90vh] bg-[#ccd5ae] items-center px-10 md:px-24 py-20 overflow-hidden">
        {/* Text Content */}
        <div className="md:w-7/12 z-10 text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="uppercase text-5xl md:text-7xl font-black leading-tight text-[#344E41]"
          >
            Let's Build <br /> Something Great <br /> Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-[#344E41]/80 max-w-xl leading-relaxed"
          >
            I'm a <strong>Full Stack Laravel Developer</strong> based in 
             <strong> Pakistan</strong>. I specialize in building complex backend
            architectures and interactive web applications that scale.
          </motion.p>

          <div className="mt-10 flex space-x-4">
            <button className="bg-[#344E41] text-[#344E41] px-8 py-4 rounded-md font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Let's Talk
            </button>
            <button className="border-2 border-[#344E41] text-[#344E41] px-8 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-[#344E41] hover:text-white transition-all">
              View Work
            </button>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-5/12 mt-16 md:mt-0 flex justify-center relative"
        >
          {/* Decorative Circle behind image */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#a3b18a] rounded-full blur-2xl opacity-40 animate-pulse"></div>

          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] overflow-hidden rounded-2xl border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src={img}
              alt="Syed Burhan Ali"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute right-[-10%] top-[-10%] w-96 h-96 bg-[#a3b18a] rounded-full opacity-50 blur-3xl"></div>
      </section>
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default Home;
