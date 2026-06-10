"use client";

import { Bookmark, CheckCircle2, Heart, MessageCircle, MoreHorizontal, Send, Smile, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Post } from "@/app/lib/instagram-feed-types";
import { cn } from "@/app/lib/utils";
import { Avatar } from "@/app/ui/avatar";
import { PostCommentsList } from "@/app/ui/instagram/PostCommentsList";
import { ShareDialog } from "@/app/ui/instagram/ShareDialog";

export function FeedPost({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [likeBurst, setLikeBurst] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [commentText, setCommentText] = useState("");

  const comments = post.commentList ?? [];

  useEffect(() => {
    if (!commentsOpen && !shareOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCommentsOpen(false);
        setShareOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [commentsOpen, shareOpen]);

  const toggleLike = () => {
    setLiked((current) => !current);
    setLikeBurst(true);
    window.setTimeout(() => setLikeBurst(false), 520);
  };

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
      <div aria-label={post.imageAlt} className="relative aspect-4/5 overflow-hidden rounded border border-zinc-800 shadow-2xl" style={{ background: post.image }}>
        <div className="h-full w-full bg-[radial-gradient(circle_at_65%_28%,rgba(255,255,255,.35),transparent_12%),linear-gradient(to_top,rgba(0,0,0,.42),transparent_45%)]" />
        {likeBurst && <Heart className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 animate-[heart-pop_.52s_ease-out] fill-white text-white drop-shadow-2xl" />}
      </div>
      <div className="mt-4 flex items-center justify-between text-white">
        <div className="flex gap-4">
          <button aria-label={liked ? "Unlike post" : "Like post"} className="transition hover:text-zinc-300" type="button" onClick={toggleLike}>
            <Heart className={cn("size-6 transition-transform", liked && "fill-red-500 text-red-500", likeBurst && "scale-125")} />
          </button>
          <button aria-label="Open comments" className="transition hover:text-zinc-300" type="button" onClick={() => setCommentsOpen(true)}><MessageCircle className="size-6" /></button>
          <button aria-label="Share post" className="transition hover:text-zinc-300" type="button" onClick={() => setShareOpen(true)}><Send className="size-6" /></button>
        </div>
        <button aria-label="Save post" className="transition hover:text-zinc-300" type="button"><Bookmark className="size-6" /></button>
      </div>
      <p className="mt-3 text-sm font-semibold text-white">{liked ? `${post.likes} + 1` : post.likes} likes</p>
      <p className="mt-1 text-sm text-zinc-100"><span className="font-semibold">{post.user.username}</span> {post.caption}</p>
      <button className="mt-2 text-left text-sm text-zinc-500" type="button" onClick={() => setCommentsOpen(true)}>{post.comments}</button>

      {commentsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/86 px-0 py-0 sm:px-6" role="dialog" aria-modal="true" aria-label="Post comments">
          <button aria-label="Close comments" className="absolute right-5 top-5 z-10 text-white" type="button" onClick={() => setCommentsOpen(false)}><X className="size-8" /></button>
          <div className="flex h-full w-full max-w-6xl flex-col overflow-hidden bg-[#1f2228] sm:h-[92vh] sm:flex-row sm:rounded">
            <div aria-label={post.imageAlt} className="min-h-80 flex-1 bg-cover bg-center" style={{ background: post.image }}>
              <div className="h-full min-h-80 bg-[radial-gradient(circle_at_65%_28%,rgba(255,255,255,.45),transparent_14%),linear-gradient(to_top,rgba(0,0,0,.32),transparent_48%)]" />
            </div>
            <section className="flex w-full flex-col border-zinc-800 bg-[#202329] sm:w-125 sm:border-l">
              <header className="flex items-center gap-3 border-b border-zinc-800 p-4">
                <Avatar src={post.user.avatar} alt={post.user.name} className="size-9" />
                <div className="min-w-0 flex-1 text-sm"><p className="font-semibold text-white">{post.user.username} {post.verified && <CheckCircle2 className="inline size-3.5 fill-blue-500 text-black" />}</p><p className="text-xs text-zinc-300">{post.location}</p></div>
                <MoreHorizontal className="size-5" />
              </header>
              <div className="flex-1 space-y-5 overflow-auto p-4 text-sm">
                <div className="flex gap-3"><Avatar src={post.user.avatar} alt={post.user.name} className="size-9" /><p><span className="font-semibold text-white">{post.user.username}</span> <span className="text-zinc-100">{post.caption}</span><span className="mt-2 block text-xs text-zinc-500">{post.timestamp}</span></p></div>
                <PostCommentsList comments={comments} />
              </div>
              <div className="border-t border-zinc-800 p-4"><div className="flex items-center justify-between"><div className="flex gap-4"><button aria-label={liked ? "Unlike post" : "Like post"} type="button" onClick={toggleLike}><Heart className={cn("size-6", liked && "fill-red-500 text-red-500")} /></button><MessageCircle className="size-6" /><button aria-label="Share post" type="button" onClick={() => setShareOpen(true)}><Send className="size-6" /></button></div><Bookmark className="size-6 fill-white" /></div><p className="mt-3 text-sm font-semibold">{liked ? `${post.likes} + 1` : post.likes} likes</p><p className="mt-1 text-xs text-zinc-500">{post.timestamp} ago</p></div>
              <form className="flex items-center gap-3 border-t border-zinc-800 p-4" onSubmit={(event) => { event.preventDefault(); setCommentText(""); }}><Smile className="size-6 text-zinc-200" /><input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500" placeholder="Add a comment..." value={commentText} onChange={(event) => setCommentText(event.target.value)} /><button className="text-sm font-semibold text-sky-500 disabled:text-zinc-600" disabled={!commentText.trim()} type="submit">Post</button></form>
            </section>
          </div>
        </div>
      )}

      {shareOpen && (
        <ShareDialog postId={post.id} route="feed" user={post.user} comments={comments} onClose={() => setShareOpen(false)} />
      )}
    </article>
  );
}
