"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "./ui/card";

/* ---------------- Animations ---------------- */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ FIXED
    },
  },
};

/* ---------------- Content ---------------- */

const topics = [
  {
    title: "Purpose & Intentional Living",
    desc: "Helping individuals and organizations move from confusion to clarity by aligning values, decisions, and daily actions with purpose.",
  },
  {
    title: "Leadership with Meaning",
    desc: "Developing leaders who lead with conviction, responsibility, and long-term vision rather than pressure or position.",
  },
  {
    title: "From Intention to Impact",
    desc: "Turning ideas, goals, and visions into measurable outcomes through structure, discipline, and consistency.",
  },
  {
    title: "Building Sustainable Growth",
    desc: "Creating systems, habits, and cultures that support personal and organizational growth over time.",
  },
  {
    title: "Mindset, Structure & Performance",
    desc: "How mindset and environment work together to influence performance, productivity, and results.",
  },
  {
    title: "Purpose-Driven Organizations",
    desc: "Helping teams and businesses move from ambition to purpose-aligned impact.",
  },
];

/* ---------------- Component ---------------- */

export function SpeakingSubjects() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-28"
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-12">
        Subjects I Speak On
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <motion.div
            key={topic.title}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Card className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  {topic.title}
                </h4>

                <p className="text-slate-600 leading-relaxed">
                  {topic.desc}
                </p>

                {/* Accent */}
                <div className="mt-6 h-[2px] w-10 bg-slate-300 group-hover:bg-cyan-400 transition-all" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
