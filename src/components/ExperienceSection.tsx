"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "GenAI Intern",
    company: "OxiqAI",
    department: "Agentic AI R&D",
    date: "June 2026 – Present",
    points: [
      "Engineering autonomous, goal-oriented AI systems for complex multi-step tasks",
      "Optimizing LLM reasoning via advanced prompt engineering & agentic frameworks",
      "Deploying production-ready corporate intelligence tools with high-scale RAG",
    ],
  },
];

export default function ExperienceSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-magenta/20 to-transparent" />
      <div className="max-w-4xl mx-auto">
        <motion.div ref={titleRef} className="mb-16 sm:mb-20" initial={{ opacity: 0, y: 40 }} animate={titleVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-magenta/20 to-brand-violet/20 flex items-center justify-center">
              <Briefcase size={22} className="text-brand-pink" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">Experience</span>
            </h2>
          </div>
          <div className="ml-16 w-16 h-1 bg-gradient-to-r from-brand-magenta to-brand-pink rounded-full" />
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-[11px] sm:left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-magenta via-brand-pink to-transparent" />
          {experiences.map((exp, index) => (
            <motion.div key={index} className="relative pb-12 last:pb-0" initial={{ opacity: 0, x: -20 }} animate={titleVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: index * 0.2 }}>
              <motion.div className="absolute left-[-25px] sm:left-[-33px] top-2 w-5 h-5 rounded-full border-[3px] border-brand-magenta" style={{ background: "#0a0215" }}
                whileHover={{ background: "#c13584", boxShadow: "0 0 20px rgba(193, 53, 132, 0.6)", scale: 1.3 }} />
              <div className="p-6 sm:p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-brand-pink font-medium mt-1 text-sm sm:text-base">{exp.company} — {exp.department}</p>
                  </div>
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium" style={{ background: "rgba(193, 53, 132, 0.1)", border: "1px solid rgba(193, 53, 132, 0.2)", color: "#f093fb" }}>
                    <Calendar size={12} />{exp.date}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                      <ArrowRight size={14} className="mt-1 text-brand-magenta flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
