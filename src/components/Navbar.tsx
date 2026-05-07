import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Navbar({
  active,
  setActive,
}: {
  active: string;
  setActive: (s: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Services", "Projects", "Contact"];

  const handleNav = (link: string) => {
    setActive(link);
    setIsOpen(false);
    document
      .getElementById(link.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"} border-b border-[#2D4030]/10`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <button
          onClick={() => handleNav("Home")}
          className="group flex items-baseline gap-1.5 text-[22px] font-bold tracking-widest uppercase"
        >
          <span className="text-[#2D4030]">Syed</span>
          <span className="text-[#2D4030] opacity-55 font-medium transition-opacity duration-300 group-hover:opacity-100">
            Burhan
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links
            .filter((l) => l !== "Contact")
            .map((link) => (
              <NavLink
                key={link}
                to={`/${link.toLowerCase()}`}
                className={({ isActive }) => `
          relative text-[13.5px] font-semibold tracking-wide text-[#2D4030] pb-0.5
          after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2D4030] after:rounded-full
          after:transition-all after:duration-300
          hover:text-[#1a2a1c]
          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `}
              >
                <span className="text-[#2D4030]">{link}</span>
              </NavLink>
            ))}

          {/* Contact Button */}
          <NavLink
            to="/contact"
            className={({ isActive }) => `
      text-[12px] font-bold tracking-[0.12em] uppercase
      px-5 py-2.5 rounded-md border-2 border-[#2D4030]
      transition-all duration-200
      ${
        isActive
          ? "bg-white text-[#2D4030]"
          : "bg-[#2D4030] text-white hover:bg-white hover:text-[#2D4030] hover:-translate-y-px"
      }
    `}
          >
            Let's Talk
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#2D4030] p-1.5 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {isOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#CBD5B1] border-t border-[#2D4030]/10">
          <div className="px-6 pt-2 pb-7 flex flex-col">
            {links
              .filter((l) => l !== "Contact")
              .map((link) => (
                <button
                  key={link}
                  onClick={() => handleNav(link)}
                  className="text-left text-[#2D4030] text-[16px] font-bold tracking-[0.06em] py-3.5 border-b border-[#2D4030]/10"
                >
                  <Link to={link.toLocaleLowerCase()}>
                    {" "}
                    <span className="text-[#2D4030]">{link}</span>
                  </Link>
                </button>
              ))}
            <button
              onClick={() => handleNav("contact")}
              className="mt-5 text-center bg-[#2D4030] text-white py-4 rounded-xl text-[13px] font-bold tracking-[0.12em] uppercase shadow-lg"
            >
              <Link to="/contact">
                <span className="text-[#2D4030]">Let's Talk</span>
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
