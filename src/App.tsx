import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./style.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  const [dark, setDark] = useState(false);
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={dark ? "" : "bg-gray-500"}>
        <Navbar dark={dark} setDark={setDark} />
        <Home />
      </div>
    </>
  );
}

export default App;
