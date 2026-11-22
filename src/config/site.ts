export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  domain: string;
  registrationNumber: string;
  isRegistrationPending: boolean;
  contact: {
    isPlaceholder: boolean;
    email: string;
    phone: string;
    address: string;
  };
  donation: {
    status: "pending" | "active";
    instructionsPlaceholder: string;
    bankName: string;
    accountTitle: string;
    iban: string;
  };
  stats: {
    altitude: string;
    distanceFromSkardu: string;
    distanceFromK2: string;
    distanceFromNangaParbat: string;
    distanceFromRakaposhi: string;
    totalVillages: number;
    highSchoolsInValley: number;
    activePartnerSchools: number;
    plannedNextYearSchools: number;
    villagesWaiting: number;
    trusteesCount: number;
  };
  nav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Basho Valley Education Foundation",
  shortName: "BVEF",
  tagline: "Community-Led STEM Education Across the High Himalayas",
  description:
    "A duly registered charitable Trust established by the residents of Basho Valley to improve STEM learning outcomes inside existing public schools through local Three-Teacher Teams and offline digital classrooms.",
  // Deferred production details — update once finalized
  domain: "https://bashovalleyeducationfoundation.vercel.app", // TBD: replace with custom domain once registered
  registrationNumber: "Registered Charitable Trust",
  isRegistrationPending: true, // Flip to false once official registration number is added above
  contact: {
    isPlaceholder: true, // Flip to false once official email & phone are finalized
    email: "contact@bvef-placeholder.org", // TBD: replace with official email
    phone: "+92 (TBD) 000-0000", // TBD: replace with official phone/WhatsApp
    address: "Basho Valley, District Skardu, Gilgit-Baltistan",
  },
  donation: {
    status: "pending", // Flip to "active" once official Trust bank/IBAN details are finalized
    instructionsPlaceholder:
      "Verified Trust bank transfer instructions and international remittance details are shared directly upon inquiry while our public banking page is being finalized.",
    bankName: "TBD",
    accountTitle: "Basho Valley Education Foundation",
    iban: "TBD",
  },
  stats: {
    altitude: "8,800–11,800 ft",
    distanceFromSkardu: "20 km unpaved mountain track",
    distanceFromK2: "68 mi from K2",
    distanceFromNangaParbat: "46 mi from Nanga Parbat",
    distanceFromRakaposhi: "66 mi from Rakaposhi",
    totalVillages: 17,
    highSchoolsInValley: 1,
    activePartnerSchools: 1,
    plannedNextYearSchools: 1,
    villagesWaiting: 16,
    trusteesCount: 7,
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Program", href: "/program" },
    { label: "Gallery", href: "/gallery" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" },
  ],
};
