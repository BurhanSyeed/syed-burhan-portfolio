import React from "react";

function About({ dark, setDark }) {
  return (
    <section className="ws-full flex h-screen items-center">
      <div className="p-10">
        <img
          src="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className={`rounded-2xl w-full h-96 object-cover 
                 animate-slideInLeft ${
                   dark ? "" : "border border-indigo-500"
                 } sm:h-60 md:h-96 object-cover`}
        />
      </div>
      <div className="flex-initial text-center p-10 md:text-left">
        <h1>About</h1>
        <p className={`${dark ? "text-indigo-500" : ""} `}>
          Laravel Developer with 2+ years of hands-on experience building
          scalable APIs, multi-role admin panels, and enterprise business
          modules. Strong in backend architecture, database design, and frontend
          tools like Bootstrap, with solid Git workflow practices.
        </p>
      </div>
    </section>
  );
}

export default About;
