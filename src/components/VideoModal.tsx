"use client";

import React, { useRef, useState, useEffect } from "react";
import { PortfolioItem } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { X, Play, Pause, Volume2, VolumeX, Eye, Sparkles, Clock, Calendar, Maximize2 } from "lucide-react";

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ item, onClose }) => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (item && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Auto-play policy may require muted initially
        setIsMuted(true);
        if (videoRef.current) videoRef.current.play();
      });
      setIsPlaying(true);
    }
  }, [item]);

  if (!item) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-500/90 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-obsidian-200 border border-gold-champagne/30 shadow-[0_20px_70px_rgba(0,0,0,0.8)] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-obsidian-100/90">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-navy text-gold-light border border-gold-champagne/30">
              {language === "bn" ? item.categoryLabelBn : item.categoryLabelEn}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {language === "bn" ? item.titleBn : item.titleEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black aspect-video w-full flex items-center justify-center overflow-hidden group">
          <video
            ref={videoRef}
            src={item.videoUrl}
            poster={item.thumbnail}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            loop
            playsInline
            autoPlay
            muted={isMuted}
            className="w-full h-full object-contain"
          />

          {/* Interactive Player Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
            {/* Progress bar */}
            <div
              onClick={handleSeek}
              className="w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer relative mb-4 transition-all"
            >
              <div
                className="h-full bg-gradient-to-r from-gold-light via-gold-champagne to-gold-warm rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-gold-champagne text-obsidian hover:scale-110 active:scale-95 transition-transform"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-xs text-slate-300 font-mono">
                  {item.duration} • 4K UHD
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gold-champagne font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Rupkotha Master Grade</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Details & Meta */}
        <div className="p-6 sm:p-8 space-y-6 bg-obsidian-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-obsidian-100/70 border border-white/5">
            <div>
              <span className="block text-xs text-slate-400">
                {language === "bn" ? "ক্লায়েন্ট" : "Client Brand"}
              </span>
              <span className="text-sm font-semibold text-white">
                {language === "bn" ? item.clientBn : item.clientEn}
              </span>
            </div>
            <div>
              <span className="block text-xs text-slate-400">
                {language === "bn" ? "ভিডিও ভিউ" : "Audience Reach"}
              </span>
              <span className="text-sm font-semibold text-gold-light flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-gold-champagne" />
                {item.views}
              </span>
            </div>
            <div>
              <span className="block text-xs text-slate-400">
                {language === "bn" ? "ফলাফল / ROI" : "Impact / ROI"}
              </span>
              <span className="text-sm font-semibold text-emerald-400">
                {item.roiStat}
              </span>
            </div>
            <div>
              <span className="block text-xs text-slate-400">
                {language === "bn" ? "বছর" : "Production Year"}
              </span>
              <span className="text-sm font-semibold text-white">
                {item.year}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-champagne">
              {language === "bn" ? "প্রজেক্টের বিবরণ" : "Project Synopsis"}
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === "bn" ? item.descriptionBn : item.descriptionEn}
            </p>
          </div>

          {/* Director Notes */}
          <div className="p-4 rounded-xl bg-teal-navy/20 border border-teal-navy/60 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-glow flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
              <span>{language === "bn" ? "পরিচালকের ভাবনা ও কারিগরি দিক" : "Director & Technical Notes"}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              “{language === "bn" ? item.directorNotesBn : item.directorNotesEn}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
