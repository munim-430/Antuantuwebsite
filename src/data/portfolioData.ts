export interface PortfolioItem {
  id: string;
  titleEn: string;
  titleBn: string;
  clientEn: string;
  clientBn: string;
  category: "tvc" | "social" | "brand" | "corporate";
  categoryLabelEn: string;
  categoryLabelBn: string;
  duration: string;
  year: string;
  thumbnail: string;
  videoUrl: string; // Direct mp4 or cinematic video stream
  views: string;
  roiStat: string;
  descriptionEn: string;
  descriptionBn: string;
  directorNotesEn: string;
  directorNotesBn: string;
  aspectRatio: "16:9" | "9:16";
  featured: boolean;
}

export const portfolioCategories = [
  { id: "all", labelEn: "All Productions", labelBn: "সকল প্রজেক্ট" },
  { id: "tvc", labelEn: "TVCs & Commercials", labelBn: "টিভি ও কমার্শিয়াল" },
  { id: "social", labelEn: "Social Media Videos", labelBn: "সোশ্যাল মিডিয়া ভিডিও" },
  { id: "brand", labelEn: "Brand Campaigns", labelBn: "ব্র্যান্ড ক্যাম্পেইন" },
  { id: "corporate", labelEn: "Corporate Docs", labelBn: "কর্পোরেট ডকুমেন্টারি" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "project-lumina-tvc",
    titleEn: "Echoes of Heritage — National TVC",
    titleBn: "ঐতিহ্যের প্রতিধ্বনি — জাতীয় টিভি কমার্শিয়াল",
    clientEn: "Aarong Artisan Luxe",
    clientBn: "আড়ং কারুশিল্প লাক্সারি",
    category: "tvc",
    categoryLabelEn: "TVCs & Commercials",
    categoryLabelBn: "টিভি ও কমার্শিয়াল",
    duration: "01:15",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4",
    views: "4.8M+",
    roiStat: "380% Sales Spike",
    descriptionEn:
      "A visually arresting national commercial capturing 1,000 years of indigenous weaving craftsmanship illuminated through golden-hour anamorphic lenses.",
    descriptionBn:
      "বাংলার ঐতিহ্যবাহী তাঁতশিল্পের ১০০০ বছরের ইতিহাস তুলে ধরে নির্মিত এক চমৎকার টিভি কমার্শিয়াল, যা অ্যানামরফিক লেন্সের গোল্ডেন-আওয়ার আলোতে ধারণ করা।",
    directorNotesEn:
      "Captured on ARRI Alexa Mini LF with vintage Kowa Anamorphic glass. We spent 4 days on location in rural Tangail to capture authentic weaver traditions.",
    directorNotesBn:
      "শ্যুট করা হয়েছে এআরআরআই অ্যালেক্সা মিনি এলএফ এবং ভিন্টেজ অ্যানামরফিক লেন্সে। খাঁটি ঐতিহ্য তুলে ধরতে চার দিনব্যাপী টাঙ্গাইলের তাঁতিদের সাথে কাজ করা হয়।",
    aspectRatio: "16:9",
    featured: true,
  },
  {
    id: "project-hyperion-beverage",
    titleEn: "Ignite The Night — Energy Drink Campaign",
    titleBn: "জ্বলে উঠো রাতে — এনার্জি ড্রিংক ক্যাম্পেইন",
    clientEn: "Hyperion Pulse Global",
    clientBn: "হাইপারিয়ন পালস গ্লোবাল",
    category: "tvc",
    categoryLabelEn: "TVCs & Commercials",
    categoryLabelBn: "টিভি ও কমার্শিয়াল",
    duration: "00:45",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-sparkler-at-night-42861-large.mp4",
    views: "3.2M+",
    roiStat: "5.2x ROAS",
    descriptionEn:
      "High-octane neon cinematography combining parkour stunt choreographies, liquid splash high-speed Phantom 4K captures, and pulsating bass music design.",
    descriptionBn:
      "পারকার স্টান্ট, হাই-স্পিড ফ্যান্টম ৪কে স্প্ল্যাশ শট এবং তীব্র অ্যাকশনে সাজানো এক অবিশ্বাস্য আধুনিক কমার্শিয়াল।",
    directorNotesEn:
      "Choreographed at 1,000 fps to highlight macro carbonation bubbles colliding against vibrant ultraviolet lighting.",
    directorNotesBn:
      "১,০০০ এফপিএস হাই-স্পিড ক্যামেরায় ম্যাক্রো বাবলস ও আল্ট্রাভায়োলেট আলোর দারুণ সংমিশ্রণে দৃশ্য ধারণ করা হয়।",
    aspectRatio: "16:9",
    featured: true,
  },
  {
    id: "project-fintech-viral",
    titleEn: "Instant Dreams — Seamless Mobile Banking",
    titleBn: "মুহূর্তেই স্বপ্ন পূরণ — ডিজিটাল ব্যাংকিং",
    clientEn: "PayFlow Digital",
    clientBn: "পে-ফ্লো ডিজিটাল ফিনটেক",
    category: "social",
    categoryLabelEn: "Social Media Videos",
    categoryLabelBn: "সোশ্যাল মিডিয়া ভিডিও",
    duration: "00:30",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-the-phone-while-walking-down-the-street-41584-large.mp4",
    views: "6.5M+",
    roiStat: "220k App Installs",
    descriptionEn:
      "A fast-paced comedy reel series tracking urban struggles resolved instantly through effortless 1-tap micro-transactions. Generated massive viral resonance.",
    descriptionBn:
      "একটি হাস্যরসাত্মক ও বাস্তবমুখী ভিডিও সিরিজ যা ডিজিটাল লেনদেনের সহজ সমাধান তুলে ধরে টিকটক ও ফেসবুকে ব্যাপক ভাইরাল হয়।",
    directorNotesEn:
      "Optimized for 9:16 vertical smartphone engagement with high-retention 3-second visual hooks and playful sound triggers.",
    directorNotesBn:
      "স্মার্টফোন দর্শকদের জন্য ৯:১৬ ফরম্যাটে প্রথম ৩ সেকেন্ডের আকর্ষণীয় হুক ও সাউন্ড ট্রিক ব্যবহার করে তৈরি।",
    aspectRatio: "9:16",
    featured: true,
  },
  {
    id: "project-ev-revolution",
    titleEn: "Silent Power — Electric Mobility Launch",
    titleBn: "নীরব বিপ্লব — বৈদ্যুতিক বাহন লঞ্চ ফিল্ম",
    clientEn: "Apex EV Motors",
    clientBn: "এপেক্স ইভি মোটরস",
    category: "brand",
    categoryLabelEn: "Brand Campaigns",
    categoryLabelBn: "ব্র্যান্ড ক্যাম্পেইন",
    duration: "02:10",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tunnel-illuminated-with-neon-lights-42999-large.mp4",
    views: "2.8M+",
    roiStat: "$1.4M Pre-Orders",
    descriptionEn:
      "An evocative cinematic anthem celebrating the transition to silent, green velocity through nighttime drone fly-throughs in neon-soaked urban highways.",
    descriptionBn:
      "রাতের আধুনিক হাইওয়েতে ড্রোন সিনেমাটোগ্রাফি ও নিয়ন আলোর খেলায় পরিবেশবান্ধব ইলেকট্রিক যানের রূপকথা।",
    directorNotesEn:
      "Drone FPV pilots navigated tight industrial spaces while our Russian Arm chase vehicle tracked the vehicle at 120 km/h.",
    directorNotesBn:
      "১২০ কিমি গতিতে ধাবমান গাড়িটিকে চেজ করতে ড্রোন এফপিভি ও রাশিয়ান আর্ম ব্যবহার করা হয়।",
    aspectRatio: "16:9",
    featured: true,
  },
  {
    id: "project-artisan-roasters",
    titleEn: "The Perfect Roast — Origin Story",
    titleBn: "নিখুঁত রোস্টিং — কফির জন্মকথা",
    clientEn: "Artisan Bean Co.",
    clientBn: "আর্টিসান কফি কোং",
    category: "corporate",
    categoryLabelEn: "Corporate Docs",
    categoryLabelBn: "কর্পোরেট ডকুমেন্টারি",
    duration: "03:40",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-coffee-beans-falling-in-slow-motion-42867-large.mp4",
    views: "1.9M+",
    roiStat: "+64% Brand Equity",
    descriptionEn:
      "An intimate micro-documentary following hill-tract organic coffee farmers and the sensory science of temperature roast curves.",
    descriptionBn:
      "পাহাড়ের কফিচাষীদের জীবন ও বৈজ্ঞানিক রোস্টিং প্রসেস নিয়ে তৈরি এক হৃদয়ছোঁয়া কর্পোরেট ভিজ্যুয়াল ডকুমেন্টারি।",
    directorNotesEn:
      "Captured using natural daylight, warm organic tungsten lights, and custom macro lens probe attachments inside roasting cylinders.",
    directorNotesBn:
      "রোস্টিং সিলিন্ডারের ভেতরে প্রোব লেন্স ব্যবহার করে কফি বিন ফোটার বিরল দৃশ্য ধারণ করা হয়েছিল।",
    aspectRatio: "16:9",
    featured: false,
  },
  {
    id: "project-fashion-bloom",
    titleEn: "Velvet Horizons — Winter Couture",
    titleBn: "ভেলভেট হরাইজন — শীতকালীন ফ্যাশন ফিল্ম",
    clientEn: "Nirvana Couture Dhaka",
    clientBn: "নির্বাণ কোতুর ঢাকা",
    category: "brand",
    categoryLabelEn: "Brand Campaigns",
    categoryLabelBn: "ব্র্যান্ড ক্যাম্পেইন",
    duration: "01:05",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-a-fur-coat-looking-at-the-camera-42857-large.mp4",
    views: "3.7M+",
    roiStat: "Sold Out in 48h",
    descriptionEn:
      "A poetic fashion manifesto playing with shadows, silk textures, architectural brutalism, and hypnotic synthesizer soundscapes.",
    descriptionBn:
      "শৈল্পিক আলো-আঁধারি, সিল্কের টেক্সচার এবং আর্কিটেকচারাল ব্যাকড্রপে নির্মিত আকর্ষণীয় ফ্যাশন ফিল্ম।",
    directorNotesEn:
      "Shot on Kodak 16mm film emulation with deep golden rim lighting to give every fabric weave a tactile luxury dimension.",
    directorNotesBn:
      "কোডাক ১৬এমএম ফিল্ম ইমুলেশন ও গোল্ডেন রিম লাইটিংয়ে পোশাকের প্রতিটি সুতোর সৌন্দর্য ফুটিয়ে তোলা হয়েছে।",
    aspectRatio: "16:9",
    featured: false,
  },
  {
    id: "project-saas-explainer",
    titleEn: "Code the Future — Tech Enterprise Platform",
    titleBn: "কোড দ্য ফিউচার — টেক প্ল্যাটফর্ম লঞ্চ",
    clientEn: "CloudMatrix Cloud Solutions",
    clientBn: "ক্লাউডম্যাট্রিক্স সফটওয়্যার",
    category: "social",
    categoryLabelEn: "Social Media Videos",
    categoryLabelBn: "সোশ্যাল মিডিয়া ভিডিও",
    duration: "00:55",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-with-glowing-lines-42875-large.mp4",
    views: "1.4M+",
    roiStat: "410 Demo Signups",
    descriptionEn:
      "Sleek futuristic 3D product visualizations explaining complex distributed enterprise architecture in a breezy 55-second narrative.",
    descriptionBn:
      "জটিল সফটওয়্যার আর্কিটেকচারকে সহজ ও চমকপ্রদ থ্রিডি মোশন গ্রাফিক্সের মাধ্যমে মাত্র ৫৫ সেকেন্ডে ফুটিয়ে তোলা।",
    directorNotesEn:
      "Octane render pipelines combined with kinetic typography and holographic user interface mockups.",
    directorNotesBn:
      "অক্টেন রেন্ডারিং ও কাইনেটিক টাইপোগ্রাফির মাধ্যমে হাই-টেক অভিজ্ঞতা সৃষ্টি করা হয়েছে।",
    aspectRatio: "16:9",
    featured: false,
  },
  {
    id: "project-sustainable-energy",
    titleEn: "Generations Ahead — ESG Annual Showcase",
    titleBn: "ভবিষ্যতের পথচলা — সাসটেইনেবিলিটি ফিল্ম",
    clientEn: "Bengal Green Renewable Energy",
    clientBn: "বেঙ্গল গ্রিন রিনিউয়েবল এনার্জি",
    category: "corporate",
    categoryLabelEn: "Corporate Docs",
    categoryLabelBn: "কর্পোরেট ডকুমেন্টারি",
    duration: "04:15",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-wind-turbines-in-a-green-field-42864-large.mp4",
    views: "980k+",
    roiStat: "$8M Clean Fund Closed",
    descriptionEn:
      "A cinematic CSR & ESG narrative chronicling solar grid deployments in riverine communities across coastal Bangladesh.",
    descriptionBn:
      "উপকূলীয় চরাঞ্চলে সৌরবিদ্যুৎ ছড়িয়ে দেওয়ার গল্প নিয়ে নির্মিত আবেগঘন ও তথ্যবহুল সাসটেইনেবিলিটি ফিল্ম।",
    directorNotesEn:
      "Filmed across 6 districts over 10 days using ultra-light mirrorless rigs mounted on traditional wooden boats.",
    directorNotesBn:
      "১০ দিনে ৬টি উপকূলীয় জেলায় স্থানীয় নৌকায় চড়ে অত্যন্ত যত্নের সাথে দৃশ্যগুলো ধারণ করা হয়।",
    aspectRatio: "16:9",
    featured: false,
  },
];
