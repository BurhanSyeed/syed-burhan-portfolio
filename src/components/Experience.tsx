import cv from "../doc/Syed-Burhan-Ali-Laravel-Developer.pdf";
export default function Experience() {
  const projectData = [
    {
      year: "2025-2025",
      title: "HOTEL MANAGEMENT SYSTEM",
      org: "LARAVEL PROJECT",
      desc: "Developed a comprehensive HMS with modules for bed booking, meal management, and financial reporting.",
      tech: ["Laravel", "MySQL", "Bootstrap", "JS", "JQuery", "AJAX","FTP"],
    },
    {
      year: "2023-2024",
      title: "EDUCATION MANAGEMENT SYSTEM",
      org: "FULL-STACK PROJECT",
      desc: "Built a system featuring attendance tracking, exam management, and automated position reports.",
      tech: ["Laravel", "MySQL", "Bootstrap", "JS", "JQuery", "AJAX", "GitHub"],
    },
  ];

  const experienceData = [
    {
      year: "2024-PRESENT",
      title: "LARAVEL DEVELOPER",
      org: "ENTERPRISE SOLUTIONS",
      desc: "Focusing on backend architecture, building scalable APIs, and multi-role administrative panels.",
      tech: ["Laravel", "MySQL", "JS", "PayPal", "REST APIs"],
    },
    {
      year: "2025-2026",
      title: "SKOPIO APP INTEGRATION",
      org: "FINTECH PROJECT",
      desc: "Implemented Stripe escrow systems, KYC verification workflows, and AI modules using Google Gemini.",
      tech: ["Stripe", "Google Gemini AI", "Laravel", "MySQL", "REST APIs"],
    },
  ];

  return (
    <section className="bg-gray-50 p-10 font-sans">
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter">
            My Experience
          </h2>
          <p className="text-gray-500 mt-2 italic">
            A showcase of my professional journey and major projects.
          </p>
        </div>
        <a
          href={cv}
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-md font-bold uppercase text-sm hover:bg-gray-800 transition-all flex items-center gap-2"
        >
          <span>Resume</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        </a>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Column 1: Projects */}
        <div className="bg-white p-8 shadow-sm border-t-4 border-black">
          <h3 className="text-xl font-black mb-10 uppercase text-gray-400">
            Featured Projects
          </h3>
          <div className="space-y-12">
            {projectData.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 border-b border-gray-100 pb-8 last:border-0"
              >
                <div className="w-1/3 text-left">
                  <p className="text-gray-400 text-sm mb-1">{item.year}</p>
                  <p className="font-bold text-xs uppercase tracking-wider">
                    {item.org}
                  </p>
                </div>
                <div className="w-2/3">
                  <h4 className="font-bold text-lg uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] bg-gray-100 px-2 py-0.5 font-bold uppercase tracking-tighter"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Professional Roles */}
        <div className="bg-white p-8 shadow-sm border-t-4 border-black">
          <h3 className="text-xl font-black mb-10 uppercase text-gray-400">
            Work History
          </h3>
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 border-b border-gray-100 pb-8 last:border-0"
              >
                <div className="w-1/3 text-left">
                  <p className="text-gray-400 text-sm mb-1">{item.year}</p>
                  <p className="font-bold text-xs uppercase tracking-wider">
                    {item.org}
                  </p>
                </div>
                <div className="w-2/3">
                  <h4 className="font-bold text-lg uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] bg-black text-white px-2 py-0.5 font-bold uppercase tracking-tighter"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
