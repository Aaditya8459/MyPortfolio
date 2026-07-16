"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2,
  Brain,
  Server,
  Palette,
  Cloud,
  Database,
  GitBranch,
  Terminal,
  Sparkles,
  X,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: typeof Code2;
  tags: string[];
  lane: number;
  speed: number;
  startX: number;
}

const skills: SkillItem[] = [
  {
    name: "Programming",
    icon: Code2,
    tags: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
    lane: 1,
    speed: 0.35,
    startX: -22,
  },
  {
    name: "AI & ML",
    icon: Brain,
    tags: ["Agentic AI", "LLMs", "RAG", "LangChain", "Transformers", "FAISS"],
    lane: 0,
    speed: 0.28,
    startX: 12,
  },
  {
    name: "Backend",
    icon: Server,
    tags: ["Spring Boot", "FastAPI", "REST APIs", "Microservices", "Redis", "WebSocket"],
    lane: 2,
    speed: 0.42,
    startX: 50,
  },
  {
    name: "Frontend",
    icon: Palette,
    tags: ["React 19", "Next.js 15", "Tailwind CSS", "shadcn/ui"],
    lane: 1,
    speed: 0.32,
    startX: 35,
  },
  {
    name: "DevOps",
    icon: Cloud,
    tags: ["Docker", "Git", "CI/CD", "GitHub Actions", "Maven"],
    lane: 0,
    speed: 0.26,
    startX: 70,
  },
  {
    name: "Databases",
    icon: Database,
    tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "FAISS"],
    lane: 2,
    speed: 0.18,
    startX: 0,
  },
  {
    name: "Version Control",
    icon: GitBranch,
    tags: ["Git", "GitHub", "GitLab", "Bitbucket"],
    lane: 1,
    speed: 0.45,
    startX: 78,
  },
  {
    name: "Tools",
    icon: Terminal,
    tags: ["Postman", "VS Code", "IntelliJ", "Docker Desktop"],
    lane: 0,
    speed: 0.30,
    startX: 28,
  },
];

const laneY = ["18%", "38%", "58%"];

export default function OrbitalSkills() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [positions, setPositions] = useState<number[]>(
    skills.map((s) => s.startX)
  );
  const animationRef = useRef<number>(null);

  const animate = useCallback(() => {
    if (!isPaused) {
      setPositions((prev) =>
        prev.map((x, i) => {
          const next = x + skills[i].speed;
          return next > 115 ? -30 : next;
        })
      );
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handleSkillClick = (skill: SkillItem, index: number) => {
    if (selectedSkill?.name === skill.name) {
      handleResume();
      return;
    }
    setIsPaused(true);
    setSelectedSkill(skill);
  };

  const handleResume = () => {
    setIsPaused(false);
    setSelectedSkill(null);
  };

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/40 max-w-lg mx-auto">
            Click any skill to pause and explore. Click the bottom circle or Resume button to resume.
          </p>
          <div className="mt-3 w-12 h-[3px] bg-gradient-to-r from-brand-violet to-brand-pink rounded-full mx-auto" />
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-14">
          {/* Orbital Conveyor Scene — Lane lines REMOVED */}
          <div
            className="relative w-full max-w-xl h-[300px] sm:h-[320px] flex items-center justify-center overflow-hidden rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.015)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Left fade mask */}
            <div
              className="absolute inset-y-0 left-0 w-16 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,10,15,0.8) 0%, transparent 100%)",
              }}
            />
            {/* Right fade mask */}
            <div
              className="absolute inset-y-0 right-0 w-16 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(270deg, rgba(10,10,15,0.8) 0%, transparent 100%)",
              }}
            />

            {/* Bottom Center Hub */}
            <motion.div
              className="absolute z-30 w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer"
              style={{
                bottom: "16px",
                left: "50%",
                transform: "translateX(-50%)",
                background: isPaused
                  ? "linear-gradient(135deg, #4a4a4a, #2a2a2a)"
                  : "linear-gradient(135deg, #c13584, #7c3aed)",
                boxShadow: isPaused
                  ? "0 0 0 4px rgba(10,10,15,0.8), 0 0 0 5px rgba(255,255,255,0.1)"
                  : "0 0 0 4px rgba(10,10,15,0.8), 0 0 0 5px rgba(193,53,132,0.3)",
              }}
              animate={
                !isPaused
                  ? {
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0 4px rgba(10,10,15,0.8), 0 0 0 5px rgba(193,53,132,0.3)",
                        "0 0 0 4px rgba(10,10,15,0.8), 0 0 0 8px rgba(193,53,132,0.12)",
                        "0 0 0 4px rgba(10,10,15,0.8), 0 0 0 5px rgba(193,53,132,0.3)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResume}
            >
              {isPaused ? (
                <X size={20} className="text-white/60" />
              ) : (
                <Sparkles size={20} className="text-white" />
              )}
            </motion.div>

            {/* Orbiting Skills — RESTORED larger size */}
            {skills.map((skill, index) => {
              const isActive = selectedSkill?.name === skill.name;
              const x = positions[index];

              const depthScale = skill.lane === 1 ? 1 : 0.92;
              const opacity = skill.lane === 1 ? 1 : 0.55;

              return (
                <motion.button
                  key={skill.name}
                  className="absolute flex items-center gap-3 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl cursor-pointer"
                  style={{
                    left: `${x}%`,
                    top: laneY[skill.lane],
                    transform: `translateY(-50%) scale(${isActive ? 1.05 : depthScale})`,
                    opacity: isActive ? 1 : opacity,
                    zIndex: isActive ? 30 : skill.lane === 1 ? 15 : 5,
                    background: isActive
                      ? "linear-gradient(135deg, #c13584, #7c3aed)"
                      : "rgba(255,255,255,0.04)",
                    border: isActive
                      ? "2px solid rgba(240, 147, 251, 0.7)"
                      : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: isActive
                      ? "0 0 30px rgba(193, 53, 132, 0.35), 0 8px 28px rgba(0,0,0,0.3)"
                      : skill.lane === 1
                      ? "0 4px 18px rgba(0,0,0,0.12)"
                      : "none",
                  }}
                  onClick={() => handleSkillClick(skill, index)}
                  whileHover={{
                    y: -6,
                    background: isActive
                      ? "linear-gradient(135deg, #c13584, #7c3aed)"
                      : "rgba(255,255,255,0.08)",
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: depthScale * 0.95 }}
                >
                  <skill.icon
                    size={22}
                    className={isActive ? "text-white" : "text-brand-pink/60"}
                  />
                  <span
                    className={`text-[15px] font-medium whitespace-nowrap ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {skill.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="w-full max-w-sm">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, x: 30, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 sm:p-6 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #c13584, #7c3aed)",
                      }}
                    >
                      <selectedSkill.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {selectedSkill.name}
                      </h3>
                      <p className="text-[11px] text-brand-pink/70">
                        {selectedSkill.tags.length} technologies
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {selectedSkill.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium"
                        style={{
                          background: "rgba(193, 53, 132, 0.12)",
                          border: "1px solid rgba(193, 53, 132, 0.2)",
                          color: "rgba(255,255,255,0.85)",
                        }}
                        initial={{ opacity: 0, scale: 0.8, y: 6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                        whileHover={{
                          background: "rgba(193, 53, 132, 0.22)",
                          y: -1,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    onClick={handleResume}
                    className="w-full py-2.5 rounded-lg text-[13px] font-semibold text-white"
                    style={{
                      background: "linear-gradient(135deg, #c13584, #7c3aed)",
                    }}
                    whileHover={{ scale: 1.02, opacity: 0.92 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Resume Flow
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-5 sm:p-6 rounded-2xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.015)",
                    border: "1px dashed rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-magenta/8 to-brand-violet/8 flex items-center justify-center mx-auto mb-3">
                    <Sparkles size={20} className="text-brand-pink/30" />
                  </div>
                  <p className="text-white/25 text-xs">
                    Click any skill orb to explore details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}