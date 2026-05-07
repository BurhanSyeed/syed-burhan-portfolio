
import { Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-10 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#344E41] rounded-lg flex items-center justify-center text-white font-bold">
          B
        </div>
        <p className="text-xl font-black tracking-tighter uppercase text-[#344E41]">
          Syed Burhan Ali
        </p>
      </div>

      <ul className="flex space-x-8">
        <li className="hover:text-black cursor-pointer transition-colors border-b-2 border-transparent hover:border-black">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-black cursor-pointer transition-colors border-b-2 border-transparent hover:border-black">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-black cursor-pointer transition-colors border-b-2 border-transparent hover:border-black">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-black cursor-pointer transition-colors border-b-2 border-transparent hover:border-black">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button className="bg-[#344E41] text-white px-6 py-2 rounded-full font-bold hover:bg-black transition-all">
        Hire Me
      </button>
    </nav>
  );
}
