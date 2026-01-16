"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function SpeakingInvitationCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl bg-slate-900 text-white px-10 py-16 text-center shadow-2xl"
    >
      {/* Ambient accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Invite Kayode to Speak
        </h3>

        <p className="text-slate-300 leading-relaxed mb-10">
          Whether for a conference, leadership retreat, public speaking event,
          business or corporate gathering, or community forum, Kayode brings
          clarity, depth, and transformation to every platform.
        </p>

        <Button className="rounded-full px-12 py-6 text-lg bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-lg">
          Book a Speaking Engagement
        </Button>
      </div>
    </motion.div>
  );
}
