"use client";

import { SpeakingInvitationCTA } from "@/components/SpeakingInvitationCTA";
import { SpeakingSubjects } from "@/components/SpeakingSubjects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SpeakingPage() {
  return (
    <main className="relative overflow-hidden">

      {/* ===== HERO / INTRO ===== */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">

          {/* LEFT – TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest text-cyan-500">
              Speaking & Invitations
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
              Purpose-Driven Talks
              <span className="block text-slate-700">
                That Move People to Action
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Kayode Ayomide Damilare delivers clarity-centered, purpose-driven
              messages that help individuals, leaders, and organizations move
              from intention to lasting impact.
            </p>
          </motion.div>

          {/* RIGHT – IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute -inset-8 rounded-3xl bg-cyan-400/10 blur-3xl" />

            {/* Image */}
            <div className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[390px] md:w-[340px] md:h-[420px] rounded-3xl overflow-hidden bg-white shadow-2xl">
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
      <section className="bg-white px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <SpeakingSubjects />
        </div>
      </section>

      {/* ===== INVITATION CTA ===== */}
      <section className="bg-white px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <SpeakingInvitationCTA />
        </div>
      </section>

    </main>
  );
}
