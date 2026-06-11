import { posts } from "@/app/lib/instagram-feed-data";
import { FeedPost } from "@/app/ui/feed/feed-post";
import { RightSidebar } from "@/app/ui/feed/right-sidebar";
import { StoriesBar } from "@/app/ui/feed/stories-bar";
import { Sidebar } from "@/app/ui/shared/sidebar";

export default function MainFeed() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05080b] text-white">
      <Sidebar />
      <div className="mx-auto flex w-full max-w-6xl gap-16 px-4 pb-28 pt-5 sm:pl-24 lg:px-8 xl:pl-64">
        <section className="mx-auto w-full max-w-117.5">
          <StoriesBar />
          <div className="mt-5 space-y-7">
            {posts.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
}
