import type { ExplorePost, MessagePreview, Post, Story, Suggestion, UserProfile } from "@/app/lib/instagram-feed-types";

const avatar = (seed: string) => `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`;

export const currentUser: UserProfile = {
  id: "current",
  username: "riyan.studio",
  name: "Riyan Qureshi",
  avatar: avatar("riyan"),
};

export const stories: Story[] = [
  { id: "s1", username: "mikaframes", name: "Mika", avatar: avatar("mika") },
  { id: "s2", username: "urban.hues", name: "Urban Hues", avatar: avatar("urban") },
  { id: "s3", username: "noirwalks", name: "Noir Walks", avatar: avatar("noir") },
  { id: "s4", username: "flora.lab", name: "Flora", avatar: avatar("flora"), seen: true },
  { id: "s5", username: "pixelchef", name: "Pixel Chef", avatar: avatar("chef") },
  { id: "s6", username: "northlight", name: "North Light", avatar: avatar("north") },
  { id: "s7", username: "analog.tea", name: "Analog Tea", avatar: avatar("tea") },
  { id: "s8", username: "motionyard", name: "Motion Yard", avatar: avatar("motion") },
];

export const posts: Post[] = [
  {
    id: "p1",
    user: { id: "u1", username: "mikaframes", name: "Mika Tan", avatar: avatar("mika") },
    location: "SoHo, New York",
    timestamp: "18h",
    verified: true,
    image: "linear-gradient(145deg, #f97316 0%, #db2777 38%, #312e81 100%)",
    imageAlt: "Abstract sunset gradient over a city silhouette",
    likes: "14,982",
    caption: "Golden hour turned the whole block into a film still.",
    comments: "View all 238 comments",
    commentList: [
      { id: "c1", user: { id: "u3", username: "noirwalks", name: "Noir Walks", avatar: avatar("noir") }, text: "The color in this is unreal.", timestamp: "12m", likes: "18" },
      { id: "c2", user: { id: "u4", username: "flora.lab", name: "Flora", avatar: avatar("flora") }, text: "Feels like a movie poster.", timestamp: "34m", likes: "7" },
    ],
  },
  {
    id: "p2",
    user: { id: "u2", username: "urban.hues", name: "Urban Hues", avatar: avatar("urban") },
    location: "Copenhagen",
    timestamp: "1d",
    image: "radial-gradient(circle at 30% 20%, #fef3c7 0 10%, transparent 28%), linear-gradient(160deg, #0f172a, #155e75 48%, #84cc16)",
    imageAlt: "Stylized architectural color field",
    likes: "8,413",
    caption: "Soft geometry, loud color, quiet morning.",
    comments: "View all 91 comments",
    commentList: [
      { id: "c3", user: { id: "u5", username: "northlight", name: "North Light", avatar: avatar("north") }, text: "Clean lines everywhere.", timestamp: "8m", likes: "4" },
      { id: "c4", user: { id: "u6", username: "analog.tea", name: "Analog Tea", avatar: avatar("tea") }, text: "That green fade is perfect.", timestamp: "1h", likes: "11" },
    ],
  },
];

const exploreCommentUsers = [
  { id: "ecu1", username: "framehunter", name: "Frame Hunter", avatar: avatar("framehunter") },
  { id: "ecu2", username: "lowlight.liz", name: "Liz Moreno", avatar: avatar("lowlight") },
  { id: "ecu3", username: "mika.reply", name: "Mika Reply", avatar: avatar("mikareply") },
  { id: "ecu4", username: "tapegrain", name: "Tape Grain", avatar: avatar("tapegrain") },
  { id: "ecu5", username: "dailyobserver", name: "Daily Observer", avatar: avatar("observer") },
];

const exploreCommentText = [
  "This belongs on my saved board immediately.",
  "The colors are doing all the work here.",
  "I need the behind the scenes for this one.",
  "Scrolled back because this caught my eye.",
  "The composition is way too clean.",
  "This is exactly the side of Explore I want.",
];

const explorePostDetails = [
  { location: "Tokyo Night Market", timestamp: "2h", verified: true },
  { location: "Bedroom Cinema Club", timestamp: "4h" },
  { location: "Lower East Side", timestamp: "6h" },
  { location: "Home Kitchen", timestamp: "8h", verified: true },
  { location: "Group Chat", timestamp: "10h" },
  { location: "Plant Room", timestamp: "12h" },
  { location: "Matchday Live", timestamp: "14h", verified: true },
  { location: "Sunday Cafe", timestamp: "16h" },
  { location: "Detail Bay", timestamp: "18h" },
  { location: "Sketch Desk", timestamp: "20h" },
  { location: "Gate B12", timestamp: "22h" },
  { location: "Tiny Apartment", timestamp: "1d", verified: true },
  { location: "Midnight Rain", timestamp: "1d" },
  { location: "North Ridge", timestamp: "1d" },
  { location: "Save Point", timestamp: "2d", verified: true },
  { location: "Greenhouse", timestamp: "2d" },
  { location: "Poster Studio", timestamp: "2d" },
  { location: "Desk Reset", timestamp: "3d", verified: true },
  { location: "Reading Nook", timestamp: "3d" },
  { location: "Late Train", timestamp: "3d" },
  { location: "Film Lab", timestamp: "4d" },
  { location: "Facade Study", timestamp: "4d" },
  { location: "Render Queue", timestamp: "5d", verified: true },
  { location: "Blue Hour", timestamp: "5d" },
];

const makeExploreComments = (postId: string, offset: number) =>
  Array.from({ length: 4 }, (_, index) => ({
    id: `${postId}-comment-${index + 1}`,
    user: exploreCommentUsers[(offset + index) % exploreCommentUsers.length],
    text: exploreCommentText[(offset + index) % exploreCommentText.length],
    timestamp: index === 0 ? "12m" : index === 1 ? "48m" : index === 2 ? "2h" : "5h",
    likes: index === 0 ? "428" : index === 1 ? "96" : index === 2 ? "41" : "12",
  }));

const rawExplorePosts = [
  {
    id: "ex1",
    username: "lofi.frames",
    image: "radial-gradient(circle at 24% 18%, #fef9c3 0 9%, transparent 25%), linear-gradient(145deg, #111827, #7c2d12 42%, #f97316)",
    imageAlt: "Warm cinematic city night gradient",
    caption: "Night market glow",
    likes: "42.8K",
    comments: "312",
    aspect: "portrait",
    type: "carousel",
  },
  {
    id: "ex2",
    username: "sidequest.tv",
    image: "linear-gradient(160deg, #581c87, #1e1b4b 45%, #020617), radial-gradient(circle at 65% 20%, #c084fc 0 12%, transparent 28%)",
    imageAlt: "Purple anime room mock video still",
    caption: "That one comfort episode",
    likes: "118K",
    comments: "1,204",
    aspect: "tall",
    type: "reel",
  },
  {
    id: "ex3",
    username: "streetlens",
    image: "linear-gradient(135deg, #030712, #1f2937 38%, #eab308 39% 42%, #111827 43%), radial-gradient(circle at 72% 35%, #fef3c7 0 10%, transparent 22%)",
    imageAlt: "High contrast street photo mockup",
    caption: "Crosswalk shadows",
    likes: "8,921",
    comments: "86",
    aspect: "square",
  },
  {
    id: "ex4",
    username: "pixelchef",
    image: "radial-gradient(circle at 34% 30%, #fca5a5 0 11%, transparent 25%), linear-gradient(150deg, #7f1d1d, #fb7185 48%, #fed7aa)",
    imageAlt: "Colorful dessert table gradient",
    caption: "Strawberry cloud toast",
    likes: "27.3K",
    comments: "498",
    aspect: "portrait",
    type: "carousel",
  },
  {
    id: "ex5",
    username: "meme.archive",
    image: "linear-gradient(180deg, #f8fafc 0 34%, #111827 34% 38%, #f8fafc 38% 100%)",
    imageAlt: "Mock white meme screenshot with dark divider",
    caption: "Bro had one job",
    likes: "304K",
    comments: "8,812",
    aspect: "square",
    type: "carousel",
  },
  {
    id: "ex6",
    username: "plant.room",
    image: "radial-gradient(circle at 74% 18%, #bbf7d0 0 10%, transparent 25%), linear-gradient(140deg, #052e16, #166534 48%, #fde68a)",
    imageAlt: "Sunlit green plant room gradient",
    caption: "Monstera morning",
    likes: "15.6K",
    comments: "173",
    aspect: "portrait",
  },
  {
    id: "ex7",
    username: "matchday.cut",
    image: "linear-gradient(145deg, #052e16, #16a34a 36%, #f8fafc 37% 39%, #111827 40% 100%)",
    imageAlt: "Sports highlight color block",
    caption: "Last minute winner",
    likes: "91.4K",
    comments: "2,141",
    aspect: "wide",
    type: "reel",
  },
  {
    id: "ex8",
    username: "analog.tea",
    image: "linear-gradient(160deg, #451a03, #a16207 48%, #fef3c7), radial-gradient(circle at 35% 25%, #ffffff 0 7%, transparent 18%)",
    imageAlt: "Warm cafe table gradient",
    caption: "Slow Sunday pour",
    likes: "6,704",
    comments: "62",
    aspect: "portrait",
  },
  {
    id: "ex9",
    username: "dailychrome",
    image: "linear-gradient(135deg, #e5e7eb, #64748b 42%, #020617), radial-gradient(circle at 70% 25%, #f8fafc 0 8%, transparent 21%)",
    imageAlt: "Chrome car detail mock photo",
    caption: "Fresh detail day",
    likes: "33.1K",
    comments: "390",
    aspect: "square",
    type: "carousel",
  },
  {
    id: "ex10",
    username: "sketchbook.log",
    image: "linear-gradient(180deg, #fffbeb, #fef3c7 58%, #111827 58% 61%, #fffbeb 61%), radial-gradient(circle at 50% 45%, #ef4444 0 13%, transparent 22%)",
    imageAlt: "Illustration poster gradient",
    caption: "Character warmups",
    likes: "18K",
    comments: "256",
    aspect: "portrait",
  },
  {
    id: "ex11",
    username: "airportfits",
    image: "linear-gradient(155deg, #18181b, #3f3f46 35%, #d4d4d8 36% 49%, #09090b 50%)",
    imageAlt: "Minimal fashion fit gradient",
    caption: "Gate B12 uniform",
    likes: "55.7K",
    comments: "943",
    aspect: "tall",
    type: "reel",
  },
  {
    id: "ex12",
    username: "tiny.apartment",
    image: "radial-gradient(circle at 28% 22%, #fefce8 0 12%, transparent 29%), linear-gradient(140deg, #1f2937, #0f766e 50%, #f59e0b)",
    imageAlt: "Cozy apartment interior mockup",
    caption: "400 sq ft but make it calm",
    likes: "70.2K",
    comments: "1,103",
    aspect: "portrait",
    type: "carousel",
  },
  {
    id: "ex13",
    username: "noirwalks",
    image: "linear-gradient(180deg, #020617, #18181b 44%, #f8fafc 45% 47%, #020617 48% 100%)",
    imageAlt: "Black and white noir street mockup",
    caption: "Rain after midnight",
    likes: "12.4K",
    comments: "144",
    aspect: "square",
  },
  {
    id: "ex14",
    username: "trailmix.cam",
    image: "linear-gradient(145deg, #064e3b, #65a30d 42%, #fde68a 43% 48%, #0f172a 49%), radial-gradient(circle at 70% 18%, #fef9c3 0 8%, transparent 18%)",
    imageAlt: "Mountain trail sunrise gradient",
    caption: "5am ridge line",
    likes: "48.5K",
    comments: "621",
    aspect: "wide",
  },
  {
    id: "ex15",
    username: "retro.console",
    image: "linear-gradient(160deg, #0f172a, #312e81 45%, #db2777), radial-gradient(circle at 38% 30%, #22d3ee 0 9%, transparent 21%)",
    imageAlt: "Neon retro game setup mockup",
    caption: "Save point energy",
    likes: "86.9K",
    comments: "1,780",
    aspect: "tall",
    type: "reel",
  },
  {
    id: "ex16",
    username: "flora.lab",
    image: "radial-gradient(circle at 50% 28%, #f0fdf4 0 13%, transparent 24%), linear-gradient(145deg, #14532d, #84cc16 50%, #fefce8)",
    imageAlt: "Macro flower color study gradient",
    caption: "Greenhouse color study",
    likes: "9,338",
    comments: "81",
    aspect: "portrait",
  },
  {
    id: "ex17",
    username: "studio.ember",
    image: "linear-gradient(135deg, #450a0a, #dc2626 36%, #facc15 37% 40%, #111827 41% 100%)",
    imageAlt: "Bold music poster mockup",
    caption: "Tour poster draft",
    likes: "25K",
    comments: "427",
    aspect: "square",
  },
  {
    id: "ex18",
    username: "desksetup.io",
    image: "linear-gradient(150deg, #020617, #334155 46%, #38bdf8), radial-gradient(circle at 78% 18%, #e0f2fe 0 8%, transparent 22%)",
    imageAlt: "Blue desk setup gradient",
    caption: "Cable reset complete",
    likes: "62.6K",
    comments: "1,002",
    aspect: "portrait",
    type: "carousel",
  },
  {
    id: "ex19",
    username: "bookmarked",
    image: "linear-gradient(180deg, #f5f5f4, #d6d3d1 56%, #78350f 57% 61%, #f5f5f4 62%)",
    imageAlt: "Book quote card mockup",
    caption: "A line worth underlining",
    likes: "11.9K",
    comments: "209",
    aspect: "square",
  },
  {
    id: "ex20",
    username: "citypop.fm",
    image: "linear-gradient(160deg, #082f49, #06b6d4 42%, #f472b6 43% 58%, #111827 59%), radial-gradient(circle at 32% 20%, #fef08a 0 8%, transparent 20%)",
    imageAlt: "Neon city pop cover mockup",
    caption: "Late train playlist",
    likes: "139K",
    comments: "3,448",
    aspect: "tall",
    type: "reel",
  },
  {
    id: "ex21",
    username: "grainandglow",
    image: "radial-gradient(circle at 40% 24%, #fed7aa 0 10%, transparent 25%), linear-gradient(145deg, #431407, #c2410c 46%, #fef3c7)",
    imageAlt: "Golden film portrait gradient",
    caption: "Portra tones forever",
    likes: "19.7K",
    comments: "232",
    aspect: "portrait",
  },
  {
    id: "ex22",
    username: "quietgrid",
    image: "linear-gradient(90deg, #111827 0 10%, #f8fafc 10% 12%, #111827 12% 24%, #f8fafc 24% 26%, #111827 26%), linear-gradient(180deg, #0f172a, #64748b)",
    imageAlt: "Architectural grid color field",
    caption: "Facade study",
    likes: "7,814",
    comments: "73",
    aspect: "wide",
  },
  {
    id: "ex23",
    username: "motionyard",
    image: "linear-gradient(145deg, #1e1b4b, #7c3aed 40%, #f97316 41% 52%, #020617 53%)",
    imageAlt: "Motion graphics frame gradient",
    caption: "Keyframe chaos",
    likes: "46.2K",
    comments: "617",
    aspect: "portrait",
    type: "reel",
  },
  {
    id: "ex24",
    username: "northlight",
    image: "radial-gradient(circle at 62% 16%, #dbeafe 0 11%, transparent 24%), linear-gradient(150deg, #0c4a6e, #38bdf8 45%, #f8fafc)",
    imageAlt: "Icy northern light landscape gradient",
    caption: "Blue hour silence",
    likes: "31.5K",
    comments: "401",
    aspect: "square",
    type: "carousel",
  },
] satisfies Array<{
  id: string;
  username: string;
  image: string;
  imageAlt: string;
  caption: string;
  likes: string;
  comments: string;
  aspect: ExplorePost["aspect"];
  type?: ExplorePost["type"];
}>;

export const explorePosts: ExplorePost[] = rawExplorePosts.map((post, index) => {
  const details = explorePostDetails[index % explorePostDetails.length];

  return {
    ...post,
    user: {
      id: `explore-user-${index + 1}`,
      username: post.username,
      name: post.username
        .split(/[._]/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" "),
      avatar: avatar(post.username),
    },
    location: details.location,
    timestamp: details.timestamp,
    verified: details.verified,
    commentList: makeExploreComments(post.id, index),
  };
});

export const suggestions: Suggestion[] = [
  { id: "sg1", username: "grainandglow", name: "Grain & Glow", avatar: avatar("grain"), reason: "Suggested for you" },
  { id: "sg2", username: "studio.ember", name: "Studio Ember", avatar: avatar("ember"), reason: "Followed by mikaframes" },
  { id: "sg3", username: "quietgrid", name: "Quiet Grid", avatar: avatar("grid"), reason: "New to the network" },
  { id: "sg4", username: "dailychrome", name: "Daily Chrome", avatar: avatar("chrome"), reason: "Popular" },
];

export const messages: MessagePreview[] = [
  { id: "m1", username: "noirwalks", name: "Noir Walks", avatar: avatar("noir"), status: "Sent a reel 2m ago", unread: true },
  { id: "m2", username: "flora.lab", name: "Flora", avatar: avatar("flora"), status: "Active now" },
  { id: "m3", username: "northlight", name: "North Light", avatar: avatar("north"), status: "Liked your message" },
  { id: "m4", username: "analog.tea", name: "Analog Tea", avatar: avatar("tea"), status: "Seen yesterday" },
];
