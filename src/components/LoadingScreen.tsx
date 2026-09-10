"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, Cpu } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

/* ============================================================= */
/* CIRCULAR AI LOADER */
/* ============================================================= */

function CircularLoader({ progress }: { progress: number }) {
  const radius = 82;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] flex items-center justify-center">
      {/* Outer ambient glow */}
      <motion.div
        className="absolute inset-[30px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(193,53,132,0.16), rgba(124,58,237,0.06) 45%, transparent 72%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-[7px] rounded-full"
        style={{
          border:
            "1px solid rgba(255,255,255,0.07)",
          borderTopColor:
            "rgba(240,147,251,0.55)",
          borderRightColor:
            "rgba(193,53,132,0.35)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Second rotating ring */}
      <motion.div
        className="absolute inset-[18px] rounded-full"
        style={{
          border:
            "1px dashed rgba(240,147,251,0.14)",
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* SVG Progress Ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 220 220"
      >
        {/* Background circle */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.055)"
          strokeWidth="5"
        />

        {/* Progress glow */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="rgba(240,147,251,0.12)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            filter: "blur(7px)",
            transition:
              "stroke-dashoffset 0.15s ease-out",
          }}
        />

        {/* Main progress */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="url(#loaderGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition:
              "stroke-dashoffset 0.15s ease-out",
          }}
        />

        <defs>
          <linearGradient
            id="loaderGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#7c3aed"
            />
            <stop
              offset="50%"
              stopColor="#c13584"
            />
            <stop
              offset="100%"
              stopColor="#f093fb"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbiting indicator */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute top-[7px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #f093fb, #c13584)",
            boxShadow:
              "0 0 15px rgba(240,147,251,0.8)",
          }}
        />
      </motion.div>

      {/* Central glass circle */}
      <motion.div
        className="relative z-10 w-[112px] h-[112px] sm:w-[124px] sm:h-[124px] rounded-full flex flex-col items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.07), rgba(10,2,21,0.92) 65%)",
          border:
            "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 15px 50px rgba(0,0,0,0.35), inset 0 0 30px rgba(193,53,132,0.06)",
          backdropFilter: "blur(20px)",
        }}
        animate={{
          boxShadow: [
            "0 15px 50px rgba(0,0,0,0.35), inset 0 0 30px rgba(193,53,132,0.06)",
            "0 15px 55px rgba(193,53,132,0.12), inset 0 0 35px rgba(193,53,132,0.12)",
            "0 15px 50px rgba(0,0,0,0.35), inset 0 0 30px rgba(193,53,132,0.06)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            rotate: progress >= 100 ? 0 : 360,
          }}
          transition={{
            duration: 4,
            repeat:
              progress >= 100 ? 0 : Infinity,
            ease: "linear",
          }}
        >
          {progress >= 100 ? (
            <Check
              size={24}
              strokeWidth={1.8}
              className="text-brand-pink"
            />
          ) : (
            <Cpu
              size={23}
              strokeWidth={1.5}
              className="text-brand-pink/80"
            />
          )}
        </motion.div>

        <motion.span
          key={Math.floor(progress)}
          className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white"
        >
          {Math.floor(progress)}
          <span className="text-brand-pink">
            %
          </span>
        </motion.span>

        <span className="mt-0.5 text-[7px] uppercase tracking-[0.28em] text-white/25">
          System Load
        </span>
      </motion.div>

      {/* Orbiting dots */}
      {[0, 1, 2].map((item) => (
        <motion.div
          key={item}
          className="absolute inset-0"
          animate={{
            rotate: item % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 7 + item * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width:
                item === 0
                  ? "4px"
                  : "3px",
              height:
                item === 0
                  ? "4px"
                  : "3px",
              top:
                item === 0
                  ? "30px"
                  : item === 1
                  ? "48px"
                  : "65px",
              left:
                item === 0
                  ? "50%"
                  : item === 1
                  ? "82%"
                  : "18%",
              background:
                item === 0
                  ? "#f093fb"
                  : "#c13584",
              boxShadow:
                "0 0 10px rgba(240,147,251,0.7)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ============================================================= */
/* LOADING SCREEN */
/* ============================================================= */

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<
    "loading" | "complete" | "welcome"
  >("loading");

  const completionStarted = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          if (!completionStarted.current) {
            completionStarted.current = true;

            setPhase("complete");

            setTimeout(() => {
              setPhase("welcome");
            }, 650);

            setTimeout(() => {
              onComplete();
            }, 1700);
          }

          return 100;
        }

        /*
         * Slower near the end for a premium
         * loading-screen feel.
         */
        let increment = 0;

        if (prev < 55) {
          increment =
            Math.random() * 2.4 + 0.7;
        } else if (prev < 85) {
          increment =
            Math.random() * 1.5 + 0.4;
        } else {
          increment =
            Math.random() * 0.8 + 0.15;
        }

        return Math.min(
          prev + increment,
          100
        );
      });
    }, 45);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  /* =========================================================== */
  /* STATUS TEXT */
  /* =========================================================== */

  const loadingTexts = [
    "INITIALIZING AI SYSTEMS",
    "LOADING PORTFOLIO",
    "CONNECTING MODULES",
    "PREPARING EXPERIENCE",
    "OPTIMIZING INTERFACE",
    "FINALIZING SYSTEM",
  ];

  const textIndex = Math.min(
    Math.floor(
      (progress / 100) *
        loadingTexts.length
    ),
    loadingTexts.length - 1
  );

  const currentText =
    loadingTexts[textIndex];

  /* =========================================================== */
  /* RENDER */
  /* =========================================================== */

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at center, #12051c 0%, #0a0215 45%, #050207 100%)",
        }}
        exit={{
          opacity: 0,
          scale: 1.03,
          filter: "blur(8px)",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* ===================================================== */}
        {/* BACKGROUND */}
        {/* ===================================================== */}

        <div className="absolute inset-0 pointer-events-none">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(240,147,251,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(240,147,251,0.35) 1px, transparent 1px)",
              backgroundSize:
                "60px 60px",
            }}
          />

          {/* Top-left glow */}
          <motion.div
            className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-[120px]"
            style={{
              background:
                "rgba(124,58,237,0.13)",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Bottom-right glow */}
          <motion.div
            className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full blur-[130px]"
            style={{
              background:
                "rgba(193,53,132,0.11)",
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, -30, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Center glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(193,53,132,0.08), transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* Scanline */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent"
            animate={{
              top: [
                "-5%",
                "105%",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Vertical guide lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.025] hidden md:block" />

          <div className="absolute right-[8%] top-0 bottom-0 w-px bg-white/[0.025] hidden md:block" />
        </div>

        {/* ===================================================== */}
        {/* MAIN CONTENT */}
        {/* ===================================================== */}

        <motion.div
          className="relative z-10 flex flex-col items-center w-full px-6"
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Small system label */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-50 animate-ping" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-pink" />
            </span>

            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">
              Portfolio System
            </span>
          </motion.div>

          {/* Circular loader */}
          <CircularLoader
            progress={progress}
          />

          {/* ================================================= */}
          {/* NAME */}
          {/* ================================================= */}

          <motion.div
            className="mt-8 text-center"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
          >
            <h1 className="text-xl sm:text-2xl font-semibold tracking-[0.18em]">
              {phase === "welcome" ? (
                <span className="bg-gradient-to-r from-brand-pink via-brand-magenta to-brand-violet bg-clip-text text-transparent">
                  WELCOME
                </span>
              ) : (
                <span className="text-white/90">
                  AADITYA MAINDARKAR
                </span>
              )}
            </h1>

            <motion.p
              className="mt-2 text-[9px] uppercase tracking-[0.32em] text-white/25"
              animate={{
                opacity:
                  phase === "welcome"
                    ? 0
                    : [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              AI Engineer · Software Developer
            </motion.p>
          </motion.div>

          {/* ================================================= */}
          {/* STATUS */}
          {/* ================================================= */}

          <motion.div
            className="mt-7 flex items-center gap-2"
            key={
              phase === "welcome"
                ? "welcome"
                : currentText
            }
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {phase === "welcome" ? (
              <>
                <Sparkles
                  size={12}
                  className="text-brand-pink"
                />

                <span className="text-[10px] sm:text-xs font-mono tracking-[0.16em] text-brand-pink/70">
                  &gt; SYSTEM READY
                </span>
              </>
            ) : phase === "complete" ? (
              <>
                <Check
                  size={12}
                  className="text-brand-pink"
                />

                <span className="text-[10px] sm:text-xs font-mono tracking-[0.16em] text-brand-pink/70">
                  &gt; ACCESS GRANTED
                </span>
              </>
            ) : (
              <>
                <span className="text-brand-pink/60 font-mono text-[10px]">
                  &gt;
                </span>

                <span className="text-[10px] sm:text-xs font-mono tracking-[0.12em] text-white/35">
                  {currentText}
                </span>

                <motion.span
                  className="w-1.5 h-3 bg-brand-pink/60"
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                />
              </>
            )}
          </motion.div>

          {/* ================================================= */}
          {/* BOTTOM SYSTEM INFO */}
          {/* ================================================= */}

          <motion.div
            className="mt-9 flex items-center gap-4 sm:gap-6 text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-white/20"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity:
                phase === "welcome"
                  ? 0
                  : 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span>AI ENGINE</span>

            <span className="w-1 h-1 rounded-full bg-brand-pink/30" />

            <span>FULL STACK</span>

            <span className="w-1 h-1 rounded-full bg-brand-pink/30" />

            <span>2026</span>
          </motion.div>
        </motion.div>

        {/* ===================================================== */}
        {/* CORNER DETAILS */}
        {/* ===================================================== */}

        <div className="absolute top-6 left-6 text-[8px] font-mono text-white/15 tracking-wider">
          AM / 001
        </div>

        <div className="absolute top-6 right-6 text-[8px] font-mono text-white/15 tracking-wider">
          ONLINE
        </div>

        <div className="absolute bottom-6 left-6 text-[8px] font-mono text-white/15 tracking-wider">
          BUILDING EXPERIENCE
        </div>

        <div className="absolute bottom-6 right-6 text-[8px] font-mono text-white/15 tracking-wider">
          V1.0
        </div>
      </motion.div>
    </AnimatePresence>
  );
}