"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroSection() {
  const [glitchName, setGlitchName] = useState("Aaditya Gajendra Maindarkar");
  const hasGlitchRun = useRef(false);

  useEffect(() => {
    if (hasGlitchRun.current) return;
    hasGlitchRun.current = true;

    const targetText = "Aaditya Gajendra Maindarkar";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;

    const interval = setInterval(() => {
      setGlitchName(
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) return targetText[index];
            return chars[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= targetText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10 pt-20">
      {/* Decorative lines */}
      <div className="absolute top-[15%] left-[5%] w-[1px] h-[150px] bg-gradient-to-b from-transparent via-brand-pink/20 to-transparent hidden lg:block" />
      <div className="absolute bottom-[25%] right-[8%] w-[1px] h-[120px] bg-gradient-to-b from-transparent via-brand-magenta/20 to-transparent hidden lg:block" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left content */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 sm:mb-8"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}
          >
            <Sparkles size={14} className="text-brand-pink" />
            <span className="text-xs sm:text-sm font-medium tracking-wider text-brand-pink/90">GenAI Engineer & Creator</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight mb-4 break-words text-center lg:text-left"
          >
            <span className="block bg-gradient-to-br from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">
              {glitchName}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-white/40 font-light tracking-wide mb-8 max-w-lg mx-auto lg:mx-0">
            Full-Stack Developer · Agentic AI Specialist · Visual Creator
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <motion.button
              onClick={() => scrollTo("projects")}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base overflow-hidden flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #c13584, #7c3aed)", boxShadow: "0 4px 30px rgba(193, 53, 132, 0.4)" }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View My Work</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => scrollTo("about")}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white/80 text-sm sm:text-base transition-all duration-300 hover:text-white flex items-center gap-2"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
              whileHover={{ scale: 1.05, y: -3, borderColor: "rgba(240, 147, 251, 0.3)" }}
            >
              About Me
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 sm:gap-8 mt-10 sm:mt-12 justify-center lg:justify-start">
            {[{ num: "2+", label: "Years Coding Exp" }, { num: "55+", label: "Problems Solved" }, { num: "3+", label: "Projects" }].map((stat) => (
              <div key={stat.label} className="text-center transition-transform duration-300 hover:scale-110">
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">{stat.num}</p>
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right content */}
        <motion.div variants={itemVariants} className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-br from-brand-magenta/30 via-brand-violet/20 to-brand-pink/30 blur-[80px] animate-morph" />
          </div>
          
          <motion.div
            className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[340px] md:h-[460px] rounded-[2rem] overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 25px 80px rgba(193, 53, 132, 0.2)" }}
            whileHover={{ rotateY: 8, rotateX: -5, scale: 1.03, transition: { duration: 0.4 } }}
          >
            <Image src="/images/demo.jpg" alt="Aaditya Maindarkar" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
              <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-brand-pink/30 to-transparent animate-scanline" />
            </div>
            
            {/* Interactive About Detail Box */}
            <motion.div
              className="absolute bottom-5 left-4 right-4 px-5 py-4 rounded-2xl cursor-pointer"
              style={{ 
                background: "rgba(10, 2, 21, 0.6)", 
                backdropFilter: "blur(20px)", 
                border: "1px solid rgba(255, 255, 255, 0.1)" 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{ 
                y: -5, 
                backgroundColor: "rgba(20, 5, 30, 0.8)",
                borderColor: "rgba(244, 114, 182, 0.5)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)" 
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-brand-pink font-bold tracking-[0.2em] uppercase">Professional Status</p>
                  <p className="text-sm text-white font-semibold mt-0.5">Develop and Design with AI</p>
                </div>
                <motion.div 
                  className="w-2 h-2 rounded-full bg-brand-pink"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
        <span className="text-[10px] text-white/25 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={18} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}