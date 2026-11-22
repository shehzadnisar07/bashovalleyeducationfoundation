export interface ProgramPoint {
  number: string;
  title: string;
  description: string;
}

export const NINE_POINT_MODEL: ProgramPoint[] = [
  {
    number: "01",
    title: "Education Department MOU",
    description:
      "BVEF signs a formal Memorandum of Understanding with the local Education Department to supplement public school staff rather than duplicate infrastructure.",
  },
  {
    number: "02",
    title: "Three-Teacher STEM Team",
    description:
      "Each partner school receives a dedicated team of three qualified teachers focused on Science, Technology, Engineering, and Mathematics (STEM) alongside core literacy.",
  },
  {
    number: "03",
    title: "Zero Bricks-and-Mortar Overhead",
    description:
      "Classes operate inside existing government school buildings, ensuring donor funds go directly to instruction, teacher salaries, and classroom technology.",
  },
  {
    number: "04",
    title: "Offline Digital Learning Resources",
    description:
      "Teachers use curated offline digital lessons on laptops so high-quality STEM content works reliably without internet connectivity.",
  },
  {
    number: "05",
    title: "Local Female Educators",
    description:
      "Hiring primarily qualified local female teachers maximizes long-term retention in the valley and creates strong role models for girls and boys alike.",
  },
  {
    number: "06",
    title: "Exam-Linked Teacher Bonuses",
    description:
      "Teacher performance incentives are linked directly to students' results in independent external examinations, aligning effort with measurable learning outcomes.",
  },
  {
    number: "07",
    title: "Ongoing Monitoring & Evaluation",
    description:
      "Regular classroom observations, attendance tracking, and parent-teacher meetings keep standards high throughout the academic year.",
  },
  {
    number: "08",
    title: "Digital Classroom Hardware Kit",
    description:
      "Every supported classroom is equipped with a large TV screen, two laptops, extra speakers, and solar panels with battery backup where grid power is unavailable.",
  },
  {
    number: "09",
    title: "Trust Governance & Accountability",
    description:
      "Guided by seven Trustees—most of whom are teachers working in Basho Valley—every rupee is stewarded with local insight and charitable Trust accountability.",
  },
];

export interface ClassroomKitItem {
  name: string;
  detail: string;
}

export const CLASSROOM_KIT_ITEMS: ClassroomKitItem[] = [
  {
    name: "Classroom TV Screen",
    detail: "Large display for whole-class visual STEM demonstrations and interactive lessons.",
  },
  {
    name: "Two Laptops",
    detail: "Loaded with curated offline digital learning libraries and teacher lesson plans.",
  },
  {
    name: "Extra Speakers",
    detail: "Clear classroom audio for phonics, science explanations, and group exercises.",
  },
  {
    name: "Solar Panels & Battery Backup",
    detail: "Reliable off-grid power so digital lessons continue uninterrupted in mountain weather.",
  },
];
