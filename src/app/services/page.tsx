"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/servicesData";
import { PricingEstimator } from "@/components/PricingEstimator";
import {
  Sparkles,
  Clapperboard,
  TrendingUp,
  Share2,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
  Layers,
  Camera,
  Film,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "production" | "marketing">("all");

  const filteredServices = servicesData.filter((s) => {
    if (activeTab === "all") return true;
    if (activeTab === "production") return s.id === "production" || s.id === "branding";
    if (activeTab === "marketing") return s.id === "marketing" || s.id === "social";
    return true;
  });

  return (
    <div className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
          <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
          <span>{language === "bn" ? "পূর্ণাঙ্গ ক্রিয়েটিভ সল্যুশন" : "End-to-End Capabilities"}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "bn" ? (
            <>
              সিনেমাটিক প্রোডাকশন ও <span className="text-gold-gradient">পারফরম্যান্স মার্কেটিং</span>
            </>
          ) : (
            <>
              Master Production & <span className="text-gold-gradient">Omnichannel Marketing</span>
            </>
          )}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {language === "bn"
            ? "চিত্রনাট্য থেকে 4K/6K সিনেমা শুটিং, ডাভিঞ্চি কালার গ্রেডিং এবং মেটা-গুগল পেইড অ্যাডসের মাধ্যমে আপনার ব্র্যান্ডকে নিয়ে যান নতুন উচ্চতায়।"
            : "From concept script to high-speed cinematography, Hollywood color mastering, and full-funnel digital ad acceleration."}
        </p>

        {/* Filter Tabs */}
        <div className="pt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "all"
                ? "bg-gold-champagne text-obsidian shadow-lg"
                : "bg-obsidian-200 text-slate-300 hover:text-white border border-white/10"
            }`}
          >
            {language === "bn" ? "সকল সার্ভিস" : "All Capabilities"}
          </button>
          <button
            onClick={() => setActiveTab("production")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "production"
                ? "bg-gold-champagne text-obsidian shadow-lg"
                : "bg-obsidian-200 text-slate-300 hover:text-white border border-white/10"
            }`}
          >
            {language === "bn" ? "ফিল্ম ও ভিডিও প্রোডাকশন" : "Film & Production"}
          </button>
          <button
            onClick={() => setActiveTab("marketing")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "marketing"
                ? "bg-gold-champagne text-obsidian shadow-lg"
                : "bg-obsidian-200 text-slate-300 hover:text-white border border-white/10"
            }`}
          >
            {language === "bn" ? "ডিজিটাল ও পারফরম্যান্স মার্কেটিং" : "Digital & Growth"}
          </button>
        </div>
      </section>

      {/* Services Detailed Breakdown with Workflows */}
      <section className="space-y-16">
        {filteredServices.map((service, sIndex) => (
          <div
            key={service.id}
            id={service.id}
            className="p-8 sm:p-12 rounded-3xl bg-obsidian-200 border border-gold-champagne/20 shadow-2xl space-y-10"
          >
            {/* Top header of service */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-champagne">
                  {language === "bn" ? service.subtitleBn : service.subtitleEn}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  {language === "bn" ? service.titleBn : service.titleEn}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {language === "bn" ? service.descriptionBn : service.descriptionEn}
                </p>
              </div>

              <Link
                href={`/contact?services=${service.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-teal-navy text-gold-light border border-gold-champagne/40 hover:bg-gold-champagne hover:text-obsidian transition-all self-start"
              >
                <span>{language === "bn" ? "এই সার্ভিসের অফার নিন" : "Book This Service"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Features & Equipment List */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                {language === "bn" ? "প্রযুক্তিগত সক্ষমতা ও অন্তর্ভুক্ত সুবিধাসমূহ" : "Key Capabilities & Deliverables"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(language === "bn" ? service.featuresBn : service.featuresEn).map((f, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3.5 rounded-xl bg-obsidian-100 border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-champagne flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stepped Workflow Breakdown */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold-champagne mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>{language === "bn" ? "আমাদের ৩-ধাপের কার্যপ্রণালী" : "3-Stage Execution Workflow"}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.workflow.map((wf) => (
                  <div
                    key={wf.step}
                    className="p-6 rounded-2xl bg-teal-navy/20 border border-teal-navy/60 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-gold-champagne bg-obsidian-200 px-2 py-0.5 rounded border border-gold-champagne/20">
                          STAGE {wf.step}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {language === "bn" ? wf.titleBn : wf.titleEn}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {language === "bn" ? wf.descriptionBn : wf.descriptionEn}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-2">
                        {language === "bn" ? "আউটপুট / ডেলিভারেবলস:" : "Core Output:"}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(language === "bn" ? wf.deliverablesBn : wf.deliverablesEn).map((d, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-obsidian-100 text-slate-300 border border-white/5"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================================
          INTERACTIVE PRICING ESTIMATOR & PACKAGE INQUIRY SECTION
         ========================================================================= */}
      <section id="pricing" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
            <Zap className="w-3.5 h-3.5 text-gold-champagne" />
            <span>{language === "bn" ? "স্বচ্ছ বাজেট পরিকল্পনা" : "Predictable Investment"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {language === "bn" ? "প্যাকেজ ও বাজেট ক্যালকুলেটর" : "Tailor Your Scope & Estimate"}
          </h2>
          <p className="text-slate-400 text-sm">
            {language === "bn"
              ? "আপনার কাঙ্ক্ষিত মডিউলগুলো সিলেক্ট করে তাৎক্ষণিক প্যাকেজ অনুমান তৈরি করুন।"
              : "Combine video production, performance marketing, and creative direction modules in real time."}
          </p>
        </div>

        <PricingEstimator />
      </section>

      {/* Consultation Banner */}
      <section className="text-center p-10 rounded-3xl bg-gradient-to-r from-teal-navy via-obsidian-200 to-teal-navy border border-gold-champagne/30">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          {language === "bn" ? "কাস্টম বা স্পেশালাইজড প্রজেক্ট নিয়ে কথা বলতে চান?" : "Require a Custom Enterprise TVC or Retainer?"}
        </h3>
        <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
          {language === "bn"
            ? "আমরা আপনার ব্যবসার লক্ষ্য অনুযায়ী কাস্টম রোডম্যাপ তৈরি করি। সরাসরি যোগাযোগ করুন।"
            : "Reach out to discuss custom scopes, national broadcast TVCs, or multi-market expansions."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact?intent=custom"
            className="px-8 py-3.5 rounded-full font-bold text-sm text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 transition-all shadow-lg"
          >
            {language === "bn" ? "কাস্টম প্রস্তাবনা চান" : "Request Custom Architecture"}
          </Link>
          <a
            href="tel:01407717472"
            className="px-6 py-3.5 rounded-full font-bold text-sm text-white bg-obsidian border border-gold-champagne/40 hover:border-gold-champagne transition-all"
          >
            01407717472 (Call Meherun)
          </a>
        </div>
      </section>
    </div>
  );
}
