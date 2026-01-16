"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ayomide-kayode-19478927a/",
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    href: "https://x.com/Ayokay9668",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/kayodeayomide212/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/ayomide.kayode.77964/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:kayodeayomide677@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-wrap justify-center md:justify-start gap-3"
    >
      {socials.map(({ name, icon: Icon, href }) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="
            group flex items-center gap-3
            rounded-full border border-slate-300
            bg-white px-4 py-3
            shadow-sm transition
            hover:border-slate-400 hover:shadow-md
          "
        >
          <span
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full bg-slate-100 text-slate-700
              group-hover:bg-slate-200
            "
          >
            <Icon size={18} />
          </span>

          <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
            {name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}
