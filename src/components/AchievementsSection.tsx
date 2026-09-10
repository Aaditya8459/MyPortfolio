"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Trophy,
  Code2,
  GraduationCap,
  Star,
  Cloud,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const achievements = [
  {
    icon: Cloud,
    title: "Google Cloud GenAI",
    desc: 'Completed the "Introduction to Generative AI" certification from Google Cloud, strengthening my foundation in modern generative AI concepts.',
    category: "CERTIFICATION",
    highlight: "GENAI",
    color: "from-brand-magenta to-brand-violet",
    glow: "rgba(193, 53, 132, 0.16)",
  },
  {
    icon: Code2,
    title: "Competitive Programming",
    desc: "Solved 55+ algorithmic problems on LeetCode, strengthening problem-solving skills across data structures, algorithms, optimization, and logical reasoning.",
    category: "PROBLEM SOLVING",
    highlight: "55+",
    color: "from-brand-pink to-brand-magenta",
    glow: "rgba(240, 147, 251, 0.16)",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Maintained an 8.90/10.0 CGPA and achieved a position within the top academic tier at G H Raisoni College of Engineering and Management.",
    category: "ACADEMICS",
    highlight: "8.90 CGPA",
    color: "from-brand-violet to-brand-rose",
    glow: "rgba(124, 58, 237, 0.16)",
  },
  {
    icon: Trophy,
    title: "Hackathon Participation",
    desc: "Participated in hackathons, exploring practical problem solving, collaborative development, and innovative technology solutions.",
    category: "INNOVATION",
    highlight: "HACKATHONS",
    color: "from-brand-rose to-brand-pink",
    glow: "rgba(225, 90, 120, 0.16)",
  },
];

export default function AchievementsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section
      id="achievements"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-rose/20 to-transparent" />

      <div
        className="absolute top-10 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(193,53,132,0.07), transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div
        className="absolute bottom-0 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(240,147,251,0.025), transparent 70%)",
          filter: "blur(50px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          ref={titleRef}
          className="mb-14 sm:mb-18 lg:mb-20"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            titleVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="flex items-center gap-4 mb-5">
            <motion.div
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-rose/20 to-brand-magenta/20 flex items-center justify-center overflow-hidden"
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -8,
              }}
              animate={
                titleVisible
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(240,147,251,0.2), transparent 65%)",
                }}
              />

              <Star
                size={22}
                className="relative z-10 text-brand-pink"
              />
            </motion.div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-brand-pink/50">
                  Milestones
                </span>

                <div className="w-1 h-1 rounded-full bg-brand-pink/40" />

                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/20">
                  Growth & Recognition
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
            </div>
          </div>

          <motion.div
            className="ml-16 sm:ml-[4.5rem] w-16 h-1 bg-gradient-to-r from-brand-rose to-brand-pink rounded-full"
            initial={{
              width: 0,
            }}
            animate={
              titleVisible
                ? {
                    width: 64,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          />

          <motion.p
            className="mt-6 max-w-2xl text-sm sm:text-base text-white/35 leading-relaxed"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={
              titleVisible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
          >
            Milestones from my journey across artificial intelligence,
            problem solving, academics, innovation, and technical growth.
          </motion.p>
        </motion.div>

        {/* =========================================================
            ACHIEVEMENT CARDS
        ========================================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
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
                delay: 0.15 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                className="group relative h-full min-h-[320px] p-6 sm:p-7 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                whileHover={{
                  y: -7,
                  borderColor: "rgba(240,147,251,0.28)",
                  boxShadow: `0 25px 60px ${achievement.glow}`,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* =================================================
                    CARD GLOW
                ================================================= */}

                <div
                  className="absolute -top-20 -right-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${achievement.glow}, transparent 70%)`,
                    filter: "blur(5px)",
                  }}
                />

                <div
                  className="absolute bottom-0 left-0 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.025), transparent 70%)",
                  }}
                />

                {/* =================================================
                    CARD HEADER
                ================================================= */}

                <div className="relative z-10 flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.035] border border-white/[0.05] text-[8px] uppercase tracking-[0.18em] text-white/30">
                    <CheckCircle2
                      size={10}
                      className="text-brand-pink/60"
                    />

                    {achievement.category}
                  </span>

                  <motion.div
                    className="w-7 h-7 rounded-lg bg-white/[0.025] border border-white/[0.05] flex items-center justify-center"
                    whileHover={{
                      scale: 1.08,
                      x: 2,
                    }}
                  >
                    <ArrowUpRight
                      size={13}
                      className="text-white/20 group-hover:text-brand-pink transition-colors duration-300"
                    />
                  </motion.div>
                </div>

                {/* =================================================
                    ICON
                ================================================= */}

                <motion.div
                  className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{
                    rotate: -5,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-30"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.3), transparent)",
                    }}
                  />

                  <achievement.icon
                    size={24}
                    className="relative z-10 text-white"
                  />
                </motion.div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-brand-pink transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/45 leading-relaxed">
                    {achievement.desc}
                  </p>
                </div>

                {/* =================================================
                    HIGHLIGHT
                ================================================= */}

                <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.05] flex items-end justify-between">
                  <div>
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                      Highlight
                    </span>

                    <div className="mt-1 text-sm font-semibold bg-gradient-to-r from-white to-brand-pink bg-clip-text text-transparent">
                      {achievement.highlight}
                    </div>
                  </div>

                  <span className="text-[8px] uppercase tracking-[0.15em] text-white/20 group-hover:text-brand-pink/50 transition-colors">
                    Achievement
                  </span>
                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div
                  className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            ACHIEVEMENT SUMMARY
        ========================================================= */}

        <motion.div
          className="relative mt-8 sm:mt-10 p-6 sm:p-8 rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(193,53,132,0.055), rgba(124,58,237,0.035), rgba(255,255,255,0.015))",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          initial={{
            opacity: 0,
            y: 30,
          }}
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
            delay: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Summary Glow */}

          <div
            className="absolute -top-24 -right-24 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(193,53,132,0.08), transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            {/* =====================================================
                SUMMARY CONTENT
            ===================================================== */}

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles
                  size={14}
                  className="text-brand-pink"
                />

                <span className="text-[9px] uppercase tracking-[0.22em] text-brand-pink/50">
                  Continuous Growth
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                Learning, building, and{" "}
                <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
                  improving.
                </span>
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-white/35 leading-relaxed">
                Every milestone represents another step toward becoming a
                stronger AI and software engineer through hands-on projects,
                technical learning, problem solving, and real-world
                experience.
              </p>
            </div>

            {/* =====================================================
                SUMMARY METRICS
            ===================================================== */}

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <motion.div
                className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.05]"
                whileHover={{
                  y: -3,
                  borderColor: "rgba(193,53,132,0.2)",
                }}
              >
                <Trophy
                  size={16}
                  className="text-brand-pink mb-3"
                />

                <div className="text-lg font-bold text-white">
                  4
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/25">
                  Milestones
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.05]"
                whileHover={{
                  y: -3,
                  borderColor: "rgba(193,53,132,0.2)",
                }}
              >
                <Code2
                  size={16}
                  className="text-brand-pink mb-3"
                />

                <div className="text-lg font-bold text-white">
                  55+
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/25">
                  LeetCode
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.05]"
                whileHover={{
                  y: -3,
                  borderColor: "rgba(193,53,132,0.2)",
                }}
              >
                <GraduationCap
                  size={16}
                  className="text-brand-pink mb-3"
                />

                <div className="text-lg font-bold text-white">
                  8.90
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/25">
                  CGPA
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.05]"
                whileHover={{
                  y: -3,
                  borderColor: "rgba(193,53,132,0.2)",
                }}
              >
                <Cloud
                  size={16}
                  className="text-brand-pink mb-3"
                />

                <div className="text-lg font-bold text-white">
                  GenAI
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/25">
                  Google Cloud
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FOOTER LINE
        ========================================================= */}

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{
            opacity: 0,
          }}
          animate={
            titleVisible
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
              Always building toward the next milestone
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">
              AI
            </span>

            <div className="w-1 h-1 rounded-full bg-white/10" />

            <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">
              Engineering
            </span>

            <div className="w-1 h-1 rounded-full bg-white/10" />

            <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">
              Innovation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}