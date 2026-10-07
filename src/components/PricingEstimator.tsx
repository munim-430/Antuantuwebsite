"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Calculator, Check, Sparkles, ArrowRight, Video, TrendingUp, Layers } from "lucide-react";

interface ServiceOption {
  id: string;
  nameEn: string;
  nameBn: string;
  category: "production" | "marketing" | "addons";
  basePrice: number;
  descriptionEn: string;
  descriptionBn: string;
}

export const PricingEstimator: React.FC = () => {
  const { language } = useLanguage();

  const servicesList: ServiceOption[] = [
    {
      id: "tvc",
      nameEn: "Cinema 4K TVC / Commercial Film",
      nameBn: "সিনেমা ৪কে টিভি কমার্শিয়াল (TVC)",
      category: "production",
      basePrice: 150000,
      descriptionEn: "Full narrative script, ARRI/RED filming, actors, studio lighting & color grade",
      descriptionBn: "সম্পূর্ণ চিত্রনাট্য, সিনেমা ক্যামেরায় শ্যুট, কাস্টিং ও কালার গ্রেডিং",
    },
    {
      id: "social-reels",
      nameEn: "15-Reel Social Video Batch",
      nameBn: "১৫টি সোশ্যাল রিলস ব্যাচ প্যাকেজ",
      category: "production",
      basePrice: 65000,
      descriptionEn: "Short-form high-retention 9:16 videos engineered for TikTok & Instagram",
      descriptionBn: "টিকটক ও ইনস্টাগ্রামের উপযোগী ১৫টি হাই-এনগেজমেন্ট রিলস",
    },
    {
      id: "corporate-doc",
      nameEn: "Corporate Documentary / Story",
      nameBn: "কর্পোরেট ডকুমেন্টারি ও ভিশন ফিল্ম",
      category: "production",
      basePrice: 95000,
      descriptionEn: "Multi-day executive interviews, workplace footage & motion graphics",
      descriptionBn: "কোম্পানি ভিশন, ইন্টারভিউ ও মোশন গ্রাফিক্স সহ ব্র্যান্ড ফিল্ম",
    },
    {
      id: "performance-ads",
      nameEn: "Performance Ads Management (Meta & Google)",
      nameBn: "পারফরম্যান্স অ্যাড ম্যানেজমেন্ট (মেটা ও গুগল)",
      category: "marketing",
      basePrice: 50000,
      descriptionEn: "A/B creative testing, audience scaling, daily optimization & live dashboard",
      descriptionBn: "ক্রিয়েটিভ টেস্টিং, অডিয়েন্স রিসার্চ ও দৈনিক আরওএএস অপ্টিমাইজেশন",
    },
    {
      id: "social-management",
      nameEn: "Full Social Media Management (30 Days)",
      nameBn: "পূর্ণাঙ্গ সোশ্যাল মিডিয়া হ্যান্ডলিং (৩০ দিন)",
      category: "marketing",
      basePrice: 40000,
      descriptionEn: "Monthly calendar, design carousels, community management & growth strategy",
      descriptionBn: "মাসিক ক্যালেন্ডার, ক্যারোসেল ডিজাইন ও অ্যাক্টিভ অডিয়েন্স বৃদ্ধি",
    },
    {
      id: "brand-identity",
      nameEn: "Full Brand Identity System",
      nameBn: "কমপ্লিট ব্র্যান্ড আইডেন্টিটি সিস্টেম",
      category: "marketing",
      basePrice: 45000,
      descriptionEn: "Logo suite, typography, color guide, brand voice & 50-page guideline book",
      descriptionBn: "লোগো স্যুট, টাইপোগ্রাফি, কালার গাইড ও বিস্তারিত ব্র্যান্ড বুক",
    },
    {
      id: "drone",
      nameEn: "Licensed 4K Drone Cinematography",
      nameBn: "লাইসেন্সকৃত ৪কে ড্রোন সিনেমাটোগ্রাফি",
      category: "addons",
      basePrice: 20000,
      descriptionEn: "Aerial sweeps, FPV dynamic chase, licensed drone pilot",
      descriptionBn: "পেশাদার ড্রোন পাইলট দ্বারা আকাশ থেকে সিনেমাটিক এরিয়াল শট",
    },
    {
      id: "vfx-3d",
      nameEn: "3D VFX & CGI Product Animation",
      nameBn: "থ্রিডি ভিএফএক্স ও সিজিআই অ্যানিমেশন",
      category: "addons",
      basePrice: 35000,
      descriptionEn: "Photorealistic 3D model transforms and particle effects",
      descriptionBn: "বাস্তবধর্মী থ্রিডি প্রোডাক্ট মডেলিং ও স্পেশাল এফেক্টস",
    },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(["tvc", "performance-ads"]);
  const [timelineMultiplier, setTimelineMultiplier] = useState<number>(1); // 1 = 1 Month / Single Project, 2.5 = Quarterly

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotal = useMemo(() => {
    const base = selectedIds.reduce((sum, id) => {
      const s = servicesList.find((item) => item.id === id);
      return sum + (s ? s.basePrice : 0);
    }, 0);
    return Math.round(base * timelineMultiplier);
  }, [selectedIds, timelineMultiplier]);

  const currencyFormat = (num: number) => {
    return `৳${num.toLocaleString("en-BD")}`;
  };

  return (
    <div className="relative p-6 sm:p-10 rounded-3xl bg-obsidian-200 border border-gold-champagne/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30 mb-2">
            <Calculator className="w-3.5 h-3.5 text-gold-champagne" />
            <span>{language === "bn" ? "ইন্টারেক্টিভ প্যাকেজ ক্যালকুলেটর" : "Interactive Scope & Budget Estimator"}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {language === "bn" ? "আপনার প্রজেক্টের বাজেট অনুমান করুন" : "Custom Package & Pricing Estimator"}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            {language === "bn"
              ? "প্রয়োজনীয় সার্ভিসগুলো সিলেক্ট করে তাৎক্ষণিক প্যাকেজ অনুমান পান এবং সরাসরি অফার রিকোয়েস্ট করুন।"
              : "Select your desired production and marketing modules to see an estimated investment scope."}
          </p>
        </div>

        {/* Timeline Horizon Toggle */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-obsidian-100 border border-white/10">
          <button
            onClick={() => setTimelineMultiplier(1)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              timelineMultiplier === 1
                ? "bg-gold-champagne text-obsidian shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {language === "bn" ? "সিঙ্গেল প্রজেক্ট / ১ মাস" : "Single / 1-Month"}
          </button>
          <button
            onClick={() => setTimelineMultiplier(2.5)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              timelineMultiplier === 2.5
                ? "bg-gold-champagne text-obsidian shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {language === "bn" ? "৩ মাসের গ্রোথ রিটেইনার (১০% ছাড়)" : "3-Month Retainer (10% Off)"}
          </button>
        </div>
      </div>

      {/* Services Selection Grid */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {servicesList.map((service) => {
          const isSelected = selectedIds.includes(service.id);
          return (
            <div
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start justify-between gap-4 select-none ${
                isSelected
                  ? "bg-teal-navy/40 border-gold-champagne shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                  : "bg-obsidian-100/50 border-white/5 hover:border-white/20 hover:bg-obsidian-100"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                    isSelected
                      ? "bg-gold-champagne border-gold-champagne text-obsidian"
                      : "border-slate-500 bg-transparent text-transparent"
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {language === "bn" ? service.nameBn : service.nameEn}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {language === "bn" ? service.descriptionBn : service.descriptionEn}
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono font-semibold text-gold-light whitespace-nowrap">
                {currencyFormat(service.basePrice)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Total & Action Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-obsidian-100/40 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-10 rounded-b-3xl">
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            {language === "bn" ? "আনুমানিক প্যাকেজ বাজেট" : "Estimated Package Investment"}
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm bg-clip-text text-transparent">
              {currencyFormat(calculatedTotal)}
            </span>
            <span className="text-xs text-slate-400">
              {timelineMultiplier > 1
                ? language === "bn"
                  ? "(৩ মাসের পূর্ণাঙ্গ ফেজ)"
                  : "(3-month phased retainer)"
                : language === "bn"
                ? "(সম্পূর্ণ ডেলিভারেবল সহ)"
                : "(turnkey execution)"}
            </span>
          </div>
        </div>

        <Link
          href={`/contact?services=${selectedIds.join(",")}&estimate=${calculatedTotal}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-obsidian" />
          <span>{language === "bn" ? "এই প্যাকেজে অফার রিকোয়েস্ট করুন" : "Lock In Quote & Request Proposal"}</span>
          <ArrowRight className="w-4 h-4 text-obsidian" />
        </Link>
      </div>
    </div>
  );
};
