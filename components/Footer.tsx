"use client";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Kayode Ayomide
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Personal Development Advocate, Writer, and Transformational Speaker
              helping individuals and organizations move from intention to
              lasting impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                "About",
                "Speaking",
                "Books & Quotes",
                "Let’s Connect",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Connect
            </h4>
            <SocialLinks />
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Kayode Ayomide Damilare. All rights
            reserved.
          </p>
          <p className="italic text-slate-500">
            Purpose • Clarity • Impact
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
