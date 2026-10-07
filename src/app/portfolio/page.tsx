"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioItems, portfolioCategories, PortfolioItem } from "@/data/portfolioData";
import { VideoModal } from "@/components/VideoModal";
import {
  Sparkles,
  Play,
  Film,
  Eye,
  TrendingUp,
  ArrowRight,
  Filter,
} from "lucide-react";

export default function PortfolioPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
          <Film className="w-3.5 h-3.5 text-gold-champagne" />
          <span>{language === "bn" ? "প্রোডাকশন আর্কাইভ" : "Cinema Archives"}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "bn" ? (
            <>
              আমাদের শ্রেষ্ঠ <span className="text-gold-gradient">সিনেমাটিক কাজসমূহ</span>
            </>
          ) : (
            <>
              Selected Works & <span className="text-gold-gradient">Commercials</span>
            </>
          )}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {language === "bn"
            ? "জাতীয় টিভি বিজ্ঞাপন থেকে শুরু করে ভাইরাল সোশ্যাল রিলস—প্রতিটি ফ্রেমে গল্প বলার অনন্য রূপকথা।"
            : "From national broadcast TV commercials to viral high-retention vertical reels, explore our cinematic portfolio."}
        </p>

        {/* Filter Tabs */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-gold-champagne text-obsidian shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105"
                  : "bg-obsidian-200 text-slate-300 hover:text-white border border-white/10 hover:border-gold-champagne/30"
              }`}
            >
              {language === "bn" ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Items Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedVideo(item)}
            className="group relative rounded-3xl overflow-hidden bg-obsidian-200 border border-white/10 hover:border-gold-champagne/50 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between"
          >
            {/* Media thumbnail container */}
            <div className="relative aspect-video w-full overflow-hidden bg-obsidian-100">
              <Image
                src={item.thumbnail}
                alt={item.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gold-champagne text-obsidian flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)] group-hover:scale-115 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-obsidian/85 backdrop-blur-md text-gold-light border border-gold-champagne/30">
                  {language === "bn" ? item.categoryLabelBn : item.categoryLabelEn}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-obsidian/85 backdrop-blur-md text-slate-300">
                  {item.duration}
                </span>
              </div>
            </div>

            {/* Info details */}
            <div className="p-6 sm:p-8 space-y-3 bg-obsidian-200 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-semibold text-gold-champagne">
                    {language === "bn" ? item.clientBn : item.clientEn}
                  </span>
                  <span className="font-mono">{item.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold-light transition-colors">
                  {language === "bn" ? item.titleBn : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {language === "bn" ? item.descriptionBn : item.descriptionEn}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Eye className="w-3.5 h-3.5 text-gold-champagne" />
                    {item.views}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.roiStat}
                  </span>
                </div>

                <span className="text-xs font-bold text-gold-light group-hover:underline flex items-center gap-1">
                  <span>{language === "bn" ? "প্লে করুন" : "Watch"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Case Studies Link Callout */}
      <section className="p-8 sm:p-12 rounded-3xl bg-teal-navy/30 border border-gold-champagne/30 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          {language === "bn"
            ? "ক্যাম্পেইনের গভীর কেস স্টাডি ও ব্যবসায়িক ফলাফল দেখতে চান?"
            : "Want In-Depth Metrics & Campaign Forensics?"}
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          {language === "bn"
            ? "আড়ং, পে-ফ্লো এবং এপেক্স ইভি মোটরসের বিস্তারিত কেস স্টাডি দেখুন—সমস্যা, রূপকথা কৌশল এবং অর্জিত আরওএএস।"
            : "Explore our detailed case studies breaking down real client challenges, creative strategies, and measured ROI."}
        </p>
        <div className="pt-2">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 transition-all shadow-lg"
          >
            <span>{language === "bn" ? "কেস স্টাডিজ দেখুন" : "Explore Case Studies"}</span>
            <ArrowRight className="w-4 h-4 text-obsidian" />
          </Link>
        </div>
      </section>

      {/* Video Modal Popup */}
      <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
