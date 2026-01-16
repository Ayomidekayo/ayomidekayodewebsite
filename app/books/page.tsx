"use client";

import { motion, type Variants } from 'framer-motion';
import Image from "next/image";
import { BookOpen, Quote } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';



const fadeContainer:Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
};

const fadeItem :Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function BooksAndQuotesPage() {
  return (
    <section className="bg-gradient-to-br from-slate-100 via-slate-50 to-white px-6 py-24">
      <motion.div
        variants={fadeContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-28"
      >

        {/* BOOK SECTION */}
        <motion.div variants={fadeItem} className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Book Image */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative mx-auto w-[240px] sm:w-[280px] md:w-[320px] aspect-[3/4]"
          >
            <div className="absolute -inset-6 bg-slate-200/50 blur-2xl rounded-3xl" />

            <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-2xl border border-slate-200">
              <Image
                src="/asset/powerofatm.jpg"
                alt="The Power of Atmosphere"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Book Content */}
          <div>
            <div className="flex items-center gap-3 mb-4 text-slate-600">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm tracking-widest uppercase">
                Current Book
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              The Power of Atmosphere
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              A transformational framework for intentional living, growth-oriented
              environments, and sustainable personal development.
            </p>

            <p className="mt-4 text-slate-500 max-w-xl">
              This book explores how environment, systems, and daily inputs shape
              outcomes — and how to design an atmosphere where growth becomes
              inevitable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="rounded-xl bg-slate-900 text-white px-8 py-6 hover:bg-slate-800">
                Coming Soon
              </Button>

              <Button
                variant="outline"
                className="rounded-xl px-8 py-6 border-slate-300 text-slate-700 hover:bg-slate-100"
              >
                Join Book Updates
              </Button>
            </div>
          </div>
        </motion.div>

        {/* QUOTES SECTION */}
        <motion.div variants={fadeItem}>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-12">
            Selected Thoughts & Quotes
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Growth is not accidental; it is designed by the atmosphere you live in.",
              "Purpose is not discovered by motion, but by intention.",
              "Your environment will either sponsor your growth or sabotage it.",
              "Consistency is the evidence of understanding, not just knowledge.",
            ].map((quote, index) => (
              <motion.div
                key={index}
                variants={fadeItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Quote className="w-6 h-6 text-slate-400 mb-4" />

                    <p className="text-slate-700 leading-relaxed text-base flex-grow">
                      {quote}
                    </p>

                    <div className="mt-6 h-[2px] w-10 bg-slate-300 group-hover:bg-slate-400 transition" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
