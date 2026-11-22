export interface NavItem {
  label: string;
  href: string;
}

export interface LeadershipExperience {
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  domain: string;
  registrationNumber: string;
  ceo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedIn: string;
    bio: string;
    experience: LeadershipExperience[];
  };
  contact: {
    email: string;
    ceoEmail: string;
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
  domain: "https://example.org", // TBD: replace with custom domain
  registrationNumber: "TBD (Registered Charitable Trust)",
  ceo: {
    name: "Taj Muhammad",
    title: "Chief Executive Officer",
    email: "CEO.bvef@outlook.com",
    phone: "+92 341 7888621",
    linkedIn: "https://www.linkedin.com/in/taj-muhammad-9628531b6/",
    bio: "Brings over a decade of grassroots teaching in Basho Valley and large-scale nonprofit operations leadership across Pakistan, uniting community trust with proven digital learning execution.",
    experience: [
      {
        organization: "Teach the World Foundation",
        role: "Regional Operations Manager & Regional Manager (7+ Years)",
        period: "Sep 2019 – Present",
        location: "Karachi, Lahore & Islamabad, Pakistan",
        summary:
          "Leads field execution, strategy implementation, and program quality for digital literacy MicroSchools across South Sindh; previously served as Regional Manager Punjab, Project Manager for Smartphone Homeschooling, and Project Officer.",
      },
      {
        organization: "Iqra Fund",
        role: "Teacher — Govt Middle School Sultanabad, Basho",
        period: "Aug 2014 – Aug 2019 (5 Years)",
        location: "Basho Valley, Gilgit-Baltistan",
        summary:
          "Taught in one of Baltistan's remotest mountain communities, driving student enrollment with a focus on girls' education until reaching zero out-of-school children in the catchment area.",
      },
    ],
  },
  contact: {
    email: "bvef2025@outlook.com",
    ceoEmail: "CEO.bvef@outlook.com",
    phone: "+92 341 7888621",
    address: "Basho Valley, District Skardu, Gilgit-Baltistan",
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
    { label: "Contact", href: "/contact" },
  ],
};
