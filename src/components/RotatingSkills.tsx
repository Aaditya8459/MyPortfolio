"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Server,
  Database,
  Monitor,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillCard {
  name: string;
  icon: typeof Code2;
  description: string;
  tags: string[];
  badge: string;
}

const skills: SkillCard[] = [
  {
    name: "Programming",
    icon: Code2,
    description:
      "Strong foundation in modern programming, scripting, and application development.",
    tags: [
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Bash",
    ],
    badge: "6 LANGUAGES",
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
    description:
      "Building intelligent systems with LLMs, RAG pipelines, agents, and ML frameworks.",
    tags: [
      "Agentic AI",
      "LLMs",
      "RAG",
      "LangChain",
      "Transformers",
      "FAISS",
      "TensorFlow",
      "Scikit-learn",
    ],
    badge: "8+ TECHNOLOGIES",
  },
  {
    name: "Backend Engineering",
    icon: Server,
    description:
      "Designing scalable APIs, distributed services, and real-time backend systems.",
    tags: [
      "Django",
      "FastAPI",
      "Tornado",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Redis",
      "WebSocket",
      "JWT",
    ],
    badge: "9 SKILLS",
  },
  {
    name: "Databases",
    icon: Database,
    description:
      "Working with relational, NoSQL, and vector-based storage for scalable applications.",
    tags: [
      "PostgreSQL",
      "pgVector",
      "ChromaDB",
      "MongoDB",
      "MySQL",
    ],
    badge: "5 DATABASES",
  },
  {
    name: "Frontend Engineering",
    icon: Monitor,
    description:
      "Creating responsive, modern interfaces for AI and enterprise applications.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI/UX",
    ],
    badge: "5 SKILLS",
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    description:
      "Containerizing, automating, and deploying production-ready software systems.",
    tags: [
      "Docker",
      "Git",
      "CI/CD",
      "GitHub Actions",
      "AWS",
      "GCP",
    ],
    badge: "6 TOOLS",
  },
];

const firstRow = [...skills, ...skills];

const secondRow = [
  skills[3],
  skills[4],
  skills[5],
  skills[0],
  skills[1],
  skills[2],
  skills[3],
  skills[4],
  skills[5],
  skills[0],
  skills[1],
  skills[2],
];

export default function OrbitalSkills() {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "74px 74px",
          }}
        />

        {/* Top Glow */}
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[250px] rounded-full blur-[120px]"
          style={{
            background:
              "rgba(124, 58, 237, 0.06)",
          }}
        />

        {/* Bottom Glow */}
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[250px] rounded-full blur-[120px]"
          style={{
            background:
              "rgba(193, 53, 132, 0.06)",
          }}
        />

        {/* Vertical Guide Lines */}
        <div className="absolute top-0 bottom-0 left-[9%] w-px bg-white/[0.035] hidden lg:block" />

        <div className="absolute top-0 bottom-0 right-[9%] w-px bg-white/[0.035] hidden lg:block" />
      </div>

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <motion.div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-12 sm:mb-14"
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={
          isVisible
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: 25,
              }
        }
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-px bg-brand-pink" />

              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-pink/80">
                Engineering Stack
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-white">
                Technical
              </span>{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm sm:text-base text-white/35 leading-relaxed">
              Technologies I use to build intelligent, scalable, and
              production-ready systems.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.07] bg-white/[0.02]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-pink/50" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-pink" />
            </span>

            <span className="text-[10px] uppercase tracking-wider text-white/35">
              AI · Backend · Full-Stack
            </span>
          </div>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* MARQUEE AREA */}
      {/* ========================================================= */}

      <div className="relative z-10 space-y-5 sm:space-y-6">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-r from-[#0a0a0f] to-transparent z-30 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-l from-[#0a0a0f] to-transparent z-30 pointer-events-none" />

        {/* ======================================================= */}
        {/* FIRST ROW */}
        {/* ======================================================= */}

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5 sm:gap-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {firstRow.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-first-${index}`}
                skill={skill}
              />
            ))}
          </motion.div>
        </div>

        {/* ======================================================= */}
        {/* SECOND ROW */}
        {/* ======================================================= */}

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5 sm:gap-6 w-max"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {secondRow.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-second-${index}`}
                skill={skill}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM SUMMARY */}
      {/* ========================================================= */}

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-10 sm:mt-12"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={
          isVisible
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: 20,
              }
        }
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
      >
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 py-4 px-5 rounded-xl border border-white/[0.05] bg-white/[0.015]">
          <div className="flex items-center gap-2">
            <Code2
              size={14}
              className="text-brand-pink/70"
            />

            <span className="text-[10px] sm:text-xs text-white/30">
              Modern Development Stack
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <SummaryItem
              value="6"
              label="Domains"
            />

            <SummaryItem
              value="30+"
              label="Technologies"
            />

            <SummaryItem
              value="AI"
              label="Focused"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================= */
/* SKILL CARD */
/* ============================================================= */

function SkillCard({
  skill,
}: {
  skill: SkillCard;
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="group relative w-[320px] sm:w-[350px] lg:w-[370px] h-[245px] sm:h-[255px] flex-shrink-0 rounded-2xl p-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012))",
        border:
          "1px dashed rgba(255,255,255,0.22)",
      }}
      whileHover={{
        y: -5,
        borderColor:
          "rgba(240,147,251,0.45)",
        background:
          "linear-gradient(145deg, rgba(193,53,132,0.07), rgba(255,255,255,0.02))",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.25)",
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {/* Card Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-brand-pink/5 blur-[60px] group-hover:bg-brand-pink/10 transition-all duration-500" />

      {/* Top Row */}
      <div className="relative flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl border border-white/[0.1] bg-white/[0.025] flex items-center justify-center group-hover:border-brand-pink/25 transition-colors duration-300">
          <Icon
            size={19}
            className="text-white/55 group-hover:text-brand-pink transition-colors duration-300"
          />
        </div>

        <span className="px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] text-[9px] font-medium tracking-wide text-white/35">
          {skill.badge}
        </span>
      </div>

      {/* Title */}
      <div className="relative mt-5">
        <div className="flex items-center gap-2">
          <h3 className="text-lg sm:text-xl font-semibold text-white/90 tracking-tight">
            {skill.name}
          </h3>

          <ArrowUpRight
            size={14}
            className="text-white/15 group-hover:text-brand-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>

        <p className="mt-2 text-sm text-white/40 leading-relaxed line-clamp-2">
          {skill.description}
        </p>
      </div>

      {/* Tags */}
      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {skill.tags.slice(0, 6).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.02] text-[10px] sm:text-[11px] text-white/35 group-hover:text-white/50 group-hover:border-white/[0.12] transition-all duration-300"
          >
            {tag}
          </span>
        ))}

        {skill.tags.length > 6 && (
          <span className="px-2.5 py-1 rounded-md border border-brand-pink/10 bg-brand-pink/5 text-[10px] sm:text-[11px] text-brand-pink/60">
            +{skill.tags.length - 6}
          </span>
        )}
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-pink/0 to-transparent group-hover:via-brand-pink/50 transition-all duration-500" />
    </motion.div>
  );
}

/* ============================================================= */
/* SUMMARY ITEM */
/* ============================================================= */

function SummaryItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
        {value}
      </span>

      <span className="text-[9px] uppercase tracking-wider text-white/25">
        {label}
      </span>
    </div>
  );
}