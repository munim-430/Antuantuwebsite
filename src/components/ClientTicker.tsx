"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const ClientTicker: React.FC = () => {
  const { t } = useLanguage();

  const clients = [
    { name: "Grameenphone", sector: "Telecom" },
    { name: "Aarong Luxe", sector: "Fashion & Craft" },
    { name: "Apex Footwear & EV", sector: "Retail & Automotive" },
    { name: "Walton Digi-Tech", sector: "Electronics" },
    { name: "Shwapno Super", sector: "Retail Chain" },
    { name: "Pathao Express", sector: "Tech & Logistics" },
    { name: "Chaldal Grocery", sector: "E-Commerce" },
    { name: "Daraz South Asia", sector: "Marketplace" },
    { name: "Bengal Clean Energy", sector: "Renewables" },
    { name: "Nirvana Couture", sector: "Luxury Fashion" },
  ];

  return (
    <section className="relative py-12 bg-obsidian-200/60 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
          {t.trustBar.title}
        </p>
      </div>

      {/* Infinite Scroll Ribbon */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-8 sm:gap-12 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-obsidian-100/80 border border-white/5 hover:border-gold-champagne/40 hover:bg-teal-navy/30 transition-all duration-300 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-gold-champagne/50 group-hover:bg-gold-champagne group-hover:scale-125 transition-all" />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-slate-300 group-hover:text-gold-light tracking-wide transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider group-hover:text-slate-400">
                  {client.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
