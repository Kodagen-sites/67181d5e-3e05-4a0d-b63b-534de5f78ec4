// ============================================================
// site-config.ts — single source of truth for all copy + brand.
// BlackFrame Studios — film production / video studio, London.
// Edit this file to re-theme or update copy without touching
// component code.
// ============================================================

export const siteConfig = {
  company: {
    name: "BlackFrame Studios",
    tagline: "A London film & video production studio",
    description:
      "BlackFrame Studios is a London-based film and video production company crafting commercials, documentaries, feature films and branded content — from first treatment to final grade.",
    email: "hello@blackframestudios.com",
    phone: "+44 20 7946 0810",
    location: "Hackney Wick · London, UK",
  },

  brand: {
    primary: "#1A1A24",
    accent: "#E2E97E",
    bg: "#FCFBF4",
  },

  typography: {
    display: "Instrument Serif",
    body: "Work Sans",
    mono: "JetBrains Mono",
  },

  seo: {
    siteUrl: "https://blackframestudios.com",
    locale: "en_GB",
    htmlLang: "en-GB",
    defaultTitle: "BlackFrame Studios — Film & Video Production, London",
    defaultDescription:
      "London film and video production studio. Commercials, documentaries, feature films and branded content — directed, shot and finished in-house.",
    defaultOgImage:
      "https://kodagen-site-assets.s3.eu-west-1.amazonaws.com/site-assets/67181d5e-3e05-4a0d-b63b-534de5f78ec4/images/og-image.png",
    twitterHandle: "@blackframe",
    noindexPaths: ["/account", "/admin", "/auth", "/api"],
    structuredData: {
      businessType: "ProductionCompany",
      address: {
        streetAddress: "Unit 7, Queen's Yard, White Post Lane",
        addressLocality: "London",
        addressRegion: "England",
        postalCode: "E9 5EN",
        addressCountry: "GB",
      },
      priceRange: "£££",
    },
  },

  socials: {
    instagram: "https://instagram.com/blackframestudios",
    youtube: "https://youtube.com/@blackframestudios",
    linkedin: "https://linkedin.com/company/blackframestudios",
    x: "https://x.com/blackframe",
  },

  // Hero (kept for template compatibility; the homepage scrub hero is driven
  // by `heroChapters` below via HeroScrollText).
  hero: {
    h1: [
      { text: "We make", accent: false },
      { text: "film that lingers", accent: true },
    ],
  },

  // Scroll-scrub hero chapters — ≥3, spread across 0 → ~0.7 so the editorial
  // type changes as the cinematic frames scrub. Fed to HeroScrollText.
  heroChapters: [
    {
      at: 0,
      eyebrow: "BlackFrame Studios — London",
      headlineLines: ["We make", "film that lingers"],
      subline:
        "A full-service film and video studio. Commercials, documentaries, features and branded content — crafted end to end.",
      cta: { label: "Start a project", href: "/contact" },
    },
    {
      at: 0.36,
      eyebrow: "Commercials · Documentaries · Features",
      headlineLines: ["Story first.", "Craft always."],
      subline:
        "Directors, cinematographers and editors under one roof — from first treatment to final grade.",
    },
    {
      at: 0.7,
      eyebrow: "Branded Content",
      headlineLines: ["Your brand,", "in motion."],
      subline: "Films audiences actually want to watch — and remember.",
      cta: { label: "See the work", href: "/work" },
    },
  ],

  tagline: "Story first. Craft always.",

  servicesHeading: "What we make",

  services: [
    {
      name: "Commercials",
      slug: "commercials",
      description:
        "High-craft commercials and brand films for broadcast, cinema and social — concepted, directed and delivered in-house.",
      highlights: [
        "Concept & treatment development",
        "Director and DoP packages",
        "Broadcast, cinema & social deliverables",
        "Colour grade and online finishing",
      ],
    },
    {
      name: "Documentaries",
      slug: "documentaries",
      description:
        "Long- and short-form documentary that earns trust — patient, character-led storytelling with cinematic finish.",
      highlights: [
        "Research & access development",
        "Vérité and interview direction",
        "Archive sourcing & clearance",
        "Festival and broadcast delivery",
      ],
    },
    {
      name: "Feature Films",
      slug: "feature-films",
      description:
        "Narrative features and shorts — development, production and post for festival, theatrical and streaming release.",
      highlights: [
        "Development & financing support",
        "Full production management",
        "Post, sound design & score",
        "Festival strategy & delivery",
      ],
    },
    {
      name: "Branded Content",
      slug: "branded-content",
      description:
        "Our signature: brand-funded films with the soul of a short. Story-led content that travels far beyond the brief.",
      highlights: [
        "Brand storytelling strategy",
        "Series & campaign formats",
        "Social-native edits & cutdowns",
        "Performance-minded distribution",
      ],
    },
  ],

  rooms: [],
  locations: [],
  gallery: [],

  whyUs: {
    heading: "Why BlackFrame",
    items: [
      {
        title: "One roof, whole pipeline",
        description:
          "Development, production and post live in the same building. Nothing gets lost in the handoff.",
      },
      {
        title: "Directors, not vendors",
        description:
          "Every project is led by a director with a point of view — we make films, not deliverables.",
      },
      {
        title: "Craft you can see",
        description:
          "Anamorphic glass, real locations, in-house grade. The finish is the point, not an afterthought.",
      },
      {
        title: "Built to travel",
        description:
          "We design every film to work across cinema, broadcast and the scroll — without diluting the story.",
      },
    ],
  },

  process: [
    {
      step: 1,
      title: "Treatment",
      description:
        "We interrogate the brief and come back with a point of view — a treatment, references and a visual language.",
    },
    {
      step: 2,
      title: "Pre-production",
      description:
        "Casting, locations, crew and schedule. Every department mapped before a single frame is shot.",
    },
    {
      step: 3,
      title: "Production",
      description:
        "Director-led shoots with our core crew and kit. Calm on set, exacting on craft.",
    },
    {
      step: 4,
      title: "Post & delivery",
      description:
        "Edit, sound design, grade and finishing in-house — then delivered for every screen it needs to live on.",
    },
  ],

  aboutHeading: "A studio built around the frame.",
  aboutStory:
    "BlackFrame Studios began in a Hackney Wick warehouse with a single conviction: that a brand film could be as crafted as cinema, and a documentary as urgent as the news. A decade on, we're a full-service film and video studio working with broadcasters, agencies and brands across the UK and beyond — but the conviction hasn't moved. We still obsess over the frame. We still believe story comes first. And we still finish every project in the same building it started in.",
  manifesto:
    "Anyone can capture footage. We're here to make something worth watching twice.",
  values: [
    {
      title: "Story over spectacle",
      description:
        "Technique serves the story. If a shot doesn't earn its place, it doesn't make the cut.",
    },
    {
      title: "Craft is non-negotiable",
      description:
        "From lens choice to final grade, we sweat details audiences feel but never name.",
    },
    {
      title: "Honest collaboration",
      description:
        "Straight talk, realistic timelines, no surprises. The work is hard enough without games.",
    },
    {
      title: "Make it last",
      description:
        "We build films to outlive the campaign cycle — work people still reference years later.",
    },
  ],

  work: [
    { title: "Northbound", client: "Ridgeline Outerwear", service: "Commercial", result: "3.1M views · Cannes Lions shortlist" },
    { title: "The Long Room", client: "BBC Storyville", service: "Documentary", result: "Broadcast feature · 4 festival selections" },
    { title: "Salt & Iron", client: "A24 (dev)", service: "Feature Film", result: "Feature in development · 2 fund awards" },
    { title: "Everyday Astronauts", client: "Vantage Bank", service: "Branded Content", result: "6-part series · 40% lift in brand recall" },
    { title: "Concrete Gardens", client: "Greater London Authority", service: "Documentary", result: "Civic film · screened across 12 boroughs" },
    { title: "First Light", client: "Aurelia Cosmetics", service: "Commercial", result: "TVC + 14 social cutdowns · launch sellout" },
  ],

  stats: [
    { value: "120+", label: "Films delivered" },
    { value: "14", label: "Festival selections" },
    { value: "10yrs", label: "In production" },
    { value: "40+", label: "Brands & broadcasters" },
  ],

  features: [],
  sectionThemeWord: "",
  narrative: [],

  mixedMedia: {
    skipSecondaryVideo: true,
    accentEyebrow: "",
    accentLine: "",
  },

  cta: {
    primary: "Start a project",
    secondary: "See the work",
  },

  ctaBlock: {
    heading: "Have a film in you?",
    description:
      "Tell us what you're trying to say. We'll come back with how we'd say it on screen.",
  },

  trustBar: [],

  scrollHero: {
    archetype: "F" as "A" | "B" | "C" | "D" | "E" | "F" | "G",
    styleId: "ink-citron",
    assetMode: "live-generate" as "live-generate" | "prompt-only",
    imageUrl: "",
    frameCount: 96,
    scrollDistance: 4,
  },

  headerVariant: "transparent-ghost" as const,
  footerVariant: "FT3" as const,
  loadingVariant: "L2" as const,

  motion: {
    scrollProgress: true,
    cursorFollower: false,
    intensity: "medium" as "low" | "medium" | "high",
  },
} as const;

export type SiteConfig = typeof siteConfig;
