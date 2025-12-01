import React from "react";
import GitLogo from "./GitLogo";
import LightModeIcon from "./LightModeIcon";
import DarModeIcon from "./DarModeIcon";

export default function Navbar({ dark, setDark }) {
  const toggleTheme = () => setDark(!dark);
  const baseClasses =
    "p-2 hover:rounded-b-md hover:p-1 hover:font-bold hover:cursor-pointer hover:border";

  const darkBorder = dark ? "hover:border-white" : "hover:border-slate-700";
  return (
    <div
      className={`w-full  ${
        dark ? "bg-slate-800 text-white" : "bg-sky-400 text-slate-900"
      } flex  items-center justify-between p-3 `}
    >
      <div className={`${dark ? "text-white" : "text-slate-900"} `}>
        Syed Bu
        <span className={`${dark ? "text-sky-400" : "text-white"} font-roboto`}>
          rhan Ali
        </span>
      </div>
      <div>
        <ul className="flex space-x-4">
          {["Home", "About", "Contact Us"].map((item) => (
            <li
              key={item}
              className={`md:${baseClasses} ${darkBorder} hidden md:block`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <a
          onClick={toggleTheme}
          className={`rounded-full ${
            dark ? "bg-slate-800 text-white" : "bg-sky-400 text-slate-900"
          } p-2`}
        >
          {dark ? (
            <DarModeIcon className="text-slate-900" />
          ) : (
            <LightModeIcon className="text-black" />
          )}
        </a>
        <GitLogo className="text-slate-900 dark:text-white" />
      </div>
    </div>
  );
}
