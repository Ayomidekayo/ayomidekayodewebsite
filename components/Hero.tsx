"use client";
import { motion,type Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const fadeUp :Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-white overflow-hidden">

      {/* Ambient accents */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-cyan-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE – mobile first */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative mx-auto lg:mx-0 w-[260px] sm:w-[300px] md:w-[340px]"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200"
            >
              <Image
                src="/asset/ayomain.jpg"
                alt="Kayode Ayomide Damilare"
                fill
                priority
                className="object-cover object-top"
              />
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block mb-4 text-xs tracking-widest uppercase text-slate-500">
              Purpose • Clarity • Impact
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-slate-900">
              Kayode Ayomide
              <span className="block text-slate-700">Damilare</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Personal Development Advocate • Writer • Transformational Speaker
            </p>

            <p className="mt-6 text-sm sm:text-base text-slate-500 max-w-xl mx-auto lg:mx-0">
              Founder of <span className="font-medium text-slate-800">PILNET</span>. 
              Helping individuals and organizations move from ambition to purpose,
              and from intention to lasting impact.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="rounded-xl px-8 py-6 text-base sm:text-lg bg-slate-900 text-white hover:bg-slate-800 transition">
                Work With Me
              </Button>

              <Button
                variant="outline"
                className="rounded-xl px-8 py-6 text-base sm:text-lg border-slate-300 text-slate-700 hover:bg-slate-100 transition"
              >
                Read My Writing
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
