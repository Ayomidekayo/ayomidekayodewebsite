"use client";
import Image from "next/image";
// import { motion } from "framer-motion"; // remove if not used
import ayomideImg from "../public/ayomide.jpg"; // adjust path to your image

const About = () => {
  return (
    <section className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About Kayode
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Kayode Ayomide Damilare is a personal development advocate and
            transformational speaker committed to shaping minds, transforming lives,
            and building structures that sustain growth. Through teaching, writing,
            and leadership, he equips people to live intentionally, embrace purpose,
            and rise to their highest potential.
          </p>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 rounded-3xl bg-cyan-300/20 blur-2xl" />
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="/asset/ayofull.jpg"
              alt="Kayode Ayomide Damilare"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
