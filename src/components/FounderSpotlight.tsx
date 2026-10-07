"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { founderDetails } from "@/data/teamData";
import { Sparkles, Quote, Award, CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";

export const FounderSpotlight: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-24 bg-obsidian-300 border-y border-gold-champagne/15 overflow-hidden">
      {/* Decorative cinematic background lighting */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-teal-navy/30 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-gold-champagne/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Founder Stylized Portrait Box (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Geometric Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-champagne/30 via-teal-navy to-gold-warm/20 blur-md opacity-80" />
              
              <div className="relative rounded-2xl overflow-hidden bg-obsidian-200 border-2 border-gold-champagne/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {/* Real cinematic stylized portrait */}
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={founderDetails.image}
                    alt="Meherun Antara - Founder Rupkotha Production House"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    priority
                  />
                  {/* Subtle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                </div>

                {/* Badge card overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-100/90 border border-gold-champagne/30 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {language === "bn" ? founderDetails.nameBn : founderDetails.nameEn}
                      </h4>
                      <p className="text-xs text-gold-champagne font-medium">
                        {language === "bn" ? founderDetails.titleBn : founderDetails.titleEn}
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-teal-navy border border-gold-champagne/30 text-gold-champagne">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="font-mono text-gold-light">3+ Years Leadership</span>
                    <span>120+ Commercials Directed</span>
                  </div>
                </div>
              </div>

              {/* Floating Film Slate Badge */}
              <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-navy border border-gold-champagne/40 shadow-xl backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-gold-champagne" />
                <span className="text-xs font-bold text-white">Director & Visionary</span>
              </div>
            </div>
          </div>

          {/* Founder Bio, Vision & Quote (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-navy/80 border border-gold-champagne/30 text-gold-light">
              <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
              <span>{t.founder.badge}</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {language === "bn" ? "মেহেরুন অন্তরা" : "Meherun Antara"}
              </h2>
              <p className="mt-1 text-base sm:text-lg font-medium text-gold-champagne">
                {language === "bn" ? founderDetails.experienceBn : founderDetails.experienceEn}
              </p>
            </div>

            {/* Compelling Bio */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t.founder.bioParagraph1}</p>
              <p>{t.founder.bioParagraph2}</p>
            </div>

            {/* Highlights bullet list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2">
              {(language === "bn" ? founderDetails.highlightsBn : founderDetails.highlightsEn).map(
                (item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-champagne mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>

            {/* Inspirational Quote Box */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-teal-navy/40 to-obsidian-100/90 border border-gold-champagne/30 backdrop-blur-md">
              <Quote className="w-8 h-8 text-gold-champagne/30 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-gold-light/95 italic font-serif leading-relaxed">
                {t.founder.quote}
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-white">{t.founder.quoteAuthor}</span>
              </div>
            </div>

            {/* Actions & Direct Contacts */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?intent=founder"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <span>{t.founder.ctaButton}</span>
                <ArrowRight className="w-4 h-4 text-obsidian" />
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${founderDetails.phone}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold bg-obsidian-100 border border-white/10 hover:border-gold-champagne text-slate-200 hover:text-gold-light transition-all"
                  title="Direct Phone"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-champagne" />
                  <span>{founderDetails.phone}</span>
                </a>

                <a
                  href={`mailto:${founderDetails.email}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold bg-obsidian-100 border border-white/10 hover:border-gold-champagne text-slate-200 hover:text-gold-light transition-all"
                  title="Direct Email"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-champagne" />
                  <span className="hidden sm:inline">{founderDetails.email}</span>
                  <span className="sm:hidden">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
