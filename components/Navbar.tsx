"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";


const navItems = [
  { label: "Home", href: "/" },
  { label: "Speaking", href: "/speaking" },
  { label: "Books & Quotes", href: "/books" },
  { label: "Let’s Connect", href: "/connect" },
   
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-0 inset-x-0 z-50
        backdrop-blur-xl bg-white/70
        border-b border-slate-200
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg text-slate-900">
          Kayode<span className="text-slate-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-slate-900 transition font-medium"
            >
              {item.label}
            </Link>
          ))}

         {/* Desktop */}
<nav className="hidden md:flex items-center gap-8">
  {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="text-slate-600 hover:text-slate-900 transition font-medium"
    >
      {item.label}
    </Link>
  ))}

  <Link href="/contact">
    <Button className="rounded-xl px-6 py-5 bg-slate-900 text-white hover:bg-slate-800">
      Contact
    </Button>
  </Link>
</nav>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-slate-700"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-6 py-6 space-y-4">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-6 text-slate-600"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-slate-700 hover:text-slate-900 transition"
                >
                  {item.label}
                </Link>
              ))}

            {/* Mobile */}
<Link href="/contact" onClick={() => setOpen(false)}>
  <Button className="w-full mt-6 rounded-xl bg-slate-900 text-white py-6 hover:bg-slate-800">
    Contact
  </Button>
</Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
