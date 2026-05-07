export default function Footer({ setActive }: { setActive: (s: string) => void }) {
  const links = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Experience",
    "Contact",
  ];
  return (
    <footer className="bg-[#1a2a1c] py-14 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <div className="text-[22px] font-black tracking-widest uppercase text-white mb-3">
              Syed <span className="opacity-50 font-medium">Burhan</span>
            </div>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Full Stack Laravel Developer. Building scalable web applications
              that make a difference.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActive(link);
                  document
                    .getElementById(link.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/50 hover:text-white text-[13px] font-semibold transition-colors tracking-wide"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[13px]">
            © 2025 Syed Burhan Ali. All rights reserved.
          </p>
          <div className="flex gap-3">
            {["GitHub", "LinkedIn", "Twitter"].map((s) => (
              <button
                key={s}
                className="text-[12px] font-bold text-white/30 hover:text-white transition-colors tracking-wide"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
