
import FadeIn from './FadeIn';

export default function Projects() {
    const projects = [
      {
        title: "ERP Management System",
        category: "Full Stack",
        desc: "Complete enterprise resource planning system with HR, payroll, inventory, and reporting modules for a manufacturing firm.",
        stack: ["Laravel", "Vue.js", "MySQL", "Redis"],
        color: "#ccd5ae",
      },
      {
        title: "Multi-Vendor E-Commerce",
        category: "Full Stack",
        desc: "Scalable marketplace with vendor dashboards, Stripe payments, order tracking, and admin analytics panel.",
        stack: ["Laravel", "React", "PostgreSQL", "Stripe"],
        color: "#d4e0b8",
      },
      {
        title: "Real Estate Platform",
        category: "Backend API",
        desc: "Property listing platform with advanced search filters, map integration, agent management and mortgage calculator.",
        stack: ["Laravel API", "React", "Google Maps", "MySQL"],
        color: "#e2eacc",
      },
      {
        title: "Hospital Management System",
        category: "Full Stack",
        desc: "Patient records, appointment scheduling, billing, prescription management and doctor dashboard all in one system.",
        stack: ["Laravel", "Alpine.js", "Livewire", "MySQL"],
        color: "#ccd5ae",
      },
      {
        title: "Learning Management System",
        category: "Full Stack",
        desc: "Online course platform with video streaming, quizzes, certificates, progress tracking and payment gateway integration.",
        stack: ["Laravel", "React", "FFmpeg", "Stripe"],
        color: "#d4e0b8",
      },
      {
        title: "Inventory & POS System",
        category: "Web App",
        desc: "Point-of-sale system with barcode scanning, stock management, supplier tracking, and sales reporting.",
        stack: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
        color: "#e2eacc",
      },
    ];
  return (
    <section id="projects" className="bg-white py-28 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#a3b18a] mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#2D4030] leading-tight">
              Featured <br />
              Projects
            </h2>
          </div>
          <p className="text-[#344E41]/70 max-w-sm text-[15px] leading-relaxed">
            A selection of projects I've built for clients — each one solving a
            real business problem at scale.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={0.07 * i}>
              <div className="group rounded-2xl overflow-hidden border border-[#2D4030]/8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col h-full">
                {/* Top color band */}
                <div className="h-3 w-full" style={{ background: p.color }} />
                <div className="p-6 flex flex-col flex-1 bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#a3b18a]">
                      {p.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#ccd5ae]/50 flex items-center justify-center text-[#2D4030] group-hover:bg-[#2D4030] group-hover:text-white transition-colors duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[18px] font-black text-[#2D4030] mb-3 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[#344E41]/70 text-[13.5px] leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-[#2D4030]/8">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold text-[#2D4030] bg-[#ccd5ae]/50 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
