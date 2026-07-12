"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Camera, Video, Film, Scissors, Palette, Clapperboard,
  Baby, Store, PartyPopper, Heart, Mountain, Sparkles, Star,
  Monitor, Wand2, Layers, Music, Mic, Aperture, Zap, Eye, Award,
  PenTool, Crop, Wand
} from "lucide-react";

interface ToolItem {
  name: string;
  icon: typeof Code2;
  category: string;
  color: string;
}

const editingTools: ToolItem[] = [
  { name: "DaVinci Resolve", icon: Aperture, category: "Color & Edit", color: "from-orange-500 to-amber-600" },
  { name: "Premiere Pro", icon: Clapperboard, category: "Video Editing", color: "from-violet-500 to-purple-600" },
  { name: "After Effects", icon: Sparkles, category: "Motion Graphics", color: "from-indigo-500 to-blue-600" },
  { name: "Photoshop", icon: Palette, category: "Photo Editing", color: "from-blue-500 to-cyan-500" },
  { name: "Lightroom", icon: Eye, category: "Color Grading", color: "from-sky-400 to-teal-500" },
  { name: "CapCut", icon: Scissors, category: "Short-form", color: "from-pink-500 to-rose-500" },
  { name: "Final Cut Pro", icon: Film, category: "Video Editing", color: "from-emerald-500 to-green-600" },
  { name: "Audition", icon: Mic, category: "Audio Post", color: "from-amber-500 to-yellow-600" },
  { name: "SmartCut PRO", icon: Crop, category: "AI Editing", color: "from-rose-500 to-pink-600" },
  { name: "PromoCut", icon: PenTool, category: "Marketing", color: "from-fuchsia-500 to-purple-600" },
  { name: "Canva", icon: Wand, category: "Design", color: "from-cyan-400 to-blue-500" },
];

interface ServiceItem {
  name: string;
  icon: typeof Code2;
  description: string;
  color: string;
}

const productionServices: ServiceItem[] = [
  { name: "Cinematography", icon: Camera, description: "Cinematic storytelling with professional camera work", color: "from-brand-violet to-brand-magenta" },
  { name: "Traditional Wedding", icon: Heart, description: "Timeless wedding films with emotional depth", color: "from-brand-rose to-brand-pink" },
  { name: "Destination Wedding", icon: Mountain, description: "Breathtaking destination wedding coverage", color: "from-brand-blue to-brand-violet" },
  { name: "Pre-Wedding Shoot", icon: Camera, description: "Creative couple sessions before the big day", color: "from-brand-pink to-brand-magenta" },
  { name: "Post-Wedding Film", icon: Film, description: "Cinematic recap and highlight reels", color: "from-brand-magenta to-brand-rose" },
  { name: "Baby Shower", icon: Baby, description: "Heartwarming celebration of new beginnings", color: "from-brand-rose to-brand-pink" },
  { name: "Store Launch", icon: Store, description: "Professional brand opening coverage", color: "from-brand-violet to-brand-cyan" },
  { name: "Corporate Events", icon: PartyPopper, description: "High-impact corporate and launch events", color: "from-brand-pink to-brand-magenta" },
  { name: "Commercial Ads", icon: Video, description: "Brand storytelling through visual advertising", color: "from-brand-magenta to-brand-violet" },
  { name: "Fashion & Modelling", icon: Star, description: "Editorial and runway visual production", color: "from-brand-pink to-brand-rose" },
  { name: "Music Videos", icon: Music, description: "Artistic music video production", color: "from-brand-violet to-brand-blue" },
  { name: "Documentary", icon: Monitor, description: "Real stories told with cinematic precision", color: "from-brand-magenta to-brand-pink" },
];

const toolLanes = [
  { items: editingTools.slice(0, 4), lane: 0, speed: 0.253, startX: 5 },   // +15% from 0.22
  { items: editingTools.slice(4, 8), lane: 1, speed: 0.322, startX: 45 },  // +15% from 0.28
  { items: editingTools.slice(8, 11), lane: 2, speed: 0.253, startX: 25 }, // +15% from 0.22
];

const laneY = ["20%", "45%", "70%"];

function ToolOrbital() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [positions, setPositions] = useState<number[]>(toolLanes.map((t) => t.startX));
  const animationRef = useRef<number>();

  const animate = useCallback(() => {
    if (!isPaused) {
      setPositions((prev) =>
        prev.map((x, i) => {
          const next = x + toolLanes[i].speed;
          return next > 115 ? -35 : next;
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

  const handleToolClick = (tool: ToolItem) => {
    if (selectedTool?.name === tool.name) {
      handleResume();
      return;
    }
    setIsPaused(true);
    setSelectedTool(tool);
  };

  const handleResume = () => {
    setIsPaused(false);
    setSelectedTool(null);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Scene */}
      <div
        className="relative w-full h-[280px] sm:h-[300px] flex items-center justify-center overflow-hidden rounded-2xl mb-8"
        style={{
          background: "rgba(255,255,255,0.015)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 w-16 pointer-events-none z-20"
          style={{
            background: "linear-gradient(90deg, rgba(10,10,15,0.9) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-16 pointer-events-none z-20"
          style={{
            background: "linear-gradient(270deg, rgba(10,10,15,0.9) 0%, transparent 100%)",
          }}
        />

        {/* Center Hub */}
        <motion.div
          className="absolute z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: isPaused
              ? "linear-gradient(135deg, #4a4a4a, #2a2a2a)"
              : "linear-gradient(135deg, #c13584, #7c3aed)",
            boxShadow: isPaused
              ? "0 0 0 3px rgba(10,10,15,0.8), 0 0 0 4px rgba(255,255,255,0.1)"
              : "0 0 0 3px rgba(10,10,15,0.8), 0 0 0 4px rgba(193,53,132,0.3)",
          }}
          animate={
            !isPaused
              ? {
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    "0 0 0 3px rgba(10,10,15,0.8), 0 0 0 4px rgba(193,53,132,0.3)",
                    "0 0 0 3px rgba(10,10,15,0.8), 0 0 0 7px rgba(193,53,132,0.12)",
                    "0 0 0 3px rgba(10,10,15,0.8), 0 0 0 4px rgba(193,53,132,0.3)",
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
            <Zap size={18} className="text-white/60" />
          ) : (
            <Wand2 size={18} className="text-white" />
          )}
        </motion.div>

        {/* Orbiting Tool Cards */}
        {toolLanes.map((lane, laneIdx) =>
          lane.items.map((tool, toolIdx) => {
            const globalIndex = laneIdx * 4 + toolIdx;
            const isActive = selectedTool?.name === tool.name;
            const x = positions[laneIdx] + toolIdx * 28;

            const depthScale = lane.lane === 1 ? 1 : 0.9;
            const opacity = lane.lane === 1 ? 1 : 0.6;

            return (
              <motion.button
                key={`${tool.name}-${globalIndex}`}
                className="absolute flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl cursor-pointer"
                style={{
                  left: `${x}%`,
                  top: laneY[lane.lane],
                  transform: `translateY(-50%) scale(${isActive ? 1.06 : depthScale})`,
                  opacity: isActive ? 1 : opacity,
                  zIndex: isActive ? 30 : lane.lane === 1 ? 15 : 5,
                  background: isActive
                    ? "linear-gradient(135deg, #c13584, #7c3aed)"
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? "2px solid rgba(240, 147, 251, 0.7)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isActive
                    ? "0 0 25px rgba(193, 53, 132, 0.35), 0 6px 20px rgba(0,0,0,0.3)"
                    : lane.lane === 1
                    ? "0 4px 14px rgba(0,0,0,0.1)"
                    : "none",
                }}
                onClick={() => handleToolClick(tool)}
                whileHover={{
                  y: -4,
                  background: isActive
                    ? "linear-gradient(135deg, #c13584, #7c3aed)"
                    : "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: depthScale * 0.95 }}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0`}
                >
                  <tool.icon size={14} className="text-white" />
                </div>
                <div className="text-left">
                  <span
                    className={`block text-[13px] font-medium whitespace-nowrap leading-tight ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    {tool.name}
                  </span>
                  <span
                    className={`block text-[10px] ${
                      isActive ? "text-white/70" : "text-white/40"
                    }`}
                  >
                    {tool.category}
                  </span>
                </div>
              </motion.button>
            );
          })
        )}
      </div>

      {/* Selected Tool Detail */}
      <AnimatePresence mode="wait">
        {selectedTool && (
          <motion.div
            key={selectedTool.name}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 sm:p-6 rounded-2xl mx-auto max-w-md"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedTool.color} flex items-center justify-center`}
              >
                <selectedTool.icon size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{selectedTool.name}</h4>
                <p className="text-[11px] text-brand-pink/70">{selectedTool.category}</p>
              </div>
            </div>
            <p className="text-xs text-white/50 mb-4 leading-relaxed">
              Expert-level proficiency in {selectedTool.name} for professional-grade {selectedTool.category.toLowerCase()} workflows.
            </p>
            <motion.button
              onClick={handleResume}
              className="w-full py-2.5 rounded-xl text-[13px] font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #c13584, #7c3aed)",
              }}
              whileHover={{ scale: 1.02, opacity: 0.92 }}
              whileTap={{ scale: 0.98 }}
            >
              Resume Flow
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Service Cards Grid ───
function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {productionServices.map((service, index) => (
        <motion.div
          key={service.name}
          className="group relative p-4 sm:p-5 rounded-2xl cursor-pointer overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          whileHover={{
            y: -6,
            background: "rgba(255,255,255,0.06)",
            borderColor: "rgba(193, 53, 132, 0.25)",
          }}
        >
          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{
              background: `radial-gradient(circle at 50% 0%, rgba(193, 53, 132, 0.08), transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}
            >
              <service.icon size={18} className="text-white" />
            </div>
            <h4 className="text-sm sm:text-[15px] font-semibold text-white/90 mb-1">
              {service.name}
            </h4>
            <p className="text-[11px] sm:text-xs text-white/40 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, transparent 50%, rgba(193, 53, 132, 0.06) 50%)`,
              borderRadius: "0 16px 0 0",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Stats Bar ───
function StatsBar() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "8+", label: "Years Experience" },
    { value: "14", label: "Tools Mastered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="text-center p-4 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-[11px] text-white/40 mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Main Component ───
export default function CreatorServices() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-rose/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-rose/20 to-brand-magenta/20 flex items-center justify-center">
              <Camera size={20} className="text-brand-pink" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">
                Creator & Editor
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/40 max-w-lg mx-auto mt-2">
            Professional visual storyteller crafting cinematic experiences through video production, photo editing, and motion design
          </p>
          <div className="mt-3 w-12 h-[3px] bg-gradient-to-r from-brand-rose to-brand-pink rounded-full mx-auto" />
        </motion.div>

        {/* Stats */}
        <StatsBar />

        {/* Tools Section */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet/20 to-brand-magenta/20 flex items-center justify-center">
              <Layers size={16} className="text-brand-pink" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Editing Arsenal</h3>
              <p className="text-[11px] text-white/40">Click any tool to explore expertise</p>
            </div>
          </motion.div>

          <ToolOrbital />
        </div>

        {/* Services Section */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-rose/20 to-brand-pink/20 flex items-center justify-center">
              <Award size={16} className="text-brand-pink" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Production Services</h3>
              <p className="text-[11px] text-white/40">End-to-end visual production for every occasion</p>
            </div>
          </motion.div>

          <ServiceGrid />
        </div>
      </div>
    </section>
  );
}