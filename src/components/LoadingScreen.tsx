"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

function GeometricLoader({ progress }: { progress: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    let rotation = 0;
    const draw = () => {
      ctx.clearRect(0, 0, 200, 200);
      const cx = 100, cy = 100;
      const size = 50 + progress * 0.3;
      rotation += 0.02 + progress * 0.0005;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * size;
        const y = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(193, 53, 132, ${0.3 + progress * 0.005})`;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.rotate(-rotation * 2);
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3 - Math.PI / 2;
        const x = Math.cos(angle) * (size * 0.5);
        const y = Math.sin(angle) * (size * 0.5);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(240, 147, 251, ${0.1 + progress * 0.003})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(240, 147, 251, ${0.5 + progress * 0.004})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 4 + progress * 0.05, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 236, 210, ${0.8 + progress * 0.002})`;
      ctx.fill();
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 15);
      gradient.addColorStop(0, `rgba(240, 147, 251, ${0.4 + progress * 0.003})`);
      gradient.addColorStop(1, "rgba(240, 147, 251, 0)");
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 + rotation;
        const x1 = cx + Math.cos(angle) * (size * 0.3);
        const y1 = cy + Math.sin(angle) * (size * 0.3);
        const x2 = cx + Math.cos(angle) * (size * (0.7 + Math.sin(rotation * 3 + i) * 0.1));
        const y2 = cy + Math.sin(angle) * (size * (0.7 + Math.sin(rotation * 3 + i) * 0.1));
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(193, 53, 132, ${0.15 + Math.sin(rotation * 2 + i) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [progress]);
  return <canvas ref={canvasRef} width={200} height={200} className="mx-auto" />;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase(1), 300);
          setTimeout(() => setPhase(2), 1200);
          setTimeout(() => onComplete(), 2200);
          return 100;
        }
        return prev + Math.random() * 2.5 + 0.5;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  const decryptTexts = [
    "INITIALIZING NEURAL NETWORK...",
    "LOADING ASSETS...",
    "DECRYPTING PORTFOLIO DATA...",
    "ESTABLISHING SECURE CONNECTION...",
    "RENDERING VISUAL EFFECTS...",
    "OPTIMIZING PERFORMANCE...",
    "ACCESS GRANTED",
  ];
  const currentText = decryptTexts[Math.min(Math.floor((progress / 100) * decryptTexts.length), decryptTexts.length - 1)];

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center" style={{ background: "#0a0215" }} exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent animate-scanline" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(240,147,251,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(240,147,251,0.3) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-brand-magenta/20 blur-[100px] animate-orb-float" />
        <div className="absolute bottom-[20%] right-[20%] w-[250px] h-[250px] rounded-full bg-brand-pink/15 blur-[80px] animate-orb-float-reverse" />
        <motion.div className="relative z-10 flex flex-col items-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <GeometricLoader progress={progress} />
          <motion.h1 className="mt-8 text-2xl font-bold tracking-[0.3em] text-white/90" animate={phase === 1 ? { opacity: [1, 0.3, 1] } : {}} transition={{ duration: 0.1, repeat: 3 }}>
            {phase === 2 ? <span className="bg-gradient-to-r from-brand-pink via-brand-magenta to-brand-violet bg-clip-text text-transparent">WELCOME</span> : "AADITYA MAINDARKAR"}
          </motion.h1>
          <motion.p className="mt-4 text-sm tracking-[0.2em] text-brand-pink/70 font-mono" key={currentText} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {phase === 2 ? "> SYSTEM READY" : `> ${currentText}`}
          </motion.p>
          <div className="mt-8 w-[300px] h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-brand-magenta via-brand-pink to-brand-violet" initial={{ width: "0%" }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
          </div>
          <motion.p className="mt-3 text-xs font-mono text-white/40" animate={{ opacity: phase === 2 ? 0 : 1 }}>{Math.floor(progress)}%</motion.p>
          <div className="absolute bottom-8 left-0 right-0 overflow-hidden h-16 opacity-20">
            <BinaryRain />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function BinaryRain() {
  const [columns, setColumns] = useState<string[]>([]);
  useEffect(() => {
    const cols: string[] = [];
    for (let i = 0; i < 40; i++) cols.push(Array(20).fill(0).map(() => (Math.random() > 0.5 ? "1" : "0")).join(""));
    setColumns(cols);
    const interval = setInterval(() => {
      setColumns((prev) => prev.map((col) => { const arr = col.split(""); arr.pop(); arr.unshift(Math.random() > 0.5 ? "1" : "0"); return arr.join(""); }));
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center gap-1 text-[8px] font-mono text-brand-pink/30">
      {columns.map((col, i) => (
        <div key={i} className="flex flex-col">
          {col.split("").map((bit, j) => <span key={j} style={{ opacity: j < 5 ? 0.1 + j * 0.15 : j > 15 ? 0.8 - (j - 15) * 0.15 : 0.8 }}>{bit}</span>)}
        </div>
      ))}
    </div>
  );
}
