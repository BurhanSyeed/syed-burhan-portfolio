import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./style.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
function App() {
  const [dark, setDark] = useState(false);
  // const [count, setCount] = useState(0)

  return (
    <>
      <div
        className={
          dark ? "bg-[#0D0F1A] text-[#F9FAFB]" : "bg-[#FDFDFE] text-[#111827]"
        }
      >
        <Navbar dark={dark} setDark={setDark} />
        <Home dark={dark} setDark={setDark}/>
        <About dark={dark} setDark={setDark} />
      </div>
    </>
  );
}

export default App;
