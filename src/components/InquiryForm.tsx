"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import confetti from "canvas-confetti";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building,
  User,
  Mail,
  Phone,
  MessageSquare,
  DollarSign,
  Send,
  Video,
  TrendingUp,
  Layers,
  PhoneCall,
} from "lucide-react";

export const InquiryForm: React.FC = () => {
  const { language } = useLanguage();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [] as string[],
    budget: "100k-250k",
    timeline: "immediate",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  // Prepopulate if coming from pricing estimator or url
  useEffect(() => {
    const servicesParam = searchParams.get("services");
    if (servicesParam) {
      setFormData((prev) => ({
        ...prev,
        services: servicesParam.split(","),
      }));
    }
  }, [searchParams]);

  const serviceOptions = [
    {
      id: "video-production",
      labelEn: "Video Production (TVC, Commercials, 4K Films)",
      labelBn: "ভিডিও প্রোডাকশন (টিভি বিজ্ঞাপন, কমার্শিয়াল, ৪কে ফিল্ম)",
      icon: Video,
    },
    {
      id: "performance-marketing",
      labelEn: "Performance Marketing (Meta, Google, Paid Ads)",
      labelBn: "পারফরম্যান্স মার্কেটিং (মেটা, গুগল, পেইড অ্যাডস)",
      icon: TrendingUp,
    },
    {
      id: "social-media",
      labelEn: "Social Media Reels & Viral Growth (Both)",
      labelBn: "সোশ্যাল মিডিয়া রিলস ও পূর্ণাঙ্গ গ্রোথ (উভয়ই)",
      icon: Layers,
    },
    {
      id: "brand-identity",
      labelEn: "Brand Strategy & Visual Creative Direction",
      labelBn: "ব্র্যান্ড স্ট্র্যাটেজি ও ক্রিয়েটিভ ডিরেকশন",
      icon: Sparkles,
    },
  ];

  const budgetTiers = [
    { id: "under-100k", labelEn: "৳50,000 – ৳1,00,000", labelBn: "৫০,০০০ – ১,০০,০০০ ৳" },
    { id: "100k-250k", labelEn: "৳1,00,000 – ৳2,50,000", labelBn: "১,০০,০০০ – ২,৫০,০০০ ৳" },
    { id: "250k-500k", labelEn: "৳2,50,000 – ৳5,00,000", labelBn: "২,৫০,০০০ – ৫,০০,০০০ ৳" },
    { id: "500k-plus", labelEn: "৳5,00,000+ (Enterprise / National TVC)", labelBn: "৫,০০,০০০+ ৳ (ন্যাশনাল টিভি ক্যাম্পেইন)" },
  ];

  const toggleServiceCheckbox = (serviceId: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceId);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceId)
          : [...prev.services, serviceId],
      };
    });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        alert(language === "bn" ? "অনুগ্রহ করে আপনার নাম, ইমেইল ও ফোন নম্বর লিখুন।" : "Please fill in your name, email, and phone number.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (formData.services.length === 0) {
        alert(language === "bn" ? "কমপক্ষে একটি সার্ভিস সিলেক্ট করুন।" : "Please select at least one service.");
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `RUP-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedId);
      setIsSuccess(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D4AF37", "#F7E7A9", "#133855", "#FFFFFF"],
        });
      } catch (err) {
        // fallback
      }
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-obsidian-200 border border-gold-champagne/40 text-center space-y-6 shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 mx-auto rounded-full bg-teal-navy border-2 border-gold-champagne flex items-center justify-center text-gold-champagne shadow-[0_0_30px_rgba(212,175,55,0.4)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold text-gold-light uppercase tracking-wider block">
            {language === "bn" ? `রেফারেন্স নম্বর: ${submissionId}` : `Reference ID: ${submissionId}`}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            {language === "bn" ? "আপনার প্রস্তাবনার অনুরোধ গৃহীত হয়েছে!" : "Inquiry Successfully Received!"}
          </h3>
          <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">
            {language === "bn"
              ? `ধন্যবাদ, ${formData.name}! রূপকথা প্রোডাকশন হাউজের প্রতিষ্ঠাতা মেহেরুন অন্তরা এবং আমাদের স্ট্র্যাটেজি টিম আগামী ২ থেকে ৪ ঘণ্টার মধ্যে আপনার সাথে সরাসরি যোগাযোগ করবেন।`
              : `Thank you, ${formData.name}! Founder Meherun Antara and our creative strategy team will review your project requirements and connect directly within 2-4 hours.`}
          </p>
        </div>

        {/* Immediate Connect Card */}
        <div className="max-w-md mx-auto p-4 rounded-xl bg-obsidian-100 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[11px] text-slate-400 block">
              {language === "bn" ? "জরুরি প্রয়োজনে সরাসরি কল করুন:" : "Urgent project dispatch line:"}
            </span>
            <span className="text-sm font-bold text-gold-light">01407717472 (Meherun Antara)</span>
          </div>
          <a
            href="tel:01407717472"
            className="px-4 py-2 rounded-full text-xs font-bold bg-gold-champagne text-obsidian hover:brightness-110 flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{language === "bn" ? "কল করুন" : "Call Now"}</span>
          </a>
        </div>

        <button
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              services: [],
              budget: "100k-250k",
              timeline: "immediate",
              message: "",
            });
          }}
          className="text-xs text-slate-400 hover:text-gold-light underline pt-2"
        >
          {language === "bn" ? "আরেকটি ফর্ম সাবমিট করুন" : "Submit another project inquiry"}
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-obsidian-200 border border-gold-champagne/30 shadow-2xl backdrop-blur-xl">
      {/* Step Indicator Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          <span className="text-gold-light">
            {language === "bn" ? `ধাপ 0${step} / 03` : `Step 0${step} of 03`}
          </span>
          <span>
            {step === 1
              ? language === "bn"
                ? "ক্লায়েন্ট পরিচিতি"
                : "Client Profile"
              : step === 2
              ? language === "bn"
                ? "সার্ভিস ও ব্যাপ্তি"
                : "Required Services"
              : language === "bn"
              ? "বাজেট ও বিবরণ"
              : "Budget & Vision"}
          </span>
        </div>

        <div className="w-full h-1.5 bg-obsidian-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Client & Company Info */}
      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-4 animate-fadeIn">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-gold-champagne" />
              <span>{language === "bn" ? "আপনার পূর্ণ নাম *" : "Your Full Name *"}</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={language === "bn" ? "যেমন: কাজী রাকিবুল হাসান" : "e.g. Rachel Adams"}
              className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-white/10 focus:border-gold-champagne focus:outline-none text-sm text-white placeholder-slate-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-gold-champagne" />
              <span>{language === "bn" ? "কোম্পানি / ব্র্যান্ডের নাম" : "Company or Brand Name"}</span>
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder={language === "bn" ? "যেমন: অ্যাপেক্স ফুটওয়্যার" : "e.g. Apex Lifestyle Co."}
              className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-white/10 focus:border-gold-champagne focus:outline-none text-sm text-white placeholder-slate-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-champagne" />
                <span>{language === "bn" ? "অফিশিয়াল ইমেইল *" : "Official Email *"}</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-white/10 focus:border-gold-champagne focus:outline-none text-sm text-white placeholder-slate-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-champagne" />
                <span>{language === "bn" ? "মোবাইল / হোয়াটসঅ্যাপ নম্বর *" : "Phone / WhatsApp *"}</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="017XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-white/10 focus:border-gold-champagne focus:outline-none text-sm text-white placeholder-slate-500"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 transition-all"
            >
              <span>{language === "bn" ? "পরবর্তী ধাপ" : "Next Step"}</span>
              <ArrowRight className="w-4 h-4 text-obsidian" />
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Services Selection */}
      {step === 2 && (
        <form onSubmit={handleNext} className="space-y-4 animate-fadeIn">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-3">
              {language === "bn"
                ? "আপনার কাঙ্ক্ষিত সার্ভিসসমূহ নির্বাচন করুন (একাধিক নির্বাচনযোগ্য) *"
                : "Select the services you require (Checkboxes) *"}
            </label>
            <div className="grid grid-cols-1 gap-3">
              {serviceOptions.map((s) => {
                const isChecked = formData.services.includes(s.id);
                const Icon = s.icon;
                return (
                  <div
                    key={s.id}
                    onClick={() => toggleServiceCheckbox(s.id)}
                    className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all select-none ${
                      isChecked
                        ? "bg-teal-navy/40 border-gold-champagne text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        : "bg-obsidian-100 border-white/10 hover:border-white/20 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-obsidian-200 border border-white/10 text-gold-champagne">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">
                        {language === "bn" ? s.labelBn : s.labelEn}
                      </span>
                    </div>

                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                        isChecked
                          ? "bg-gold-champagne border-gold-champagne text-obsidian"
                          : "border-slate-500 bg-transparent text-transparent"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-obsidian-100 border border-white/10 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === "bn" ? "পূর্ববর্তী ধাপ" : "Back"}</span>
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 transition-all"
            >
              <span>{language === "bn" ? "পরবর্তী ধাপ" : "Next Step"}</span>
              <ArrowRight className="w-4 h-4 text-obsidian" />
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Budget Range & Vision Message */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <DollarSign className="w-3.5 h-3.5 text-gold-champagne" />
              <span>{language === "bn" ? "বাজেট রেঞ্জ নির্বাচন করুন *" : "Estimated Budget Range *"}</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {budgetTiers.map((b) => (
                <div
                  key={b.id}
                  onClick={() => setFormData({ ...formData, budget: b.id })}
                  className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer text-center transition-all ${
                    formData.budget === b.id
                      ? "bg-teal-navy border-gold-champagne text-gold-light shadow-md"
                      : "bg-obsidian-100 border-white/10 hover:border-white/20 text-slate-300"
                  }`}
                >
                  {language === "bn" ? b.labelBn : b.labelEn}
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-gold-champagne" />
              <span>{language === "bn" ? "আপনার প্রজেক্টের ভিশন ও বার্তা" : "Project Vision & Notes"}</span>
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                language === "bn"
                  ? "আপনার প্রজেক্টের কাঙ্ক্ষিত ফলাফল, লক্ষ্যমাত্রা বা কোনো বিশেষ চাহিদা সম্পর্কে জানান..."
                  : "Tell us about your brand goals, target timeline, or reference benchmarks..."
              }
              className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-white/10 focus:border-gold-champagne focus:outline-none text-sm text-white placeholder-slate-500"
            />
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-obsidian-100 border border-white/10 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === "bn" ? "পূর্ববর্তী ধাপ" : "Back"}</span>
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              {isSubmitting ? (
                <span>{language === "bn" ? "প্রক্রিয়াকরণ হচ্ছে..." : "Sending Inquiry..."}</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-obsidian" />
                  <span>{language === "bn" ? "প্রস্তাবনা সাবমিট করুন" : "Submit Project Inquiry"}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
