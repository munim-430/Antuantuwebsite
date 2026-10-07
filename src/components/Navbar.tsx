"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Film, Sparkles, Menu, X, ArrowRight, Globe } from "lucide-react";

export const Navbar: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/case-studies", label: t.nav.caseStudies },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian/85 backdrop-blur-md border-b border-gold-champagne/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-teal-navy to-obsidian border border-gold-champagne/30 group-hover:border-gold-champagne transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] overflow-hidden p-1">
              <Image
                src="/logo.png"
                alt="Rupkotha Logo"
                width={36}
                height={36}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-champagne animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-gold-light to-gold-champagne bg-clip-text text-transparent group-hover:opacity-95 transition-opacity">
                রূপকথা
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gold-champagne/80 font-medium">
                {language === "bn" ? "প্রোডাকশন হাউজ" : "Production House"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-obsidian-100/60 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-gold-light bg-teal-navy/70 border border-gold-champagne/30 shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gold-champagne rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-obsidian-100 border border-gold-champagne/25 text-slate-200 hover:text-gold-light hover:border-gold-champagne hover:bg-teal-navy/40 transition-all duration-200"
            >
              <Globe className="w-3.5 h-3.5 text-gold-champagne" />
              <span className={language === "bn" ? "text-gold-champagne font-bold" : "text-slate-400"}>বাংলা</span>
              <span className="text-slate-500">/</span>
              <span className={language === "en" ? "text-gold-champagne font-bold" : "text-slate-400"}>EN</span>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact?intent=proposal"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-obsidian" />
              <span>{t.nav.getProposal}</span>
              <ArrowRight className="w-3.5 h-3.5 text-obsidian" />
            </Link>
          </div>

          {/* Mobile Menu & Lang Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-obsidian-100 border border-gold-champagne/30 text-gold-light"
            >
              <span>{language === "bn" ? "EN" : "বাং"}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open menu"
              className="p-2 rounded-xl bg-obsidian-100 border border-white/10 text-slate-200 hover:text-gold-champagne"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-obsidian/95 border-b border-gold-champagne/20 backdrop-blur-xl px-6 py-8 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-teal-navy/60 text-gold-light border border-gold-champagne/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-gold-champagne" />}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact?intent=proposal"
                className="w-full text-center py-3.5 px-6 rounded-xl font-semibold text-obsidian bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                {t.nav.getProposal}
              </Link>
              <div className="text-center text-xs text-slate-400">
                Founder: Meherun Antara • 01407717472
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
