"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Trophy, Video, TrendingUp, Users } from "lucide-react";

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [Video, Users, Trophy, TrendingUp];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-obsidian via-obsidian-200 to-obsidian overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-navy/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-navy/80 border border-gold-champagne/30 text-gold-light">
            <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.statsSection.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.statsSection.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.statsSection.items.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="relative group p-8 rounded-2xl bg-obsidian-100/70 border border-white/5 hover:border-gold-champagne/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)] flex flex-col justify-between"
              >
                {/* Glow border corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-champagne/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:from-gold-champagne/20 transition-all" />

                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-teal-navy/40 border border-gold-champagne/20 text-gold-champagne group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white via-gold-light to-gold-champagne bg-clip-text text-transparent mb-2">
                    {isVisible ? stat.value : "—"}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
