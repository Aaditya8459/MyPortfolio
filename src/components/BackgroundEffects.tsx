"use client";

import { useEffect, useRef } from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const orb1Ref = useMouseParallax(18);
  const orb2Ref = useMouseParallax(26);
  const orb3Ref = useMouseParallax(14);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const particles: Particle[] = [];

    const colors = [
      "#f093fb",
      "#c13584",
      "#7c3aed",
      "#fb7185",
    ];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);

    const particleCount = window.innerWidth < 768 ? 28 : 48;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 0.7 + Math.random() * 1.8,
        speedY: -(0.08 + Math.random() * 0.32),
        speedX: (Math.random() - 0.5) * 0.12,
        opacity: 0.12 + Math.random() * 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.018,
      });
    }

    const hexToRgb = (hex: string) => {
      const value = hex.replace("#", "");

      return {
        r: parseInt(value.substring(0, 2), 16),
        g: parseInt(value.substring(2, 4), 16),
        b: parseInt(value.substring(4, 6), 16),
      };
    };

    const drawParticle = (particle: Particle) => {
      const rgb = hexToRgb(particle.color);

      particle.pulse += particle.pulseSpeed;

      const pulseOpacity =
        particle.opacity *
        (0.7 + Math.sin(particle.pulse) * 0.3);

      const glowRadius = particle.size * 6;

      const glow = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        glowRadius
      );

      glow.addColorStop(
        0,
        `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${
          pulseOpacity * 0.35
        })`
      );

      glow.addColorStop(
        1,
        `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`
      );

      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        glowRadius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = glow;
      ctx.fill();

      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${pulseOpacity})`;

      ctx.fill();
    };

    const drawConnections = () => {
      const maxDistance = window.innerWidth < 768 ? 110 : 135;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < maxDistance) {
            const opacity =
              0.035 *
              (1 - distance / maxDistance);

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(240, 147, 251, ${opacity})`;

            ctx.lineWidth = 0.45;

            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      time += 0.01;

      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      particles.forEach((particle) => {
        particle.y += particle.speedY;

        particle.x +=
          particle.speedX +
          Math.sin(
            time * 0.6 + particle.y * 0.008
          ) *
            0.08;

        if (particle.y < -10) {
          particle.y =
            window.innerHeight + 10;

          particle.x =
            Math.random() * window.innerWidth;
        }

        if (particle.x < -10) {
          particle.x =
            window.innerWidth + 10;
        }

        if (particle.x > window.innerWidth + 10) {
          particle.x = -10;
        }
      });

      drawConnections();

      particles.forEach(drawParticle);

      animationId =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* ========================================================= */}
      {/* BASE BACKGROUND */}
      {/* ========================================================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(50, 10, 60, 0.18) 0%, rgba(10, 2, 21, 0) 45%), #0a0215",
        }}
      />

      {/* ========================================================= */}
      {/* LARGE ROUND ORBS */}
      {/* ========================================================= */}

      <div
        ref={orb1Ref}
        className="absolute -top-[18%] -left-[12%] w-[620px] h-[620px] sm:w-[720px] sm:h-[720px] rounded-full animate-orb-float"
        style={{
          background:
            "radial-gradient(circle at center, rgba(193, 53, 132, 0.22) 0%, rgba(193, 53, 132, 0.09) 35%, rgba(193, 53, 132, 0.025) 55%, transparent 72%)",
          filter: "blur(45px)",
        }}
      />

      <div
        ref={orb2Ref}
        className="absolute top-[18%] -right-[18%] w-[560px] h-[560px] sm:w-[680px] sm:h-[680px] rounded-full animate-orb-float-reverse"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.075) 38%, rgba(124, 58, 237, 0.02) 58%, transparent 74%)",
          filter: "blur(50px)",
        }}
      />

      <div
        ref={orb3Ref}
        className="absolute -bottom-[20%] left-[18%] w-[520px] h-[520px] sm:w-[620px] sm:h-[620px] rounded-full animate-orb-float-slow"
        style={{
          background:
            "radial-gradient(circle at center, rgba(240, 147, 251, 0.16) 0%, rgba(240, 147, 251, 0.055) 38%, rgba(240, 147, 251, 0.015) 58%, transparent 74%)",
          filter: "blur(48px)",
        }}
      />

      {/* ========================================================= */}
      {/* SMALL ROUND ORBS */}
      {/* ========================================================= */}

      <div
        className="absolute top-[12%] right-[28%] w-[170px] h-[170px] rounded-full animate-orb-float"
        style={{
          background:
            "radial-gradient(circle, rgba(193, 53, 132, 0.13) 0%, rgba(193, 53, 132, 0.035) 45%, transparent 72%)",
          filter: "blur(30px)",
          animationDelay: "-7s",
        }}
      />

      <div
        className="absolute top-[58%] left-[7%] w-[210px] h-[210px] rounded-full animate-orb-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 113, 133, 0.11) 0%, rgba(251, 113, 133, 0.025) 48%, transparent 74%)",
          filter: "blur(35px)",
          animationDelay: "-4s",
        }}
      />

      <div
        className="absolute bottom-[8%] right-[12%] w-[180px] h-[180px] rounded-full animate-orb-float-reverse"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.11) 0%, rgba(124, 58, 237, 0.025) 48%, transparent 74%)",
          filter: "blur(35px)",
          animationDelay: "-9s",
        }}
      />

      {/* ========================================================= */}
      {/* CENTER AI GLOW */}
      {/* ========================================================= */}

      <div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(193, 53, 132, 0.055) 0%, rgba(124, 58, 237, 0.025) 40%, transparent 72%)",
          filter: "blur(25px)",
        }}
      />

      {/* ========================================================= */}
      {/* PARTICLE NETWORK */}
      {/* ========================================================= */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-80"
      />

      {/* ========================================================= */}
      {/* SUBTLE TECH GRID */}
      {/* ========================================================= */}

      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(240,147,251,0.45) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(240,147,251,0.45) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "72px 72px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 78%)",
        }}
      />

      {/* ========================================================= */}
      {/* CENTER RADIAL LIGHT */}
      {/* ========================================================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(10, 2, 21, 0.12) 65%, rgba(10, 2, 21, 0.62) 100%)",
        }}
      />

      {/* ========================================================= */}
      {/* EDGE VIGNETTE */}
      {/* ========================================================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(10, 2, 21, 0.5) 100%)",
        }}
      />

      {/* ========================================================= */}
      {/* SUBTLE FILM GRAIN */}
      {/* ========================================================= */}

      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.8'/%3E%3C/svg%3E")`,
          backgroundSize:
            "180px 180px",
        }}
      />

      {/* ========================================================= */}
      {/* PREMIUM SCAN LINE */}
      {/* ========================================================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-brand-pink/10 to-transparent animate-scanline"
          style={{
            animationDuration: "14s",
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* TOP / BOTTOM FADE */}
      {/* ========================================================= */}

      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,2,21,0.35), transparent)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(10,2,21,0.45), transparent)",
        }}
      />
    </div>
  );
}