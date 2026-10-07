export interface CaseStudy {
  id: string;
  slug: string;
  titleEn: string;
  titleBn: string;
  clientEn: string;
  clientBn: string;
  industryEn: string;
  industryBn: string;
  year: string;
  heroImage: string;
  results: {
    stat: string;
    labelEn: string;
    labelBn: string;
  }[];
  challengeEn: string;
  challengeBn: string;
  strategyEn: string;
  strategyBn: string;
  executionEn: string;
  executionBn: string;
  metricsSummaryEn: string;
  metricsSummaryBn: string;
  clientQuoteEn: string;
  clientQuoteBn: string;
  clientPersonEn: string;
  clientPersonBn: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "cs-aarong-craft",
    slug: "aarong-artisan-heritage",
    titleEn: "Reinventing National Heritage: Aarong Luxe Rebrand & Digital Surge",
    titleBn: "জাতীয় ঐতিহ্যের নবজাগরণ: আড়ং লাক্সারি ক্যাম্পেইন ও রেকর্ড সেলস",
    clientEn: "Aarong Artisan Luxe",
    clientBn: "আড়ং কারুশিল্প লাক্সারি",
    industryEn: "Luxury Fashion & Heritage",
    industryBn: "লাক্সারি ফ্যাশন ও ঐতিহ্য",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    results: [
      { stat: "+380%", labelEn: "E-Commerce Revenue Lift", labelBn: "অনলাইন সেলস বৃদ্ধি" },
      { stat: "4.8M+", labelEn: "Total Video Impressions", labelBn: "ভিডিও ইম্প্রেশন" },
      { stat: "5.4x", labelEn: "Blended Return on Ad Spend", labelBn: "রিটার্ন অন অ্যাড স্পেন্ড (ROAS)" },
      { stat: "42%", labelEn: "Gen-Z Brand Sentiment Gain", labelBn: "তরুণ প্রজন্মের ব্র্যান্ড পজিটিভিটি" },
    ],
    challengeEn:
      "Aarong wanted to reposition its heritage craft line for modern diaspora and affluent urban youth without losing reverence for artisanal roots. Traditional advertising was registering diminishing engagement with digitally-native 18-35 shoppers.",
    challengeBn:
      "আড়ং তাদের ঐতিহ্যবাহী হস্তশিল্পকে আধুনিক প্রজন্মের কাছে নতুনভাবে তুলে ধরতে চেয়েছিল। সাবেক বিজ্ঞাপন কাঠামো ১৮-৩৫ বছর বয়সী ডিজিটাল তরুণদের ততটা আকৃষ্ট করতে পারছিল না।",
    strategyEn:
      "Rupkotha conceptualized 'The Living Loom'—a cinematic 3-act narrative shot in anamorphic widescreen, paired with a high-velocity 9:16 vertical TikTok/Reel blitz. Rather than selling clothes, we told the emotional journey of four generations of hand-loom weavers.",
    strategyBn:
      "রূপকথা ডিজাইন করে ‘জীবন্ত তাঁত’ ক্যাম্পেইন—একটি সিনেমাটিক ৩-পর্বের গল্প যা অ্যানামরফিক লেন্সে ধারণ করা হয়। একই সাথে টিকটক ও ইনস্টাগ্রামে ৯:১৬ রিলস ক্যাম্পেইনে চার প্রজন্মের তাঁতিদের আবেগঘন জীবনের গল্প তুলে ধরা হয়।",
    executionEn:
      "Deployed a 75-second national TV spot, complemented by 12 bite-sized performance video ads targeted to high-net-worth apparel shoppers with deep Meta & Google retargeting funnels.",
    executionBn:
      "একটি ৭৫ সেকেন্ডের সিনেমাটিক কমার্শিয়াল এবং ১২টি টার্গেটেড সোশ্যাল মিডিয়া ভিডিও দিয়ে মেটা ও গুগল ফানেলে নিখুঁত ক্যাম্পেইন পরিচালনা করা হয়।",
    metricsSummaryEn:
      "Within 30 days of launch, festival stock was 100% depleted, breaking all previous single-campaign quarterly sales records in the brand's history.",
    metricsSummaryBn:
      "ক্যাম্পেইন চালুর মাত্র ৩০ দিনের মধ্যেই নির্ধারিত ফেস্টিভ্যাল স্টক সম্পূর্ণ শেষ হয়ে যায় এবং অতীতের সমস্ত ত্রৈমাসিক বিক্রয়ের রেকর্ড ছাড়িয়ে যায়।",
    clientQuoteEn:
      "“Meherun and the Rupkotha team didn’t just film our garments—they captured our soul. Their dual mastery of poetic cinematography and sharp paid-ad data science is unmatched in this market.”",
    clientQuoteBn:
      "“মেহেরুন এবং রূপকথা টিম কেবল আমাদের পোশাকের শুটিং করেনি—তারা আমাদের আত্মার সাথে সংযোগ ঘটিয়েছে। শৈল্পিক সিনেমাটোগ্রাফি ও নিখুঁত পেইড অ্যাড স্ট্র্যাটেজির এমন যুগলবন্দী সত্যি অসাধারণ।”",
    clientPersonEn: "Tariqul Islam, VP Brand Marketing",
    clientPersonBn: "তারিকুল ইসলাম, ভিপি ব্র্যান্ড মার্কেটিং",
  },
  {
    id: "cs-payflow-fintech",
    slug: "payflow-instant-dreams",
    titleEn: "0 to 220,000 App Installs: Scaling PayFlow Fintech via Viral Humor",
    titleBn: "শূন্য থেকে ২,২০,০০০ অ্যাপ ইনস্টল: পে-ফ্লো ফিনটেক স্কেলিং",
    clientEn: "PayFlow Digital Banking",
    clientBn: "পে-ফ্লো ডিজিটাল ব্যাংকিং",
    industryEn: "Fintech & Mobile Banking",
    industryBn: "ফিনটেক ও মোবাইল ব্যাংকিং",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    results: [
      { stat: "220k+", labelEn: "Verified New App Downloads", labelBn: "নতুন অ্যাপ ডাউনলোড" },
      { stat: "৳32", labelEn: "Cost Per Install (vs ৳85 Industry Avg)", labelBn: "ইনস্টল প্রতি খরচ (গড়ের চেয়ে ৬০% কম)" },
      { stat: "6.5M+", labelEn: "Organic TikTok & Reels Plays", labelBn: "অর্গানিক ভিডিও ভিউ" },
      { stat: "78%", labelEn: "Day-30 User Retention Rate", labelBn: "৩০ দিনের সক্রিয় ব্যবহারকারী" },
    ],
    challengeEn:
      "With fierce incumbent banks dominating the digital wallet landscape, PayFlow needed to shatter customer indifference and drive aggressive app downloads among young freelancers and university students on a disciplined budget.",
    challengeBn:
      "শক্তিশালী পুরোনো ব্যাংকগুলোর ভিড়ে পে-ফ্লো-কে তরুণ ফ্রিল্যান্সার ও বিশ্ববিদ্যালয়ের শিক্ষার্থীদের মাঝে দ্রুত অ্যাপ ডাউনলোড করাতে হতো অত্যন্ত সীমিত বাজেটে।",
    strategyEn:
      "Rupkotha designed an irreverent 6-episode sketch comedy web series named 'Urban Hassles', casting popular relatable local creators dealing with petty everyday transaction nightmares that vanish in seconds with PayFlow.",
    strategyBn:
      "রূপকথা তৈরি করে ৬ পর্বের মজার স্কেচ কমেডি সিরিজ ‘নগর সংকট’। সাধারণ মানুষের দৈনন্দিন পেমেন্ট ঝক্কি ও পে-ফ্লো দিয়ে চোখের পলকে তার সমাধানের দৃশ্যগুলো সামাজিক যোগাযোগ মাধ্যমে ব্যাপক আলোড়ন তোলে।",
    executionEn:
      "Dynamic in-feed short-form videos combined with app install deep-link optimizations, custom app store screenshot revamps, and micro-influencer stitch reactions.",
    executionBn:
      "ইন-ফিড শর্ট ভিডিও, ইনস্টল ডিপ-লিঙ্ক অপ্টিমাইজেশন এবং মাইক্রো-ইনফ্লুয়েন্সার রিঅ্যাকশন ক্যাম্পেইনের সমন্বয়ে সর্বাত্মক প্রচার চালানো হয়।",
    metricsSummaryEn:
      "PayFlow surged to the #2 Trending Finance App in Google Play Store within 3 weeks, lowering user acquisition cost by 62% against benchmarks.",
    metricsSummaryBn:
      "মাত্র ৩ সপ্তাহের মধ্যে পে-ফ্লো গুগল প্লে স্টোরে শীর্ষ ২ নম্বরে জায়গা করে নেয় এবং ইউজার অ্যাকুইজিশন খরচ ৬২% পর্যন্ত কমিয়ে আনে।",
    clientQuoteEn:
      "“Rupkotha understands the digital pulse like no one else. Their scripts are legitimately funny, and their performance targeting executed with sniper precision.”",
    clientQuoteBn:
      "“রূপকথা ডিজিটাল ট্রেন্ড ও মানুষের রুচি সবচেয়ে ভালো বোঝে। তাদের স্ক্রিপ্টগুলো যেমন হাসায়, তেমনই তাদের অ্যাড টার্গেটিং লক্ষ্যভেদ করে।”",
    clientPersonEn: "Nafisa Rahman, Head of Growth",
    clientPersonBn: "নাফিসা রহমান, হেড অব গ্রোথ",
  },
  {
    id: "cs-apex-ev",
    slug: "apex-silent-velocity",
    titleEn: "Pioneering Green Mobility: Apex EV National Product Launch",
    titleBn: "সবুজ বিপ্লবের সূচনা: এপেক্স ইভি মোটরস জাতীয় লঞ্চ ক্যাম্পেইন",
    clientEn: "Apex EV Motors",
    clientBn: "এপেক্স ইভি মোটরস",
    industryEn: "Automotive & Clean Energy",
    industryBn: "অটোমোবাইল ও ক্লিন এনার্জি",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    results: [
      { stat: "$1.4M+", labelEn: "Pre-Orders Secured in 14 Days", labelBn: "১৪ দিনে প্রি-অর্ডার বুকিং" },
      { stat: "2.8M+", labelEn: "Engaged Video Views", labelBn: "ভিডিও ভিউ" },
      { stat: "14,000+", labelEn: "Test-Drive Lead Inquiries", labelBn: "টেস্ট-ড্রাইভ রিকোয়েস্ট" },
      { stat: "82%", labelEn: "Recall Rate Among Target HNIs", labelBn: "টার্গেট বায়ারদের স্মরণযোগ্যতা" },
    ],
    challengeEn:
      "Electric commercial and passenger vehicles faced deep skepticism regarding battery range, charging reliability, and luxury performance prestige in the local South Asian market.",
    challengeBn:
      "স্থানীয় বাজারে বৈদ্যুতিক গাড়ির ব্যাটারি ব্যাকআপ, চার্জিং সুবিধা এবং প্রিমিয়াম পারফরম্যান্স নিয়ে ক্রেতাদের মধ্যে নানাবিধ দ্বিধা ছিল।",
    strategyEn:
      "Rupkotha crafted a high-concept cinematic journey titled 'Silent Velocity'. Filmed across misty hill climbs in Sylhet and neon metro-expressways at midnight, the film proved continuous real-world range while presenting the vehicle as an aerodynamic sculpture.",
    strategyBn:
      "রূপকথা তৈরি করে ‘নীরব গতি’ শীর্ষক সিনেমাটিক ফিল্ম। সিলেটের পাহাড়ি বাঁক থেকে শুরু করে মধ্যরাতের এক্সপ্রেসওয়েতে গাড়িটির পাওয়ার ও রেঞ্জের বাস্তব পরীক্ষা ক্যামেরাবন্দী করা হয়।",
    executionEn:
      "Simultaneous release across YouTube 4K Premiere, Facebook 60fps, high-profile LED billboards in Gulshan & Banani, and hyper-targeted LinkedIn executive ad funnels.",
    executionBn:
      "ইউটিউব ৪কে প্রিমিয়ার, ফেসবুক ক্যাম্পেইন, গুলশান-বনানীর ডিজিটাল বিলবোর্ড এবং লিঙ্কডইন এক্সিকিউটিভ অ্যাড ফানেলে একসাথে ক্যাম্পেইন লাইভ করা হয়।",
    metricsSummaryEn:
      "All initial launch allocation allotments were reserved within two weeks of release, establishing Apex EV as the runaway market pioneer.",
    metricsSummaryBn:
      "মাত্র দুই সপ্তাহের মধ্যে প্রাথমিক ব্যাচের সব কয়টি গাড়ি প্রি-বুকড হয়ে যায় এবং ব্র্যান্ডটি বাজারে শীর্ষস্থান দখল করে।",
    clientQuoteEn:
      "“The cinematic quality of Rupkotha was indistinguishable from an international Super Bowl commercial. Our brand perception shot up overnight.”",
    clientQuoteBn:
      "“রূপকথার নির্মাণ আন্তর্জাতিক সুপার বোল কমার্শিয়ালের চেয়ে কোনো অংশে কম ছিল না। রাতারাতি আমাদের ব্র্যান্ডের মর্যাদা অনন্য উচ্চতায় পৌঁছে যায়।”",
    clientPersonEn: "Farhan Ahmed, Managing Director",
    clientPersonBn: "ফারহান আহমেদ, ব্যবস্থাপনা পরিচালক",
  },
];
