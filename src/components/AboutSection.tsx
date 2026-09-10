"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Brain,
  ShieldCheck,
  Server,
  Code2,
  Sparkles,
  ArrowUpRight,
  Workflow,
  Database,
} from "lucide-react";

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const profileCards = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.Tech CSE (AI)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
    },
    {
      icon: Calendar,
      label: "Graduation",
      value: "2023 – 2027",
    },
    {
      icon: Award,
      label: "CGPA",
      value: "8.90 / 10.0",
    },
  ];

  const expertise = [
    {
      icon: Brain,
      title: "Agentic AI & LLMs",
      description:
        "Designing intelligent workflows with Agentic AI, LLMs, LangChain, Transformers, and retrieval-augmented generation.",
      tag: "AI ENGINEERING",
    },
    {
      icon: ShieldCheck,
      title: "Governance & Compliance",
      description:
        "Applying AI to model governance, compliance automation, audit workflows, risk tracking, and intelligent decision-making.",
      tag: "ENTERPRISE AI",
    },
    {
      icon: Server,
      title: "Backend Architecture",
      description:
        "Building scalable APIs and distributed systems with Python, Django, FastAPI, Tornado, Spring Boot, Redis, and WebSocket.",
      tag: "BACKEND",
    },
    {
      icon: Code2,
      title: "Full-Stack Systems",
      description:
        "Developing production-oriented interfaces and applications using React, Next.js, TypeScript, Tailwind CSS, and modern backend technologies.",
      tag: "FULL STACK",
    },
  ];

  const impactStats = [
    {
      value: "10+",
      label: "AI Workflows",
      description: "Automated",
    },
    {
      value: "50K+",
      label: "Daily Queries",
      description: "RAG Pipelines",
    },
    {
      value: "20%",
      label: "Reasoning Gain",
      description: "LLM Efficiency",
    },
    {
      value: "30%",
      label: "Reliability",
      description: "Production Improvement",
    },
  ];

  const focusAreas = [
    "Agentic AI",
    "LLMs",
    "RAG",
    "AI Governance",
    "Enterprise Systems",
    "Backend Engineering",
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

      <div
        className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(193,53,132,0.08) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      <div
        className="absolute top-1/2 -right-32 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div
        className="absolute bottom-0 left-1/3 w-72 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(240,147,251,0.035) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          ref={titleRef}
          className="mb-14 sm:mb-16"
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
          <div className="flex items-center gap-3 mb-5">
            <motion.div
              className="h-px w-8 bg-gradient-to-r from-transparent to-brand-pink"
              initial={{
                width: 0,
              }}
              animate={
                titleVisible
                  ? {
                      width: 32,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            />

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-pink/60 font-medium">
              Profile
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="mt-5 w-16 h-1 bg-gradient-to-r from-brand-magenta to-brand-pink rounded-full" />

          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            Software Engineer and AI Researcher focused on building intelligent,
            scalable, and enterprise-ready systems.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN GRID
        ========================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* =======================================================
              LEFT COLUMN
          ======================================================= */}

          <motion.div
            ref={contentRef}
            className="lg:col-span-7"
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={
              contentVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Intro Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(193,53,132,0.1), rgba(124,58,237,0.08))",
                border:
                  "1px solid rgba(193,53,132,0.16)",
              }}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={
                contentVisible
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              <Sparkles
                size={12}
                className="text-brand-pink"
              />

              <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                AI · Software · Research
              </span>
            </motion.div>

            {/* Main Introduction */}
            <div className="space-y-5">
              <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
                I&apos;m a{" "}
                <span className="text-brand-pink font-semibold">
                  Computer Science Engineering
                </span>{" "}
                student specializing in{" "}
                <span className="text-brand-magenta font-semibold">
                  Artificial Intelligence
                </span>{" "}
                at G H Raisoni College of Engineering and Management, Pune,
                with a strong foundation in applied computer science, AI/ML,
                algorithms, databases, distributed systems, and software
                engineering.
              </p>

              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                Currently, I&apos;m working as a{" "}
                <span className="text-brand-pink font-medium">
                  GenAI Intern at OxiqAI
                </span>
                , developing intelligent automation systems using{" "}
                <span className="text-brand-violet font-medium">
                  Agentic AI and Large Language Models
                </span>
                . My work focuses on multi-step AI workflows, LLM reasoning
                efficiency, production RAG pipelines, and live data
                integration.
              </p>

              <p className="text-base sm:text-lg text-white/55 leading-relaxed">
                I enjoy working at the intersection of{" "}
                <span className="text-brand-pink font-medium">
                  intelligent models and reliable software architecture
                </span>
                . From retrieval pipelines and vector databases to APIs,
                distributed services, and modern interfaces, I focus on turning
                AI concepts into practical systems.
              </p>
            </div>

            {/* =====================================================
                ENGINEERING PHILOSOPHY
            ===================================================== */}

            <motion.div
              className="relative mt-8 p-5 sm:p-6 rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(193,53,132,0.07), rgba(124,58,237,0.05))",
                border:
                  "1px solid rgba(193,53,132,0.13)",
              }}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                contentVisible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
            >
              <div
                className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(193,53,132,0.1), transparent 70%)",
                  filter: "blur(15px)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Workflow
                    size={15}
                    className="text-brand-pink"
                  />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-pink/70">
                    Engineering Philosophy
                  </span>
                </div>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Build AI systems that are{" "}
                  <span className="text-white font-medium">
                    intelligent, explainable, scalable, and production-ready
                  </span>
                  .
                </p>

                <p className="mt-2 text-xs text-white/35 leading-relaxed">
                  My focus is not just integrating AI, but engineering the
                  surrounding systems that make intelligent applications useful
                  in real-world environments.
                </p>
              </div>
            </motion.div>

            {/* =====================================================
                PROFILE CARDS
            ===================================================== */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
              {profileCards.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group relative flex flex-col items-center text-center p-4 rounded-2xl overflow-hidden"
                  style={{
                    background:
                      "rgba(255,255,255,0.025)",
                    border:
                      "1px solid rgba(255,255,255,0.06)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={
                    contentVisible
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.3 + i * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -4,
                    background:
                      "rgba(255,255,255,0.045)",
                    borderColor:
                      "rgba(193,53,132,0.22)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(193,53,132,0.08), transparent 65%)",
                    }}
                  />

                  <div className="relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-magenta/20 to-brand-violet/20 flex items-center justify-center mb-3">
                    <item.icon
                      size={18}
                      className="text-brand-pink"
                    />
                  </div>

                  <p className="relative z-10 text-[9px] text-white/35 uppercase tracking-[0.12em]">
                    {item.label}
                  </p>

                  <p className="relative z-10 text-xs sm:text-sm text-white/80 font-medium mt-1">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =======================================================
              RIGHT COLUMN
          ======================================================= */}

          <motion.div
            className="lg:col-span-5"
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={
              contentVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Expertise Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                  Core Expertise
                </span>

                <h3 className="mt-1 text-lg sm:text-xl font-semibold text-white">
                  What I Build
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />

                <span className="text-[9px] uppercase tracking-wider text-brand-pink/50">
                  Active
                </span>
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-3">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="group relative flex items-start gap-4 p-5 rounded-2xl overflow-hidden"
                  style={{
                    background:
                      "rgba(255,255,255,0.025)",
                    border:
                      "1px solid rgba(255,255,255,0.06)",
                  }}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={
                    contentVisible
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 0.55,
                  }}
                  whileHover={{
                    x: 5,
                    borderColor:
                      "rgba(193,53,132,0.24)",
                    background:
                      "rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Card Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 0% 50%, rgba(193,53,132,0.09), transparent 55%)",
                    }}
                  />

                  {/* Icon */}
                  <div className="relative z-10 w-11 h-11 rounded-xl bg-gradient-to-br from-brand-magenta/20 to-brand-pink/20 flex items-center justify-center flex-shrink-0">
                    <item.icon
                      size={20}
                      className="text-brand-pink"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>

                      <ArrowUpRight
                        size={14}
                        className="text-white/15 group-hover:text-brand-pink/60 transition-colors flex-shrink-0"
                      />
                    </div>

                    <p className="text-xs text-white/45 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>

                    <span className="inline-block mt-3 text-[8px] uppercase tracking-[0.18em] text-brand-pink/45">
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* =====================================================
                FOCUS AREAS
            ===================================================== */}

            <motion.div
              className="mt-5 p-5 rounded-2xl"
              style={{
                background:
                  "rgba(255,255,255,0.018)",
                border:
                  "1px dashed rgba(255,255,255,0.07)",
              }}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                contentVisible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.75,
                duration: 0.6,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Database
                  size={14}
                  className="text-brand-pink/70"
                />

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Focus Areas
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, i) => (
                  <motion.span
                    key={area}
                    className="px-3 py-1.5 rounded-lg text-[10px] font-medium text-white/55"
                    style={{
                      background:
                        "rgba(255,255,255,0.035)",
                      border:
                        "1px solid rgba(255,255,255,0.06)",
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={
                      contentVisible
                        ? {
                            opacity: 1,
                            scale: 1,
                          }
                        : {}
                    }
                    transition={{
                      delay: 0.8 + i * 0.05,
                      duration: 0.35,
                    }}
                    whileHover={{
                      y: -2,
                      color: "rgba(255,255,255,0.9)",
                      borderColor:
                        "rgba(193,53,132,0.25)",
                    }}
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            IMPACT SECTION
        ========================================================= */}

        <motion.div
          className="mt-14 sm:mt-20"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            contentVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Impact Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/25">
                Internship Impact
              </span>

              <h3 className="mt-1 text-lg sm:text-xl font-semibold text-white">
                Building With Measurable Results
              </h3>
            </div>

            <span className="hidden sm:block text-[9px] uppercase tracking-[0.18em] text-brand-pink/40">
              OxiqAI · GenAI
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group relative p-5 sm:p-6 rounded-2xl overflow-hidden"
                style={{
                  background:
                    "rgba(255,255,255,0.025)",
                  border:
                    "1px solid rgba(255,255,255,0.06)",
                }}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  contentVisible
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  delay: 0.55 + i * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -4,
                  borderColor:
                    "rgba(193,53,132,0.2)",
                  background:
                    "rgba(255,255,255,0.04)",
                }}
              >
                {/* Glow */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(193,53,132,0.13), transparent 70%)",
                    filter: "blur(10px)",
                  }}
                />

                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-xs sm:text-sm font-semibold text-white/70">
                    {stat.label}
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/25">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-5 sm:p-6 rounded-2xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(193,53,132,0.055), rgba(124,58,237,0.035), rgba(255,255,255,0.015))",
            border:
              "1px solid rgba(255,255,255,0.055)",
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            contentVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.85,
          }}
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
              <Sparkles
                size={14}
                className="text-brand-pink"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white/75">
                Exploring the future of intelligent software.
              </p>

              <p className="mt-1 text-xs text-white/30">
                AI systems · Enterprise architecture · Intelligent automation
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "LLMs",
              "RAG",
              "FastAPI",
              "React",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[9px] text-white/40"
                style={{
                  background:
                    "rgba(255,255,255,0.035)",
                  border:
                    "1px solid rgba(255,255,255,0.055)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}