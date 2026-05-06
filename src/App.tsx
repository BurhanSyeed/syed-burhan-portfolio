import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./style.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  // const [count, setCount] = useState(0)
  const bgAboub =
    "https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg";
  return (
    <>
      <div className="">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>

      {/*  </div> */}
      {/* <Service/> */}
    </>
  );
}

export default App;
