"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Linkedin,
  Github,
} from "lucide-react";

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 lg:px-10"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/30 to-transparent" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            titleVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Label */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-brand-pink/20 bg-brand-pink/5 text-brand-pink text-xs sm:text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              titleVisible
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={14} />
            <span>Open to Opportunities</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={
              titleVisible
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.94 }
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">
              Let&apos;s Build Something
            </span>
            <br />
            <span className="text-white/90">Intelligent.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/45 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={
              titleVisible
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
          >
            Open to AI engineering, GenAI, backend, and full-stack
            opportunities. Let&apos;s turn ambitious ideas into
            production-ready systems.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="mt-12 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={
            titleVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{
            delay: 0.55,
            duration: 0.8,
          }}
        >
          <ContactLink
            href="mailto:adityamaindarkar@gmail.com"
            icon={Mail}
            label="Email Me"
          />

          <ContactLink
            href="tel:+919860130748"
            icon={Phone}
            label="Call Me"
          />

          <ContactLink
            href="#"
            icon={MapPin}
            label="Pune, India"
            noArrow
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-8 flex justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={
            titleVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
        >
          <SocialLink
            href="https://www.linkedin.com/"
            icon={Linkedin}
            label="LinkedIn"
          />

          <SocialLink
            href="https://github.com/"
            icon={Github}
            label="GitHub"
          />
        </motion.div>

        {/* Bottom Status */}
        <motion.div
          className="mt-16 sm:mt-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={
            titleVisible
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          transition={{
            delay: 0.9,
            duration: 1,
          }}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-pink/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-pink" />
            </span>

            <span>Available for meaningful projects</span>
          </div>

          <div className="mt-5 flex gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-brand-pink/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.25, 0.8, 0.25],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  noArrow = false,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  noArrow?: boolean;
}) {
  return (
    <motion.a
      href={href}
      className="group flex items-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-2xl text-white/75 hover:text-white transition-all duration-300 text-sm font-medium"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{
        scale: 1.04,
        y: -4,
        borderColor: "rgba(240, 147, 251, 0.4)",
        boxShadow: "0 12px 35px rgba(240, 147, 251, 0.1)",
        background: "rgba(255,255,255,0.07)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon
        size={16}
        className="text-brand-pink transition-transform duration-300 group-hover:scale-110"
      />

      <span>{label}</span>

      {!noArrow && (
        <ArrowUpRight
          size={14}
          className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-brand-pink"
        />
      )}
    </motion.a>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Linkedin;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/40 hover:text-white/80 border border-white/5 hover:border-brand-pink/20 bg-white/[0.02] hover:bg-brand-pink/5 transition-all duration-300 text-xs"
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      whileTap={{ scale: 0.97 }}
    >
      <Icon size={14} />
      <span>{label}</span>
    </motion.a>
  );
}