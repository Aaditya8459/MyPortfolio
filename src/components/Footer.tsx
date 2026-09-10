"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 px-4 sm:px-6 lg:px-10">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-brand-pink/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto py-8 sm:py-10">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl border border-brand-pink/20 bg-brand-pink/5">
              <Sparkles
                size={16}
                className="text-brand-pink"
              />

              <div className="absolute inset-0 rounded-xl bg-brand-pink/10 blur-md" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white/80">
                Aaditya Maindarkar
              </p>

              <p className="text-[11px] text-white/30">
                AI Engineer · Software Developer
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterLink
              href="https://github.com/"
              icon={Github}
              label="GitHub"
            />

            <FooterLink
              href="https://www.linkedin.com/"
              icon={Linkedin}
              label="LinkedIn"
            />

            <FooterLink
              href="mailto:adityamaindarkar@gmail.com"
              icon={Mail}
              label="Email"
            />
          </motion.div>

          {/* Back To Top */}
          <motion.a
            href="#"
            className="group flex items-center gap-2 text-xs text-white/30 hover:text-white/70 transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>

            <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 group-hover:border-brand-pink/30 group-hover:bg-brand-pink/5 transition-all duration-300">
              <ArrowUp
                size={14}
                className="group-hover:text-brand-pink transition-colors"
              />
            </span>
          </motion.a>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[11px] sm:text-xs text-white/25">
            © {currentYear} Aaditya Maindarkar. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/25">
            Built with
            <Heart
              size={12}
              className="text-brand-magenta fill-brand-magenta/20"
            />
            <span className="text-white/35">
              React · Next.js · Tailwind
            </span>
          </p>

          <div className="flex items-center gap-2 text-[11px] text-white/25">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-pink/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-pink" />
            </span>

            <span>Available for opportunities</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Github;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] text-white/35 hover:text-white hover:border-brand-pink/25 hover:bg-brand-pink/5 transition-all duration-300"
      whileHover={{
        y: -3,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Icon size={15} />
    </motion.a>
  );
}