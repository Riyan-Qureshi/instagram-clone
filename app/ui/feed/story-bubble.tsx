import type { Story } from "@/app/lib/instagram-feed-types";
import { cn } from "@/app/lib/utils";
import { Avatar } from "@/app/ui/shared/avatar";

export function StoryBubble({ story }: { story: Story }) {
  return (
    <div className="w-20 shrink-0 text-center">
      <div className={cn("mx-auto w-fit rounded-full p-0.5", story.seen ? "bg-zinc-700" : "bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600")}>
        <div className="rounded-full bg-black p-1">
          <Avatar src={story.avatar} alt={story.name} className="size-14" />
        </div>
      </div>
      <p className="mt-2 truncate text-xs text-zinc-200">{story.username}</p>
    </div>
  );
}
