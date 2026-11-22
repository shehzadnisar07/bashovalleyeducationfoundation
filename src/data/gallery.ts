export type GalleryCategoryId =
  | "all"
  | "valley-views"
  | "village"
  | "morning-assembly"
  | "classes"
  | "exams"
  | "school-building"
  | "children"
  | "teachers"
  | "parent-teacher-meeting";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategoryId, "all">;
}

export interface GalleryCategory {
  id: GalleryCategoryId;
  label: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "all", label: "All Photos" },
  { id: "valley-views", label: "Valley Views" },
  { id: "village", label: "Village" },
  { id: "morning-assembly", label: "Morning Assembly" },
  { id: "classes", label: "Classes" },
  { id: "exams", label: "Exams" },
  { id: "school-building", label: "School Building" },
  { id: "children", label: "Children" },
  { id: "teachers", label: "Teachers" },
  { id: "parent-teacher-meeting", label: "Parent-Teacher Meetings" },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "valley-1",
    src: "/images/valley-views/image1.jpg",
    alt: "Panoramic view of Basho Valley surrounded by high Himalayan peaks",
    caption: "Basho Valley mountain landscape (8,800–11,800 ft altitude)",
    category: "valley-views",
  },
  {
    id: "valley-2",
    src: "/images/valley-views/image2.jpg",
    alt: "Mountain slopes and terraced fields in Basho Valley",
    caption: "Terraced fields and high-altitude valley terrain",
    category: "valley-views",
  },
  {
    id: "valley-3",
    src: "/images/valley-views/image3.jpg",
    alt: "Scenic ridge overlooking Basho Valley settlements",
    caption: "View across the upper Basho Valley settlements",
    category: "valley-views",
  },
  {
    id: "valley-4",
    src: "/images/valley-views/image4.jpg",
    alt: "River and mountain track leading toward Basho Valley",
    caption: "Mountain approach along the 20 km track from the River Sind",
    category: "valley-views",
  },
  {
    id: "valley-5",
    src: "/images/valley-views/image5.jpg",
    alt: "Snow-dusted Himalayan peaks rising above Basho Valley",
    caption: "Himalayan peaks framing the valley communities",
    category: "valley-views",
  },
  {
    id: "valley-6",
    src: "/images/valley-views/image6.jpg",
    alt: "Valley greenery and mountain stream in Basho Valley",
    caption: "Springtime greenery in Basho Valley",
    category: "valley-views",
  },
  {
    id: "village-1",
    src: "/images/village/village-01.png",
    alt: "Homes and agricultural plots in a Basho Valley village",
    caption: "A rural village community in Basho Valley",
    category: "village",
  },
  {
    id: "village-2",
    src: "/images/village/village-02.png",
    alt: "Traditional stone and timber dwellings in Basho Valley",
    caption: "Traditional village architecture nestled against the mountains",
    category: "village",
  },
  {
    id: "village-3",
    src: "/images/village/village-03.png",
    alt: "Wide view of village households in Basho Valley",
    caption: "One of the 17 villages across Basho Valley",
    category: "village",
  },
  {
    id: "assembly-7",
    src: "/images/morning-assembly/image7.jpeg",
    alt: "Students lined up for morning assembly at the partner school",
    caption: "Students gathered for morning assembly",
    category: "morning-assembly",
  },
  {
    id: "assembly-8",
    src: "/images/morning-assembly/image8.jpeg",
    alt: "Morning assembly in the school courtyard in Basho Valley",
    caption: "Daily morning assembly before classes begin",
    category: "morning-assembly",
  },
  {
    id: "assembly-9",
    src: "/images/morning-assembly/image9.jpg",
    alt: "Students standing in neat rows during morning assembly",
    caption: "Building routine and community spirit at morning assembly",
    category: "morning-assembly",
  },
  {
    id: "assembly-10",
    src: "/images/morning-assembly/image10.jpg",
    alt: "Teachers and students together at morning assembly",
    caption: "Teachers guiding students during the morning gathering",
    category: "morning-assembly",
  },
  {
    id: "classes-11",
    src: "/images/classes/image11.jpg",
    alt: "Students engaged in a classroom lesson at the partner school",
    caption: "Active classroom instruction with local educators",
    category: "classes",
  },
  {
    id: "classes-12",
    src: "/images/classes/image12.jpg",
    alt: "Children learning together inside a Basho Valley classroom",
    caption: "Focused STEM and foundational learning in class",
    category: "classes",
  },
  {
    id: "classes-13",
    src: "/images/classes/image13.jpg",
    alt: "Students studying with digital learning materials in class",
    caption: "Classroom session supported by digital learning tools",
    category: "classes",
  },
  {
    id: "exams-14",
    src: "/images/exams/image14.jpeg",
    alt: "Students taking written examinations at the partner school",
    caption: "External exam preparation and assessment",
    category: "exams",
  },
  {
    id: "exams-15",
    src: "/images/exams/image15.jpg",
    alt: "Focused students completing exam papers in the classroom",
    caption: "Measuring learning outcomes through external exams",
    category: "exams",
  },
  {
    id: "building-16",
    src: "/images/school-building/image16.jpg",
    alt: "Exterior of the existing government school building in Basho Valley",
    caption: "Partnering within existing public school buildings",
    category: "school-building",
  },
  {
    id: "building-17",
    src: "/images/school-building/image17.jpg",
    alt: "School courtyard and mountain backdrop",
    caption: "School grounds set against the Himalayan slopes",
    category: "school-building",
  },
  {
    id: "building-18",
    src: "/images/school-building/image18.jpg",
    alt: "View of the partner school campus and classrooms",
    caption: "Zero bricks-and-mortar spending — investing directly in teaching",
    category: "school-building",
  },
  {
    id: "building-19",
    src: "/images/school-building/image19.jpg",
    alt: "School building entrance and surrounding compound",
    caption: "Existing school infrastructure strengthened by BVEF",
    category: "school-building",
  },
  {
    id: "building-20",
    src: "/images/school-building/image20.jpg",
    alt: "Partner school facility in Basho Valley",
    caption: "Community public school serving Basho Valley children",
    category: "school-building",
  },
  {
    id: "children-21",
    src: "/images/children/image21.jpg",
    alt: "Smiling schoolchildren in Basho Valley",
    caption: "Students thriving in the partner school program",
    category: "children",
  },
  {
    id: "children-22",
    src: "/images/children/image22.jpg",
    alt: "Young learners from Basho Valley together at school",
    caption: "Empowering children across Basho Valley with quality education",
    category: "children",
  },
  {
    id: "teachers-23",
    src: "/images/teachers/image23.jpg",
    alt: "Educators from the BVEF Three-Teacher Team at the partner school",
    caption: "Local educators leading STEM instruction",
    category: "teachers",
  },
  {
    id: "ptm-24",
    src: "/images/parent-teacher-meeting/image24.jpg",
    alt: "Parents and teachers meeting to discuss student progress",
    caption: "Parent-teacher engagement strengthening community trust",
    category: "parent-teacher-meeting",
  },
  {
    id: "ptm-25",
    src: "/images/parent-teacher-meeting/image25.jpg",
    alt: "Community parents gathered at a school review meeting",
    caption: "Sharing student progress with families in Basho Valley",
    category: "parent-teacher-meeting",
  },
];
