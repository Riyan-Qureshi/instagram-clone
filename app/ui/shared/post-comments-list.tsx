import { Heart } from "lucide-react";
import type { PostComment } from "@/app/lib/instagram-feed-types";
import { Avatar } from "@/app/ui/shared/avatar";

export function PostCommentsList({ comments }: { comments: PostComment[] }) {
  return comments.map((comment) => (
    <div className="flex gap-3" key={comment.id}>
      <Avatar src={comment.user.avatar} alt={comment.user.name} className="size-9" />
      <div className="min-w-0 flex-1">
        <p><span className="font-semibold text-white">{comment.user.username}</span> <span className="text-zinc-100">{comment.text}</span></p>
        <p className="mt-2 text-xs text-zinc-500">{comment.timestamp} {comment.likes && `${comment.likes} likes`} Reply</p>
      </div>
      <Heart className="mt-2 size-3.5 text-zinc-300" />
    </div>
  ));
}
