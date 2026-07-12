"use client";
import { useRef, useCallback } from "react";
export function use3DTilt(intensity = 20) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * (intensity / 2);
    const ry = ((cx - x) / cx) * (intensity / 2);
    ref.current.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px) scale(1.02)`;
  }, [intensity]);
  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)";
  }, []);
  return { ref, handleMouseMove, handleMouseLeave };
}
