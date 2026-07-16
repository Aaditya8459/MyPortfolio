"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, MapPin, Calendar, Award, Zap, Target, Code } from "lucide-react";

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={titleRef} className="mb-16 sm:mb-20" initial={{ opacity: 0, y: 40 }} animate={titleVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-brand-magenta to-brand-pink rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div ref={contentRef} className="lg:col-span-7 space-y-5 sm:space-y-6" initial={{ opacity: 0, x: -30 }} animate={contentVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              I&apos;m a <span className="text-brand-pink font-medium">Computer Science Engineering</span> student specializing in <span className="text-brand-magenta font-medium">Artificial Intelligence</span> at G H Raisoni College of Engineering and Management, Pune.
            </p>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Currently engineering autonomous AI systems at <span className="text-brand-pink">OxiqAI</span>&apos;s Agentic AI R&D department, optimizing LLM reasoning through advanced prompt engineering and robust agentic frameworks.
            </p>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Beyond code, I&apos;m a passionate <span className="text-brand-violet font-medium">visual creator</span> — skilled in video editing, cinematography, and production across weddings, events, and commercial shoots.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
              {[{ icon: GraduationCap, label: "Education", value: "B.Tech CSE (AI)" }, { icon: MapPin, label: "Location", value: "Pune, India" }, { icon: Calendar, label: "Graduation", value: "2023 – 2027" }, { icon: Award, label: "Focus", value: "Backend & GenAI" }].map((item, i) => (
                <motion.div key={item.label} className="flex flex-col items-center text-center p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }} initial={{ opacity: 0, y: 20 }} animate={contentVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }} whileHover={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(193, 53, 132, 0.2)", y: -3 }}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-magenta/20 to-brand-violet/20 flex items-center justify-center mb-3">
                    <item.icon size={18} className="text-brand-pink" />
                  </div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">{item.label}</p>
                  <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-5 space-y-4" initial={{ opacity: 0, x: 30 }} animate={contentVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            {[{ icon: Zap, title: "Fast Performance", desc: "<100ms sync latency in real-time apps" }, { icon: Target, title: "Precision Focus", desc: "Agentic AI & RAG architecture expert" }, { icon: Code, title: "Full Stack", desc: "Java Spring Boot to React 19 & Next.js 15" }].map((item, i) => (
              <motion.div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }} initial={{ opacity: 0, x: 20 }} animate={contentVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }} whileHover={{ borderColor: "rgba(193, 53, 132, 0.25)", x: 5 }}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-magenta/20 to-brand-pink/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-brand-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-white/50 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
