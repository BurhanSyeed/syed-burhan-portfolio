
import { motion } from "framer-motion";
import { Code2, CreditCard, Cpu, Layout } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Backend Architecture",
      desc: "Building robust, scalable server-side logic using Laravel & MySQL optimization.",
      icon: <Code2 size={40} className="text-black" />,
      delay: 0.1,
    },
    {
      title: "Fintech Integration",
      desc: "Expert in Stripe, PayPal, and Escrow payment gateways with secure KYC workflows.",
      icon: <CreditCard size={40} className="text-black" />,
      delay: 0.2,
    },
    {
      title: "AI & Automation",
      desc: "Integrating Large Language Models like Google Gemini to build intelligent web features.",
      icon: <Cpu size={40} className="text-black" />,
      delay: 0.3,
    },
    {
      title: "Full-Stack Web Apps",
      desc: "Crafting end-to-end solutions using the TALL stack and modern JavaScript frameworks.",
      icon: <Layout size={40} className="text-black" />,
      delay: 0.4,
    },
  ];

  return (
    <section className="bg-white py-24 px-10 border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black uppercase mb-16 text-center tracking-tighter"
        >
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: s.delay, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="p-8 border-2 border-black hover:bg-[#ccd5ae] transition-all cursor-default group relative"
            >
              {/* Icon Animation */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>

              <h3 className="font-bold text-xl mb-4 uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {s.desc}
              </p>

              {/* Decorative Corner (Optional) */}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-black scale-0 group-hover:scale-100 transition-transform origin-bottom-right"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
