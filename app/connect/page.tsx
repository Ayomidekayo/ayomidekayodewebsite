"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion,type Variants } from "framer-motion";
import Image from "next/image";



const container:Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2,
    },
  },
};

const item:Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LetsConnectPage() {
  return (
    <section className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-white px-6 py-24 overflow-hidden">

      {/* Ambient accents */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-slate-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-cyan-200/40 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE – LEFT */}
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                relative 
                w-[260px] 
                sm:w-[300px] 
                md:w-[340px] 
                aspect-[4/5]
                rounded-3xl 
                overflow-hidden 
                bg-white 
                shadow-2xl 
                border 
                border-slate-200
              "
            >
              <Image
                src="/asset/Ayowhite.jpg"
                alt="Kayode Ayomide Damilare"
                fill
                priority
                className="object-cover object-top"
              />
            </motion.div>
          </motion.div>

          {/* CONTENT – RIGHT */}
          <motion.div variants={item}>
            <span className="inline-block mb-4 text-xs tracking-widest uppercase text-slate-500">
              Let’s Connect
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Meaningful Conversations
              <span className="block text-slate-700">Start Here</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              I believe every meaningful connection begins with intention.
              Whether you’re reaching out for speaking, coaching, collaboration,
              or a purposeful conversation, this is the right place to start.
            </p>

            <p className="mt-4 text-slate-500 max-w-xl">
              Let’s explore how clarity, structure, and purpose can translate
              into real growth and lasting impact.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="rounded-xl px-8 py-6 text-lg bg-slate-900 text-white hover:bg-slate-800 transition">
                Send a Message
              </Button>

              <Button
                variant="outline"
                className="rounded-xl px-8 py-6 text-lg border-slate-300 text-slate-700 hover:bg-slate-100 transition"
              >
                Book a Conversation
              </Button>
            </div>
          </motion.div>

        </div>

        {/* Optional trust card */}
        <motion.div variants={item} className="mt-24 max-w-3xl mx-auto">
          <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-8 text-center">
              <p className="text-slate-700 text-lg">
                “Every interaction is an opportunity to leave a lasting impact —
                even a single minute of intentional connection.”
              </p>
              <p className="mt-4 text-sm text-slate-500">
                — Kayode Ayomide Damilare
              </p>
            </CardContent>
          </Card>
        </motion.div>

      </motion.div>
    </section>
  );
}
