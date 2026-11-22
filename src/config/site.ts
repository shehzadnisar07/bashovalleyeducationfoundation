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
  contact: {
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
  tagline: "Transforming Learning Outcomes in Basho Valley",
  description:
    "A registered charitable Trust improving STEM learning outcomes for children in Basho Valley through local Three-Teacher Teams and offline digital classrooms.",
  // Deferred production details — update once finalized
  domain: "https://example.org", // TBD: replace with custom domain
  registrationNumber: "TBD (Registered Charitable Trust)",
  contact: {
    email: "contact@bvef-placeholder.org", // TBD: replace with official email
    phone: "+92 (TBD) 000-0000", // TBD: replace with official phone/WhatsApp
    address: "Basho Valley, District Skardu, Gilgit-Baltistan", // TBD: add mailing address
  },
  donation: {
    status: "pending",
    instructionsPlaceholder:
      "Official Trust bank transfer and online donation details are being finalized. Please contact us directly to sponsor a Three-Teacher Team or equip a digital classroom.",
    bankName: "TBD",
    accountTitle: "Basho Valley Education Foundation",
    iban: "TBD",
  },
  stats: {
    altitude: "8,800–11,800 ft",
    distanceFromSkardu: "20 km mountain track",
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
