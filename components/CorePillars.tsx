"use client";
import { motion,type Variants } from "framer-motion";
import { Card, CardContent } from "./ui/card";
const cardHover:Variants = {
  rest: {
    y: 0,
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  hover: {
    y: -8,
    boxShadow: '0 25px 60px rgba(56,189,248,0.25)',
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}
const CorePillars = () => {
  return (
     <section className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Core Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Purpose Discovery',
                desc: 'Helping individuals uncover clarity, direction, and meaning in life and leadership.',
              },
              {
                title: 'Intentional Living',
                desc: 'Designing daily habits, decisions, and environments that support long-term growth.',
              },
              {
                title: 'Sustainable Impact',
                desc: 'Building systems and structures that outlive motivation and deliver real results.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="h-full"
              >
                <Card className="h-full rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl">
                  <CardContent className="p-10">
                    <div className="mb-6 h-12 w-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-lg">
                      ●
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default CorePillars
