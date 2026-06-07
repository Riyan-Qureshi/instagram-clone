import { Bookmark, CheckCircle2, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import type { Post } from "@/app/lib/instagram-feed-types";
import { Avatar } from "@/app/ui/avatar";

export function FeedPost({ post }: { post: Post }) {
  return (
    <article className="border-b border-zinc-900 pb-6">
      <header className="flex items-center gap-3 py-3">
        <Avatar src={post.user.avatar} alt={post.user.name} className="size-9" />
        <div className="min-w-0 flex-1 text-sm">
          <div className="flex items-center gap-1 font-semibold text-white">{post.user.username}{post.verified && <CheckCircle2 className="size-3.5 fill-blue-500 text-black" />}<span className="font-normal text-zinc-500">- {post.timestamp}</span></div>
          <p className="truncate text-xs text-zinc-400">{post.location}</p>
        </div>
        <MoreHorizontal className="size-5 text-zinc-200" />
      </header>
      <div aria-label={post.imageAlt} className="aspect-[4/5] overflow-hidden rounded border border-zinc-800 shadow-2xl" style={{ background: post.image }}>
        <div className="h-full w-full bg-[radial-gradient(circle_at_65%_28%,rgba(255,255,255,.35),transparent_12%),linear-gradient(to_top,rgba(0,0,0,.42),transparent_45%)]" />
      </div>
      <div className="mt-4 flex items-center justify-between text-white">
        <div className="flex gap-4"><Heart className="size-6" /><MessageCircle className="size-6" /><Send className="size-6" /></div>
        <Bookmark className="size-6" />
      </div>
      <p className="mt-3 text-sm font-semibold text-white">{post.likes} likes</p>
      <p className="mt-1 text-sm text-zinc-100"><span className="font-semibold">{post.user.username}</span> {post.caption}</p>
      <p className="mt-2 text-sm text-zinc-500">{post.comments}</p>
    </article>
  );
}
