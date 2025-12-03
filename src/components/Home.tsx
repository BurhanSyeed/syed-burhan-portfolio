import { useState } from "react";

function Home({dark,setDark}) {
  return (
    <section className="w-full flex h-screen flex-col md:flex-row items-center justify-between p-10 gap-6">
      {/* Text on the left */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-3xl md:text-4xl font-bold">
          I am <br />
          Syed Burhan Ali
        </p>
        <p className={`mt-4 ${dark ? "text-indigo-500" : ''} `}>
          Laravel Developer with 2+ years of hands-on experience building
          scalable APIs, multi-role admin panels, and enterprise business
          modules. Strong in backend architecture, database design, and frontend
          tools like Bootstrap, with solid Git workflow practices.
        </p>
      </div>

      {/* Image on the right */}
      <div className="md:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Web Dev"
          className="w-full md:h-96 sm:h-60 rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

export default Home;
