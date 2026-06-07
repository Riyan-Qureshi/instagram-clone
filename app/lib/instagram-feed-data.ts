import type { MessagePreview, Post, Story, Suggestion, UserProfile } from "@/app/lib/instagram-feed-types";

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
  },
];

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
