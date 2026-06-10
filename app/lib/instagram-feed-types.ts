export type UserProfile = {
  id: string;
  username: string;
  name: string;
  avatar: string;
};

export type Story = UserProfile & {
  seen?: boolean;
};

export type InstagramPostBase = {
  id: string;
  user: UserProfile;
  location: string;
  timestamp: string;
  verified?: boolean;
  image: string;
  imageAlt: string;
  likes: string;
  caption: string;
  comments: string;
  commentList?: PostComment[];
};

export type Post = InstagramPostBase;

export type ExplorePost = InstagramPostBase & {
  aspect: "square" | "portrait" | "wide" | "tall";
  type?: "post" | "reel" | "carousel";
};

export type PostComment = {
  id: string;
  user: UserProfile;
  text: string;
  timestamp: string;
  likes?: string;
};

export type Suggestion = UserProfile & {
  reason: string;
};

export type MessagePreview = UserProfile & {
  status: string;
  unread?: boolean;
};
