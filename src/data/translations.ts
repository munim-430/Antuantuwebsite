export type Language = "en" | "bn";

export interface TranslationContent {
  nav: {
    brandName: string;
    brandSub: string;
    home: string;
    about: string;
    services: string;
    portfolio: string;
    caseStudies: string;
    contact: string;
    getProposal: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    exploreWork: string;
    bookConsultation: string;
    statsYears: string;
    statsProjects: string;
    statsViews: string;
    statsSatisfaction: string;
  };
  trustBar: {
    title: string;
  };
  servicesOverview: {
    badge: string;
    title: string;
    subtitle: string;
    viewAllServices: string;
  };
  featuredReel: {
    badge: string;
    title: string;
    subtitle: string;
    watchReel: string;
    behindTheScenes: string;
  };
  statsSection: {
    heading: string;
    subheading: string;
    items: {
      value: string;
      label: string;
      description: string;
    }[];
  };
  founder: {
    badge: string;
    name: string;
    role: string;
    experience: string;
    bioParagraph1: string;
    bioParagraph2: string;
    quote: string;
    quoteAuthor: string;
    ctaButton: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    ourServices: string;
    contactUs: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    newsletterPlaceholder: string;
    subscribe: string;
    subscribedSuccess: string;
    copyright: string;
    allRightsReserved: string;
    address: string;
    founderDirect: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      brandName: "Rupkotha",
      brandSub: "Production House",
      home: "Home",
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      caseStudies: "Case Studies",
      contact: "Contact",
      getProposal: "Get a Proposal",
    },
    hero: {
      badge: "Cinematic Visuals • Data-Driven Growth",
      headlinePart1: "Bring Your Brand's",
      headlineHighlight: "Story to Life",
      headlinePart2: "with Cinematic Magic",
      subheadline:
        "Over 3 years of end-to-end creative production and high-converting marketing mastery. We turn brand visions into award-worthy visual spectacles and measurable market impact.",
      exploreWork: "Explore Our Work",
      bookConsultation: "Book Free Consultation",
      statsYears: "3+ Years Mastery",
      statsProjects: "120+ High-Impact Projects",
      statsViews: "25M+ Video Views",
      statsSatisfaction: "99% Client Retention",
    },
    trustBar: {
      title: "Trusted by forward-thinking brands, corporate leaders & market disruptors",
    },
    servicesOverview: {
      badge: "Core Expertise",
      title: "Full-Spectrum Creative & Marketing Suite",
      subtitle:
        "We unite Hollywood-caliber cinematography with aggressive digital performance to deliver extraordinary business ROI.",
      viewAllServices: "Explore All Services & Packages",
    },
    featuredReel: {
      badge: "Showcase Reel 2024-2025",
      title: "Crafting Cinematic Perfection",
      subtitle:
        "Every frame is meticulously scripted, captured in crisp 4K/6K cinema cameras, and color-graded to evoke emotion.",
      watchReel: "Watch Master Showreel",
      behindTheScenes: "Behind The Scenes",
    },
    statsSection: {
      heading: "Numbers That Prove Our Impact",
      subheading:
        "Consistent execution, unforgettable visual craft, and aggressive market amplification.",
      items: [
        {
          value: "120+",
          label: "Projects Delivered",
          description: "From national TVCs to full-funnel digital launches",
        },
        {
          value: "45+",
          label: "Brands Scaled",
          description: "Startups, enterprises, and lifestyle brands transformed",
        },
        {
          value: "25M+",
          label: "Organic & Paid Views",
          description: "Audience engagement captured across all digital platforms",
        },
        {
          value: "340%",
          label: "Average Client ROI",
          description: "Measurable revenue growth through combined campaigns",
        },
      ],
    },
    founder: {
      badge: "Leadership & Creative Vision",
      name: "Meherun Antara",
      role: "Founder & Creative Director",
      experience: "3+ Years of Production & Strategic Marketing Leadership",
      bioParagraph1:
        "Meherun Antara founded Rupkotha Production House with a resolute vision: to fuse the emotional depth of cinematic storytelling with the analytical rigor of modern performance marketing. With over 3 years of hands-on leadership, she spearheads end-to-end creative direction, commercial film production, and omnichannel brand positioning.",
      bioParagraph2:
        "Her meticulous eye for visual aesthetics, coupled with an instinct for viral consumer psychology, has propelled emerging brands into market leaders and established enterprises into cultural phenomena. Under her leadership, Rupkotha ensures every single client vision is executed with cinematic distinction.",
      quote:
        "“Every brand carries an untold fairytale. Our mission at Rupkotha is not merely to capture video, but to awaken a spellbinding story that etches itself into the hearts of your audience.”",
      quoteAuthor: "Meherun Antara — Founder, Rupkotha Production House",
      ctaButton: "Work Directly With Meherun",
    },
    footer: {
      aboutText:
        "Rupkotha Production House (রূপকথা প্রোডাকশন হাউজ) is a premier full-service cinematic film production and performance marketing agency based in Dhaka, Bangladesh. We build legends.",
      quickLinks: "Quick Navigation",
      ourServices: "Specializations",
      contactUs: "Direct Line",
      newsletterTitle: "Stay Ahead of the Curve",
      newsletterSubtitle:
        "Receive exclusive monthly insights on visual trends, viral video formulas, and brand storytelling strategies.",
      newsletterPlaceholder: "Enter your official email address",
      subscribe: "Subscribe",
      subscribedSuccess: "Thank you! You're now on our VIP dispatch list.",
      copyright: "© 2026 Rupkotha Production House (রূপকথা প্রোডাকশন). All rights reserved.",
      allRightsReserved: "Crafted with cinematic passion and precision engineering.",
      address: "House 42, Road 11, Block D, Banani, Dhaka 1213, Bangladesh",
      founderDirect: "Founder Direct: Meherun Antara",
    },
  },
  bn: {
    nav: {
      brandName: "রূপকথা",
      brandSub: "প্রোডাকশন হাউজ",
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সার্ভিসসমূহ",
      portfolio: "পোর্টফোলিও",
      caseStudies: "কেস স্টাডিজ",
      contact: "যোগাযোগ",
      getProposal: "অফার নিন",
    },
    hero: {
      badge: "সিনেমাটিক ভিজ্যুয়াল • ডেটা-ড্রাইভেন ব্র্যান্ড গ্রোথ",
      headlinePart1: "রূপকথার মতো",
      headlineHighlight: "জাদুকরী গল্পে",
      headlinePart2: "সাজান আপনার ব্র্যান্ড",
      subheadline:
        "৩ বছরের সফল প্রোডাকশন অভিজ্ঞতা এবং আধুনিক ডিজিটাল মার্কেটিংয়ের নিখুঁত মেলবন্ধন। আপনার ব্র্যান্ডের দর্শনকে আমরা রূপান্তর করি স্মরণীয় ভিজ্যুয়াল অভিজ্ঞতা ও নিশ্চিত ব্যবসায়িক সাফল্যে।",
      exploreWork: "আমাদের কাজ দেখুন",
      bookConsultation: "ফ্রি কনসালটেশন নিন",
      statsYears: "৩+ বছরের অভিজ্ঞতা",
      statsProjects: "১২০+ সফল প্রোডাকশন",
      statsViews: "২৫M+ মোট ভিডিও ভিউ",
      statsSatisfaction: "৯৯% ক্লায়েন্ট সন্তুষ্টি",
    },
    trustBar: {
      title: "দেশসেরা ব্র্যান্ড এবং দূরদর্শী উদ্যোক্তাদের বিশ্বস্ত ক্রিয়েটিভ পার্টনার",
    },
    servicesOverview: {
      badge: "আমাদের দক্ষতা",
      title: "সম্পূর্ণ প্রোডাকশন ও মার্কেটিং সল্যুশন",
      subtitle:
        "আন্তর্জাতিক মানের সিনেমাটোগ্রাফি এবং ফলাফলমুখী ডিজিটাল পারফরম্যান্স মার্কেটিংয়ের মাধ্যমে আমরা নিশ্চিত করি সর্বাধিক রিটার্ন অন ইনভেস্টমেন্ট (ROI)।",
      viewAllServices: "সকল সার্ভিস ও প্যাকেজ দেখুন",
    },
    featuredReel: {
      badge: "মাস্টার শোরিল ২০২৪-২০২৫",
      title: "অনবদ্য সিনেমাটিক আর্ট ও ভিজ্যুয়াল স্টোরি",
      subtitle:
        "প্রতিটি ফ্রেম যত্নসহকারে পরিকল্পিত, 4K/6K সিনেমা ক্যামেরায় ধারণকৃত এবং আবেগ জাগিয়ে তোলার মতো কালার-গ্রেডেড।",
      watchReel: "মাস্টার শোরিল দেখুন",
      behindTheScenes: "শুটিংয়ের পেছনের গল্প",
    },
    statsSection: {
      heading: "আমাদের অর্জনের মাইলফলক",
      subheading:
        "ধারাবাহিক শ্রেষ্ঠত্ব, অবিস্মরণীয় সিনেমাটিক ভিজ্যুয়াল এবং ডিজিটাল প্ল্যাটফর্মে কার্যকর প্রভাব।",
      items: [
        {
          value: "১২০+",
          label: "সফল প্রজেক্ট সম্পন্ন",
          description: "জাতীয় টিভি বিজ্ঞাপন থেকে শুরু করে ডিজিটাল ক্যাম্পেইন",
        },
        {
          value: "৪৫+",
          label: "ব্র্যান্ডের স্কেলিং",
          description: "স্টার্টআপ থেকে করপোরেট জায়ান্টদের নতুন উচ্চতায় পদার্পণ",
        },
        {
          value: "২৫M+",
          label: "অর্গানিক ও পেইড ভিউ",
          description: "বিভিন্ন সোশ্যাল প্ল্যাটফর্মে দর্শকদের মুগ্ধ করা প্রতিক্রিয়া",
        },
        {
          value: "৩৪০%",
          label: "গড় ক্লায়েন্ট ROI",
          description: "সমন্বিত ক্যাম্পেইন ও ভিজ্যুয়াল কৌশলে কার্যকর সেলস গ্রোথ",
        },
      ],
    },
    founder: {
      badge: "নেতৃত্ব ও ক্রিয়েটিভ ভিশন",
      name: "মেহেরুন অন্তরা",
      role: "প্রতিষ্ঠাতা ও ক্রিয়েটিভ ডিরেক্টর",
      experience: "৩ বছরের বিশেষায়িত প্রোডাকশন ও ব্র্যান্ড মার্কেটিং নেতৃত্ব",
      bioParagraph1:
        "মেহেরুন অন্তরা একটি সুনির্দিষ্ট ভিশন নিয়ে প্রতিষ্ঠা করেন ‘রূপকথা প্রোডাকশন হাউজ’—যেখানে সিনেমাটিক স্টোরিটেলিংয়ের সংবেদনশীলতা মিলেছে ডেটা-ড্রাইভেন পারফরম্যান্স মার্কেটিংয়ের নির্ভুল কৌশলের সাথে। গত ৩ বছর ধরে তিনি সফলতার সাথে নেতৃত্ব দিয়ে আসছেন সৃজনশীল পরিচালনা, কমার্শিয়াল ফিল্ম নির্মাণ এবং আধুনিক ব্র্যান্ডিংয়ে।",
      bioParagraph2:
        "ভিজ্যুয়াল সৌন্দর্যের প্রতি তার নিখুঁত দৃষ্টি এবং ভোক্তা মনস্তত্ত্বের গভীর উপলব্ধি সাধারণ ব্র্যান্ডকেও রূপান্তর করেছে জনপ্রিয় পাওয়ারহাউজে। তার সার্বক্ষণিক তত্ত্বাবধানে রূপকথা প্রতিটি ক্লায়েন্টের স্বপ্নকে বাস্তবে রূপ দেয় অনন্য শৈল্পিকতায়।",
      quote:
        "“প্রত্যেক ব্র্যান্ডের ভেতরেই একটি চমৎকার রূপকথা লুকিয়ে থাকে। আমাদের লক্ষ্য কেবল ভিডিও তৈরি করা নয়, বরং এমন এক জাদুকরী গল্প বলা যা দর্শকের হৃদয়ে চিরস্থায়ী ছাপ ফেলে।”",
      quoteAuthor: "মেহেরুন অন্তরা — প্রতিষ্ঠাতা, রূপকথা প্রোডাকশন হাউজ",
      ctaButton: "মেহেরুন অন্তরার সাথে সরাসরি কথা বলুন",
    },
    footer: {
      aboutText:
        "রূপকথা প্রোডাকশন হাউজ হলো ঢাকা, বাংলাদেশের একটি শীর্ষস্থানীয় সিনেমাটিক ফিল্ম প্রোডাকশন ও পূর্ণাঙ্গ ডিজিটাল মার্কেটিং এজেন্সি। আমরা ব্র্যান্ডের কিংবদন্তি রচনা করি।",
      quickLinks: "দ্রুত লিঙ্ক",
      ourServices: "স্পেশালাইজেশন",
      contactUs: "সরাসরি যোগাযোগ",
      newsletterTitle: "আপডেট থাকুন নিয়মিত",
      newsletterSubtitle:
        "ভিজ্যুয়াল ট্রেন্ড, ভাইরাল ভিডিও ফর্মুলা এবং ব্র্যান্ড কৌশলের প্রিমিয়াম ইনসাইট পান আপনার ইনবক্সে।",
      newsletterPlaceholder: "আপনার অফিশিয়াল ইমেইল দিন",
      subscribe: "যুক্ত হোন",
      subscribedSuccess: "অভিনন্দন! আপনি আমাদের ভিআইপি তালিকায় যুক্ত হয়েছেন।",
      copyright: "© ২০২৬ রূপকথা প্রোডাকশন হাউজ (রূপকথা প্রোডাকশন)। সর্বস্বত্ব সংরক্ষিত।",
      allRightsReserved: "সিনেমাটিক আবেগ ও আধুনিক প্রযুক্তির নিখুঁত সমন্বয়ে তৈরি।",
      address: "হাউস ৪২, রোড ১১, ব্লক ডি, বনানী, ঢাকা ১২১৩, বাংলাদেশ",
      founderDirect: "প্রতিষ্ঠাতা সরাসরি: মেহেরুন অন্তরা",
    },
  },
};
