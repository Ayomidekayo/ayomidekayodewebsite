"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export function SpeakingInvitationCTA() {
 const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        relative overflow-hidden rounded-3xl
        bg-slate-900 text-white
        px-6 py-14
        sm:px-10 sm:py-16
        md:px-14 md:py-20
        text-center shadow-2xl
      "
    >
      {/* Ambient accents */}
      <div className="absolute -top-24 -left-24 w-52 h-52 sm:w-72 sm:h-72 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-sky-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
          Invite Kayode to Speak
        </h3>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-10">
          Whether for a conference, leadership retreat, public speaking event,
          business or corporate gathering, or community forum, Kayode brings
          clarity, depth, and transformation to every platform.
        </p>
     <Link href="/contact" onClick={() => setOpen(false)}>
        <Button
          className="
            w-full sm:w-auto
            rounded-full
            px-10 py-6
            text-base sm:text-lg
            bg-cyan-400 text-slate-900
            hover:bg-cyan-300
            shadow-lg transition
          "
        >
          Book a Speaking Engagement
        </Button>
        </Link>
      </div>
    </motion.div>
  );
}
