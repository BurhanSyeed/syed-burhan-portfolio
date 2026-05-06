
import Experience from "./Experience";

function About() {
  return (
    <>
      <section className="bg-[#e9edc9] text-slate-900 min-h-screen py-16 px-6">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="uppercase font-extrabold text-5xl tracking-tighter border-b-4 border-black inline-block pb-2">
            About Me
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="flex flex-col p-8 bg-white shadow-md border-l-8 border-black">
            <h2 className="uppercase text-2xl font-black mb-4 italic">
              I'm Syed Burhan Ali
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              I am a specialized **Full Stack Laravel developer** with a passion
              for building scalable backend architectures and smooth user
              experiences. My focus is on delivering clean code and
              high-performance database management.
            </p>
          </div>

          {/* Expertise Card */}
          <div className="flex flex-col p-8 bg-white shadow-md border-l-8 border-black">
            <h2 className="uppercase text-2xl font-black mb-6">Expert In</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-3 list-none p-0">
              {[
                "Laravel",
                "MySQL Optimization",
                "RESTful API",
                "JS / JQuery",
                "Alpine Js",
                "Livewire",
                "React",
                "Tailwind CSS",
                "Bootstrap",
                "Fintech (Stripe/PayPal)",
                "Google Gemini AI",
                "Auth (Sanctum/Passport)",
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-slate-100 px-3 py-1 text-sm font-bold uppercase border border-slate-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Strategy Card */}
          <div className="flex flex-col p-8 bg-white shadow-md border-l-8 border-black">
            <h2 className="uppercase text-2xl font-black mb-4">
              Full-Stack Solutions
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Beyond the backend, I craft interactive front-ends using
              **Tailwind CSS and JavaScript**, ensuring that the visual side is
              just as powerful as the logic behind it. I specialize in
              integrating third-party services like **Stripe and Gemini AI**
              into seamless workflows.
            </p>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col p-8 bg-white shadow-md border-l-8 border-black justify-center">
            <h2 className="uppercase text-2xl font-black mb-4">Core Focus</h2>
            <p className="italic text-xl text-slate-800 border-l-4 border-slate-300 pl-4 py-2">
              "Turning complex problems into elegant, simple, and functional web
              applications."
            </p>
          </div>
        </div>
      </section>
      <Experience />
    </>
  );
}

export default About;
