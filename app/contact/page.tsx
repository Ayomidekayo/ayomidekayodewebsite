"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Mail, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ---------------- Animations ---------------- */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- Page ---------------- */

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  return (
    <section className="bg-gradient-to-br from-slate-100 via-slate-50 to-white px-4 sm:px-6 py-20 sm:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Let’s Start a Conversation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Whether it’s speaking, coaching, collaboration, or a strategic
            partnership, I’d love to hear from you.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* Left: Info */}
          <motion.div
            variants={item}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10"
          >
            {/* Image */}
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-900/10 to-slate-400/10 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                <Image
                  src="/asset/ayo.jpg"
                  alt="Kayode Ayomide – Speaker & Personal Development Advocate"
                  width={500}
                  height={600}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-4 max-w-md">
              <h2 className="text-2xl font-semibold text-slate-900">
                Reach Out with Purpose
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Every meaningful transformation begins with a conversation.
                For speaking engagements, leadership sessions, or purpose-driven
                initiatives, this is the first step.
              </p>

              <div className="flex justify-center lg:justify-start items-center gap-3 text-slate-600">
                <Mail className="w-5 h-5 text-slate-500" />
                <span>contact@kayodeayomide.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={item}>
            <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6 sm:p-10">
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    setError("");
                    setSuccess("");

                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    const data = {
                      name: formData.get("name"),
                      email: formData.get("email"),
                      message: formData.get("message"),
                    };

                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                      });

                      if (!res.ok) throw new Error("Failed");

                      setSuccess("Message sent successfully!");
                      form.reset();
                    } catch {
                      setError("Something went wrong. Please try again.");
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input
                        name="name"
                        required
                        className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 focus:ring-2 focus:ring-slate-400"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 focus:ring-2 focus:ring-slate-400"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
                      <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 resize-none focus:ring-2 focus:ring-slate-400"
                        placeholder="Tell me how I can help..."
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-slate-900 py-6 text-lg text-white hover:bg-slate-800 transition disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {success && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-green-600 text-sm"
                  >
                    {success}
                  </motion.p>
                )}

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-red-600 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
