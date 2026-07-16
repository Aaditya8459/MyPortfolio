"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent" />
      <div className="max-w-4xl mx-auto text-center">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 40 }} animate={titleVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={titleVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1, delay: 0.2 }}>
            <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">Let&apos;s Connect</span>
          </motion.h2>
          <motion.p className="text-base sm:text-lg md:text-xl text-white/50 mb-12 sm:mb-16 max-w-xl mx-auto" initial={{ opacity: 0 }} animate={titleVisible ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.8 }}>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-4" initial={{ opacity: 0, y: 30 }} animate={titleVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.8 }}>
          <ContactLink href="mailto:adityamaindarkar@gmail.com" icon={Mail} label="adityamaindarkar@gmail.com" />
          <ContactLink href="tel:+919860130748" icon={Phone} label="+91 98601 30748" />
          <ContactLink href="#" icon={MapPin} label="Pune, India" />
        </motion.div>

        <motion.div className="mt-16 sm:mt-20 flex justify-center gap-2" initial={{ opacity: 0 }} animate={titleVisible ? { opacity: 1 } : {}} transition={{ delay: 1, duration: 1 }}>
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="w-2 h-2 rounded-full bg-brand-pink/30" animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon: Icon, label }: { href: string; icon: typeof Mail; label: string }) {
  return (
    <motion.a href={href} className="group flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-white/80 hover:text-white transition-all duration-300 text-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }} whileHover={{ scale: 1.05, y: -4, borderColor: "rgba(240, 147, 251, 0.4)", boxShadow: "0 10px 30px rgba(240, 147, 251, 0.1)", background: "rgba(255,255,255,0.08)" }} whileTap={{ scale: 0.98 }}>
      <Icon size={16} className="text-brand-pink" />
      <span className="font-medium">{label}</span>
      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-pink" />
    </motion.a>
  );
}
