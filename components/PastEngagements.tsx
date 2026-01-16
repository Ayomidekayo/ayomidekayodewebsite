"use client";

import { motion,type Variants } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const container:Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
};

const item :Variants= {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const engagements = [
  "Leadership Conferences",
  "Faith-Based Gatherings",
  "Corporate Strategy Retreats",
  "Youth & Campus Summits",
  "Non-Profit & Community Events",
  "Entrepreneurship Forums",
];

export default function PastEngagements() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-20"
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-12">
        Past Engagements
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {engagements.map((event) => (
          <motion.div
            key={event}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Card className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <p className="text-lg font-medium text-slate-800 group-hover:text-slate-900 transition">
                  {event}
                </p>

                <div className="mt-5 h-[2px] w-10 bg-slate-300 group-hover:bg-cyan-400 transition-all" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
