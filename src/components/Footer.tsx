"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <motion.p className="text-xs sm:text-sm text-white/30" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          &copy; 2026 Aaditya Maindarkar. All rights reserved.
        </motion.p>
        <motion.p className="text-xs sm:text-sm text-white/30 flex items-center gap-1.5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Crafted with <Heart size={14} className="text-brand-magenta" /> using React, Next.js & Tailwind
        </motion.p>
      </div>
    </footer>
  );
}
