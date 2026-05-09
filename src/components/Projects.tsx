import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "Education Management System",
      category: "Full Stack",
      desc: "Developed a comprehensive Online Education Management System (EMS) with REST API integrations, student authentication and login system, daily attendance management, course outlines, a multi-branch college examination system, combined reports for same-class students across multiple branches, exam position reports, student and teacher analysis reports, class transfer management, and college announcement modules.",
      stack: [
        "Laravel",
        "Laravel Sanctum",
        "Bootstrap",
        "JS",
        "AJAX",
        "GitHub",
        "RBAC",
        "MySQL",
      ],
      color: "#d4e0b8",
    },
    // {
    //   title: "ERP Management System",
    //   category: "Full Stack",
    //   desc: "Complete enterprise resource planning system with HR, payroll, inventory, and reporting modules for a manufacturing firm.",
    //   stack: ["Laravel", "Vue.js", "MySQL", "Redis"],
    //   color: "#ccd5ae",
    // },
    // {
    //   title: "Multi-Vendor E-Commerce",
    //   category: "Full Stack",
    //   desc: "Scalable marketplace with vendor dashboards, Stripe payments, order tracking, and admin analytics panel.",
    //   stack: ["Laravel", "React", "PostgreSQL", "Stripe"],
    //   color: "#d4e0b8",
    // },
    // {
    //   title: "Real Estate Platform",
    //   category: "Backend API",
    //   desc: "Property listing platform with advanced search filters, map integration, agent management and mortgage calculator.",
    //   stack: ["Laravel API", "React", "Google Maps", "MySQL"],
    //   color: "#e2eacc",
    // },
    {
      title: "Hotel Management System",
      category: "Full Stack",
      desc: "Enhanced the bed booking module by implementing daily, monthly, and promotional offer systems, developed multiple profit and loss reports, worked on a money transfer system, and built the order management system from scratch.",
      stack: [
        "Laravel",
        "Bootstrap",
        "JS",
        "AJAX",
        "jQuery",
        "FTP",
        "RBAC",
        "MySQL",
      ],
      color: "#ccd5ae",
    },

    {
      title: "Healthcare Management System",
      category: "Web App",
      desc: "Worked on a healthcare-based application including admin panel development, complex family tree management with multiple spouses and adopted children handling, PayPal IPN integration, secure API authentication using Laravel Sanctum, OneSignal push notifications,and WhatsApp API integration for automatically generating and sending user login credentials to registered users.",
      stack: [
        "Laravel",
        "MySQL",
        "REST APIs",
        "Laravel Sanctum",
        "PayPal IPN",
        "OneSignal",
        "FTP Filezila",
      ],
      color: "#e2eacc",
    },
    {
      title: "AI URL Verification Platform",
      category: "Web App",
      desc: "Worked on an AI-powered URL verification platform integrated with Google Gemini for automated verification. Implemented token-based AI request handling, membership plans for AI usage limits, manual verification workflows, Stripe escrow payment system, dispute management, OneSignal push notifications, admin panel development, wallet management, and designed the complete MySQL database architecture with relational models.",
      stack: [
        "Laravel",
        "MySQL",
        "REST APIs",
        "Google Gemini",
        "Stripe Escrow",
        "Laravel Sanctum",
        "OneSignal",
        "FTP Filezila",
      ],
      color: "#e2eacc",
    },
    {
      title: "Project Management System (PMS)",
      category: "Web App",
      desc: "Developed a Project Management System with role-based access control using Spatie Laravel Permission. Implemented project and task assignment workflows between managers, developers, and QA teams, including task status tracking, bug reporting, QA review process, and permission-based visibility for specific users and roles.",
      stack: [
        "Laravel",
        "MySQL",
        "Livewire",
        "Spatie Laravel Permission",
        "REST APIs",
        "Tailwind CSS",
      ],
      color: "#e2eacc",
    },
    {
      title: "POS & Financial Management System",
      category: "Web App",
      desc: "Collaborated on a POS and financial management system by handling balance in/out financial entries, fixing bugs, and modifying frontend interfaces using Bootstrap.",
      stack: ["Laravel", "MySQL", "JS", "AJAX", "Bootstrap"],
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
