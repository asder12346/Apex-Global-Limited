export interface FocusSector {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyProjects: string[];
  impactMetric: string;
  iconName: string;
  gradient: string;
}

export interface InvestmentTier {
  frequency: 'Monthly' | 'Quarterly' | 'Biannual' | 'Yearly';
  rate: number; // percentage
  payoutTiming: string;
  description: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  sector: string;
  location: string;
  duration: string;
  capitalCommitted: string;
  description: string;
  achievements: string[];
  status: 'Completed' | 'Ongoing' | 'Phase 2 Expansion';
}

export const COOPERATIVE_DETAILS = {
  name: "Apex Capital Projects Multi Purpose Cooperative Ltd., Abuja",
  shortName: "Apex Capital Cooperative",
  rcNumber: "9561637",
  parentCompany: "Subsidiary of Apex Capital India",
  address: "Bobsars Plaza C2 Second Floor, Michika Street, Opp. Assembly of God Church, Garki Area 11 FCT, Abuja, Nigeria",
  phoneNumbers: ["08137013830", "09120026428"],
  email: "vcpitd4004@gmail.com",
  durationCycleMonths: 24,
  monthlyDividendPercent: 8.5,
  totalReturnPercent: 204, // inclusive capital and profit
  referralUpfrontPercent: 2.0,
  referralMonthlyPercent: 0.5,
  auditCommitment: "Commission Based On Real Project - Profit Share After Audit",
  cycleNote: "Renewal every 2 years. Once invested you cannot withdraw until cycle completes.",
};

export const FOCUS_SECTORS: FocusSector[] = [
  {
    id: "real-estate",
    number: "01",
    title: "Real Estate & Housing",
    subtitle: "Residential and commercial property development",
    description: "Acquisition, architectural planning, and physical construction of prime residential estates and mixed-use commercial hubs within Abuja FCT and expanding commercial corridors.",
    keyProjects: [
      "Apex Haven Garki Mixed-Use Complex",
      "Apex Terraces Phase 1 & 2 Lugbe",
      "Commercial Shopping Arcades & Warehousing"
    ],
    impactMetric: "140+ Residential Units & Retail Suites Developed",
    iconName: "Home",
    gradient: "from-amber-500 to-amber-700"
  },
  {
    id: "agriculture",
    number: "02",
    title: "Agro Allied & Agriculture",
    subtitle: "Farming, processing, and agricultural supply chain",
    description: "Large-scale mechanized grain cultivation, modern poultry production, and post-harvest agro-processing hubs with direct off-take agreements to safeguard food security and investor yields.",
    keyProjects: [
      "500-Hectare Maize & Soybean Farm Clusters",
      "Automated Feedmill & Poultry Processing Plant",
      "Interstate Cold Storage & Bulk Distribution Fleet"
    ],
    impactMetric: "₦420M+ Value Chain Produce Distributed Annually",
    iconName: "Wheat",
    gradient: "from-emerald-500 to-emerald-700"
  },
  {
    id: "textile",
    number: "03",
    title: "Textile & Garment Manufacturing",
    subtitle: "Fabric production and garment making",
    description: "Industrial garment production facilities equipped with computerized embroidery and sewing lines, delivering high-volume institutional uniforms, corporate apparel, and export-grade textiles.",
    keyProjects: [
      "Abuja Apparel Industrial Sewing Facility",
      "National Security & Corporate Uniform Contracts",
      "Youth Textile Vocational Apprenticeship Scheme"
    ],
    impactMetric: "85,000+ Uniforms & Garments Manufactured to Date",
    iconName: "Scissors",
    gradient: "from-purple-500 to-purple-700"
  },
  {
    id: "education",
    number: "04",
    title: "Education Support Services",
    subtitle: "Learning programs and educational support",
    description: "Financing modern learning facilities, digital classroom infrastructure, student scholarship subsidies, and vocational skill acquisition centers for self-reliance.",
    keyProjects: [
      "Digital ICT Computer Labs in Partner Secondary Schools",
      "Cooperative Tertiary Tuition Assistance Scheme",
      "Teacher Continuing Professional Development Series"
    ],
    impactMetric: "3,200+ Students & Scholars Supported",
    iconName: "GraduationCap",
    gradient: "from-blue-500 to-blue-700"
  },
  {
    id: "healthcare",
    number: "05",
    title: "Medical & Health Care Services",
    subtitle: "Healthcare, wellness, and medical support",
    description: "Equipping community diagnostic clinics, supporting essential pharmaceutical supply distribution, and underwriting member emergency health assistance funds.",
    keyProjects: [
      "Community Wellness & Diagnostic Clinic Abuja",
      "Subsidized Essential Prescription Drug Scheme",
      "Quarterly Free Mobile Health Screening Outreaches"
    ],
    impactMetric: "12,000+ Health Screenings & Medical Consultations",
    iconName: "Cross",
    gradient: "from-rose-500 to-rose-700"
  },
  {
    id: "construction",
    number: "06",
    title: "Construction & Infrastructure",
    subtitle: "Infrastructure projects and construction works",
    description: "Heavy civil engineering, urban road paving, drainage channeling, commercial plaza development, and structural rehabilitation with stringent quality engineering controls.",
    keyProjects: [
      "Commercial Plaza Structural Construction, Garki",
      "Drainage & Access Road Paving Works",
      "Solar Streetlight Municipal Partnerships"
    ],
    impactMetric: "18 Infrastructure Works Successfully Handed Over",
    iconName: "HardHat",
    gradient: "from-orange-500 to-orange-700"
  },
  {
    id: "msme",
    number: "07",
    title: "MSME Support & Empowerment",
    subtitle: "Empowering small & medium enterprises",
    description: "Providing capital revolving loans, equipment leasing, market linkages, and structured financial literacy for micro, small, and medium business owners across Abuja.",
    keyProjects: [
      "Market Women Revolving Working Capital Pool",
      "Artisan Tooling & Machine Financing Scheme",
      "Cooperative Credit Guarantee for Abuja Retailers"
    ],
    impactMetric: "650+ Small Businesses Financed & Mentored",
    iconName: "Briefcase",
    gradient: "from-indigo-500 to-indigo-700"
  },
  {
    id: "merchandise",
    number: "08",
    title: "General Merchandise",
    subtitle: "Wholesale and retail supply of goods",
    description: "High-volume commodity distribution, FMCG bulk trading, industrial equipment procurement, and reliable supply chain logistics supporting regional commerce.",
    keyProjects: [
      "Bulk Food Stuff Distribution Depots",
      "Construction Material Wholesale Depot",
      "Cooperative Consumer Goods Direct Outlets"
    ],
    impactMetric: "₦850M+ In Wholesale Trade Volume Handled",
    iconName: "ShoppingBag",
    gradient: "from-teal-500 to-teal-700"
  }
];

export const PAYOUT_OPTIONS: InvestmentTier[] = [
  {
    frequency: "Monthly",
    rate: 8.5,
    payoutTiming: "Paid monthly",
    description: "Consistent cash flow every 30 days directly credited to your designated bank account."
  },
  {
    frequency: "Quarterly",
    rate: 25.5,
    payoutTiming: "Every 3 months",
    description: "Compounded quarterly lump sum (8.5% × 3 months) ideal for business inventory and school fees."
  },
  {
    frequency: "Biannual",
    rate: 51.0,
    payoutTiming: "Every 6 months",
    description: "Semi-annual milestone payout (8.5% × 6 months) for structured capital projects."
  },
  {
    frequency: "Yearly",
    rate: 102.0,
    payoutTiming: "Every 12 months",
    description: "Annual bumper dividend doubling your annual yield (8.5% × 12 months) before final cycle wrap."
  }
];

export const PROJECT_PORTFOLIO: ProjectCaseStudy[] = [
  {
    id: "garki-plaza",
    title: "Bobsars Commercial Annex & Plaza Retrofit",
    sector: "Construction & Infrastructure",
    location: "Garki Area 11, Abuja",
    duration: "14 Months",
    capitalCommitted: "₦145,000,000",
    description: "Complete development and structural enhancement of premium commercial spaces, retail units, and corporate offices with 100% occupancy achieved.",
    achievements: [
      "Full tenancy lease locked for 5 years",
      "Guaranteed quarterly rental dividend distribution",
      "Energy-efficient solar rooftop generation installed"
    ],
    status: "Completed"
  },
  {
    id: "agro-valley",
    title: "Central Nigeria Maize & Soybean Agro-Cluster",
    sector: "Agro Allied & Agriculture",
    location: "Keffi - Abuja Agricultural Belt",
    duration: "24-Month Project Cycle",
    capitalCommitted: "₦260,000,000",
    description: "500-hectare mechanized cluster cultivating staple grains with automated processing silos and pre-contracted institutional off-takers.",
    achievements: [
      "Harvest yield exceeded target by 18%",
      "Direct off-take contract with regional animal feed manufacturers",
      "Created 120 seasonal and 35 permanent agricultural jobs"
    ],
    status: "Ongoing"
  },
  {
    id: "apex-residences",
    title: "Apex Prime Cooperative Housing Scheme",
    sector: "Real Estate & Housing",
    location: "Lugbe Airport Corridor, Abuja FCT",
    duration: "20 Months",
    capitalCommitted: "₦380,000,000",
    description: "Delivering modern 3-bedroom and 4-bedroom terrace homes for cooperative members with flexible equity repayment plans.",
    achievements: [
      "Phase 1 delivered with Certificate of Occupancy",
      "Phase 2 foundation works underway",
      "Member-subsidized acquisition price structure"
    ],
    status: "Phase 2 Expansion"
  },
  {
    id: "msme-fund",
    title: "Abuja Artisan & Market Enterprise Revolving Facility",
    sector: "MSME Support & Empowerment",
    location: "Wuse & Garki Commercial Hubs",
    duration: "Renewable 2-Year Program",
    capitalCommitted: "₦95,000,000",
    description: "Targeted capital injection and equipment leasing facility supporting small merchants, fashion designers, and metal fabricators.",
    achievements: [
      "99.2% on-time repayment and cycle reinvestment",
      "Over 450 micro-businesses actively financed",
      "Integrated cooperative point-of-sale bookkeeping"
    ],
    status: "Ongoing"
  }
];

export const WHO_WE_HELP = [
  {
    title: "Passive Income Investors",
    tagline: "High-yield dividend seekers wanting real-asset protection",
    benefits: [
      "8.5% monthly dividend schedule",
      "Audited multi-sector physical asset backing",
      "Quarterly audited performance statements"
    ],
    icon: "TrendingUp"
  },
  {
    title: "Diaspora Nigerians",
    tagline: "Safe, verifiable home-country investments without intermediary fraud",
    benefits: [
      "Direct oversight by chartered accounting auditors",
      "Foreign currency or Naira gateway options",
      "Tangible physical property and agricultural assets"
    ],
    icon: "Globe"
  },
  {
    title: "Small Business Owners & MSMEs",
    tagline: "Entrepreneurs requiring working capital & equipment",
    benefits: [
      "Low-barrier cooperative revolving capital",
      "Tooling and production machinery leasing",
      "Inter-member wholesale trading opportunities"
    ],
    icon: "Store"
  },
  {
    title: "Home Seekers & Land Owners",
    tagline: "Individuals building residential security in Abuja",
    benefits: [
      "Subsidized member pricing on estate land and units",
      "Transparent land title verification and surveying",
      "Flexible milestone-based payment structures"
    ],
    icon: "ShieldCheck"
  }
];

export const WHY_WORK_WITH_US = [
  {
    number: "01",
    title: "Commission Based On Real Projects",
    description: "We do not engage in speculative financial bets or paper schemes. Every Naira or Dollar is deployed directly into physical real estate, agriculture, manufacturing, or commercial trading with audited balance sheets."
  },
  {
    number: "02",
    title: "Subsidiary of Apex Capital India",
    description: "Backed by the international capital governance, operational pedigree, and project execution frameworks of Apex Capital India, providing institutional reliability."
  },
  {
    number: "03",
    title: "Officially Registered: RC: 9561637",
    description: "Fully recognized under the Nigerian Cooperative Societies regulations in Abuja FCT, providing members with legal transparency, verifiable leadership, and legal recourse."
  },
  {
    number: "04",
    title: "Rigorous Independent Audits",
    description: "Profit distributions occur strictly after independent statutory audits. Members receive complete financial accounts detailing revenue, costs, and project milestones."
  },
  {
    number: "05",
    title: "Predictable Payout Frequencies",
    description: "Tailor your earnings to your lifestyle. Receive payouts monthly (8.5%), quarterly (25.5%), biannually (51%), or yearly (102%) with punctual direct bank transfers."
  },
  {
    number: "06",
    title: "Dual-Tier Referral Program",
    description: "Grow with us. Earn an upfront 2% bonus of your referral's total capital plus 0.5% monthly for the full 24 months as long as their investment cycle remains active."
  }
];

export const PARTNERS_LIST = [
  { name: "Apex Capital India", role: "Parent Global Group" },
  { name: "FCT Dept. of Cooperatives", role: "Regulatory Oversight" },
  { name: "Apex Infrastructure Works", role: "Civil Engineering Partner" },
  { name: "Central Agri-Growers Consortium", role: "Agricultural Off-takers" },
  { name: "Chartered Audit Practice", role: "Independent Audit Firm" },
  { name: "Abuja Chambers of Commerce", role: "Trade & Commerce Network" }
];

export const TESTIMONIALS = [
  {
    name: "Alhaji Ibrahim Musa",
    role: "Retired Civil Servant & Commercial Member",
    location: "Garki, Abuja",
    quote: "Finding an investment in Abuja where your money is tied to real physical buildings and farms gave me peace of mind. My 8.5% monthly dividend has never missed a single due date.",
    rating: 5,
    sector: "Real Estate & Agriculture"
  },
  {
    name: "Dr. Ngozi Eze",
    role: "Healthcare Practitioner & Diaspora Member",
    location: "Abuja / London",
    quote: "As someone who lives part-time abroad, transparency was my main concern. Apex Capital's audited quarterly reports and responsive team in Garki make them Nigeria's standout cooperative.",
    rating: 5,
    sector: "Medical & Construction"
  },
  {
    name: "Engr. Yusuf Bello",
    role: "Contractor & MSME Partner",
    location: "Area 11, Abuja",
    quote: "The referral program alone is unmatched, receiving 2% upfront plus 0.5% every single month for 24 months has created an incredible second stream of earnings for my family.",
    rating: 5,
    sector: "Infrastructure & MSME"
  }
];

export const FAQS = [
  {
    q: "How does the 8.5% monthly dividend work?",
    a: "Your capital is deployed directly into our 8 operational sectors (real estate, mechanized farming, manufacturing, infrastructure, and merchandise). We distribute 8.5% dividend monthly or according to your chosen payout frequency with verified audit distributions."
  },
  {
    q: "What is the minimum or gateway investment amount?",
    a: "As indicated on our official charter, our investment gateway accepts 'Any Amount'. We cater to retail members starting from ₦100,000 as well as corporate and diaspora members deploying tens of millions of Naira."
  },
  {
    q: "Can I withdraw my principal before the 24-month cycle?",
    a: "In line with our constitution and to protect the underlying physical projects (such as crop gestation and property construction cycles), capital remains locked for the full 24 months until the audit cycle completes. After 24 months, you can renew or withdraw your principal."
  },
  {
    q: "How does the referral bonus work?",
    a: "When you introduce an investor, you receive an instant 2% cash bonus on their total invested amount, plus an ongoing 0.5% monthly dividend for the entire 24 months of their active investment cycle."
  },
  {
    q: "Where is your physical office located in Abuja?",
    a: "Our executive offices are at Bobsars Plaza C2 Second Floor, Michika Street, Opposite Assembly of God Church, Garki Area 11, FCT, Abuja, Nigeria. Visitors and prospective members are welcome during normal business hours."
  }
];
