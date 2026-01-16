"use client"

import { BookOpen, GraduationCap, Mic, Zap } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { motion, type Variants } from "framer-motion";
const serviceHover:Variants = {
  rest: {
    y: 0,
    boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
  },
  hover: {
    y: -10,
    boxShadow: "0 30px 70px rgba(56,189,248,0.25)",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Service = () => {
  return (

<section className="relative py-28 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="max-w-2xl mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        How I Help
      </h2>
      <p className="text-lg text-slate-600">
        I work with individuals, leaders, and organizations to create clarity,
        alignment, and results that last beyond motivation.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* Service Card */}
      <motion.div
        variants={serviceHover}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Card className="h-full rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl">
          <CardContent className="p-10 flex flex-col h-full">

            {/* Icon */}
            <div className="mb-6 h-12 w-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-lg font-semibold">
              🎤
            </div>

            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Keynote Speaking
            </h3>

            <p className="text-slate-600 leading-relaxed mb-8">
              Transformational talks that inspire clarity, conviction, and action
              across conferences, organizations, and leadership gatherings.
            </p>

            {/* Align CTA at bottom */}
            <span className="mt-auto text-sm font-medium text-cyan-600">
              Learn more →
            </span>

          </CardContent>
        </Card>
      </motion.div>

      {/* Service Card */}
      <motion.div
        variants={serviceHover}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Card className="h-full rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl">
          <CardContent className="p-10 flex flex-col h-full">

            {/* Icon */}
            <div className="mb-6 h-12 w-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-lg font-semibold">
              🧭
            </div>

            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Leadership & Purpose Coaching
            </h3>

            <p className="text-slate-600 leading-relaxed mb-8">
              Helping leaders and teams move from ambition to purpose-driven
              execution through clarity, structure, and intentional growth.
            </p>

            <span className="mt-auto text-sm font-medium text-cyan-600">
              Learn more →
            </span>

          </CardContent>
        </Card>
      </motion.div>

    </div>
  </div>
</section>

  )
}

export default Service
