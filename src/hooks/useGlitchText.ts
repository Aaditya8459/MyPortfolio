"use client";
import { useState, useEffect, useCallback } from "react";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
export function useGlitchText(text: string, trigger = true, speed = 30) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const triggerGlitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((char, index) => {
        if (char === " ") return " ";
        if (index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      iteration += 1 / 3;
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, speed);
  }, [text, speed, isGlitching]);
  useEffect(() => { if (trigger) triggerGlitch(); }, [trigger, triggerGlitch]);
  return { displayText, triggerGlitch, isGlitching };
}
