"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { caseStudiesData, CaseStudy } from "@/data/caseStudiesData";
import {
  Sparkles,
  TrendingUp,
  Quote,
  ArrowRight,
  Target,
  Lightbulb,
  CheckCircle2,
  BarChart3,
  Building,
} from "lucide-react";

export default function CaseStudiesPage() {
  const { language } = useLanguage();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy>(caseStudiesData[0]);

  return (
    <div className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
          <BarChart3 className="w-3.5 h-3.5 text-gold-champagne" />
          <span>{language === "bn" ? "প্রমাণিত ব্যবসায়িক সাফল্য" : "Validated Business Impact"}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "bn" ? (
            <>
              বাস্তব কেস স্টাডিজ ও <span className="text-gold-gradient">গ্রোথ অ্যানালিটিক্স</span>
            </>
          ) : (
            <>
              Client Case Studies & <span className="text-gold-gradient">Growth Returns</span>
            </>
          )}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {language === "bn"
            ? "আমরা কীভাবে জটিল চ্যালেঞ্জকে সিনেমাটিক স্টোরিটেলিং ও ডেটা-চালিত ক্যাম্পেইনে রূপান্তর করে অবিশ্বাস্য রিটার্ন অন ইনভেস্টমেন্ট (ROI) নিশ্চিত করেছি।"
            : "Deep dive into how Rupkotha solved foundational marketing challenges with cinematic distinction, delivering multi-million revenues."}
        </p>

        {/* Client Selector Pills */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
          {caseStudiesData.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setSelectedCaseStudy(cs)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCaseStudy.id === cs.id
                  ? "bg-gold-champagne text-obsidian shadow-lg scale-105"
                  : "bg-obsidian-200 text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              {language === "bn" ? cs.clientBn : cs.clientEn}
            </button>
          ))}
        </div>
      </section>

      {/* Main Selected Case Study Deep Dive */}
      <section className="p-8 sm:p-14 rounded-3xl bg-obsidian-200 border-2 border-gold-champagne/30 shadow-2xl space-y-12">
        {/* Hero Meta */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-teal-navy text-gold-light font-bold border border-gold-champagne/30">
              {language === "bn" ? selectedCaseStudy.industryBn : selectedCaseStudy.industryEn}
            </span>
            <span className="text-slate-400 font-mono">{selectedCaseStudy.year}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {language === "bn" ? selectedCaseStudy.titleBn : selectedCaseStudy.titleEn}
          </h2>

          <p className="text-sm sm:text-base text-gold-champagne font-semibold">
            {language === "bn" ? `ক্লায়েন্ট: ${selectedCaseStudy.clientBn}` : `Client: ${selectedCaseStudy.clientEn}`}
          </p>
        </div>

        {/* Measurable Results Stat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-obsidian-100/90 border border-white/10">
          {selectedCaseStudy.results.map((res, idx) => (
            <div key={idx} className="p-3">
              <span className="block text-3xl sm:text-4xl font-black bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm bg-clip-text text-transparent font-mono">
                {res.stat}
              </span>
              <span className="block text-xs sm:text-sm text-slate-300 font-medium mt-1">
                {language === "bn" ? res.labelBn : res.labelEn}
              </span>
            </div>
          ))}
        </div>

        {/* Embedded Visual Asset */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-gold-champagne/20 shadow-xl">
          <Image
            src={selectedCaseStudy.heroImage}
            alt={selectedCaseStudy.titleEn}
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
            <span className="bg-obsidian/80 px-3 py-1 rounded-md backdrop-blur-md font-mono text-gold-light">
              Master Visual Asset • 4K Cinema Production
            </span>
            <span className="bg-teal-navy/80 px-3 py-1 rounded-md backdrop-blur-md">
              Rupkotha Campaign Architecture
            </span>
          </div>
        </div>

        {/* Narrative Forensic Breakdown: Problem -> Rupkotha Strategy -> Execution -> Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Challenge Box */}
          <div className="p-6 rounded-2xl bg-obsidian-100/60 border border-red-500/20 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>{language === "bn" ? "চ্যালেঞ্জ ও সমস্যা" : "The Core Challenge"}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {language === "bn" ? selectedCaseStudy.challengeBn : selectedCaseStudy.challengeEn}
            </p>
          </div>

          {/* Strategy Box */}
          <div className="p-6 rounded-2xl bg-obsidian-100/60 border border-gold-champagne/30 space-y-3">
            <div className="flex items-center gap-2 text-gold-champagne font-bold text-sm uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>{language === "bn" ? "রূপকথা কৌশল ও উদ্ভাবন" : "The Rupkotha Strategy"}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {language === "bn" ? selectedCaseStudy.strategyBn : selectedCaseStudy.strategyEn}
            </p>
          </div>
        </div>

        {/* Execution & Commercial Impact */}
        <div className="p-8 rounded-2xl bg-teal-navy/30 border border-teal-navy/80 space-y-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-champagne" />
            <span>{language === "bn" ? "বাস্তবায়ন ও ফলাফল পর্যালোচনা" : "Execution Details & Verified Impact"}</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {language === "bn" ? selectedCaseStudy.executionBn : selectedCaseStudy.executionEn}
          </p>
          <div className="pt-2 text-sm font-semibold text-emerald-400">
            {language === "bn" ? selectedCaseStudy.metricsSummaryBn : selectedCaseStudy.metricsSummaryEn}
          </div>
        </div>

        {/* Client Quote */}
        <div className="p-8 rounded-2xl bg-obsidian-100 border border-gold-champagne/40 relative">
          <Quote className="w-8 h-8 text-gold-champagne/20 absolute top-4 right-4" />
          <p className="text-base sm:text-lg font-serif italic text-gold-light leading-relaxed">
            {language === "bn" ? selectedCaseStudy.clientQuoteBn : selectedCaseStudy.clientQuoteEn}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-navy border border-gold-champagne/40 flex items-center justify-center font-bold text-white">
              <Building className="w-4 h-4 text-gold-champagne" />
            </div>
            <div>
              <span className="block text-sm font-bold text-white">
                {language === "bn" ? selectedCaseStudy.clientPersonBn : selectedCaseStudy.clientPersonEn}
              </span>
              <span className="block text-xs text-slate-400">
                {language === "bn" ? selectedCaseStudy.clientBn : selectedCaseStudy.clientEn}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Action */}
      <section className="text-center p-12 rounded-3xl bg-gradient-to-r from-teal-navy via-obsidian-200 to-teal-navy border border-gold-champagne/30 space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          {language === "bn"
            ? "আপনার ব্র্যান্ডের পরবর্তী কেস স্টাডি লিখতে চান?"
            : "Ready to Scale Your Brand with Similar Multipliers?"}
        </h3>
        <p className="text-sm text-slate-300 max-w-lg mx-auto">
          {language === "bn"
            ? "আমরা আপনার ব্যবসার লক্ষ্য অনুযায়ী কাস্টম স্ক্রিপ্ট ও গ্রোথ রোডম্যাপ প্রস্তাব করব।"
            : "Let founder Meherun Antara and our creative strategy team engineer a customized growth film and marketing campaign."}
        </p>
        <Link
          href="/contact?intent=case-study"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 shadow-lg"
        >
          <span>{language === "bn" ? "প্রজেক্ট আলোচনা শুরু করুন" : "Schedule a Discovery Session"}</span>
          <ArrowRight className="w-4 h-4 text-obsidian" />
        </Link>
      </section>
    </div>
  );
}
