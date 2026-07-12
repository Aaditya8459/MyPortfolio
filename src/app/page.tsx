"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RotatingSkills from "@/components/RotatingSkills";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CreatorServices from "@/components/CreatorServices";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => { setIsLoading(false); }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      <main className={`relative min-h-screen transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <BackgroundEffects />
        <Navigation />
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <RotatingSkills />
          <ExperienceSection />
          <ProjectsSection />
          <CreatorServices />
          <AchievementsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
