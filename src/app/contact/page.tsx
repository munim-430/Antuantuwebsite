"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { InquiryForm } from "@/components/InquiryForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Send,
  Building,
} from "lucide-react";

function ContactContent() {
  const { language } = useLanguage();

  return (
    <div className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
          <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
          <span>{language === "bn" ? "যোগাযোগ ও প্রজেক্ট বুকিং" : "Direct Engagement"}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "bn" ? (
            <>
              চলুন শুরু করি আপনার <span className="text-gold-gradient">ব্র্যান্ডের রূপকথা</span>
            </>
          ) : (
            <>
              Let&apos;s Build Your Brand&apos;s <span className="text-gold-gradient">Cinematic Legend</span>
            </>
          )}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {language === "bn"
            ? "আপনার প্রজেক্টের পরিকল্পনা ও লক্ষ্য আমাদের জানান। প্রতিষ্ঠাতা মেহেরুন অন্তরা এবং আমাদের স্ট্র্যাটেজি টিম দ্রুততম সময়ে যোগাযোগ করবে।"
            : "Brief us on your upcoming commercial film, national TVC, or growth marketing roadmap. We reply with a detailed proposal within 2-4 hours."}
        </p>
      </section>

      {/* Main Grid: Contact Info (5 cols) & Multi-Step Inquiry Form (7 cols) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Founder Contacts, Address & Quick Lines */}
        <div className="lg:col-span-5 space-y-8">
          {/* Founder Executive Direct Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-teal-navy/40 to-obsidian-200 border-2 border-gold-champagne/40 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-champagne">
                {language === "bn" ? "প্রতিষ্ঠাতা ও নির্বাহী ডিরেকশন" : "Founder & Executive Desk"}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-gold-champagne shadow-md flex-shrink-0">
                <Image
                  src="/founder.jpg"
                  alt="Meherun Antara"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {language === "bn" ? "মেহেরুন অন্তরা" : "Meherun Antara"}
                </h3>
                <p className="text-xs text-gold-light font-medium mt-0.5">
                  {language === "bn"
                    ? "প্রতিষ্ঠাতা ও ক্রিয়েটিভ ডিরেক্টর (৩ বছরের অভিজ্ঞতা)"
                    : "Founder & Creative Director (3+ Years Leadership)"}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === "bn"
                ? "হাই-লেভেল ক্রিয়েটিভ পার্টনারশিপ, কমার্শিয়াল ডিরেকশন এবং আর্জেন্ট প্রজেক্টের জন্য সরাসরি যোগাযোগ করুন।"
                : "For high-stakes brand campaigns, broadcast filming, and executive partnerships, feel free to reach out directly to Meherun."}
            </p>

            {/* Direct Line Details */}
            <div className="space-y-3 pt-2 border-t border-white/10 text-sm">
              <a
                href="mailto:meherunantara71@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-100/90 border border-white/10 hover:border-gold-champagne text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-teal-navy text-gold-champagne group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">Official Direct Email</span>
                  <span className="font-semibold text-xs sm:text-sm text-gold-light">
                    meherunantara71@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:01407717472"
                className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-100/90 border border-white/10 hover:border-gold-champagne text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-teal-navy text-gold-champagne group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">Mobile & Hotline</span>
                  <span className="font-semibold text-sm sm:text-base text-white font-mono">
                    01407717472
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/8801407717472"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-emerald-900/60 text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-emerald-300">WhatsApp Instant Chat</span>
                  <span className="font-semibold text-xs sm:text-sm text-emerald-200">
                    +880 1407 717 472
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Physical Office & Hours */}
          <div className="p-6 rounded-2xl bg-obsidian-200 border border-white/10 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Building className="w-4 h-4 text-gold-champagne" />
              <span>{language === "bn" ? "স্টুডিও ও হেডকোয়ার্টার" : "Dhaka Production Studio"}</span>
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-champagne flex-shrink-0 mt-0.5" />
                <span>House 42, Road 11, Block D, Banani, Dhaka 1213, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-champagne flex-shrink-0" />
                <span>Sunday – Thursday: 10:00 AM – 7:30 PM (Shooting 24/7)</span>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="p-5 rounded-2xl bg-obsidian-100/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-gold-champagne" />
              <span>{language === "bn" ? "গোপনীয়তা ও এনডিএ সুরক্ষা" : "NDA & Concept Protection"}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === "bn"
                ? "আপনার সমস্ত ব্যবসায়িক ধারণা এবং স্ক্রিপ্ট ১০০% গোপনীয় রাখা হয়। প্রয়োজনে আমরা প্রথম মিটিংয়ের আগেই স্ট্যান্ডার্ড এনডিএ স্বাক্ষর করি।"
                : "All project scripts, creative concepts, and client information are strictly confidential and governed by standard NDAs."}
            </p>
          </div>
        </div>

        {/* Right Column: Multi-Step Interactive Project Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <InquiryForm />
        </div>
      </section>

      {/* Google Maps Embed / Office Location Placeholder */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-champagne">
              {language === "bn" ? "আমাদের লোকেশন" : "Physical Studio"}
            </span>
            <h3 className="text-2xl font-bold text-white">
              {language === "bn" ? "বনানী, ঢাকা হেডকোয়ার্টার" : "Banani, Dhaka Headquarters"}
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            Road 11, Block D, Banani
          </span>
        </div>

        <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-gold-champagne/30 shadow-2xl bg-obsidian-100">
          <iframe
            title="Rupkotha Studio Banani Dhaka Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700319717144!2d90.3952762291244!3d23.794582046200236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0xf64c0520a73851c0!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(105%)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Overlay card */}
          <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-obsidian-200/90 border border-gold-champagne/40 backdrop-blur-md text-xs text-white max-w-xs shadow-lg">
            <span className="font-bold text-gold-light block">
              রূপকথা প্রোডাকশন হাউজ (বনানী স্টুডিও)
            </span>
            <span className="text-slate-300 block mt-0.5">
              House 42, Road 11, Block D, Banani, Dhaka 1213
            </span>
            <a
              href="https://maps.google.com/?q=Banani+Dhaka+Bangladesh"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] text-gold-champagne hover:underline block mt-2 font-semibold"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gold-light">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
