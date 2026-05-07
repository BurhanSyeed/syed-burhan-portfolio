import FadeIn from "./FadeIn";

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Full Stack Development",
      desc: "End-to-end web applications built with Laravel backend and React frontend. From database to UI — I handle it all.",
      tags: ["Laravel", "React", "MySQL","Livewire","Tailwind CSS"],
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
      title: "REST API Development",
      desc: "Robust, scalable APIs designed with best practices — authentication, rate limiting, versioning and thorough documentation.",
      tags: ["REST", "Postman"],
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      title: "Database Architecture",
      desc: "Efficient schema design, query optimization, and data modeling for MySQL and PostgreSQL with complex relational structures.",
      tags: ["MySQL", "PostgreSQL(learning)"],
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Admin Dashboards",
      desc: "Custom CMS and admin panels with role-based access control, analytics, and real-time data visualization.",
      tags: ["RBAC", "Charts", "CRUD"],
    },
    // {
    //   icon: (
    //     <svg
    //       className="w-7 h-7"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //       strokeWidth={1.75}
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    //     </svg>
    //   ),
    //   title: "Cloud Deployment",
    //   desc: "Server setup, Docker containerization, CI/CD pipelines, and deployment on AWS, DigitalOcean or shared hosting.",
    //   tags: ["Docker", "AWS", "CI/CD"],
    // },
    // {
    //   icon: (
    //     <svg
    //       className="w-7 h-7"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //       strokeWidth={1.75}
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    //     </svg>
    //   ),
    //   title: "Security & Optimization",
    //   desc: "Code audits, performance tuning, SQL injection prevention, XSS protection and security hardening for production apps.",
    //   tags: ["Security", "Performance", "Audit"],
    // },
  ];

  return (
    <section id="services" className="bg-[#f4f7ee] py-28 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#a3b18a] mb-3">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D4030] mb-5">
            Services I Offer
          </h2>
          <p className="text-[#344E41]/70 max-w-xl mx-auto text-[16px] leading-relaxed">
            From concept to deployment — I provide end-to-end development
            services tailored to your business goals.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={0.08 * i}>
              <div className="group bg-white border border-[#2D4030]/8 rounded-2xl p-7 hover:border-[#2D4030]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-[#ccd5ae]/60 flex items-center justify-center text-[#2D4030] mb-5 group-hover:bg-[#2D4030] group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[#2D4030] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#344E41]/70 text-[14px] leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-bold tracking-wide text-[#2D4030]/70 bg-[#ccd5ae]/50 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
