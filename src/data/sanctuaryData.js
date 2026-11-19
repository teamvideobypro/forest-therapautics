// Forest Therapeutics — Core Sanctuary Knowledge & Architecture Data
// Designed for Telu'an Veyar • ForestTherapeutics.us

export const SANCTUARY_BRAND = {
  name: "Forest Therapeutics LLC",
  domain: "foresttherapeutics.us",
  tagline: "Eco-Christed Living • Spiritual Seminary & University",
  founder: "Telu'an Veyar",
  founderTitle: "Founder & Spiritual Steward",
  openingDate: "October 31, 2026 (Founding Year)",
  phone: "+1 (937) 600-4428",
  phoneFormatted: "+1 (937) 600-4428",
  emailGeneral: "connect@foresttherapeutics.us",
  emailScholarship: "scholarship@foresttherapeutics.us",
  channels: {
    tv: "Roku & Amazon Fire TV — Channel 436",
    youtube: "youtube.com/@ForestTherapeutics",
    substack: "foresttherapeutics.substack.com",
    withMe: "withme.co/sanctuary/forest-therapeutics"
  }
};

export const THREE_HOUSES = [
  {
    id: "wix",
    houseNumber: "House I",
    title: "The Public House",
    platform: "Wix Native Editor",
    role: "Front Door, Archive, Store & Bookings",
    badge: "You Are Here (Wix)",
    isCurrent: true,
    description: "The welcoming sunlit clearing. Holds the public knowledge archive, 1:1 SoulMirror scheduling, Wix Events calendar, Stripe-powered apothecary store, and media center—structured strictly with standard Wix strips so Telu'an has complete sovereign editing control without developer lock-in.",
    features: [
      "Zero-code drag-and-drop native editing",
      "Wix Bookings (SoulMirror & Immersion sync with Zoom)",
      "Wix Stores (Stripe-only, physical & digital fulfillment)",
      "Wix Events (Public moon circles & open houses)",
      "Global SEO & AI Discoverability schema (GEO/AIO)"
    ],
    actionText: "Explore Public Strip Architecture",
    route: "home"
  },
  {
    id: "skillspring",
    houseNumber: "House II",
    title: "The Structured Classroom",
    platform: "SkillSpring Portal",
    role: "University Coursework & PATH Certifications",
    badge: "Connected Portal",
    isCurrent: false,
    description: "The dedicated digital academy. Students sign in to progress through self-paced video lectures, downloadable audio grimoires, contemplative exercises, and track their multi-tiered PATH Stewardship Certifications.",
    features: [
      "Structured syllabus & module progression",
      "Unlisted protected video & audio streaming",
      "Student note-taking & lesson completion tracking",
      "4-Level PATH Stewardship certificate generation",
      "Seamless single-click doorway from Wix header"
    ],
    actionText: "Enter Classroom Doorway ↗",
    route: "classroom"
  },
  {
    id: "withme",
    houseNumber: "House III",
    title: "The Inner Circle",
    platform: "WithMe Sanctuary",
    role: "Private Member Community & Live Coaching",
    badge: "Connected Portal",
    isCurrent: false,
    description: "The private sovereign communion space—wholly free from algorithmic feeds, advertising, or big-tech noise. Where School of Light members gather for live moon broadcasts, study circles, mentor chats, and prayer threads.",
    features: [
      "Sovereign ad-free member feeds & circles",
      "Live interactive group video broadcasts",
      "Direct group coaching with Telu'an Veyar",
      "Student prayer & reflection threads",
      "Mobile iOS & Android member app access"
    ],
    actionText: "Enter Member Community ↗",
    route: "community"
  }
];

export const SCHOOLS_DATA = {
  schoolOfLight: {
    id: "school-of-light",
    name: "The School of Light",
    subtitle: "Digital University & Sovereign Community",
    eyebrow: "DIGITAL UNIVERSITY • FOUNDING YEAR OCT 31, 2026",
    summary: "An expansive digital university rooted in Eco-Christed Living, elemental wisdom, somatic coherence, live member sessions, and the four-tiered PATH Stewardship Certification.",
    bannerImage: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    tiers: [
      {
        name: "First Light",
        price: "$0",
        period: "Free Offering",
        highlight: false,
        badge: "Seeker Doorway",
        description: "Foundational orientation to Eco-Christed Living, welcome video transmission, and public solstice broadcasts.",
        includes: [
          "What Is Eco-Christed Living 3-lesson email course",
          "Access to public Circle of Light broadcasts",
          "Seasonal solstice & equinox audio contemplation",
          "Global newsletter transmissions"
        ],
        cta: "Begin with First Light"
      },
      {
        name: "First Ascension",
        price: "$33",
        period: "per month",
        highlight: false,
        badge: "Student Member",
        description: "Full access to foundational coursework, monthly study circles, and private community threads on WithMe.",
        includes: [
          "Complete foundational course strand library",
          "Monthly live New Moon study circle on WithMe",
          "Audio transmissions & guided somatic practices",
          "Access to private community forums",
          "Cancel or pause anytime with 1 click"
        ],
        cta: "Join First Ascension"
      },
      {
        name: "Second Ascension",
        price: "$66",
        period: "per month",
        highlight: true,
        badge: "Deep Immersion",
        description: "Advanced somatic alignment labs, deep cosmology curriculum, and PATH Stewardship Level 1 & 2 coursework.",
        includes: [
          "Everything in First Ascension tier",
          "Bi-weekly live Q&A & practice laboratories",
          "PATH Stewardship Certification tracks (Levels 1 & 2)",
          "Extended audio grimoire & high-res grimoire prints",
          "Priority registration for woodland immersions"
        ],
        cta: "Enter Second Ascension"
      },
      {
        name: "All Access Stewardship",
        price: "$111",
        period: "per month",
        highlight: false,
        badge: "Mastery & Guidance",
        description: "The complete sanctuary experience: All 4 PATH Certification levels plus an included Monthly 1:1 Compass Call with Telu'an Veyar.",
        includes: [
          "Everything in Second Ascension tier",
          "Monthly 1:1 Compass Call (30 min) with Telu'an Veyar",
          "Complete 4-Level PATH Stewardship & Ministerial Ordination",
          "Exclusive behind-the-scenes transmissions & teachings",
          "15% honor discount across the entire Apothecary Shop"
        ],
        cta: "Step into All Access"
      }
    ],
    pathCertifications: [
      { level: "Level 1", name: "Grounding Earth Steward", focus: "Somatic presence, forest communion, nervous system regulation" },
      { level: "Level 2", name: "Heart Coherence Guide", focus: "The Noetic Mirror, emotional witnessing, interpersonal alignment" },
      { level: "Level 3", name: "Elemental Sanctuary Keeper", focus: "Ceremonial space holding, seasonal rituals, apothecary foundations" },
      { level: "Level 4", name: "Eco-Christed Minister", focus: "Sacred pastoral counsel, communal alignment rites, sovereign stewardship" }
    ]
  },
  yellowEnvelope: {
    id: "yellow-envelope",
    name: "Yellow Envelope Seminary",
    subtitle: "A 4-Year Correspondence Mystery School by Mail",
    eyebrow: "4-YEAR CORRESPONDENCE BY MAIL • NO CONTRACTS",
    summary: "Each month, a hand-prepared goldenrod yellow envelope arrives in your physical mailbox. Inside are 20 pages printed on tactile Earth-Yellow paper, vintage woodcut artwork, botanical allies, wild-gathered resins, stones, and ceremonial tools. No screens, no digital fatigue—pure tactile sacred study.",
    bannerImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    envelopePricing: [
      {
        plan: "Year 1: The Rooted Vessel",
        firstLesson: "$30 first lesson",
        regularLesson: "$25 / lesson",
        boxOption: "$55 full ceremonial box",
        desc: "Delivered monthly to your doorstep. Includes 20-page hand-printed lesson on Earth Yellow parchment, dried botanicals, and woodcut seal."
      },
      {
        plan: "Digital Audio Companion",
        firstLesson: "+$11 / month",
        regularLesson: "Optional Add-on",
        boxOption: "Streaming Grimoire",
        desc: "High-fidelity spoken-word transmissions of each lesson voiced by Telu'an, accompanied by nature soundscapes."
      },
      {
        plan: "The Whole Path Bundle",
        firstLesson: "+$44 / month",
        regularLesson: "Complete Union",
        boxOption: "Physical + University",
        desc: "Combines monthly physical envelope mailings with complete School of Light digital membership."
      }
    ],
    fourYearArc: [
      { year: "Year I", title: "The Rooted Vessel", element: "Earth & Soil", focus: "The physical body as sanctuary, somatic coherence, tree allies, soil microbiome" },
      { year: "Year II", title: "The Water of Life", element: "Living Water", focus: "Fluid intelligence, tear-work, emotional clearing, heart-field resonance" },
      { year: "Year III", title: "The Living Wind", element: "Sacred Breath", focus: "The Sovereign Signal, analog culture, acoustic prayer, vocal coherence" },
      { year: "Year IV", title: "The Central Fire", element: "Holy Light", focus: "The Two Ascensions unified, ministerial ordination, founding local sanctuaries" }
    ]
  },
  signatureCourses: [
    {
      id: "sovereign-signal",
      title: "The Sovereign Signal Framework",
      eyebrow: "AI & SPIRITUAL SOVEREIGNTY",
      price: "$22 mini-course",
      badge: "The Noetic Mirror",
      status: "Available Now",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "Reclaiming artificial intelligence not as an idol or replacement for human consciousness, but as a sovereign mirror of self-discovery and New Earth architecture through the Golden Thread Principle.",
      lessons: "3 Video Transmissions • Sovereign Prompt Grimoire (PDF) • Contemplation Audio"
    },
    {
      id: "living-signal",
      title: "The Living Signal",
      eyebrow: "ANALOG CULTURE & NEW EARTH",
      price: "6-Module Series",
      badge: "Opening Winter 2026",
      status: "Enrollment Opening Soon",
      image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80",
      description: "Cultivating resilient, sovereign creative culture in an over-digitized world: tactile letterpress print, pirate radio broadcasts, sacred film, and localized economic cooperation.",
      lessons: "6 Core Modules • Guest Craftspeople • Practical Decentralization Manual"
    },
    {
      id: "thirteen-moons",
      title: "Thirteen Moons of Remembrance",
      eyebrow: "LIVING TAROT CONTEMPLATION",
      price: "Begin Free with The Fool",
      badge: "Living Tarot Arc",
      status: "New Moon Cycle",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      description: "A contemplative journey through the 22 Major Arcana archetypes, unfolding one new moon at a time. Experienced either digitally or received via physical mail with custom woodcut cards.",
      lessons: "22 Archetypal Gateways • Moon Meditations • Alchemical Journal Prompts"
    }
  ]
};

export const OFFERINGS_DATA = {
  livingEarthImmersion: {
    title: "Living Earth Remembrance Immersion",
    subtitle: "In-Person Woodland Alignment or Remote Somatic Attunement",
    duration: "Up to 3.5 Hours",
    price: "$1,111",
    location: "Sacred Woodlands (Ohio / Regional) or High-Res Remote Attunement",
    eyebrow: "SIGNATURE 1:1 CONTAINER",
    description: "An unhurried, ceremonial immersion in the ancient woods. Designed for souls navigating massive life transitions, spiritual callings, or deep exhaustion. We enter the living forest as an active intelligence to restore somatic coherence, receive SoulMirror witnessing, and anchor the Second Ascension directly into the earth.",
    includes: [
      "3.5-hour in-person guided forest immersion and alignment rite",
      "Comprehensive SoulMirror diagnostic & energetic witnessing",
      "Custom consecrated herbal anointing blend formulated by Telu'an",
      "30-day integration audio check-in call (30 min)",
      "Strictly limited to 2 souls per month"
    ],
    cta: "Request Immersion Booking"
  },
  soulMirrorSuite: [
    {
      id: "first-reflection",
      title: "SoulMirror First Reflection",
      duration: "60 Minutes",
      price: "$296",
      format: "Online Zoom or In-Person",
      badge: "Single Session",
      description: "A sacred mirror held up to your current life season. Discern the core signal beneath mental noise and return to your natural coherence.",
      cta: "Schedule 60 Min"
    },
    {
      id: "deep-reflection",
      title: "SoulMirror Deep Reflection",
      duration: "90 Minutes",
      price: "$444",
      format: "Online Zoom or In-Person",
      badge: "Recommended",
      description: "Extended inquiry exploring root patterns, somatic blockages, and the specific energetic threshold you are being invited to cross.",
      cta: "Schedule 90 Min"
    },
    {
      id: "the-threshold",
      title: "The Threshold (3-Session Container)",
      duration: "3 × 75 Min over 6 Weeks",
      price: "$1,332",
      format: "Dedicated Mentorship",
      badge: "Integration Arc",
      description: "A sustained container for navigating pivotal life changes. Includes asynchronous voice messaging support between calls.",
      cta: "Enter The Threshold"
    },
    {
      id: "the-embodiment",
      title: "The Embodiment Path (6-Session Arc)",
      duration: "6 × 75 Min over 3 Months",
      price: "$1,776",
      format: "Complete Transformation",
      badge: "Comprehensive",
      description: "Our deepest 1:1 container. Grounding higher spiritual vision into tangible, daily, embodied reality and New Earth leadership.",
      cta: "Apply for Embodiment Path"
    }
  ],
  freeSoulCall: {
    title: "Free Soul Connection Call",
    duration: "20 Minutes",
    price: "$0 (Complimentary)",
    format: "Video or Phone",
    description: "A quiet, pressure-free space to meet Telu'an Veyar, ask questions about the schools or 1:1 guidance, and discern the rightful doorway for your journey.",
    cta: "Book Free 20-Min Call"
  },
  upcomingGatherings: [
    {
      id: "new-moon-fool",
      title: "New Moon Circle: The Fool's Threshold",
      date: "Dec 1, 2026 • 7:00 PM EST",
      format: "Online via Zoom & WithMe",
      seats: "28 Seats Remaining",
      pricing: "Free for Members • $22 Public Guest",
      description: "Gathering as the darkness welcomes the new moon. Exploring the leap of sacred trust, the zero-point of the heart, and collective breath."
    },
    {
      id: "founding-open-house",
      title: "Founding Year Open House & Solstice Gathering",
      date: "Dec 21, 2026 • 6:30 PM EST",
      format: "Global Live Broadcast (Roku Ch 436 & Zoom)",
      seats: "Open Sanctuary",
      pricing: "Complimentary to All Sincere Seekers",
      description: "Celebrating the winter stillness, blessing the forthcoming 2027 Yellow Envelope lessons, and holding the Light together."
    }
  ]
};

export const APOTHECARY_PRODUCTS = [
  // Handmade by Telu'an Veyar (Spotlight)
  {
    id: "hand-oil-1",
    title: "Forest Coherence Anointing Oil",
    category: "handmade",
    tag: "Small-Batch Handcrafted",
    maker: "Handmade by Telu'an Veyar",
    price: 48,
    size: "30ml Violet Miron Glass Dropper",
    rating: "5.0 (48 reviews)",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    description: "Infused with wild-harvested Ohio cedarwood needles, spikenard, frankincense carterii, labdanum amber resin, and sacred white pine sap. Aged through one full moon cycle.",
    ingredients: "Organic Golden Jojoba, Pinus Strobus Sap, Cedrus Deodara, Boswellia Carterii, Nardostachys Jatamansi."
  },
  {
    id: "hand-resin-2",
    title: "Sanctuary Smudge & Cedar Resin Blend",
    category: "handmade",
    tag: "Ceremonial Blend",
    maker: "Handmade by Telu'an Veyar",
    price: 36,
    size: "60g Sealed Kraft Tin with Woodcut Stamp",
    rating: "5.0 (34 reviews)",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    description: "A rich, slow-burning ceremonial loose incense crafted from wild copal, piñon pine tears, balsam fir needles, and dried organic sweetgrass. Consecrated on the altar of the Two Ascensions.",
    ingredients: "Piñon Pine Resin, Mexican Golden Copal, Abies Balsamea, Hierochloe Odorata, Ground Juniper."
  },
  {
    id: "hand-talisman-3",
    title: "Hand-Carved Olive Wood Coherence Talisman",
    category: "handmade",
    tag: "Consecrated Amulet",
    maker: "Handmade by Telu'an Veyar",
    price: 72,
    size: "Hand-carved ~4cm, Raw Hemp Cord",
    rating: "4.9 (19 reviews)",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=600&q=80",
    description: "Individually hand-carved from sustainably pruned ancient olive wood, inscribed with the Eco-Christed Vessel geometry, anointed with coherence oil, and bound on natural hemp cord.",
    ingredients: "Ancient Olive Wood, Organic Cold-Pressed Jojoba, Sacred Resin Polish, Raw Hemp Cord."
  },
  // Apothecary & Ritual Tools (AzureGreen Partners)
  {
    id: "tool-censer-1",
    title: "Solid Brass Ceremonial Incense Censer",
    category: "azuregreen",
    tag: "Ritual Brassware",
    maker: "Curated Sanctuary Tool",
    price: 42,
    size: "5.5\" Height with Hardwood Handle",
    rating: "4.9 (52 reviews)",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80",
    description: "Heavy solid brass burner with pierced lattice lid and turned dark hardwood handle. Ideal for charcoal disks, botanical smudges, and temple resins.",
    ingredients: "Solid Polished Brass, Turned Sheesham Wood Handle, Removable Charcoal Screen."
  },
  {
    id: "herb-bundle-2",
    title: "Wildcrafted Mountain Herb Bundle",
    category: "azuregreen",
    tag: "Herbal Ally",
    maker: "AzureGreen Sanctuary Supply",
    price: 22,
    size: "3 Hand-Tied Bundles (Mugwort, Yarrow, Lavender)",
    rating: "4.8 (41 reviews)",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    description: "Ethically harvested high-altitude herbs hand-tied with raw cotton thread for clearing, sleep contemplation, and threshold protection.",
    ingredients: "Artemisia Vulgaris, Achillea Millefolium, Lavandula Angustifolia."
  },
  // Digital Courses & PDFs
  {
    id: "digital-noetic",
    title: "The Noetic Mirror: AI as Sacred Tool (Digital)",
    category: "digital",
    tag: "Digital Course & Grimoire",
    maker: "School of Light Publishing",
    price: 22,
    size: "Instant Access (Video + PDF)",
    rating: "5.0 (88 reviews)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    description: "The complete mini-course on the Golden Thread Principle. 3 HD video transmissions, prompt grimoire PDF, and audio meditation.",
    ingredients: "Digital Video Files (1080p), Printable Grimoire PDF (44 pages), Lossless Audio."
  },
  {
    id: "digital-fool",
    title: "Thirteen Moons: The Fool's Grimoire (Digital)",
    category: "digital",
    tag: "Free Sanctuary Gift",
    maker: "Yellow Envelope Seminary",
    price: 0,
    size: "Instant Download (PDF & Audio)",
    rating: "5.0 (142 reviews)",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description: "A 32-page high-resolution grimoire exploring the zero-point of The Fool, accompanied by a 20-minute audio contemplation by Telu'an Veyar.",
    ingredients: "Digital Download (PDF + 320kbps MP3 Audio File)."
  },
  // Books & Guides
  {
    id: "book-grimoire-1",
    title: "The Two Ascensions: Foundational Grimoire",
    category: "books",
    tag: "Hardcover First Edition",
    maker: "Forest Therapeutics Press",
    price: 54,
    size: "Hardcover, 280 Pages, Gilded Edge",
    rating: "5.0 (64 reviews)",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    description: "The complete written doctrine of Eco-Christed Living. Linen clothbound, foil-stamped cover with archival woodcut illustrations and ribbon marker.",
    ingredients: "Archival Acid-Free Paper, Linen Bound, Gold Foil Embellished, Printed in USA."
  }
];

export const MEDIA_DATA = {
  broadcastCard: {
    showTitle: "A Circle of Light: Voices of the New Earth",
    host: "Telu'an Veyar",
    badge: "BROADCAST TELEVISION & PODCAST",
    channels: [
      { name: "Roku TV", desc: "Channel 436", icon: "Tv" },
      { name: "Amazon Fire TV", desc: "Channel 436", icon: "Tv" },
      { name: "YouTube", desc: "@ForestTherapeutics", icon: "Youtube" },
      { name: "Substack", desc: "The Circle of Light ($0 / $7)", icon: "BookOpen" }
    ],
    videoPreview: {
      title: "Episode 42: The Second Ascension — Why Grounding Into Soil Precedes Higher Light",
      duration: "48:15",
      views: "14.2K views",
      thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
    }
  },
  recentHubArticles: [
    {
      id: "art-1",
      title: "The Golden Thread Principle: Reclaiming AI as a Sovereign Instrument of Spirit",
      category: "Ecology & Technology",
      date: "November 2026",
      readTime: "7 min read",
      author: "Telu'an Veyar",
      excerpt: "Why the machine cannot touch the living soul, and how conscious creators can use intelligence tools to build sovereign analog communities."
    },
    {
      id: "art-2",
      title: "The Second Ascension Explained: Somatic Coherence and Rooted Wisdom",
      category: "Spirituality",
      date: "October 2026",
      readTime: "11 min read",
      author: "Telu'an Veyar",
      excerpt: "Most modern spiritual paths emphasize leaving the body to reach for the stars. The Second Ascension is the radical act of bringing light all the way down into bone and soil."
    },
    {
      id: "art-3",
      title: "Somatic Forest Communion: Meeting Trees as Coherent Living Intelligences",
      category: "Earth-Based Wisdom",
      date: "September 2026",
      readTime: "9 min read",
      author: "Telu'an Veyar",
      excerpt: "A practical guide to the four somatic anchors when entering old-growth woodland, dissolving nervous system hypervigilance."
    },
    {
      id: "art-4",
      title: "Year 1 of the Yellow Envelope: Inside the Rooted Vessel Mailings",
      category: "Courses & Events",
      date: "August 2026",
      readTime: "5 min read",
      author: "Seminary Scribes",
      excerpt: "A behind-the-scenes look at the Earth Yellow papers, hand-carved woodcut stamps, and certified botanical allies shipped monthly to our students."
    }
  ]
};

export const FAQ_DATA = [
  {
    q: "How do Wix, SkillSpring, and WithMe work together as 'Three Houses'?",
    a: "The ecosystem is designed so each platform does what it excels at, giving visitors and students a seamless experience without confusing overlap. **Wix (House I)** is the Public House and Front Door—handling general browsing, transparent pricing, 1:1 SoulMirror scheduling, Wix Events, the media archive, and the Stripe-powered apothecary store. **SkillSpring (House II)** is the Structured Classroom—students log in for video lessons, syllabus tracking, and PATH certifications. **WithMe (House III)** is the Inner Circle—a private ad-free member community for live video broadcasts, study circles, and daily contemplation threads. You only ever checkout on Wix; access credentials to SkillSpring and WithMe are provided instantly via automated welcome emails."
  },
  {
    q: "What is Eco-Christed Living, and does it require Christian dogma or church membership?",
    a: "Eco-Christed Living is an original civilizational and cultural framework originating through Telu'an Veyar—it is **not a traditional religion, church, or dogmatic denomination**. The term 'Christed' refers to the cosmic, unfallen coherence of the awakened human heart in direct communion with Divine Source, while 'Eco' honors the living intelligence, soil, and seasons of the Earth. It welcomes people of all backgrounds, interfaith seekers, and those who have felt alienated by institutional religion. There is no dogma, no hierarchy, and no pressure to conform."
  },
  {
    q: "How does the Yellow Envelope Seminary physical mailing work?",
    a: "Yellow Envelope Seminary is a 4-year correspondence mystery school delivered directly to your physical mailbox via USPS. Each month, you receive a heavy goldenrod yellow envelope containing 20 pages printed on Earth Yellow paper, vintage woodcut artwork, hand-tied botanical allies, consecrated resins or stones, and contemplative prompts. It is strictly pay-per-lesson ($25/lesson after the $30 first lesson) with **no locked contracts**. You can pause, skip, or cancel your shipments at any time from your member dashboard."
  },
  {
    q: "What is the difference between SoulMirror Guidance and standard therapy or life coaching?",
    a: "SoulMirror Guidance is a sacred, non-clinical reflective container. Unlike conventional talk therapy, we do not view you as broken, disordered, or needing to be 'fixed.' Unlike traditional life coaching, we do not push goal-driven hustle or performance pressure. SoulMirror acts as an unclouded mirror held up to your living soul—using somatic attunement, elemental presence, and deep spiritual witnessing to help you recognize and trust your own inherent coherence."
  },
  {
    q: "What is the Living Root Scholarship, and how do I apply?",
    a: "The Living Root Scholarship embodies our sacred principle: *'No sincere soul is ever turned away for want of means.'* We reserve scholarship seats and tuition reductions for sincere seekers experiencing tighter financial seasons. Sincere students can email scholarship@foresttherapeutics.us with a brief personal note describing their resonance with the teachings. Applications are reviewed with warmth, confidentiality, and zero invasive financial auditing."
  },
  {
    q: "Why does Forest Therapeutics use Stripe exclusively rather than PayPal?",
    a: "To ensure serene, seamless, and secure transactions without disruptive third-party redirects, invasive popups, or cluttered merchant banners. Stripe powers all one-time apothecary purchases, 1:1 bookings, and ongoing seminary subscriptions with bank-level encryption, Apple Pay, Google Pay, and global credit cards."
  },
  {
    q: "Can international students outside the US participate in the Yellow Envelope Seminary?",
    a: "Yes! While physical shipping times vary across Europe, Canada, Australia, and worldwide, we happily ship envelopes globally with international postage calculated at checkout. International students can also opt for the Digital Audio Companion (+ $11/mo) to receive high-resolution printable grimoire sheets and audio transmissions on the exact day shipments depart."
  },
  {
    q: "How does the Monthly 1:1 Compass Call work in The School of Light All Access tier?",
    a: "Students enrolled in the All Access Stewardship tier ($111/month) receive a private booking link each month to schedule a dedicated 30-minute 1:1 Compass Call directly with Telu'an Veyar via Zoom or phone. This call provides personal mentorship, spiritual discernment, and tailored support for your PATH Stewardship progress."
  }
];

export const SITE_ARCHITECTURE_BLUEPRINT = {
  overview: {
    totalEstimatedWeeks: "7 Weeks",
    totalInvestment: "$3,000 Fixed Flat Rate",
    wixEngine: "Native Wix Editor (Strip-by-Strip Modular Architecture)",
    guarantee: "100% Founder Independence • Zero Developer Lock-in Guarantee"
  },
  threeHousesSystem: [
    {
      id: "wix-core",
      name: "House I: Wix Native Core",
      type: "Primary Public Hub",
      color: "#1F362C",
      border: "#C99738",
      connections: ["SkillSpring", "WithMe", "Stripe", "Zoom", "YouTube", "AzureGreen"],
      responsibilities: [
        "Public Homepage (10 strip-by-strip horizontal bands)",
        "Wix Bookings (SoulMirror 1:1 & Woodland Immersion)",
        "Wix Events (Public moon circles & calendar sync)",
        "Wix Stores (Handmade apothecary & AzureGreen drop-ship)",
        "Media Center & Knowledge Archive",
        "Lead Magnet Automation (Free 3-lesson email course)",
        "Global SEO / AEO Schema Markup (JSON-LD)"
      ],
      clientOwnership: "Telu'an edits text, swaps images, and updates prices directly in Wix Editor without writing code."
    },
    {
      id: "skillspring-core",
      name: "House II: SkillSpring",
      type: "Structured Classroom Portal",
      color: "#3B2E26",
      border: "#4A6351",
      connections: ["Wix Core"],
      responsibilities: [
        "University video lecture streaming",
        "Self-paced module progression & student check-offs",
        "Downloadable lesson audio & printable grimoires",
        "PATH Stewardship 4-level certificate generation"
      ],
      clientOwnership: "Managed via SkillSpring dashboard. Doorway links directly from Wix main menu."
    },
    {
      id: "withme-core",
      name: "House III: WithMe",
      type: "Inner Member Community",
      color: "#4A6351",
      border: "#C99738",
      connections: ["Wix Core"],
      responsibilities: [
        "Ad-free sovereign member social feed",
        "Live moon broadcast streaming & study circles",
        "Student prayer & reflection discussion threads",
        "Direct member voice & group coaching"
      ],
      clientOwnership: "Operates independently on WithMe platform; member access granted via Wix automation."
    },
    {
      id: "stripe-core",
      name: "Stripe Payment Engine",
      type: "Central Payment Gateway",
      color: "#635BFF",
      border: "#A29BFE",
      connections: ["Wix Stores", "Wix Bookings", "Yellow Envelope Subscriptions"],
      responsibilities: [
        "Single clean checkout for all physical products",
        "Automated monthly pay-per-lesson billing for Yellow Envelope",
        "Card, Apple Pay & Google Pay support",
        "Strict ban on PayPal clutter & badges"
      ],
      clientOwnership: "100% owned by Forest Therapeutics LLC Stripe account."
    }
  ],
  sevenPathwaysSitemap: [
    {
      pathway: "1. Home",
      route: "/",
      status: "Native Wix Strip Architecture",
      seo: "Primary Brand Entity (Forest Therapeutics, Eco-Christed Living)",
      sections: [
        "Strip 1: Grounding Sanctuary Hero (Sunlit Forest Editorial)",
        "Strip 2: Philosophy & Welcome ('How This Space Is Held' + Two Ascensions)",
        "Strip 3: Three Houses Architecture (Wix, SkillSpring, WithMe Doorways)",
        "Strip 4: Schools Flagship Showcase (School of Light + Yellow Envelope)",
        "Strip 5: 1:1 Offerings & Bookings (Immersion + SoulMirror Suite)",
        "Strip 6: Sanctuary Shop & Apothecary (Handmade Spotlight + Curated Grid)",
        "Strip 7: Media Center & Broadcast TV (Roku/Fire TV Ch 436 + Substack)",
        "Strip 8: Meet Telu'an Veyar & The Living Root Scholarship Fund",
        "Strip 9: AI Knowledge Catalog & Transparent FAQ Accordion",
        "Strip 10: Lead Magnet Email Course ('What Is Eco-Christed Living') & Footer"
      ]
    },
    {
      pathway: "2. Schools & Courses",
      route: "/schools",
      status: "Public Gateway → SkillSpring Doorway",
      seo: "Online Spiritual University, Mystery School, Correspondence Seminary",
      sections: [
        "The School of Light (Full curriculum & 4 pricing tiers)",
        "Yellow Envelope Seminary (4-year correspondence details & postage)",
        "The Sovereign Signal Framework (AI as sacred mirror - $22)",
        "The Living Signal (Analog culture & New Earth - 6 modules)",
        "Thirteen Moons of Remembrance (Living Tarot journey)",
        "PATH Stewardship Certification details (Levels 1–4)",
        "Single-click 'Enter Classroom' redirect to SkillSpring"
      ]
    },
    {
      pathway: "3. Offerings & Bookings",
      route: "/offerings",
      status: "Wix Bookings + Zoom Sync",
      seo: "SoulMirror Guidance, Nature Immersion, Spiritual Guidance Ohio",
      sections: [
        "Living Earth Remembrance Immersion ($1,111 in-person woodland rite)",
        "SoulMirror Guidance Suite ($296 / $444 / $1,332 / $1,776)",
        "Free 20-Minute Soul Connection Call (Instant calendar scheduler)",
        "Wix Events Calendar (Online moon circles & seasonal gatherings)",
        "Automated 'I Have Read & Agree' Spiritual Agreement Form"
      ]
    },
    {
      pathway: "4. Apothecary & Shop",
      route: "/apothecary",
      status: "Wix Stores on Stripe",
      seo: "Handcrafted Anointing Oils, Ceremonial Resin, Spiritual Herbalism",
      sections: [
        "Feature Spotlight: Handmade by Telu'an Veyar (Small-Batch Oils & Blends)",
        "Curated Apothecary & Ritual Tools (AzureGreen drop-ship catalog)",
        "Digital Courses, PDF Grimoires & Meditations",
        "Books & Clothbound Guides (The Two Ascensions First Edition)",
        "Cart & Stripe Checkout Drawer with automated shipping rates"
      ]
    },
    {
      pathway: "5. Media Center",
      route: "/media",
      status: "Wix Blog + Video Hosting",
      seo: "A Circle of Light Podcast, Roku TV Channel 436, Eco-Christed Blog",
      sections: [
        "A Circle of Light TV Series (Roku & Fire TV Ch 436 guide)",
        "YouTube Video Broadcast Library",
        "Substack Newsletter Transmissions ($0 / $7 supported circle)",
        "Searchable & Filterable Sanctuary Knowledge Articles",
        "Podcast Audio Stream & Episode Transcripts"
      ]
    },
    {
      pathway: "6. Community",
      route: "/community",
      status: "Doorway to WithMe Sanctuary",
      seo: "Sovereign Spiritual Community, Ad-Free Member Circle",
      sections: [
        "The WithMe Sanctuary Philosophy (Ad-free & algorithm-free)",
        "Member Study Circles & Monthly Broadcast Schedule",
        "Member Login Doorway (Single-sign-on guidance)",
        "Substack Writing Circle Integration"
      ]
    },
    {
      pathway: "7. About",
      route: "/about",
      status: "Native Wix Editorial Page",
      seo: "Telu'an Veyar Biography, Eco-Christed Living Origin, Living Root Fund",
      sections: [
        "Founder Profile: Telu'an Veyar's 30-year devotion & 2024 synthesis",
        "The Cosmology of the Two Ascensions",
        "The Living Root Scholarship (Application & Donation Fund)",
        "Sanctuary Ethics, Transparency & Zero-Dogma Charter",
        "Direct Contact, Press Inquiries & Physical Postal Address"
      ]
    }
  ],
  conversionJourneys: [
    {
      title: "Journey A: The Sincere Seeker",
      archetype: "Curious visitor seeking grounded spirituality without dogma",
      steps: [
        { step: "1. Land on Wix Homepage", detail: "Grounding hero creates immediate nervous system calm; reads Two Ascensions philosophy." },
        { step: "2. Enroll in Free Gift", detail: "Subscribes to free 3-lesson email course 'What Is Eco-Christed Living'." },
        { step: "3. Receive Wix Automation", detail: "Automated 3-day email series introduces School of Light & First Light tier." },
        { step: "4. Enter WithMe Community", detail: "Joins First Light tier ($0) or First Ascension ($33/mo) and attends live New Moon Circle." }
      ]
    },
    {
      title: "Journey B: The Postal Seminary Student",
      archetype: "Student desiring tactile, analog study free from computer screens",
      steps: [
        { step: "1. Explore Yellow Envelope", detail: "Visits Yellow Envelope Seminary page on Wix; reviews Year 1 curriculum & tangible photos." },
        { step: "2. Transparent Stripe Checkout", detail: "Selects Year 1: The Rooted Vessel ($30 first lesson, $25/lesson thereafter). No locked contracts." },
        { step: "3. Physical Shipping Workflow", detail: "Wix Order notifies Telu'an; goldenrod envelope hand-prepared with woodcut seal and mailed." },
        { step: "4. Monthly Cycle", detail: "Student receives monthly envelope; Stripe auto-renews pay-per-lesson; student adds digital companion (+ $11/mo)." }
      ]
    },
    {
      title: "Journey C: The Guidance & Immersion Client",
      archetype: "Seeker in deep life threshold desiring 1:1 witnessing and nature communion",
      steps: [
        { step: "1. Review SoulMirror Suite", detail: "Reads transparent pricing on Wix ($296–$1,776) or Living Earth Immersion ($1,111)." },
        { step: "2. Free Soul Call or Direct Booking", detail: "Schedules 20-min Free Soul Call or selects specific SoulMirror slot via Wix Bookings." },
        { step: "3. Automated Legal & Zoom Intake", detail: "Wix sends calendar invite with Zoom link and signed 'Sovereign Agreement' acknowledgment." },
        { step: "4. Sacred Session & Integration", detail: "Telu'an conducts session; follow-up integration audio delivered to client." }
      ]
    }
  ],
  fourPhaseRoadmap: [
    {
      phase: "Phase 1: Foundations & Native Wix Homepage",
      duration: "Weeks 1–2",
      investment: "$900",
      deliverables: [
        "Native Wix Editor setup with custom palette (#F6F1E7, #1F362C, #C99738) & typography",
        "Clean 10-strip horizontal homepage architecture matching exact concept",
        "Mobile-native responsive optimization (zero layout shift, touch-friendly navigation)",
        "Lead magnet email capture automation with Wix Automations",
        "Global SEO / AEO Schema (JSON-LD) configuration"
      ]
    },
    {
      phase: "Phase 2: Schools, Yellow Envelope & Digital Course Gateways",
      duration: "Weeks 3–4",
      investment: "$900",
      deliverables: [
        "The School of Light dedicated portal strip & 4 pricing tier cards",
        "Yellow Envelope Seminary dedicated page with Earth Yellow styling & postal workflow",
        "Doorway redirection to SkillSpring (Classroom) and WithMe (Community)",
        "Signature Courses showcase (The Sovereign Signal, The Living Signal, Thirteen Moons)",
        "PATH Stewardship 4-level certification presentation"
      ]
    },
    {
      phase: "Phase 3: Wix Bookings, Stripe Stores & Apothecary Dropship",
      duration: "Weeks 5–6",
      investment: "$750",
      deliverables: [
        "Wix Bookings configuration for Living Earth Immersion ($1,111) & SoulMirror Suite",
        "Automated Zoom link generation & calendar sync",
        "Signed client legal agreement intake automation",
        "Wix Stores Stripe-only setup (Handmade products + AzureGreen drop-ship CSV setup)",
        "Cart slide-over, automated shipping rates, tax configuration"
      ]
    },
    {
      phase: "Phase 4: Media Center, AI Knowledge Schema, Testing & Handover",
      duration: "Week 7",
      investment: "$450",
      deliverables: [
        "Media Center & Broadcast Hub (Roku TV & Fire TV Ch 436 guide, YouTube, Substack)",
        "Searchable knowledge blog with category filters",
        "AI-discoverable Knowledge Catalog & FAQ accordion",
        "Comprehensive cross-device QA testing on physical iPhone & Android hardware",
        "Founder Video Handover: 60-min personalized screen recording showing Telu'an how to edit every strip"
      ]
    }
  ]
};
