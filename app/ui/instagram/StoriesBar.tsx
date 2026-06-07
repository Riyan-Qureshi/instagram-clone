import { stories } from "@/app/lib/instagram-feed-data";
import { StoryBubble } from "@/app/ui/instagram/StoryBubble";

export function StoriesBar() {
  return (
    <section className="w-full overflow-hidden rounded-2xl border border-zinc-900 bg-black/40 py-4">
      <div className="flex gap-3 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {stories.map((story) => <StoryBubble key={story.id} story={story} />)}
      </div>
    </section>
  );
}
