export interface ProgramPoint {
  number: string;
  phase: "partnership" | "classroom" | "accountability";
  title: string;
  description: string;
}

export interface ProgramPhase {
  id: ProgramPoint["phase"];
  numeral: string;
  title: string;
  summary: string;
}

export const PROGRAM_PHASES: ProgramPhase[] = [
  {
    id: "partnership",
    numeral: "Phase I",
    title: "Public School Partnership & Capital Efficiency",
    summary:
      "Rather than building parallel private facilities, BVEF works inside existing government school buildings under a formal Education Department MOU.",
  },
  {
    id: "classroom",
    numeral: "Phase II",
    title: "Focused STEM Teaching & Offline Digital Delivery",
    summary:
      "Dedicated Three-Teacher Teams focus exclusively on STEM subjects, supported by offline digital lessons and solar-backed classroom hardware.",
  },
  {
    id: "accountability",
    numeral: "Phase III",
    title: "Local Retention, Exam Incentives & Dual Accountability",
    summary:
      "Hiring local female educators, tying annual bonuses to independent external exams, and maintaining clear academic oversight sustain measurable results.",
  },
];

export const NINE_POINT_MODEL: ProgramPoint[] = [
  {
    number: "01",
    phase: "partnership",
    title: "Formal Education Department MOU",
    description:
      "BVEF signs a formal Memorandum of Understanding with the local Education Department authorizing the Trust to provide, at its own cost, a Three-Teacher Team to supplement academic staff in a selected public school.",
  },
  {
    number: "02",
    phase: "partnership",
    title: "Zero Bricks-and-Mortar Overhead",
    description:
      "Instead of spending donor funds constructing new buildings, BVEF operates within existing government school infrastructure and directs capital toward teacher training, salaries, and classroom learning tools.",
  },
  {
    number: "03",
    phase: "classroom",
    title: "Dedicated STEM-Only Three-Teacher Team",
    description:
      "Each BVEF Three-Teacher Team focuses exclusively on Science, Technology, Engineering, and Mathematics (STEM) subjects, leaving non-STEM subjects to state-funded teachers so specialist effort is never diluted.",
  },
  {
    number: "04",
    phase: "classroom",
    title: "Curated Offline Digital Learning Resources",
    description:
      "Teacher-Teams are trained to make extensive use of offline digital learning libraries loaded onto classroom laptops, delivering rich visual STEM instruction reliably without internet connectivity.",
  },
  {
    number: "05",
    phase: "classroom",
    title: "Solar-Backed Digital Classroom Hardware Kit",
    description:
      "Donors equip supported classrooms with the complete hardware needed for digital instruction: a large TV screen, two laptops, extra speakers, and solar panels with battery backup where grid power is unreliable.",
  },
  {
    number: "06",
    phase: "accountability",
    title: "Primarily Local Female Educators",
    description:
      "Teacher-Teams are composed primarily of qualified local female staff from within Basho Valley—maximizing long-term retention where male teachers often depart for city livelihoods, and providing strong role models for students.",
  },
  {
    number: "07",
    phase: "accountability",
    title: "Subject-Specific Exam-Linked Incentives",
    description:
      "Teacher remuneration includes an annual bonus linked directly to student performance in external examinations—measured separately for each subject taught to motivate every educator to excel.",
  },
  {
    number: "08",
    phase: "accountability",
    title: "Continuous Monitoring & Evaluation",
    description:
      "An active monitoring and evaluation framework provides timely classroom feedback, enabling rapid corrective action throughout the academic term rather than waiting until year-end.",
  },
  {
    number: "09",
    phase: "accountability",
    title: "Dual Administrative & Academic Accountability",
    description:
      "While Teacher-Teams report administratively to the government school headmaster and follow school directives, they remain accountable to BVEF and exclusively follow BVEF-approved teaching methodologies and learning resources.",
  },
];

export interface ClassroomKitItem {
  code: string;
  name: string;
  detail: string;
}

export const CLASSROOM_KIT_ITEMS: ClassroomKitItem[] = [
  {
    code: "01",
    name: "Large Classroom TV Screen",
    detail:
      "Shared visual display allowing an entire class to follow animated science concepts, diagrams, and worked mathematics exercises together.",
  },
  {
    code: "02",
    name: "Two Pre-Loaded Laptops",
    detail:
      "Equipped with curated offline digital STEM curricula and structured teacher lesson plans that operate with zero internet dependence.",
  },
  {
    code: "03",
    name: "External Classroom Speakers",
    detail:
      "Clear audio projection for pronunciation, bilingual instruction comprehension, and group classroom demonstrations.",
  },
  {
    code: "04",
    name: "Solar Panels & Battery Backup",
    detail:
      "Off-grid power resilience ensuring digital lessons continue uninterrupted in a valley with only occasional grid electricity.",
  },
];

export interface ValleyReality {
  label: string;
  detail: string;
}

export const VALLEY_REALITIES: ValleyReality[] = [
  {
    label: "Access & Terrain",
    detail:
      "Reached by crossing a suspension bridge over the River Sind near Skardu, followed by a 20 km unpaved mountain track navigable only on foot or by specialized 4×4 jeeps.",
  },
  {
    label: "Basic Infrastructure",
    detail:
      "No running water, no sewage disposal, no internet, no central heating, no local medical facilities, no paved roads, and only occasional electricity and phone reception.",
  },
  {
    label: "Local School Landscape",
    detail:
      "Across 17 villages, there is only one high school; all other schools are primary or middle schools where staffing shortages have left many children unable to pass Middle School exams.",
  },
  {
    label: "Economic Stakes",
    detail:
      "Without foundational STEM and Urdu/English literacy, youth face futures limited to subsistence farming, herding cattle, or unskilled urban labor—with almost no students reaching university.",
  },
];

export interface SponsorshipPathway {
  id: string;
  category: string;
  title: string;
  summary: string;
  highlights: string[];
  inquiryTopic: string;
  ctaLabel: string;
}

export const SPONSORSHIP_PATHWAYS: SponsorshipPathway[] = [
  {
    id: "teacher-team",
    category: "Core Instruction",
    title: "Sponsor a Three-Teacher STEM Team",
    summary:
      "Underwrite a dedicated team of three local educators teaching STEM subjects inside an existing public school—complete with training and exam-linked performance bonuses.",
    highlights: [
      "Operates inside an existing government school under Education Department MOU",
      "Prioritizes qualified local female educators for lasting valley retention",
      "Annual bonuses tied to subject-level external examination results",
    ],
    inquiryTopic: "Sponsor a Three-Teacher STEM Team",
    ctaLabel: "Inquire about sponsoring a team",
  },
  {
    id: "digital-kit",
    category: "Classroom Hardware",
    title: "Equip an Offline Digital Classroom",
    summary:
      "Provide the complete hardware kit that brings modern visual STEM lessons to an off-grid mountain classroom with no internet access.",
    highlights: [
      "Large classroom TV screen and external speakers",
      "Two laptops pre-loaded with offline digital learning libraries",
      "Solar panels and battery backup for reliable off-grid operation",
    ],
    inquiryTopic: "Equip a Digital Classroom Kit",
    ctaLabel: "Inquire about classroom equipment",
  },
  {
    id: "expansion",
    category: "Institutional Partnership",
    title: "Partner on Next-Village Expansion",
    summary:
      "Collaborate with BVEF's seven Trustees to bring the School-Partnership Program to the 2nd school planned this year or one of the 16 remaining villages awaiting support.",
    highlights: [
      "Zero bricks-and-mortar capital overhead—100% focused on learning outcomes",
      "Ongoing monitoring, evaluation, and parent-teacher community engagement",
      "Direct dialogue with local teacher-Trustees guiding implementation",
    ],
    inquiryTopic: "Education Partnership",
    ctaLabel: "Discuss an institutional partnership",
  },
];
