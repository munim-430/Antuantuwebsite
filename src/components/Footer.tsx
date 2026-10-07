"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Film,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Sparkles,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) return;
    setIsSubscribed(true);
    setEmailInput("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 6000);
  };

  return (
    <footer className="relative bg-obsidian-400 border-t border-gold-champagne/15 text-slate-300 overflow-hidden">
      {/* Subtle top gold glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-champagne/50 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-40 bg-teal-navy/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-teal-navy to-obsidian border border-gold-champagne/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] p-1 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Rupkotha Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-gold-light to-gold-champagne bg-clip-text text-transparent">
                  রূপকথা
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-gold-champagne/80 font-medium">
                  {language === "bn" ? "প্রোডাকশন হাউজ" : "Production House"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>

            {/* Direct Founder Contact Card */}
            <div className="p-4 rounded-xl bg-obsidian-200/80 border border-gold-champagne/20 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-champagne uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.footer.founderDirect}</span>
              </div>
              <p className="text-xs text-slate-300">
                {language === "bn"
                  ? "সরাসরি ক্রিয়েটিভ ডিরেকশন ও পার্টনারশিপ আলোচনার জন্য যোগাযোগ করুন:"
                  : "Direct line for executive film & marketing inquiries:"}
              </p>
              <div className="pt-1 flex flex-col gap-1 text-xs">
                <a
                  href="mailto:meherunantara71@gmail.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-gold-light transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-champagne" />
                  <span>meherunantara71@gmail.com</span>
                </a>
                <a
                  href="tel:01407717472"
                  className="flex items-center gap-2 text-slate-300 hover:text-gold-light transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-champagne" />
                  <span>01407717472</span>
                </a>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-obsidian-200 border border-white/10 hover:border-gold-champagne flex items-center justify-center text-slate-400 hover:text-gold-light hover:bg-teal-navy/40 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-obsidian-200 border border-white/10 hover:border-gold-champagne flex items-center justify-center text-slate-400 hover:text-gold-light hover:bg-teal-navy/40 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-obsidian-200 border border-white/10 hover:border-gold-champagne flex items-center justify-center text-slate-400 hover:text-gold-light hover:bg-teal-navy/40 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-obsidian-200 border border-white/10 hover:border-gold-champagne flex items-center justify-center text-slate-400 hover:text-gold-light hover:bg-teal-navy/40 transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-light transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-light transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-light transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold-light transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-gold-light transition-colors">
                  {t.nav.caseStudies}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.ourServices}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-gold-light transition-colors">
                <Link href="/services#production">
                  {language === "bn" ? "টিভি কমার্শিয়াল (TVC) ও ফিল্ম" : "Commercial & TVC Filming"}
                </Link>
              </li>
              <li className="hover:text-gold-light transition-colors">
                <Link href="/services#marketing">
                  {language === "bn" ? "পারফরম্যান্স মার্কেটিং ও পেইড অ্যাডস" : "Paid Performance Marketing"}
                </Link>
              </li>
              <li className="hover:text-gold-light transition-colors">
                <Link href="/services#social">
                  {language === "bn" ? "সোশ্যাল মিডিয়া ভাইরাল গ্রোথ" : "Viral Social Media Production"}
                </Link>
              </li>
              <li className="hover:text-gold-light transition-colors">
                <Link href="/services#branding">
                  {language === "bn" ? "ব্র্যান্ড আইডেন্টিটি ও পজিশনিং" : "Brand Identity & Strategy"}
                </Link>
              </li>
              <li className="hover:text-gold-light transition-colors">
                <Link href="/services#production">
                  {language === "bn" ? "ডাভিঞ্চি কালার গ্রেডিং ও ভিএফএক্স" : "DaVinci Color & VFX Studio"}
                </Link>
              </li>
              <li className="hover:text-gold-light transition-colors">
                <Link href="/services#marketing">
                  {language === "bn" ? "ইনফ্লুয়েন্সার ও পিআর ক্যাম্পেইন" : "Influencer Campaigns & PR"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.newsletterSubtitle}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-100 border border-white/10 focus:border-gold-champagne focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                <span>{t.footer.subscribe}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {isSubscribed && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-teal-navy/50 border border-gold-champagne/40 text-gold-light text-xs animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-gold-champagne" />
                <span>{t.footer.subscribedSuccess}</span>
              </div>
            )}

            <div className="pt-2 text-xs text-slate-500 flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-champagne mt-0.5 flex-shrink-0" />
              <span>{t.footer.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>{t.footer.allRightsReserved}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
