"use client";

import { useEffect, useRef } from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orb1Ref = useMouseParallax(20);
  const orb2Ref = useMouseParallax(30);
  const orb3Ref = useMouseParallax(15);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    let time = 0;
    const particles: Array<{x: number; y: number; size: number; speedY: number; speedX: number; opacity: number; color: string; trail: Array<{x: number; y: number; opacity: number}>}> = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        size: 1 + Math.random() * 3, speedY: -(0.2 + Math.random() * 0.8),
        speedX: (Math.random() - 0.5) * 0.3, opacity: 0.2 + Math.random() * 0.5,
        color: ["#f093fb", "#c13584", "#7c3aed", "#fb7185"][Math.floor(Math.random() * 4)],
        trail: [],
      });
    }

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = "rgba(10, 2, 21, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.trail.push({ x: p.x, y: p.y, opacity: p.opacity });
        if (p.trail.length > 15) p.trail.shift();
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + p.y * 0.01) * 0.2;
        if (p.y < -20) { p.y = canvas.height + 20; p.x = Math.random() * canvas.width; p.trail = []; }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        p.trail.forEach((t, i) => {
          const trailOpacity = (i / p.trail.length) * t.opacity * 0.3;
          const r = parseInt(p.color.slice(1, 3), 16);
          const g = parseInt(p.color.slice(3, 5), 16);
          const b = parseInt(p.color.slice(5, 7), 16);
          ctx.beginPath();
          ctx.arc(t.x, t.y, p.size * (i / p.trail.length), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${trailOpacity})`;
          ctx.fill();
        });

        const r = parseInt(p.color.slice(1, 3), 16);
        const g = parseInt(p.color.slice(3, 5), 16);
        const b = parseInt(p.color.slice(5, 7), 16);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fill();

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.3})`);
        glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(240, 147, 251, ${0.05 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div ref={orb1Ref} className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full animate-orb-float" style={{ background: "radial-gradient(circle, rgba(193, 53, 132, 0.4) 0%, rgba(193, 53, 132, 0.1) 40%, transparent 70%)", filter: "blur(60px)" }} />
      <div ref={orb2Ref} className="absolute top-[30%] -right-[15%] w-[600px] h-[600px] rounded-full animate-orb-float-reverse" style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, rgba(124, 58, 237, 0.08) 40%, transparent 70%)", filter: "blur(70px)" }} />
      <div ref={orb3Ref} className="absolute -bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full animate-orb-float-slow" style={{ background: "radial-gradient(circle, rgba(240, 147, 251, 0.3) 0%, rgba(240, 147, 251, 0.05) 40%, transparent 70%)", filter: "blur(50px)" }} />
      <div className="absolute top-[60%] left-[10%] w-[200px] h-[200px] rounded-full animate-orb-float-slow" style={{ background: "radial-gradient(circle, rgba(251, 113, 133, 0.2), transparent 70%)", filter: "blur(40px)", animationDelay: "-5s" }} />
      <div className="absolute top-[10%] right-[30%] w-[150px] h-[150px] rounded-full animate-orb-float" style={{ background: "radial-gradient(circle, rgba(193, 53, 132, 0.25), transparent 70%)", filter: "blur(35px)", animationDelay: "-10s" }} />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "256px 256px" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(10, 2, 21, 0.6) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-brand-pink/10 to-transparent animate-scanline" style={{ animationDuration: "12s" }} />
      </div>
    </div>
  );
}
