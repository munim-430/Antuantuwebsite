"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { founderDetails, coreTeamMembers } from "@/data/teamData";
import {
  Sparkles,
  Quote,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Film,
  Camera,
  Compass,
  Heart,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();

  const values = [
    {
      titleEn: "Cinematic Distinction",
      titleBn: "সিনেমাটিক শ্রেষ্ঠত্ব",
      descEn: "We refuse visual mediocrity. Every project is graded, lit, and captured as a timeless work of art.",
      descBn: "ভিজ্যুয়াল আপস নয়। প্রতিটি ফ্রেম, আলো এবং কালার এমনভাবে করা হয় যেন তা সময়ের পরীক্ষায় উত্তীর্ণ হয়।",
      icon: Camera,
    },
    {
      titleEn: "Algorithmic Intelligence",
      titleBn: "অ্যালগরিদমিক মেধা ও ডেটা",
      descEn: "Breathtaking visual beauty paired with cold, mathematical performance advertising pipelines.",
      descBn: "চোখজুড়ানো ভিজ্যুয়ালের সাথে নিখুঁত গাণিতিক পারফরম্যান্স বিজ্ঞাপনের মেলবন্ধন।",
      icon: TrendingUp,
    },
    {
      titleEn: "Storytelling with Soul",
      titleBn: "আত্মিক স্টোরিটেলিং",
      descEn: "Consumers forget product specs, but they never forget an emotional story that moved them to tears or awe.",
      descBn: "মানুষ হয়তো পণ্যের বিবরণ ভুলে যায়, কিন্তু যে গল্প তাদের হৃদয় স্পর্শ করে তা চিরকাল মনে রাখে।",
      icon: Heart,
    },
    {
      titleEn: "Radical Transparency",
      titleBn: "স্বচ্ছতা ও প্রতিশ্রুতি",
      descEn: "Clear production schedules, daily DIT footage logs, and honest real-time ROAS dashboards.",
      descBn: "কাজের সময়সীমা, ফুটেজ ব্যাকআপ এবং স্বচ্ছ বিজ্ঞাপনী ফলাফলে আমরা শতভাগ বিশ্বস্ত।",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
          <Film className="w-3.5 h-3.5 text-gold-champagne" />
          <span>{language === "bn" ? "আমাদের পরিচিতি ও ভিশন" : "The Rupkotha Story"}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "bn" ? (
            <>
              সিনেমাটিক কল্পনা ও <span className="text-gold-gradient">বাস্তব গ্রোথের</span> মেলবন্ধন
            </>
          ) : (
            <>
              Bridging Cinematic Art & <span className="text-gold-gradient">Market Growth</span>
            </>
          )}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {language === "bn"
            ? "রূপকথা প্রোডাকশন হাউজ কেবল একটি ভিডিও নির্মাতা প্রতিষ্ঠান নয়; এটি ব্র্যান্ডের স্বপ্নকে বাস্তবে রূপ দেওয়ার এক সৃষ্টিশীল জাদুকরী কারখানা।"
            : "Rupkotha Production House was born to eliminate the painful compromise between artistic cinema-grade storytelling and hard-hitting business metrics."}
        </p>
      </section>

      {/* Agency Origin Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-champagne">
            {language === "bn" ? "আমাদের যাত্রা ও দর্শন" : "Our Origin & Manifesto"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {language === "bn"
              ? "বিজ্ঞাপন যখন হয়ে ওঠে হৃদয়ছোঁয়া রূপকথা"
              : "When Commercials Become Enduring Folklore"}
          </h2>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              {language === "bn"
                ? "গত ৩ বছর ধরে আমরা লক্ষ্য করেছি, বাজারে অসংখ্য বিজ্ঞাপন তৈরি হয় যা হয়তো দেখতে আকর্ষণীয় কিন্তু কোনো বিক্রয় বা ব্র্যান্ড ভ্যালু তৈরি করে না। আবার বহু পারফরম্যান্স ক্যাম্পেইন চলে যা দর্শকের মনে কোনো আবেগের দাগ কাটে না।"
                : "For over 3 years, we saw two broken paradigms in the South Asian creative landscape: video production agencies produced gorgeous films that drove zero conversions, while digital marketing agencies ran spreadsheet-driven ads with forgettable, uninspired visuals."}
            </p>
            <p>
              {language === "bn"
                ? "রূপকথা প্রোডাকশন হাউজে আমরা এই দুই প্রান্তের দূরত্ব ঘুচিয়েছি। আমরা হলিউড মানের সিনেমা ক্যামেরা, আন্তর্জাতিক কালার গ্রেডিং এবং মনোমুগ্ধকর চিত্রনাট্যের সমন্বয়ে এমন কন্টেন্ট তৈরি করি যা একই সাথে দর্শকের মন জয় করে এবং ব্র্যান্ডের প্রবৃদ্ধি নিশ্চিত করে।"
                : "Rupkotha reconciles both worlds. We deploy anamorphic lenses, cinema camera systems, and world-class narrative writers alongside ruthless data attribution, custom retargeting funnels, and viral distribution frameworks."}
            </p>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-obsidian-200 border border-white/5">
              <span className="block text-2xl font-black text-gold-light font-mono">120+</span>
              <span className="text-xs text-slate-400">
                {language === "bn" ? "টিভি ও কমার্শিয়াল শ্যুট" : "TV & Commercial Shoots"}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-obsidian-200 border border-white/5">
              <span className="block text-2xl font-black text-gold-light font-mono">3+ Years</span>
              <span className="text-xs text-slate-400">
                {language === "bn" ? "অবিচল পথচলা" : "Proven Track Record"}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gold-champagne/30 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
              alt="Rupkotha Cinematic Film Set Production"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-obsidian/85 backdrop-blur-md border border-white/10 text-xs text-slate-200">
              <span className="font-bold text-gold-champagne block">
                {language === "bn" ? "অন-সেট সিনেমাটোগ্রাফি" : "On-Set Cinematography Setup"}
              </span>
              <span>ARRI Alexa Mini LF • Cooke Anamorphic Glass • Banani Soundstage</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DEDICATED FOUNDER SECTION: Meherun Antara (মেহেরুন অন্তরা)
         ========================================================================= */}
      <section className="relative p-8 sm:p-14 rounded-3xl bg-obsidian-200 border-2 border-gold-champagne/40 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-navy/40 blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Stylized Portrait Box */}
          <div className="lg:col-span-5 relative mx-auto max-w-sm lg:max-w-none w-full">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-gold-champagne shadow-[0_15px_45px_rgba(212,175,55,0.25)]">
              <Image
                src={founderDetails.image}
                alt="Meherun Antara - Founder & Creative Director"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-100/90 border border-gold-champagne/30 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white">
                  {language === "bn" ? founderDetails.nameBn : founderDetails.nameEn}
                </h3>
                <p className="text-xs text-gold-champagne font-medium">
                  {language === "bn" ? founderDetails.titleBn : founderDetails.titleEn}
                </p>
                <span className="text-[11px] text-slate-400 block mt-1">
                  {language === "bn" ? founderDetails.experienceBn : founderDetails.experienceEn}
                </span>
              </div>
            </div>
          </div>

          {/* Bio, Vision & Leadership Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
              <Award className="w-3.5 h-3.5 text-gold-champagne" />
              <span>{language === "bn" ? "প্রতিষ্ঠাতার বার্তা" : "Founder Spotlight"}</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {language === "bn" ? "মেহেরুন অন্তরা" : "Meherun Antara"}
              </h2>
              <span className="text-sm font-semibold text-gold-champagne block mt-1">
                {language === "bn"
                  ? "৩ বছরের অভিজ্ঞতায় পরিচালিত সৃষ্টিশীল নেতৃত্ব"
                  : "3 Years of High-Stakes Production & Strategic Brand Direction"}
              </span>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {language === "bn"
                  ? "মেহেরুন অন্তরা রূপকথা প্রোডাকশন হাউজ প্রতিষ্ঠা করেন একটি অটল লক্ষ্য নিয়ে: বাংলাদেশের বিজ্ঞাপন শিল্পে সিনেমাটিক নান্দনিকতা ও ফলপ্রসূ মার্কেটিংকে একসাথে আনা। ৩ বছরের নিবেদিত নেতৃত্বে তিনি শত শত সফল কমার্শিয়াল শ্যুট, কনসেপ্ট ডিজাইনিং এবং ব্র্যান্ড ক্যাম্পেইন সফলতার সাথে সম্পন্ন করেছেন।"
                  : "Meherun Antara founded Rupkotha Production House with a resolute vision: to fuse the emotional depth of cinematic storytelling with the analytical rigor of modern performance marketing. With over 3 years of hands-on leadership, she has spearheaded over 120 commercial shoots, script designs, and multi-platform launches."}
              </p>
              <p>
                {language === "bn"
                  ? "ক্যামেরার পিছনের প্রতিটি ফ্রেম থেকে শুরু করে ফাইনাল কালার গ্রেডিং এবং ক্লায়েন্টের ব্র্যান্ড পজিশনিং—সবকিছুতেই মেহেরুনের নিখুঁত নজর নিশ্চিত করে সর্বোচ্চ গুণমান।"
                  : "Her hands-on leadership spans every phase of creation: interrogating client brand briefs, directing on-set talent, perfecting DaVinci color grading, and engineering algorithmic paid-acquisition campaigns."}
              </p>
            </div>

            {/* Inspirational Quote Box */}
            <div className="p-6 rounded-2xl bg-teal-navy/40 border border-gold-champagne/40 relative">
              <Quote className="w-8 h-8 text-gold-champagne/30 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-gold-light italic font-serif leading-relaxed">
                {language === "bn" ? founderDetails.quoteBn : founderDetails.quoteEn}
              </p>
              <span className="block mt-2 text-xs font-semibold text-white">
                — {language === "bn" ? founderDetails.nameBn : founderDetails.nameEn}
              </span>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${founderDetails.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-gold-champagne text-obsidian hover:brightness-110 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{founderDetails.phone}</span>
              </a>
              <a
                href={`mailto:${founderDetails.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-obsidian-100 border border-white/10 hover:border-gold-champagne text-slate-200 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-gold-champagne" />
                <span>{founderDetails.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE CREATIVE TEAM GRID
         ========================================================================= */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
            <span>{language === "bn" ? "আমাদের মূল দল" : "The Core Ensemble"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {language === "bn" ? "দক্ষ সিনেমাটোগ্রাফার ও স্ট্র্যাটেজিস্ট" : "Masters of Visuals & Algorithmic Growth"}
          </h2>
          <p className="text-slate-400 text-sm">
            {language === "bn"
              ? "ডিরেক্টর, সিনেমাটোগ্রাফার, কালারিস্ট ও পারফরম্যান্স মার্কেটারদের নিয়ে গঠিত আমাদের চৌকস টিম।"
              : "Creative directors, cinematographers, colorists, and growth analysts dedicated to your brand."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTeamMembers.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-2xl bg-obsidian-200 border border-white/5 hover:border-gold-champagne/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-5 border border-white/10">
                <Image
                  src={member.image}
                  alt={member.nameEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className="text-[10px] uppercase font-mono tracking-wider text-gold-champagne block">
                {language === "bn" ? member.specialtyBn : member.specialtyEn}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {language === "bn" ? member.nameBn : member.nameEn}
              </h3>
              <p className="text-xs text-teal-glow font-medium mb-2">
                {language === "bn" ? member.roleBn : member.roleEn}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {language === "bn" ? member.bioBn : member.bioEn}
              </p>
              <span className="text-[11px] text-slate-500 font-mono">
                {language === "bn" ? member.experienceBn : member.experienceEn}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Principles */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {language === "bn" ? "আমাদের মূল মূল্যবোধ" : "The Rupkotha Standard"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-obsidian-200/80 border border-white/5 hover:border-gold-champagne/30 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-navy/40 border border-gold-champagne/20 flex items-center justify-center text-gold-champagne">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {language === "bn" ? v.titleBn : v.titleEn}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === "bn" ? v.descBn : v.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center p-10 rounded-3xl bg-teal-navy/30 border border-gold-champagne/30">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          {language === "bn" ? "মেহেরুন অন্তরার সাথে আপনার প্রজেক্ট নিয়ে আলোচনা করুন" : "Connect Directly With Meherun Antara"}
        </h3>
        <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
          {language === "bn"
            ? "একটি সফল ক্যাম্পেইন শুরু হোক সঠিক পরিকল্পনায়। এখনই ফ্রি কনসালটেশন বুক করুন।"
            : "Direct access to executive creative leadership for your next TVC or marketing campaign."}
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact?intent=founder"
            className="px-8 py-3.5 rounded-full font-bold text-sm text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 transition-all shadow-lg"
          >
            {language === "bn" ? "কনসালটেশন বুক করুন" : "Book Founder Consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
