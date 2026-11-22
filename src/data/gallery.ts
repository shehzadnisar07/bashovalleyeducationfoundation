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
  objectPosition?: "center" | "top";
}

export interface GalleryCategory {
  id: GalleryCategoryId;
  label: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "all", label: "All Photos" },
  { id: "valley-views", label: "Valley & Approach" },
  { id: "village", label: "Alpine Meadows" },
  { id: "morning-assembly", label: "Morning Assembly" },
  { id: "classes", label: "Classrooms" },
  { id: "exams", label: "Examinations" },
  { id: "school-building", label: "School Campus" },
  { id: "children", label: "Students" },
  { id: "teachers", label: "Educators" },
  { id: "parent-teacher-meeting", label: "Parent-Teacher Meetings" },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "valley-1",
    src: "/images/valley-views/image1.jpg",
    alt: "Wooden suspension bridge with blue railings spanning the River Sind beneath steep rocky cliffs toward Basho Valley",
    caption: "The suspension bridge across the River Sind—the gateway to Basho Valley",
    category: "valley-views",
  },
  {
    id: "valley-2",
    src: "/images/valley-views/image2.jpg",
    alt: "Snow-covered suspension bridge over the icy turquoise River Sind surrounded by winter Himalayan slopes",
    caption: "Winter crossing over the River Sind when snow blankets the valley approach",
    category: "valley-views",
  },
  {
    id: "valley-3",
    src: "/images/valley-views/image3.jpg",
    alt: "High-altitude pasture with grazing cattle overlooking snow-dusted Himalayan peaks in Basho Valley",
    caption: "Pastoral highland terrain beneath snow-dusted peaks in Basho Valley",
    category: "valley-views",
  },
  {
    id: "valley-4",
    src: "/images/valley-views/image4.jpg",
    alt: "Wide view of a Basho Valley village with terraced fields, poplar trees, and the partner school building beneath sunlit mountain ridges",
    caption: "Basho Valley village, terraced fields, and the partner public school",
    category: "valley-views",
  },
  {
    id: "valley-5",
    src: "/images/valley-views/image5.jpg",
    alt: "Towering Himalayan granite mountain wall rising above the turquoise River Sind and narrow valley floor",
    caption: "Steep Himalayan walls towering above the River Sind gorge",
    category: "valley-views",
  },
  {
    id: "valley-6",
    src: "/images/valley-views/image6.jpg",
    alt: "Unpaved mountain track carved along steep cliffs overlooking green terraced valley plots and snow-capped peaks",
    caption: "The unpaved 20 km mountain track winding above terraced village plots",
    category: "valley-views",
  },
  {
    id: "village-1",
    src: "/images/village/village-01.png",
    alt: "Green alpine meadow in upper Basho Valley with a wooden footbridge over a clear stream and towering mountain peaks",
    caption: "Upper Basho alpine meadow and glacial stream in summer",
    category: "village",
  },
  {
    id: "village-2",
    src: "/images/village/village-02.png",
    alt: "Cloud-wrapped Himalayan peaks rising behind a rushing glacial river and pine-lined meadow in Basho Valley",
    caption: "Glacial river and cloud-shrouded peaks in the upper valley",
    category: "village",
  },
  {
    id: "village-3",
    src: "/images/village/village-03.png",
    alt: "Misty alpine slopes and high meadows overlooking Basho Valley",
    caption: "High-altitude summer pastures beneath mist-covered ridges",
    category: "village",
  },
  {
    id: "assembly-7",
    src: "/images/morning-assembly/image7.jpeg",
    alt: "Students in blue and white uniforms lined up for morning assembly in the sunlit school courtyard beside the BVEF emblem map",
    caption: "Morning assembly in the partner school courtyard",
    category: "morning-assembly",
  },
  {
    id: "assembly-8",
    src: "/images/morning-assembly/image8.jpeg",
    alt: "Students standing in neat rows during morning assembly in front of the whitewashed school building",
    caption: "Daily morning assembly before STEM and core classes begin",
    category: "morning-assembly",
  },
  {
    id: "assembly-9",
    src: "/images/morning-assembly/image9.jpg",
    alt: "Students assembled in the school courtyard with snow-dusted peaks rising in the background",
    caption: "Morning gathering framed by the surrounding Himalayan slopes",
    category: "morning-assembly",
  },
  {
    id: "assembly-10",
    src: "/images/morning-assembly/image10.jpg",
    alt: "Younger students standing in morning assembly lines beneath tall poplar trees",
    caption: "Primary and middle school students starting the school day together",
    category: "morning-assembly",
  },
  {
    id: "classes-11",
    src: "/images/classes/image11.jpg",
    alt: "Instructor and student holding a visual chart at the blackboard while students seated on the floor follow the lesson",
    caption: "Active classroom instruction inside the partner public school",
    category: "classes",
  },
  {
    id: "classes-12",
    src: "/images/classes/image12.jpg",
    alt: "Smiling girls and boys sitting together on woven classroom mats clapping during an interactive lesson",
    caption: "Students participating enthusiastically in a group classroom session",
    category: "classes",
  },
  {
    id: "classes-13",
    src: "/images/classes/image13.jpg",
    alt: "Students reading notebooks and textbooks outdoors along the sunlit veranda of the partner school",
    caption: "Independent reading and review along the school veranda",
    category: "classes",
    objectPosition: "top",
  },
  {
    id: "exams-14",
    src: "/images/exams/image14.jpeg",
    alt: "Students seated apart in the sunlit school courtyard writing examination papers on clipboards",
    caption: "Students writing formal examinations in the school courtyard",
    category: "exams",
  },
  {
    id: "exams-15",
    src: "/images/exams/image15.jpg",
    alt: "Invigilator overseeing students seated along the stone courtyard wall during written examinations",
    caption: "Structured examination assessment measuring learning outcomes",
    category: "exams",
  },
  {
    id: "building-16",
    src: "/images/school-building/image16.jpg",
    alt: "Whitewashed veranda with terracotta columns of the existing government school building beneath dry mountain slopes",
    caption: "Existing public school veranda strengthened through BVEF's partnership",
    category: "school-building",
  },
  {
    id: "building-17",
    src: "/images/school-building/image17.jpg",
    alt: "Partner school courtyard and surrounding stone boundary wall in Basho Valley",
    caption: "Partner school grounds operating without bricks-and-mortar overhead",
    category: "school-building",
  },
  {
    id: "building-18",
    src: "/images/school-building/image18.jpg",
    alt: "Elevated view of the L-shaped stone-and-tin-roofed government school building surrounded by village rooftops",
    caption: "Overhead view of the existing public school campus within the village",
    category: "school-building",
  },
  {
    id: "building-19",
    src: "/images/school-building/image19.jpg",
    alt: "Exterior entrance and courtyard of the Basho Valley public school building",
    caption: "Public school classrooms serving children from surrounding households",
    category: "school-building",
  },
  {
    id: "building-20",
    src: "/images/school-building/image20.jpg",
    alt: "Full facade of the partner public school building in Basho Valley",
    caption: "Leveraging existing public infrastructure to direct funds to teaching",
    category: "school-building",
  },
  {
    id: "children-21",
    src: "/images/children/image21.jpg",
    alt: "Portrait of three young schoolgirls in white headscarves and blue uniforms smiling beside a traditional stone wall",
    caption: "Three young learners at the Basho Valley partner school",
    category: "children",
    objectPosition: "top",
  },
  {
    id: "children-22",
    src: "/images/children/image22.jpg",
    alt: "Four students sitting together in sunlight on the school veranda writing in notebooks",
    caption: "Students reviewing lessons together between classes",
    category: "children",
    objectPosition: "top",
  },
  {
    id: "teachers-23",
    src: "/images/teachers/image23.jpg",
    alt: "Five local educators—two female teachers and three male teachers—standing together at the partner school",
    caption: "Local educators teaching and mentoring students in Basho Valley",
    category: "teachers",
    objectPosition: "top",
  },
  {
    id: "ptm-24",
    src: "/images/parent-teacher-meeting/image24.jpg",
    alt: "Mothers in colorful traditional shawls and fathers seated on wooden chairs in the school courtyard for a parent-teacher meeting",
    caption: "Parents and families gathered in the courtyard for a progress review",
    category: "parent-teacher-meeting",
  },
  {
    id: "ptm-25",
    src: "/images/parent-teacher-meeting/image25.jpg",
    alt: "Community parents, students, and educators assembled outdoors during a winter school review meeting",
    caption: "Community-wide parent-teacher meeting strengthening local accountability",
    category: "parent-teacher-meeting",
  },
];
