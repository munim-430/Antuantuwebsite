import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0F19",
};

export const metadata: Metadata = {
  title: "রূপকথা প্রোডাকশন হাউজ | Rupkotha Production House — Cinematic Film & Marketing Agency",
  description:
    "রূপকথা প্রোডাকশন হাউজ (Rupkotha Production House) — Full-service cinematic film production and performance marketing agency founded by Meherun Antara. Delivering TVCs, commercials, viral social reels, and high-ROI digital campaigns in Dhaka, Bangladesh.",
  keywords: [
    "রূপকথা প্রোডাকশন",
    "রূপকথা প্রোডাকশন হাউজ",
    "Rupkotha Production House",
    "Meherun Antara",
    "Film Production House Bangladesh",
    "Commercial Video Production Dhaka",
    "TVC Production Dhaka",
    "Digital Marketing Agency Bangladesh",
    "Social Media Marketing",
    "Performance Marketing",
  ],
  authors: [{ name: "Meherun Antara", url: "https://github.com/munim-430/Antuantuwebsite" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "রূপকথা প্রোডাকশন হাউজ | Rupkotha Production House",
    description:
      "Bring your brand's story to life with cinematic magic. 3+ years of end-to-end creative production and high-converting marketing mastery led by Meherun Antara.",
    url: "https://rupkotha.com",
    siteName: "Rupkotha Production House",
    images: [
      {
        url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rupkotha Production House Master Reel",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="dark">
      <body className="bg-obsidian text-slate-100 antialiased selection:bg-gold-champagne selection:text-obsidian min-h-screen flex flex-col film-grain">
        <LanguageProvider>
          {/* Custom Interactive Gold Glow Cursor */}
          <CustomCursor />

          {/* Sticky Glassmorphism Navbar */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1 pt-20">{children}</main>

          {/* Comprehensive Global Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
