"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); setMobileOpen(false); }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: scrolled ? "rgba(10, 2, 21, 0.95)" : "rgba(10, 2, 21, 0.4)",
          backdropFilter: scrolled ? "blur(30px) saturate(1.2)" : "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.4s ease",
        }}
      >
        <motion.div
          className="text-xl sm:text-2xl font-bold tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="bg-gradient-to-r from-brand-pink via-brand-magenta to-brand-violet bg-clip-text text-transparent">
            Aadi.G.M<span className="text-white/80">.</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative text-xs lg:text-sm font-medium tracking-wide group"
              style={{ color: activeSection === link.href.slice(1) ? "#f093fb" : "rgba(255,255,255,0.6)" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-pink to-brand-magenta rounded-full transition-all duration-500"
                style={{ width: activeSection === link.href.slice(1) ? "100%" : "0%" }} />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-pink to-brand-magenta rounded-full group-hover:w-full transition-all duration-500" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => scrollTo("#contact")}
            className="hidden sm:block px-4 lg:px-5 py-2 rounded-full text-xs font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #c13584, #7c3aed)", boxShadow: "0 4px 20px rgba(193, 53, 132, 0.3)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 30px rgba(193, 53, 132, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.button>
          <button className="md:hidden text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] md:hidden flex flex-col items-center justify-center"
            style={{ background: "rgba(10, 2, 21, 0.98)", backdropFilter: "blur(30px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-medium py-4 text-white/80 hover:text-brand-pink transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
