"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { use3DTilt } from "@/hooks/use3DTilt";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Code Buddy",
    status: "ongoing",
    tech: "React · TypeScript · Next.js · Socket.io · Redis",
    gradient: "from-brand-magenta via-brand-violet to-brand-purple",
    icon: "💻",
    points: [
      "High-concurrency collaborative code editor with <100ms sync latency",
      "Stateless horizontal scaling via WebSocket and Redis Pub/Sub",
      "Secure Docker-containerized sandbox with CPU/Memory limits",
      "Monaco Editor with custom themes and live terminal",
    ],
  },
  {
    name: "FineMind",
    status: "completed",
    tech: "Python · FastAPI · RAG · LangChain · FAISS",
    gradient: "from-brand-violet via-brand-magenta to-brand-rose",
    icon: "📊",
    points: [
      "AI-powered financial intelligence with real-time sentiment analysis",
      "Market trend predictions using ML models",
      "RAG-based retrieval with vector databases for LLM-driven insights",
    ],
  },
  {
    name: "ExproTech",
    status: "completed",
    tech: "Java · Spring Boot · MySQL",
    gradient: "from-brand-purple via-brand-magenta to-brand-pink",
    icon: "🛒",
    points: [
      "Modular enterprise e-commerce with Service-Repository patterns",
      "Optimized complex MySQL schemas for faster data retrieval",
      "Full-stack enterprise-grade order management system",
    ],
  },
];

export default function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div ref={titleRef} className="mb-16 sm:mb-20" initial={{ opacity: 0, y: 40 }} animate={titleVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-pink/20 to-brand-magenta/20 flex items-center justify-center">
              <Layers size={22} className="text-brand-pink" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">Featured Projects</span>
            </h2>
          </div>
          <div className="ml-16 w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-magenta rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const { ref: cardRef, handleMouseMove, handleMouseLeave } = use3DTilt(10);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}>
      <motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative h-full rounded-3xl overflow-hidden transition-all duration-100 group cursor-pointer"
        style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", transformStyle: "preserve-3d" }}
        whileHover={{ borderColor: "rgba(193, 53, 132, 0.3)", boxShadow: "0 30px 60px rgba(193, 53, 132, 0.15)" }}
      >
        <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute h-[1px] bg-white/10" style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }} animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }} />
          ))}
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl opacity-30" whileHover={{ scale: 1.3, rotate: 10, opacity: 0.5 }} transition={{ duration: 0.5 }}>
            {project.icon}
          </motion.div>
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.status === "ongoing" ? "bg-brand-pink/20 text-brand-pink border border-brand-pink/30" : "bg-brand-magenta/20 text-brand-magenta border border-brand-magenta/30"}`}>
              {project.status}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0215]/80 to-transparent" />
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg sm:text-xl font-semibold text-white">{project.name}</h3>
            <ArrowUpRight size={18} className="text-white/20 group-hover:text-brand-pink transition-colors" />
          </div>
          <p className="text-xs sm:text-sm text-brand-pink/70 font-medium mb-4">{project.tech}</p>
          <ul className="space-y-2">
            {project.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/50 leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-magenta flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-5 pt-4 border-t border-white/5">
            <motion.button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white/60 hover:text-white transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }} whileHover={{ scale: 1.05 }}>
              <Github size={13} />Source
            </motion.button>
            <motion.button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white/60 hover:text-white transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }} whileHover={{ scale: 1.05 }}>
              <ExternalLink size={13} />Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
