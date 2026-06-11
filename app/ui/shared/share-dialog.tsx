"use client";

import { Copy, Globe, Mail, MessageCircle, Search, Send, X } from "lucide-react";
import { useState } from "react";
import type { PostComment, UserProfile } from "@/app/lib/instagram-feed-types";
import { Avatar } from "@/app/ui/shared/avatar";

const shareTargets = [
  { label: "Copy link", icon: Copy },
  { label: "Facebook", icon: Globe },
  { label: "Messenger", icon: MessageCircle },
  { label: "WhatsApp", icon: Send },
  { label: "Email", icon: Mail },
  { label: "Threads", icon: MessageCircle },
  { label: "X", icon: X },
];

type ShareDialogProps = {
  postId: string;
  route: "feed" | "explore";
  user: UserProfile;
  comments: PostComment[];
  onClose: () => void;
};

export function ShareDialog({ postId, route, user, comments, onClose }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);

  const copyPostLink = async () => {
    const url = `${window.location.origin}/${route}?post=${postId}`;
    await navigator.clipboard?.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  const shareUsers = [user, ...comments.map((comment) => comment.user)].slice(0, 8);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/76 px-4" role="dialog" aria-modal="true" aria-label="Share post">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-[#24272d] text-white shadow-2xl">
        <header className="relative border-b border-zinc-800 px-5 py-4 text-center font-bold">
          <button aria-label="Close share modal" className="absolute left-5 top-3" type="button" onClick={onClose}>
            <X className="size-7" />
          </button>
          Share
        </header>
        <div className="p-4">
          <label className="flex items-center gap-3 rounded bg-[#2c3037] px-4 py-3 text-sm text-zinc-300">
            <Search className="size-5" />
            <input className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-zinc-400" placeholder="Search" />
          </label>
          <div className="grid grid-cols-3 gap-6 py-6 sm:grid-cols-4">
            {shareUsers.map((shareUser) => (
              <button className="min-w-0 text-center" type="button" key={shareUser.id}>
                <Avatar src={shareUser.avatar} alt={shareUser.name} className="mx-auto size-16" />
                <span className="mt-2 block truncate text-xs font-semibold">{shareUser.username}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 border-t border-zinc-800 bg-[#282b31] px-4 py-4 sm:grid-cols-7">
          {shareTargets.map(({ label, icon: Icon }) => (
            <button className="text-center text-xs" type="button" key={label} onClick={label === "Copy link" ? copyPostLink : undefined}>
              <span className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-[#32363e]"><Icon className="size-5" /></span>
              {label === "Copy link" && copied ? "Copied" : label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
