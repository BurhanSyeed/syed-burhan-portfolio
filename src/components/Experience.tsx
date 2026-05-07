
import FadeIn from "./FadeIn";
export default function Experience() {
  const timeline = [
    {
      year: "2024 – Present",
      role: "Senior Laravel Developer",
      company: "Tech Solutions Pvt Ltd",
      desc: "Lead backend development for multiple SaaS products. Architected microservices, mentored junior devs, and delivered 3 major features under tight deadlines.",
    },
    {
      year: "2022 – 2024",
      role: "Full Stack Developer",
      company: "Digital Agency Pakistan",
      desc: "Built 15+ custom web applications for clients across retail, healthcare and education. Introduced Docker-based deployment workflow.",
    },
    {
      year: "2021 – 2022",
      role: "Junior PHP Developer",
      company: "StartupXYZ",
      desc: "Developed internal tools, REST APIs and admin dashboards. First exposure to Laravel, Vue.js and agile workflows.",
    },
  ];

  return (
    <section id="experience" className="bg-[#2D4030] py-28 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16">
          <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#a3b18a] mb-3">
            Career Path
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Work <br />
            Experience
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#a3b18a]/30 hidden md:block" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={0.12 * i}>
                <div className="flex gap-8 group">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#a3b18a] border-2 border-[#2D4030] mt-2 group-hover:bg-white transition-colors shrink-0" />
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-[18px] font-bold text-white">
                          {item.role}
                        </h3>
                        <p className="text-[#a3b18a] font-semibold text-[14px]">
                          {item.company}
                        </p>
                      </div>
                      <span className="bg-[#a3b18a]/20 text-[#a3b18a] text-[12px] font-bold tracking-wide px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-white/60 text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
