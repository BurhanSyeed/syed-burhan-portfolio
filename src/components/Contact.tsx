import { useState } from "react";
import FadeIn from "./FadeIn";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
export default function Contact() {
   const [form, setForm] = useState({ name: "", email: "", message: "" });
   const [sent, setSent] = useState(false);

   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     setSent(true);
     setTimeout(() => setSent(false), 3000);
     setForm({ name: "", email: "", message: "" });
   };
  return (
    <section id="contact" className="bg-[#ccd5ae] py-28 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left info */}
        <FadeIn className="md:w-5/12">
          <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#2D4030]/60 mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D4030] mb-6 leading-tight">
            Let's Build Something Great
          </h2>
          <p className="text-[#344E41]/80 text-[16px] leading-relaxed mb-10">
            Have a project in mind or want to discuss an opportunity? I'd love
            to hear from you. I typically respond within 24 hours.
          </p>

          <div className="space-y-5">
            {[
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: "Email",
                value: "syedburhan@email.com",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: "Location",
                value: "Multan , Punjab Pakistan",
              },
              {
                icon: <FaWhatsapp />,
                link: "https://api.whatsapp.com/send?phone=923136177353&text=hi",
                // icon: (
                //   <svg
                //     className="w-5 h-5"
                //     fill="none"
                //     viewBox="0 0 24 24"
                //     stroke="currentColor"
                //     strokeWidth={1.75}
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //   >
                //     <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                //   </svg>
                // ),
                label: "WhatsApp",
                value: "+92 313 6177353",
              },
              {
                icon: <FaLinkedinIn />,
                // icon: (
                //   <svg
                //     className="w-5 h-5"
                //     fill="none"
                //     viewBox="0 0 24 24"
                //     stroke="currentColor"
                //     strokeWidth={1.75}
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //   >
                //     <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                //   </svg>
                // ),
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#2D4030] text-white flex items-center justify-center shrink-0">
                  <a href={item.link} className="decoration-0">
                    {item.icon}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#2D4030]/50">
                    {item.label}
                  </p>
                  <p className="text-[14px] font-semibold text-[#2D4030]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right form */}
        <FadeIn delay={0.15} className="md:w-7/12 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl space-y-5"
          >
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-1.5">
                <input type="hidden" name="access_key" value="adc6aa82-b3e1-4091-9dea-cfc7b9a3d2ec"></input>
                <label className="text-[12px] font-bold uppercase tracking-wider text-[#2D4030]/60">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Syed Burhan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border border-[#2D4030]/15 rounded-lg px-4 py-3 text-[14px] text-[#2D4030] placeholder-[#2D4030]/30
                    focus:outline-none focus:border-[#2D4030] transition-colors"
                    name="name"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-[12px] font-bold uppercase tracking-wider text-[#2D4030]/60">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border border-[#2D4030]/15 rounded-lg px-4 py-3 text-[14px] text-[#2D4030] placeholder-[#2D4030]/30
                    focus:outline-none focus:border-[#2D4030] transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold uppercase tracking-wider text-[#2D4030]/60">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border border-[#2D4030]/15 rounded-lg px-4 py-3 text-[14px] text-[#2D4030] placeholder-[#2D4030]/30
                  focus:outline-none focus:border-[#2D4030] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest text-[13px] transition-all duration-200
                ${sent ? "bg-green-600 text-white" : "bg-[#2D4030] text-white hover:bg-[#1a2a1c] hover:-translate-y-0.5 shadow-lg shadow-[#2D4030]/20"}`}
            >
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
