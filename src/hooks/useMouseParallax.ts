"use client";
import { useEffect, useRef, useCallback } from "react";
export function useMouseParallax(intensity = 15) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const x = (e.clientX / window.innerWidth - 0.5) * intensity;
    const y = (e.clientY / window.innerHeight - 0.5) * intensity;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }, [intensity]);
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);
  return ref;
}
