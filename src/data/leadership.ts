import { siteConfig } from "@/config/site";

export type LeadershipExperience = {
  period: string;
  organization: string;
  role: string;
  summary: string;
};

export type LeadershipMember = {
  id: string;
  name: string;
  initials: string;
  designation: string;
  location?: string;
  image?: string;
  bio: string;
  expertise: string[];
  contact?: {
    email?: string;
    phone?: string;
    linkedIn?: string;
  };
  experience?: LeadershipExperience[];
};

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    id: "taj-muhammad",
    name: siteConfig.ceo.name,
    initials: "TM",
    designation: siteConfig.ceo.title,
    location: "Basho Valley, Gilgit-Baltistan",
    image: "/images/leadership/taj-muhammad.jpg",
    bio: "With over a decade of experience in education and nonprofit leadership, Taj Muhammad brings deep grassroots knowledge and operational expertise to expanding educational opportunities. From teaching in remote communities of Basho Valley to leading regional digital learning initiatives across Pakistan, his work focuses on making quality education accessible to underserved children.",
    expertise: [
      "Nonprofit Operations",
      "Digital Learning",
      "Community Education",
    ],
    contact: {
      email: siteConfig.ceo.email,
      phone: siteConfig.ceo.phone,
      linkedIn: siteConfig.ceo.linkedIn,
    },
    experience: [
      {
        period: "2019 – Present",
        organization: "Teach the World Foundation",
        role: "Regional Operations Manager",
        summary:
          "Leads field execution, strategy implementation, and program quality for digital literacy MicroSchools across South Sindh; previously served as Regional Manager Punjab, Project Manager for Smartphone Homeschooling, and Project Officer.",
      },
      {
        period: "2014 – 2019",
        organization: "Iqra Fund",
        role: "Teacher – Government Middle School Sultanabad, Basho",
        summary:
          "Taught in one of Baltistan's remotest mountain communities, driving student enrollment with a dedicated focus on girls' education.",
      },
    ],
  },
  {
    id: "muhammad-irshaad",
    name: "Muhammad Irshaad",
    initials: "MI",
    designation: "Regional Manager",
    location: "Basho Valley, Gilgit-Baltistan",
    bio: "A government school teacher with over a decade of classroom experience in the region, Muhammad Irshaad supports BVEF's field coordination across Basho Valley. His background in public-sector education helps bridge partner-school teams, local educators, and community families.",
    expertise: [
      "Public School Instruction",
      "Regional Coordination",
      "Teacher Support",
    ],
    experience: [
      {
        period: "Present",
        organization: "Basho Valley Education Foundation",
        role: "Regional Manager",
        summary:
          "Coordinates partner-school operations, Three-Teacher Team support, and community engagement across Basho Valley.",
      },
      {
        period: "10+ Years",
        organization: "Government Education Department",
        role: "Government School Teacher",
        summary:
          "Over ten years of classroom teaching, student mentorship, and public-school instruction in the region.",
      },
    ],
  },
];
