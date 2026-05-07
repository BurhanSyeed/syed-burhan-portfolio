import FadeIn from "./FadeIn";
import { motion } from 'framer-motion';

function About() {
 const skills = [
   "Laravel",
   "PHP",
   "Laravel Sanctum",
   "Laravel Passport",
   "Livewire",
   "React.js",
   "JavaScript (ES6+)",
   "MySQL",
   "PostgreSQL (Learning)",
   "RESTful APIs",
   "Spatie Permission (RBAC)",
   "Bootstrap",
   "Tailwind CSS (Learning)",
   "Git & GitHub",
   "Stripe Integration",
   "PayPal IPN",
   "Google Gemini API Integration",
 ];;
  return (
    <>
      <section id="about" className="bg-white py-28 px-8 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          {/* Left: decorative card */}
          <FadeIn className="md:w-5/12">
            <div className="relative">
              <div className="bg-[#ccd5ae] rounded-2xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#a3b18a] rounded-full -translate-y-1/2 translate-x-1/2 opacity-40" />
                <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2D4030]/60 mb-3">
                  Who I Am
                </p>
                <h3 className="text-3xl font-black text-[#2D4030] mb-5 leading-tight">
                  Passionate Developer &amp; Problem Solver
                </h3>
                <p className="text-[#344E41]/80 leading-relaxed text-[15px]">
                  With over 2 years of professional experience, I've worked with
                  startups and established companies to deliver robust, scalable
                  web solutions. I believe great software is both functional and
                  beautiful.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    ["Name", "Syed Burhan"],
                    ["Location", "Pakistan"],
                    ["Experience", "2+ Years"],
                    ["Availability", "Open to Work"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-[11px] font-bold tracking-wider uppercase text-[#2D4030]/50">
                        {k}
                      </p>
                      <p className="text-[14px] font-semibold text-[#2D4030] mt-0.5">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#2D4030] text-white rounded-2xl px-6 py-4 text-center shadow-xl">
                <p className="text-3xl font-black">2+</p>
                <p className="text-[11px] font-bold tracking-widest uppercase opacity-70">
                  Years Exp.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: skills */}
          <FadeIn delay={0.15} className="md:w-7/12">
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#a3b18a] mb-3">
              My Toolkit
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#2D4030] mb-6 leading-tight">
              Skills &amp; <br /> Technologies
            </h2>
            <p className="text-[#344E41]/70 text-[16px] leading-relaxed mb-10 max-w-lg">
              I work across the full stack — from architecting APIs to crafting
              pixel-perfect UIs. Here are the technologies I use daily:
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <FadeIn key={s} delay={0.05 * i}>
                  <span
                    className="bg-[#ccd5ae]/60 border border-[#2D4030]/15 text-[#2D4030] text-[13px] font-semibold px-4 py-2 rounded-lg
                  hover:bg-[#2D4030] hover:text-white transition-all duration-200 cursor-default"
                  >
                    {s}
                  </span>
                </FadeIn>
              ))}
            </div>

            {/* Progress bars */}
            <div className="mt-10 space-y-4">
              {[
                ["Backend (Laravel/PHP)", 70],
                ["Frontend (React)", 60],
                ["Database Design", 80],
                ["DevOps & Deployment", 70],
              ].map(([label, val]) => (
                <div key={label as string}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[13px] font-semibold text-[#2D4030]">
                      {label as string}
                    </span>
                    <span className="text-[13px] font-bold text-[#a3b18a]">
                      {val}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#ccd5ae]/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${val}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-[#2D4030] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default About;
