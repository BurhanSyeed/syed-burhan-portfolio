import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="bg-white py-24 px-10 border-t border-gray-100"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-black uppercase tracking-tighter text-[#344E41]">
              Get In Touch
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:syedburhanali25@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-gray-100 group-hover:bg-[#ccd5ae] transition-colors">
                  <Mail size={24} />
                </div>
                <span className="font-bold text-gray-700">
                  syedburhanali25@gmail.com
                </span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=923136177353&text=Hi!"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-gray-100 group-hover:bg-[#ccd5ae] transition-colors">
                  <Phone size={24} />
                </div>
                <span className="font-bold text-gray-700">+92 313 6177353</span>
              </a>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/BurhanSyeed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-black hover:bg-black hover:text-white transition-all text-black"
              >
                <FaGithub size={24} />
              </a>
              {/* FIXED NESTED ANCHOR HERE */}
              <a
                href="https://www.linkedin.com/in/syedburhan-ali-067302238"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-black hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all text-black"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Simple Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-black focus:bg-[#ccd5ae] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-black focus:bg-[#ccd5ae] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border-2 border-black focus:bg-[#ccd5ae] outline-none transition-colors"
                ></textarea>
              </div>
              {/* FIXED BUTTON TEXT COLOR */}
              <button
                type="submit"
                className="w-full bg-[#344E41] text-white p-4 font-black uppercase tracking-widest hover:bg-black transition-all flex justify-center items-center gap-3"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
