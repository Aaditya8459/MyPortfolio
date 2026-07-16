"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trophy, Code2, GraduationCap, Star } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Google Cloud Certification", desc: 'Awarded "Introduction to Generative AI" professional credential by Google Cloud.', color: "from-brand-magenta to-brand-violet" },
  { icon: Code2, title: "Competitive Programming", desc: "Solved 55+ algorithmic problems on LeetCode with focus on data structures and optimization.", color: "from-brand-pink to-brand-magenta" },
  { icon: GraduationCap, title: "Academic Excellence", desc: "Maintained consistent Dean's List level performance at G H Raisoni College of Engineering.", color: "from-brand-violet to-brand-rose" },
];

export default function AchievementsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-rose/20 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div ref={titleRef} className="mb-16 sm:mb-20" initial={{ opacity: 0, y: 40 }} animate={titleVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-rose/20 to-brand-magenta/20 flex items-center justify-center">
              <Star size={22} className="text-brand-pink" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>
          <div className="ml-16 w-16 h-1 bg-gradient-to-r from-brand-rose to-brand-pink rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div key={achievement.title} initial={{ opacity: 0, y: 40 }} animate={titleVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}>
              <motion.div className="relative h-full p-6 sm:p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }} whileHover={{ borderColor: "rgba(240, 147, 251, 0.3)", boxShadow: "0 25px 50px rgba(193, 53, 132, 0.1)", y: -5 }}>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle, rgba(240,147,251,0.1), transparent 70%)", transform: "translate(30%, -30%)" }} />
                <motion.div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-5`} whileHover={{ rotate: -5, scale: 1.1 }} transition={{ duration: 0.4 }}>
                  <achievement.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{achievement.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
