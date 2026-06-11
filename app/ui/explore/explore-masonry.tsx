"use client";

import clsx from "clsx";
import { Bookmark, CheckCircle2, ChevronLeft, ChevronRight, Clapperboard, Heart, MessageCircle, MoreHorizontal, PanelsTopLeft, Send, Smile, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ExplorePost } from "@/app/lib/instagram-feed-types";
import { Avatar } from "@/app/ui/shared/avatar";
import { PostCommentsList } from "@/app/ui/shared/post-comments-list";
import { ShareDialog } from "@/app/ui/shared/share-dialog";

const aspectClass: Record<ExplorePost["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-4/5",
  wide: "aspect-4/3",
  tall: "aspect-9/16",
};

export function ExploreMasonry({ posts }: { posts: ExplorePost[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPost = selectedIndex === null ? null : posts[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((current) => (current === null ? current : (current - 1 + posts.length) % posts.length));
  };

  const showNext = () => {
    setSelectedIndex((current) => (current === null ? current : (current + 1) % posts.length));
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") setSelectedIndex((current) => (current === null ? current : (current - 1 + posts.length) % posts.length));
      if (event.key === "ArrowRight") setSelectedIndex((current) => (current === null ? current : (current + 1) % posts.length));
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, posts.length]);

  return (
    <>
      <div className="columns-2 gap-1 sm:columns-3 sm:gap-1.5 lg:gap-2">
        {posts.map((post, index) => (
          <ExploreTile key={post.id} post={post} onOpen={() => setSelectedIndex(index)} />
        ))}
      </div>

      {selectedPost && (
        <ExplorePostDialog
          key={selectedPost.id}
          post={selectedPost}
          onClose={() => setSelectedIndex(null)}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  );
}

function ExploreTile({ post, onOpen }: { post: ExplorePost; onOpen: () => void }) {
  const Icon = post.type === "reel" ? Clapperboard : post.type === "carousel" ? PanelsTopLeft : null;

  return (
    <article className="group relative mb-1.5 break-inside-avoid overflow-hidden bg-zinc-950 sm:mb-2">
      <button className="block w-full text-left" type="button" onClick={onOpen}>
        <div
          aria-label={post.imageAlt}
          className={clsx("relative w-full overflow-hidden", aspectClass[post.aspect])}
          style={{ background: post.image }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,.24),transparent_13%),linear-gradient(to_top,rgba(0,0,0,.62),transparent_52%)]" />
          <div className="absolute inset-0 opacity-40 mix-blend-overlay [background-image:linear-gradient(45deg,rgba(255,255,255,.12)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.12)_50%,rgba(255,255,255,.12)_75%,transparent_75%,transparent)] [background-size:18px_18px]" />

          {Icon && (
            <div className="absolute right-2 top-2 rounded-md bg-black/20 p-1.5 text-white backdrop-blur-sm">
              <Icon className="size-4 fill-white/20" />
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3">
            <p className="line-clamp-2 text-xs font-black leading-tight drop-shadow sm:text-sm">{post.caption}</p>
            <p className="mt-1 text-[10px] font-semibold text-zinc-200 drop-shadow sm:text-xs">@{post.user.username}</p>
          </div>

          <div className="absolute inset-0 hidden items-center justify-center gap-5 bg-black/45 text-sm font-bold opacity-0 transition group-hover:flex group-hover:opacity-100">
            <span className="flex items-center gap-1.5"><Heart className="size-5 fill-white" /> {post.likes}</span>
            <span className="flex items-center gap-1.5"><MessageCircle className="size-5 fill-white" /> {post.comments}</span>
          </div>
        </div>
      </button>
    </article>
  );
}

function ExplorePostDialog({
  post,
  onClose,
  onPrevious,
  onNext,
}: {
  post: ExplorePost;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [commentsExpanded, setCommentsExpanded] = useState(false);
  const [commentText, setCommentText] = useState("");
  const comments = post.commentList ?? [];
  const visibleComments = commentsExpanded ? comments : comments.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 px-0 py-0 text-white sm:px-14 sm:py-6" role="dialog" aria-modal="true" aria-label="Explore post">
      <button aria-label="Close post" className="absolute right-4 top-4 z-[60] text-white transition hover:text-zinc-300" type="button" onClick={onClose}>
        <X className="size-8" />
      </button>

      <button aria-label="Previous post" className="absolute left-3 top-1/2 z-[60] flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl transition hover:scale-105 sm:left-5" type="button" onClick={onPrevious}>
        <ChevronLeft className="size-6" />
      </button>

      <button aria-label="Next post" className="absolute right-3 top-1/2 z-[60] flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl transition hover:scale-105 sm:right-5" type="button" onClick={onNext}>
        <ChevronRight className="size-6" />
      </button>

      <div className="flex h-full w-full max-w-7xl flex-col overflow-hidden bg-[#202329] shadow-2xl sm:h-[92vh] sm:flex-row sm:rounded">
        <div aria-label={post.imageAlt} className="relative min-h-80 flex-1 bg-cover bg-center" style={{ background: post.image }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,.28),transparent_14%),linear-gradient(to_top,rgba(0,0,0,.36),transparent_48%)]" />
          {post.type && (
            <div className="absolute right-4 top-4 rounded-md bg-black/25 p-2 backdrop-blur-sm">
              {post.type === "reel" ? <Clapperboard className="size-5" /> : <PanelsTopLeft className="size-5" />}
            </div>
          )}
        </div>

        <section className="flex min-h-0 w-full flex-col border-zinc-800 bg-[#24272d] sm:w-125 sm:border-l">
          <header className="flex items-center gap-3 border-b border-zinc-800 p-4">
            <Avatar src={post.user.avatar} alt={post.user.name} className="size-9" />
            <div className="min-w-0 flex-1 text-sm">
              <p className="truncate font-semibold text-white">
                {post.user.username} {post.verified && <CheckCircle2 className="inline size-3.5 fill-blue-500 text-black" />} <span className="font-bold text-sky-500">Follow</span>
              </p>
              <p className="truncate text-xs text-zinc-400">{post.location}</p>
            </div>
            <MoreHorizontal className="size-5" />
          </header>

          <div className="min-h-0 flex-1 space-y-5 overflow-auto p-4 text-sm">
            <div className="flex gap-3">
              <Avatar src={post.user.avatar} alt={post.user.name} className="size-9" />
              <p>
                <span className="font-semibold text-white">{post.user.username}</span> <span className="text-zinc-100">{post.caption}</span>
                <span className="mt-2 block text-xs text-zinc-500">{post.timestamp}</span>
              </p>
            </div>

            <PostCommentsList comments={visibleComments} />

            {comments.length > 3 && (
              <button className="ml-12 text-xs font-semibold text-zinc-400 hover:text-white" type="button" onClick={() => setCommentsExpanded((value) => !value)}>
                {commentsExpanded ? "Hide comments" : `View all ${post.comments} comments`}
              </button>
            )}
          </div>

          <div className="border-t border-zinc-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <button aria-label={liked ? "Unlike post" : "Like post"} type="button" onClick={() => setLiked((value) => !value)}>
                  <Heart className={clsx("size-6 transition", liked && "fill-red-500 text-red-500")} />
                </button>
                <button aria-label="Expand comments" type="button" onClick={() => setCommentsExpanded(true)}><MessageCircle className="size-6" /></button>
                <button aria-label="Share post" type="button" onClick={() => setShareOpen(true)}><Send className="size-6" /></button>
              </div>
              <Bookmark className="size-6" />
            </div>
            <p className="mt-3 text-sm font-semibold">{liked ? `${post.likes} + 1` : post.likes} likes</p>
            <p className="mt-1 text-xs uppercase text-zinc-500">{post.timestamp} ago</p>
          </div>

          <form className="flex items-center gap-3 border-t border-zinc-800 p-4" onSubmit={(event) => { event.preventDefault(); setCommentText(""); }}>
            <Smile className="size-6 text-zinc-200" />
            <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500" placeholder="Add a comment..." value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            <button className="text-sm font-semibold text-sky-500 disabled:text-zinc-600" disabled={!commentText.trim()} type="submit">Post</button>
          </form>
        </section>
      </div>

      {shareOpen && <ShareDialog postId={post.id} route="explore" user={post.user} comments={comments} onClose={() => setShareOpen(false)} />}
    </div>
  );
}
