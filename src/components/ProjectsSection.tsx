"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { use3DTilt } from "@/hooks/use3DTilt";
import {
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
  Brain,
  ShieldCheck,
  BarChart3,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

const featuredProjects = [
  {
    name: "CodeBuddy",
    subtitle: "Real-Time Collaborative Code Editor",
    status: "Ongoing",
    category: "CLOUD IDE",
    tech: "Next.js · TypeScript · Socket.io · Redis · Docker",
    gradient: "from-brand-magenta via-brand-violet to-brand-purple",
    icon: "💻",
    points: [
      "Real-time collaborative coding with low-latency synchronization",
      "Redis Pub/Sub architecture for scalable multi-user rooms",
      "Docker-isolated multi-language code execution",
    ],
  },
  {
    name: "FineMind",
    subtitle: "AI Financial Intelligence Platform",
    status: "Completed",
    category: "AI · FINTECH",
    tech: "Python · FastAPI · RAG · LangChain · FAISS",
    gradient: "from-brand-violet via-brand-magenta to-brand-rose",
    icon: "📈",
    points: [
      "AI-driven financial intelligence and market sentiment analysis",
      "RAG pipeline for contextual financial knowledge retrieval",
      "LLM-powered insights for intelligent market analysis",
    ],
  },
  {
    name: "ExproTech",
    subtitle: "Green-Tech E-Waste Marketplace",
    status: "Completed",
    category: "ENTERPRISE",
    tech: "Java · Spring Boot · Thymeleaf · MySQL",
    gradient: "from-brand-purple via-brand-magenta to-brand-pink",
    icon: "♻️",
    points: [
      "E-waste and PC-component marketplace with modular architecture",
      "Product search, cart, order and buy/sell workflows",
      "Spring Boot service-repository architecture with MySQL",
    ],
  },
];

const additionalProjects = [
  {
    name: "GovernX",
    subtitle: "Model Governance Automation",
    category: "AI GOVERNANCE",
    tech: "Python · Tornado · React · TypeScript · LLMs",
    icon: ShieldCheck,
    gradient: "from-brand-rose to-brand-magenta",
  },
  {
    name: "RiskLens",
    subtitle: "Intelligent Model Risk Dashboard",
    category: "RISK ANALYTICS",
    tech: "FastAPI · React · PostgreSQL · pgVector",
    icon: BarChart3,
    gradient: "from-brand-violet to-brand-magenta",
  },
  {
    name: "AutoAudit",
    subtitle: "AI Compliance Assistant",
    category: "RAG · COMPLIANCE",
    tech: "LangChain · FAISS · Next.js · TypeScript",
    icon: Brain,
    gradient: "from-brand-magenta to-brand-pink",
  },
  {
    name: "FinGuard",
    subtitle: "LLM Financial Risk Analyzer",
    category: "FINTECH · LLM",
    tech: "Python · FastAPI · Redis · React",
    icon: LockKeyhole,
    gradient: "from-brand-purple to-brand-violet",
  },
];

export default function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <motion.div
          ref={titleRef}
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={
            titleVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-brand-magenta/10 border border-brand-magenta/15 flex items-center justify-center">
              <Layers
                size={19}
                className="text-brand-pink"
              />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-pink/60 font-semibold">
              Selected Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm text-white/40 leading-relaxed">
            AI, cloud, and full-stack systems built around real-world
            engineering problems.
          </p>
        </motion.div>

        {/* ================= FEATURED PROJECTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* ================= AI SYSTEMS ================= */}
        <motion.div
          className="mt-20 sm:mt-24 mb-8"
          initial={{ opacity: 0, y: 25 }}
          animate={
            titleVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles
              size={15}
              className="text-brand-pink"
            />

            <span className="text-[9px] uppercase tracking-[0.25em] text-brand-pink/60 font-semibold">
              AI Systems
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            More{" "}
            <span className="bg-gradient-to-r from-brand-pink to-brand-violet bg-clip-text text-transparent">
              Intelligent Work
            </span>
          </h3>
        </motion.div>

        {/* ================= ADDITIONAL PROJECTS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {additionalProjects.map((project, index) => (
            <AdditionalProjectCard
              key={project.name}
              project={project}
              index={index}
              isVisible={titleVisible}
            />
          ))}
        </div>

        {/* ================= FOOTER ================= */}
        <motion.div
          className="mt-8 flex items-center justify-between gap-4 px-1"
          initial={{ opacity: 0 }}
          animate={
            titleVisible
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shadow-[0_0_10px_rgba(240,147,251,0.8)]" />

            <span className="text-[10px] text-white/25 tracking-wide">
              AI · Backend · Full-Stack
            </span>
          </div>

          <span className="text-[10px] text-white/20">
            3 Featured · 4 AI Systems
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURED PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  const {
    ref: cardRef,
    handleMouseMove,
    handleMouseLeave,
  } = use3DTilt(8);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full overflow-hidden rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.025)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.07)",
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -5,
          borderColor: "rgba(240,147,251,0.25)",
          boxShadow:
            "0 25px 55px rgba(193,53,132,0.12)",
        }}
      >
        {/* ================= VISUAL ================= */}
        <div
          className={`relative h-40 sm:h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0215] via-transparent to-transparent opacity-70" />

          {/* Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-5xl opacity-30"
            whileHover={{
              scale: 1.2,
              rotate: 8,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            {project.icon}
          </motion.div>

          {/* Category */}
          <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-[8px] font-semibold tracking-wider text-white/70 bg-black/20 border border-white/10 backdrop-blur-md">
            {project.category}
          </span>

          {/* Status */}
          <span
            className={`absolute top-3 right-3 px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider ${
              project.status === "Ongoing"
                ? "bg-brand-pink/15 text-brand-pink border border-brand-pink/25"
                : "bg-white/10 text-white/60 border border-white/10"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {project.name}
              </h3>

              <p className="text-[11px] text-white/35 mt-1">
                {project.subtitle}
              </p>
            </div>

            <ArrowUpRight
              size={16}
              className="text-white/15 group-hover:text-brand-pink transition-colors shrink-0"
            />
          </div>

          {/* Tech */}
          <p className="text-[10px] text-brand-pink/65 font-medium mt-3">
            {project.tech}
          </p>

          {/* Points */}
          <ul className="mt-4 space-y-2">
            {project.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[11px] text-white/45 leading-relaxed"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-magenta shrink-0" />

                {point}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex gap-2 mt-5 pt-4 border-t border-white/5">
            <motion.button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium text-white/45 hover:text-white bg-white/[0.03] border border-white/[0.05] transition-colors"
              whileHover={{
                scale: 1.04,
              }}
            >
              <Github size={12} />
              Source
            </motion.button>

            <motion.button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium text-white/45 hover:text-white bg-white/[0.03] border border-white/[0.05] transition-colors"
              whileHover={{
                scale: 1.04,
              }}
            >
              <ExternalLink size={12} />
              Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   ADDITIONAL PROJECT CARD
========================================================= */

function AdditionalProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof additionalProjects)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = project.icon;

  return (
    <motion.div
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
          : {}
      }
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.08,
      }}
    >
      <motion.div
        className="relative h-full rounded-xl p-4 group overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.022)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        whileHover={{
          y: -4,
          borderColor: "rgba(240,147,251,0.2)",
          boxShadow:
            "0 18px 35px rgba(193,53,132,0.08)",
        }}
      >
        {/* Glow */}
        <div
          className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-2xl`}
        />

        <div className="relative flex items-start gap-3">
          <div
            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}
          >
            <Icon
              size={16}
              className="text-white"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-white">
                {project.name}
              </h4>

              <ArrowUpRight
                size={13}
                className="text-white/10 group-hover:text-brand-pink transition-colors shrink-0"
              />
            </div>

            <p className="text-[10px] text-white/35 mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>

        <span className="inline-block mt-3 text-[8px] uppercase tracking-[0.18em] font-semibold text-brand-pink/55">
          {project.category}
        </span>

        <p className="text-[9px] sm:text-[10px] text-white/30 leading-relaxed mt-2">
          {project.tech}
        </p>
      </motion.div>
    </motion.div>
  );
}