export interface ServiceWorkflowStep {
  step: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  deliverablesEn: string[];
  deliverablesBn: string[];
}

export interface ServiceCategory {
  id: string;
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  iconName: string;
  descriptionEn: string;
  descriptionBn: string;
  featuresEn: string[];
  featuresBn: string[];
  workflow: ServiceWorkflowStep[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "production",
    titleEn: "Commercial & Video Production",
    titleBn: "কমার্শিয়াল ও ভিডিও প্রোডাকশন",
    subtitleEn: "Cinematic High-Definition Storytelling",
    subtitleBn: "উচ্চমানের সিনেমাটিক স্টোরিটেলিং",
    iconName: "Clapperboard",
    descriptionEn:
      "We engineer awe-inspiring video content that captivates eyes and evokes deep emotion. From national television commercials (TVC) to digital-first social campaigns, documentary features, and high-impact product launches.",
    descriptionBn:
      "আন্তর্জাতিক মানের সিনেমাটিক ভিডিও নির্মাণের মাধ্যমে আমরা দর্শকের মাঝে তীব্র আবেগ ও ব্র্যান্ড ভ্যালু তৈরি করি। টিভি কমার্শিয়াল (TVC) থেকে ডিজিটাল ফিল্ম, কর্পোরেট ডকুমেন্টারি এবং আকর্ষণীয় প্রোডাক্ট লঞ্চ ফিল্ম।",
    featuresEn: [
      "Cinema-Grade Cameras (RED, ARRI, Blackmagic 6K Pro)",
      "High-Fidelity Narrative Scriptwriting & Storyboarding",
      "Hollywood-Standard DaVinci Resolve Color Grading",
      "Dynamic 3D VFX, CGI & Custom Motion Graphics",
      "Studio Spatial Audio Mixing, Sound Foley & Original Scores",
      "Licensed Aerial 4K Drone Cinematography",
    ],
    featuresBn: [
      "সিনেমা ক্যামেরা (RED, ARRI, Blackmagic 6K Pro)",
      "মনোমুগ্ধকর চিত্রনাট্য ও ভিজ্যুয়াল স্টোরিবোর্ডিং",
      "হলিউড মানের ডাভিঞ্চি রিজলভ কালার গ্রেডিং",
      "থ্রিডি ভিএফএক্স (VFX), সিজিআই এবং মোশন গ্রাফিক্স",
      "স্টুডিও সাউন্ড ডিজাইন ও অরিজিনাল ব্যাকগ্রাউন্ড স্কোর",
      "উচ্চমানের ৪কে ড্রোন সিনেমাটোগ্রাফি",
    ],
    workflow: [
      {
        step: "01",
        titleEn: "Pre-Production & Creative Conception",
        titleBn: "প্রি-প্রোডাকশন ও চিত্রনাট্য তৈরি",
        descriptionEn:
          "Target persona research, script draft iterations, shot-list development, moodboards, actor casting, styling, and location scouts.",
        descriptionBn:
          "টার্গেট অডিয়েন্স অ্যানালাইসিস, চিত্রনাট্য ড্রাফট, শট-লিস্ট, মুডবোর্ড, কাস্টিং ও লোকেশন রেকি।",
        deliverablesEn: ["Master Director Script", "Visual Storyboard Deck", "Production Schedule"],
        deliverablesBn: ["মাস্টার ডিরেক্টর স্ক্রিপ্ট", "ভিজ্যুয়াল স্টোরিবোর্ড ডেক", "প্রোডাকশন শিডিউল"],
      },
      {
        step: "02",
        titleEn: "Principal Photography & Filming",
        titleBn: "মূল শুটিং ও সিনেমাটোগ্রাফি",
        descriptionEn:
          "On-set execution with master lighting grids, multi-camera synchronized rigs, gimbal stabilization, and pristine boom sound capture.",
        descriptionBn:
          "সিনেম্যাটিক লাইটিং সেটআপ, মাল্টি-ক্যামেরা শট, জিম্বল স্টেবিলাইজেশন এবং উচ্চমানের সাউন্ড রেকর্ডিং সহ শুটিং।",
        deliverablesEn: ["Raw 6K Cinema Footage", "Multi-Track Audio Stems", "On-Set DIT Backups"],
        deliverablesBn: ["র’ ৬কে সিনেমা ফুটেজ", "মাল্টি-ট্র্যাক অডিও রেকর্ড", "অন-সেট ডাটা ব্যাকআপ"],
      },
      {
        step: "03",
        titleEn: "Post-Production, Color & VFX",
        titleBn: "পোস্ট-প্রোডাকশন, কালার ও ভিএফএক্স",
        descriptionEn:
          "Rough-cut assembly, emotional pacing, color space transforms in ACES/DaVinci, custom motion titles, and spatial audio mastering.",
        descriptionBn:
          "ভিডিও এডিটিং, আবেগঘন পেসিং, ডাভিঞ্চি রিজলভ কালার গ্রেডিং, মোশন টাইটেল ও সাউন্ড মাস্টারিং।",
        deliverablesEn: ["Director's Master Cut", "Vertical/Horizontal Formats", "Final 4K ProRes Exports"],
        deliverablesBn: ["ডিরেক্টর্স কাট", "ভার্টিক্যাল ও হরাইজন্টাল ফরম্যাট", "৪কে মাস্টার এক্সপোর্ট"],
      },
    ],
  },
  {
    id: "marketing",
    titleEn: "End-to-End Marketing Strategy",
    titleBn: "পূর্ণাঙ্গ ডিজিটাল মার্কেটিং স্ট্র্যাটেজি",
    subtitleEn: "Data-Driven Omnichannel Market Penetration",
    subtitleBn: "ডেটা-নির্ভর পারফরম্যান্স মার্কেটিং ও ব্র্যান্ড স্কেলিং",
    iconName: "TrendingUp",
    descriptionEn:
      "Creative visuals must produce measurable commercial yield. We deploy full-funnel digital marketing pipelines that systematically acquire customers, lower acquisition costs (CAC), and maximize customer lifetime value (LTV).",
    descriptionBn:
      "আকর্ষণীয় ভিডিও তখনই সফল যখন তা কাঙ্ক্ষিত সেলস এনে দেয়। আমরা পরিকল্পিত ফুল-ফানল ডিজিটাল মার্কেটিং ক্যাম্পেইন পরিচালনা করি যা কাস্টমার অ্যাকুইজিশন খরচ কমিয়ে বহুগুণ সেলস নিশ্চিত করে।",
    featuresEn: [
      "Precision Performance Advertising (Meta Ads, Google Ads, TikTok Ads, YouTube)",
      "Algorithmic Social Media Management & Organic Growth Loops",
      "High-Converting Landing Pages & CRO (Conversion Rate Optimization)",
      "Influencer Campaign Matchmaking & Talent Coordination",
      "Search Engine Optimization (SEO) & Editorial Content Strategy",
      "Real-Time Attribution Tracking & Transparent ROI Dashboards",
    ],
    featuresBn: [
      "টার্গেটেড পারফরম্যান্স পেইড অ্যাডস (মেটা, গুগল, টিকটক, ইউটিউব)",
      "সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও অর্গানিক গ্রোথ স্ট্র্যাটেজি",
      "হাই-কনভার্টিং ল্যান্ডিং পেজ ও সিআরও (CRO)",
      "ইনফ্লুয়েন্সার মার্কেটিং ও ক্যাম্পেইন কো-অর্ডিনেশন",
      "সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO) ও কনটেন্ট মার্কেটিং",
      "রিয়েল-টাইম ডেটা অ্যানালিটিক্স ও সেলস ড্যাশবোর্ড",
    ],
    workflow: [
      {
        step: "01",
        titleEn: "Market Audit & Audience Blueprint",
        titleBn: "মার্কেট অডিট ও অডিয়েন্স রিসার্চ",
        descriptionEn:
          "Deep competitor forensic analysis, customer cohort mapping, messaging gap assessment, and unit economics validation.",
        descriptionBn:
          "প্রতিদ্বন্দ্বী ব্র্যান্ড অ্যানালাইসিস, অডিয়েন্স সেগমেন্টেশন, মেসেজিং পজিশনিং এবং বিজনেস গোল নির্ধারণ।",
        deliverablesEn: ["Competitor Matrix", "Channel Strategy Roadmap", "KPI Forecast Model"],
        deliverablesBn: ["কম্পিটিটর ম্যাট্রিক্স", "চ্যানেল স্ট্র্যাটেজি রোডম্যাপ", "কেপিআই ফোরকাস্ট মডেল"],
      },
      {
        step: "02",
        titleEn: "Campaign Orchestration & A/B Testing",
        titleBn: "ক্যাম্পেইন লঞ্চ ও এ/বি টেস্টিং",
        descriptionEn:
          "Deploying creative variations, testing hooks, optimizing audience cohorts, and running multivariate conversion tests.",
        descriptionBn:
          "একাধিক ভিডিও হুক ও ভিজ্যুয়াল টেস্ট, বাজেট অপ্টিমাইজেশন এবং টার্গেটেড অ্যাড রান করা।",
        deliverablesEn: ["Ad Account Architecture", "Creative Variation Battery", "Live Campaign Deployment"],
        deliverablesBn: ["অ্যাড একাউন্ট স্ট্রাকচার", "ক্রিয়েটিভ ভ্যারিয়েশন ব্যাটারি", "লাইভ ক্যাম্পেইন সেটআপ"],
      },
      {
        step: "03",
        titleEn: "Scale, Retargeting & Retention",
        titleBn: "স্কেলিং, রিটার্গেটিং ও সেলস বৃদ্ধি",
        descriptionEn:
          "Aggressively pouring capital into top-performing winning angles while setting up automated remarketing and retention flows.",
        descriptionBn:
          "সফল অ্যাডগুলোতে বাজেট বৃদ্ধি করে স্কেল করা এবং অটোমেটেড রিমার্কেটিংয়ের মাধ্যমে রিপিট সেলস নিশ্চিত করা।",
        deliverablesEn: ["Weekly ROI Reports", "Retargeting Funnels", "Growth Attribution Ledger"],
        deliverablesBn: ["সাপ্তাহিক ROI রিপোর্ট", "রিটার্গেটিং ফানেল", "গ্রোথ অ্যানালিটিক্স রিপোর্ট"],
      },
    ],
  },
  {
    id: "branding",
    titleEn: "Brand Identity & Creative Direction",
    titleBn: "ব্র্যান্ড আইডেন্টিটি ও ক্রিয়েটিভ ডিরেকশন",
    subtitleEn: "Distinctive Visual Architecture",
    subtitleBn: "অনন্য ব্র্যান্ড ব্যক্তিত্ব ও ভিজ্যুয়াল আর্কিটেকচার",
    iconName: "Sparkles",
    descriptionEn:
      "Your brand is not just a logo; it is the instinctive emotional reaction people feel when they hear your name. We define complete visual identities, typography guidelines, and voice guidelines that command authority.",
    descriptionBn:
      "ব্র্যান্ড কেবল একটি লোগো নয়; এটি হলো আপনার নামের সাথে ভোক্তার মনের আত্মিক সংযোগ। আমরা তৈরি করি স্বতন্ত্র ভিজ্যুয়াল সিস্টেম, টাইপোগ্রাফি এবং ব্র্যান্ড গাইডলাইন যা বাজারে একচ্ছত্র আধিপত্য বিস্তার করে।",
    featuresEn: [
      "Brand Philosophy, Mission, Voice & Tone Architecture",
      "Bespoke Logo Mark, Monogram & Iconography Suites",
      "Typography Systems & Color Harmony Specifications",
      "Packaging, Merchandise & Environmental Design Systems",
      "Comprehensive 60+ Page Brand Guideline Bible",
    ],
    featuresBn: [
      "ব্র্যান্ড দর্শন, মিশন ও ভয়েস আর্কিটেকচার",
      "কাস্টম লোগো মার্ক, মনোগ্রাম ও আইকন স্যুট",
      "টাইপোগ্রাফি সিস্টেম ও কালার হারমোনি স্পেসিফিকেশন",
      "প্যাকেজিং, মার্চেন্ডাইজ ও প্রিন্ট ডিজাইন",
      "৬০+ পৃষ্ঠার কম্প্রিহেন্সিভ ব্র্যান্ড গাইডলাইন বুক",
    ],
    workflow: [
      {
        step: "01",
        titleEn: "Archetype Discovery",
        titleBn: "ব্র্যান্ড আর্কিটাইপ ও দর্শন নির্ধারণ",
        descriptionEn: "Unearthing your foundational brand mythology, competitive differentiator, and emotional archetype.",
        descriptionBn: "ব্র্যান্ডের মূল শক্তি, প্রতিযোগীদের চেয়ে ভিন্নতা এবং মনস্তাত্ত্বিক পরিচয় নিশ্চিতকরণ।",
        deliverablesEn: ["Brand Essence Deck", "Competitor Visual Grid"],
        deliverablesBn: ["ব্র্যান্ড এসেন্স ডেক", "ভিজ্যুয়াল অডিট গ্রিড"],
      },
      {
        step: "02",
        titleEn: "Identity Design & System Crafting",
        titleBn: "আইডেন্টিটি ডিজাইন ও সিস্টেম তৈরি",
        descriptionEn: "Prototyping typography, chromatic palettes, logos, packaging systems, and digital design tokens.",
        descriptionBn: "টাইপোগ্রাফি, কালার প্যালেট, লোগো এবং ডিজিটাল ডিজাইন টোকেন তৈরি।",
        deliverablesEn: ["Vector Asset Suite", "Brand Guidelines Book"],
        deliverablesBn: ["ভেক্টর অ্যাসেট স্যুট", "ব্র্যান্ড গাইডলাইন বুক"],
      },
      {
        step: "03",
        titleEn: "Multi-Channel Rollout & Asset Deployment",
        titleBn: "মাল্টি-চ্যানেল লঞ্চ ও অ্যাসেট হ্যান্ডওভার",
        descriptionEn: "Applying the brand across digital collateral, social templates, merchandise, and motion graphics packages.",
        descriptionBn: "সোশ্যাল টেমপ্লেট, ওয়েবসাইট অ্যাসেট ও মোশন প্যাকেজে ব্র্যান্ড বাস্তবায়ন।",
        deliverablesEn: ["Complete Production Asset Kit", "Social Brand Kit"],
        deliverablesBn: ["প্রোডাকশন অ্যাসেট কিট", "সোশ্যাল ব্র্যান্ড কিট"],
      },
    ],
  },
  {
    id: "social",
    titleEn: "Social Media Management & Growth",
    titleBn: "সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও গ্রোথ",
    subtitleEn: "Hyper-Engaged Viral Communities",
    subtitleBn: "ভাইরাল কমিউনিটি ও সক্রিয় দর্শক তৈরি",
    iconName: "Share2",
    descriptionEn:
      "Turn casual scrollers into rabid brand evangelists. We produce high-velocity short-form reels, thought-leadership carousels, and engaging copy that beats modern algorithms daily.",
    descriptionBn:
      "সোশ্যাল মিডিয়ার স্ক্রোলিং দর্শককে রূপান্তর করুন বিশ্বস্ত কাস্টমারে। আমরা তৈরি করি নিয়মিত শর্ট-ফর্ম রিলস, ফেসবুক-ইনস্টাগ্রাম কনটেন্ট এবং অ্যালগরিদম জয় করার উপযোগী আকর্ষণীয় পোস্ট।",
    featuresEn: [
      "High-Frequency Reels, TikToks & YouTube Shorts Production",
      "Monthly Editorial Content Calendars & Strategic Thematic Waves",
      "Community Management & Rapid Engagement Responses",
      "Trend Jacking & Fast Turnaround Cultural Meme Production",
      "Detailed Analytics & Audience Demographic Growth Tracking",
    ],
    featuresBn: [
      "উচ্চমানের ইনস্টাগ্রাম রিলস, টিকটক ও শর্টস ভিডিও",
      "মাসিক এডিটোরিয়াল কনটেন্ট ক্যালেন্ডার ও প্ল্যানিং",
      "অ্যাক্টিভ কমিউনিটি ম্যানেজমেন্ট ও কমেন্ট রেসপন্স",
      "ট্রেন্ডিং টপিক ও কালচারাল কনটেন্ট দ্রুত তৈরি",
      "দর্শক এনগেজমেন্ট ও অডিয়েন্স গ্রোথ অ্যানালিটিক্স",
    ],
    workflow: [
      {
        step: "01",
        titleEn: "Content Calendar & Script Bank",
        titleBn: "কনটেন্ট ক্যালেন্ডার ও স্ক্রিপ্ট ব্যাংক",
        descriptionEn: "Planning 30-day narrative arcs, hooks, educational pillars, and entertaining short-form scripts.",
        descriptionBn: "৩০ দিনের কনটেন্ট প্ল্যান, হুক রিসার্চ এবং শর্ট-ফর্ম স্ক্রিপ্ট তৈরি।",
        deliverablesEn: ["Monthly Content Sheet", "Script Repository"],
        deliverablesBn: ["মাসিক কনটেন্ট শিট", "স্ক্রিপ্ট রিপোজিটরি"],
      },
      {
        step: "02",
        titleEn: "Batch Production & Polish",
        titleBn: "ব্যাচ ভিডিও শুটিং ও এডিটিং",
        descriptionEn: "Filming multiple weeks of content in dedicated high-energy studio shoots with fast turnaround editing.",
        descriptionBn: "একসাথে একাধিক কনটেন্ট শুটিং এবং দ্রুত এডিটিং ও কালারিং সম্পন্ন করা।",
        deliverablesEn: ["15-30 Finished Video Reels", "Carousel Graphics"],
        deliverablesBn: ["১৫-৩০টি রেডি ভিডিও রিলস", "ক্যারোসেল গ্রাফিক্স"],
      },
      {
        step: "03",
        titleEn: "Publishing & Algorithmic Amplification",
        titleBn: "পাবলিশিং ও অ্যালগরিদম অপ্টিমাইজেশন",
        descriptionEn: "Optimal scheduling, thumbnail A/B tests, engagement triggers, and boosted distribution.",
        descriptionBn: "সঠিক সময়ে পোস্ট শিডিউল, থাম্বনেইল টেস্টিং এবং বুস্টিং স্ট্র্যাটেজি।",
        deliverablesEn: ["Distribution Tracker", "Monthly Performance Audit"],
        deliverablesBn: ["ডিস্ট্রিবিউশন ট্র্যাকার", "মাসিক পারফরম্যান্স অডিট"],
      },
    ],
  },
];
