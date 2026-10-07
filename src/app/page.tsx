"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ClientTicker } from "@/components/ClientTicker";
import { StatsSection } from "@/components/StatsSection";
import { FounderSpotlight } from "@/components/FounderSpotlight";
import { VideoModal } from "@/components/VideoModal";
import { portfolioItems, PortfolioItem } from "@/data/portfolioData";
import { servicesData } from "@/data/servicesData";
import {
  Sparkles,
  Play,
  ArrowRight,
  Clapperboard,
  TrendingUp,
  Share2,
  CheckCircle2,
  Star,
  Quote,
  Eye,
  Calendar,
  Film,
} from "lucide-react";

export default function HomePage() {
  const { t, language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  // Icon mapping for services
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Clapperboard":
        return Clapperboard;
      case "TrendingUp":
        return TrendingUp;
      case "Share2":
        return Share2;
      default:
        return Sparkles;
    }
  };

  const featuredProjects = portfolioItems.slice(0, 4);

  return (
    <div className="relative">
      {/* =========================================================================
          HERO SECTION: Full-screen immersive cinematic layout with video loop
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
        {/* Subtle cinematic video ambient loop background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-full object-cover opacity-25 filter blur-[1px] scale-105 transition-transform duration-1000"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Obsidian dark vignette and teal overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/60" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-navy/30 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-champagne/10 blur-[130px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-navy/70 border border-gold-champagne/40 text-gold-light shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-gold-champagne animate-ping" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            <span>{t.hero.headlinePart1} </span>
            <span className="bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm bg-clip-text text-transparent">
              {t.hero.headlineHighlight}
            </span>{" "}
            <span>{t.hero.headlinePart2}</span>
          </h1>

          {/* Subtext highlighting 3 years of mastery */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subheadline}
          </p>

          {/* Two Prominent CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              <Clapperboard className="w-4 h-4 text-obsidian" />
              <span>{t.hero.exploreWork}</span>
              <ArrowRight className="w-4 h-4 text-obsidian" />
            </Link>

            <Link
              href="/contact?intent=consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-obsidian-100/80 border border-gold-champagne/30 hover:border-gold-champagne hover:bg-teal-navy/40 transition-all duration-300 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-gold-champagne" />
              <span>{t.hero.bookConsultation}</span>
            </Link>
          </div>

          {/* Micro Stats ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="p-3">
              <span className="block text-xl sm:text-2xl font-bold text-gold-light font-mono">3+ Years</span>
              <span className="text-xs text-slate-400">Industry Leadership</span>
            </div>
            <div className="p-3">
              <span className="block text-xl sm:text-2xl font-bold text-white font-mono">120+</span>
              <span className="text-xs text-slate-400">Completed Projects</span>
            </div>
            <div className="p-3">
              <span className="block text-xl sm:text-2xl font-bold text-white font-mono">25M+</span>
              <span className="text-xs text-slate-400">Audience Views</span>
            </div>
            <div className="p-3">
              <span className="block text-xl sm:text-2xl font-bold text-gold-light font-mono">99%</span>
              <span className="text-xs text-slate-400">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT TRUST BAR (Monochrome & Gold logo ticker)
         ========================================================================= */}
      <ClientTicker />

      {/* =========================================================================
          SERVICES OVERVIEW GRID (Interactive Cards with Micro-Interactions)
         ========================================================================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-navy/80 border border-gold-champagne/30 text-gold-light">
            <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
            <span>{t.servicesOverview.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.servicesOverview.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.servicesOverview.subtitle}
          </p>
        </div>

        {/* 4 Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-3xl bg-obsidian-200 border border-white/5 hover:border-gold-champagne/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_40px_rgba(212,175,55,0.12)] flex flex-col justify-between"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal-navy/50 border border-gold-champagne/30 flex items-center justify-center text-gold-champagne group-hover:scale-110 group-hover:border-gold-champagne transition-all shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-champagne block mb-1">
                    {language === "bn" ? service.subtitleBn : service.subtitleEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {language === "bn" ? service.titleBn : service.titleEn}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {language === "bn" ? service.descriptionBn : service.descriptionEn}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-8">
                    {(language === "bn" ? service.featuresBn : service.featuresEn)
                      .slice(0, 3)
                      .map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-champagne flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-gold-light group-hover:text-white transition-colors"
                  >
                    <span>{language === "bn" ? "বিস্তারিত জানুন" : "Explore Workflow"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-slate-500 font-mono">
                    {language === "bn" ? "৩ বছরের দক্ষতা" : "3-Yr Validated"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-obsidian-100 border border-gold-champagne/30 text-white hover:border-gold-champagne hover:bg-teal-navy/40 transition-all"
          >
            <span>{t.servicesOverview.viewAllServices}</span>
            <ArrowRight className="w-4 h-4 text-gold-champagne" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FEATURED REEL SHOWCASE (Video Player Grid with Hover-to-Play effect)
         ========================================================================= */}
      <section className="relative py-24 bg-obsidian-300 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30 mb-3">
                <Film className="w-3.5 h-3.5 text-gold-champagne" />
                <span>{t.featuredReel.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {t.featuredReel.title}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                {t.featuredReel.subtitle}
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-light hover:text-white transition-colors"
            >
              <span>{language === "bn" ? "সকল ভিডিও পোর্টফোলিও দেখুন" : "View Complete Portfolio"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group relative rounded-3xl overflow-hidden bg-obsidian-100 border border-white/10 hover:border-gold-champagne/50 transition-all duration-500 cursor-pointer shadow-xl"
              >
                {/* Media Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold-champagne text-obsidian flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)] group-hover:scale-115 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Category & Duration Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-obsidian/80 backdrop-blur-md text-gold-light border border-gold-champagne/30">
                      {language === "bn" ? item.categoryLabelBn : item.categoryLabelEn}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-obsidian/80 backdrop-blur-md text-slate-300">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 space-y-2 bg-obsidian-100">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-gold-champagne">
                      {language === "bn" ? item.clientBn : item.clientEn}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-gold-champagne" />
                      {item.views}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-light transition-colors">
                    {language === "bn" ? item.titleBn : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">
                    {language === "bn" ? item.descriptionBn : item.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          STATS COUNTER SECTION (Animated numbers)
         ========================================================================= */}
      <StatsSection />

      {/* =========================================================================
          DEDICATED FOUNDER SECTION (Meherun Antara)
         ========================================================================= */}
      <FounderSpotlight />

      {/* =========================================================================
          CLIENT TESTIMONIALS / QUOTES BANNER
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-teal-navy/30 via-obsidian-200 to-obsidian-100 border border-gold-champagne/30 relative">
          <Quote className="w-12 h-12 text-gold-champagne/20 mx-auto mb-4" />
          <div className="flex justify-center gap-1 text-gold-champagne mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-lg sm:text-2xl text-white font-serif italic max-w-3xl mx-auto leading-relaxed">
            {language === "bn"
              ? "“রূপকথা প্রোডাকশন হাউজের সাথে কাজ করার পর আমাদের ব্র্যান্ড ভিজ্যুয়াল আন্তর্জাতিক মানে উন্নীত হয়েছে। মেহেরুন অন্তরার ক্রিয়েটিভ ডিরেকশন এবং তাদের টিমের কাজের নিষ্ঠা সত্যিই প্রশংসনীয়।”"
              : "“Collaborating with Rupkotha transformed our brand perception overnight. Meherun Antara's creative direction paired with precision ad campaigns produced our biggest quarter yet.”"}
          </p>
          <div className="mt-6">
            <h4 className="text-base font-bold text-gold-light">
              {language === "bn" ? "তারিকুল ইসলাম — ভাইস প্রেসিডেন্ট" : "Tariqul Islam — VP Marketing"}
            </h4>
            <span className="text-xs text-slate-400">
              {language === "bn" ? "আড়ং কারুশিল্প লাক্সারি" : "Aarong Artisan Luxe"}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GLOBAL CTA BANNER
         ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-teal-navy via-obsidian-100 to-teal-navy border-2 border-gold-champagne/40 overflow-hidden shadow-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold-champagne/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-champagne">
              {language === "bn" ? "আপনার ব্র্যান্ডের গল্প শুরু হোক আজই" : "Start Your Cinematic Chapter"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              {language === "bn"
                ? "চলুন একসাথে তৈরি করি স্মরণীয় রূপকথা"
                : "Ready to Craft an Unforgettable Fairytale?"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {language === "bn"
                ? "আমাদের টিম আপনার ধারণাকে বাস্তব রূপ দিতে প্রস্তুত। এখনই একটি ফ্রি কনসালটেশন শিডিউল করুন।"
                : "From 6K commercial filming to viral multi-channel marketing campaigns, we make your brand immortal."}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?intent=proposal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 shadow-xl transition-all"
              >
                <span>{t.nav.getProposal}</span>
                <ArrowRight className="w-4 h-4 text-obsidian" />
              </Link>
              <a
                href="tel:01407717472"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-obsidian border border-gold-champagne/30 hover:border-gold-champagne transition-all"
              >
                <span>01407717472 (Direct Call)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Popup */}
      <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
