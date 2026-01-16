"use client";
import { SpeakingInvitationCTA } from "@/components/SpeakingInvitationCTA";
import { SpeakingSubjects } from "@/components/SpeakingSubjects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SpeakingPage() {
  return (
    <main className="relative overflow-hidden">

      {/* ===== HERO / INTRO ===== */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT – TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="text-sm uppercase tracking-widest text-cyan-500">
              Speaking & Invitations
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Purpose-Driven Talks  
              <span className="block text-slate-700">
                That Move People to Action
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Kayode Ayomide Damilare delivers clarity-centered, purpose-driven
              messages that help individuals, leaders, and organizations move
              from intention to lasting impact.
            </p>
          </motion.div>

          {/* RIGHT – IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Soft glow */}
            <div className="absolute -inset-6 rounded-3xl bg-cyan-400/10 blur-3xl" />

            {/* Image frame */}
            <div className="relative w-[340px] h-[420px] rounded-3xl overflow-hidden bg-white shadow-2xl">
              <Image
                src="/asset/Ayowhite.jpg"
                alt="Kayode Ayomide Damilare speaking"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SUBJECTS ===== */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SpeakingSubjects />
        </div>
      </section>

      {/* ===== INVITATION CTA ===== */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SpeakingInvitationCTA />
        </div>
      </section>

    </main>
  );
}
