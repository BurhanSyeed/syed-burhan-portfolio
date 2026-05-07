
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useState } from "react";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  
  const [active, setActive] = useState("Home");
  return (
    <>
      <div className="">
        <Router>
          <Navbar active={active} setActive={setActive} />
          {/* <Home setActive={setActive} /> */}
          <Routes>
            <Route path="/home" element={<Home setActive={setActive} />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer setActive={setActive} />} />
          </Routes>
        </Router>
      </div>

      {/*  </div> */}
      {/* <Service/> */}
    </>
  );
}

export default App;
