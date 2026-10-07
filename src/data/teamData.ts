export interface TeamMember {
  id: string;
  nameEn: string;
  nameBn: string;
  roleEn: string;
  roleBn: string;
  experienceEn: string;
  experienceBn: string;
  image: string;
  bioEn: string;
  bioBn: string;
  specialtyEn: string;
  specialtyBn: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export const founderDetails = {
  nameEn: "Meherun Antara",
  nameBn: "মেহেরুন অন্তরা",
  titleEn: "Founder & Creative Director",
  titleBn: "প্রতিষ্ঠাতা ও ক্রিয়েটিভ ডিরেক্টর",
  experienceEn: "3 Years of Dedicated Leadership in Film Production & Brand Marketing",
  experienceBn: "ফিল্ম প্রোডাকশন ও ব্র্যান্ড মার্কেটিংয়ে ৩ বছরের সফল নেতৃত্ব",
  image: "/founder.jpg",
  email: "meherunantara71@gmail.com",
  phone: "01407717472",
  quoteEn:
    "“Every brand carries an untold fairytale. Our mission at Rupkotha is not merely to capture video, but to awaken a spellbinding story that etches itself into the hearts of your audience.”",
  quoteBn:
    "“প্রত্যেক ব্র্যান্ডের ভেতরেই একটি চমৎকার রূপকথা লুকিয়ে থাকে। আমাদের লক্ষ্য কেবল ভিডিও তৈরি করা নয়, বরং এমন এক জাদুকরী গল্প বলা যা দর্শকের হৃদয়ে চিরস্থায়ী ছাপ ফেলে।”",
  highlightsEn: [
    "3+ Years Spearheading High-End TVCs & Commercial Productions",
    "Pioneered Hybrid Cinematic-Performance Marketing Framework",
    "Managed over 120+ Commercial Shoots and Multi-Million Ad Budgets",
    "Hands-on Art Direction, Scripting & Client Strategy Oversight",
  ],
  highlightsBn: [
    "৩+ বছর ধরে উচ্চমানের কমার্শিয়াল ও টিভি বিজ্ঞাপনের সফল পরিচালনা",
    "সিনেমাটিক ভিজ্যুয়াল ও পারফরম্যান্স মার্কেটিংয়ের অনন্য ফ্রেমওয়ার্ক উদ্ভাবন",
    "১২০+ কমার্শিয়াল শ্যুট ও মিলিয়ন বাজেট ক্যাম্পেইনের সফল ব্যবস্থাপনা",
    "স্ক্রিপ্ট থেকে ফাইনাল কালার গ্রেডিং পর্যন্ত সরাসরি শৈল্পিক তত্ত্বাবধান",
  ],
};

export const coreTeamMembers: TeamMember[] = [
  {
    id: "team-cinematographer",
    nameEn: "Tanvir Hasan",
    nameBn: "তানভীর হাসান",
    roleEn: "Head of Cinematography & D.O.P.",
    roleBn: "হেড অব সিনেমাটোগ্রাফি ও ডিওপি",
    experienceEn: "5+ Years Feature & TVC Cinematography",
    experienceBn: "৫+ বছরের কমার্শিয়াল ও ফিচার সিনেমাটোগ্রাফি অভিজ্ঞতা",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bioEn: "Specialist in anamorphic glass, dynamic movement rigs, and chiaroscuro lighting architecture.",
    bioBn: "অ্যানামরফিক গ্লাস, ডায়নামিক ক্যামেরা মুভমেন্ট ও সিনেম্যাটিক লাইটিং বিশেষজ্ঞ।",
    specialtyEn: "ARRI & RED Workflows",
    specialtyBn: "ARRI ও RED ক্যামেরা সিস্টেম",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    id: "team-performance",
    nameEn: "Shakil Chowdhury",
    nameBn: "শাকিল চৌধুরী",
    roleEn: "Performance Marketing Lead",
    roleBn: "পারফরম্যান্স মার্কেটিং লিড",
    experienceEn: "4+ Years Paid Media & Growth Analytics",
    experienceBn: "৪+ বছরের পেইড মিডিয়া ও গ্রোথ অ্যানালিটিক্স অভিজ্ঞতা",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bioEn: "Master of full-funnel media buying across Meta, Google, and emerging programmatic networks.",
    bioBn: "মেটা ও গুগল পেইড মিডিয়া বায়িং এবং ফুল-ফানল কনভার্সন অপ্টিমাইজেশনের মাস্টারমাইন্ড।",
    specialtyEn: "ROAS Scaling & Attribution",
    specialtyBn: "হাই-স্কেল ROAS ও অ্যানালিটিক্স",
    socials: { linkedin: "https://linkedin.com", email: "marketing@rupkotha.com" },
  },
  {
    id: "team-post-director",
    nameEn: "Rubina Yasmin",
    nameBn: "রুবিনা ইয়াসমিন",
    roleEn: "Lead Colorist & VFX Supervisor",
    roleBn: "লিড কালারিস্ট ও ভিএফএক্স সুপারভাইজার",
    experienceEn: "4+ Years DaVinci Color & 3D Motion",
    experienceBn: "৪+ বছরের ডাভিঞ্চি কালার ও থ্রিডি মোশন অভিজ্ঞতা",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bioEn: "Certified DaVinci Resolve color master crafting bespoke film looks that elevate emotional resonance.",
    bioBn: "সার্টিফাইড ডাভিঞ্চি রিজলভ কালার মাস্টার, যিনি প্রতিটি ফ্রেমে দেন অনন্য শৈল্পিক লুক।",
    specialtyEn: "Film Emulation & Grading",
    specialtyBn: "ফিল্ম ইমুলেশন ও গ্রেডিং",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    id: "team-content-director",
    nameEn: "Farhan Kabir",
    nameBn: "ফারহান কবির",
    roleEn: "Creative Copy & Narrative Lead",
    roleBn: "ক্রিয়েটিভ কপি ও ন্যারেটিভ লিড",
    experienceEn: "3+ Years Brand Storytelling",
    experienceBn: "৩+ বছরের ব্র্যান্ড স্টোরিটেলিং অভিজ্ঞতা",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bioEn: "Crafts provocative, witty, and emotionally gripping scripts that convert casual viewings into loyal fandom.",
    bioBn: "মনোমুগ্ধকর ও আবেগময় স্ক্রিপ্ট লেখক, যার ভাবনা দর্শকের মনে স্থায়ী ছাপ ফেলে।",
    specialtyEn: "Scriptwriting & Directing",
    specialtyBn: "চিত্রনাট্য ও পরিচালনা",
    socials: { linkedin: "https://linkedin.com", email: "stories@rupkotha.com" },
  },
];
