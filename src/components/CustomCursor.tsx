"use client";

import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("clickable"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer ambient champagne gold glow */}
      <div
        className="fixed rounded-full blur-[45px] transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "360px" : "280px",
          height: isHovering ? "360px" : "280px",
          transform: "translate(-50%, -50%)",
          background: isHovering
            ? "radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(19, 56, 85, 0.1) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(10, 37, 64, 0.05) 50%, transparent 70%)",
        }}
      />
      {/* Central precise golden ring */}
      <div
        className="fixed rounded-full border border-gold-champagne/40 transition-all duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "48px" : "24px",
          height: isHovering ? "48px" : "24px",
          transform: "translate(-50%, -50%)",
          backgroundColor: isHovering ? "rgba(212, 175, 55, 0.1)" : "transparent",
        }}
      />
      {/* Precision golden dot */}
      <div
        className="fixed h-1.5 w-1.5 rounded-full bg-gold-champagne shadow-[0_0_8px_#D4AF37] transition-all duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};
