import { explorePosts } from "@/app/lib/instagram-feed-data";
import { ExploreMasonry } from "@/app/ui/explore/explore-masonry";
import { Sidebar } from "@/app/ui/shared/sidebar";

export default function ExplorePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05080b] text-white">
      <Sidebar />
      <section className="mx-auto w-full max-w-6xl px-1 pb-28 pt-2 sm:px-4 sm:pl-24 sm:pt-5 lg:px-8 xl:pl-64">
        <div className="mx-auto max-w-5xl">
          <header className="px-3 py-4 sm:px-0 sm:pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Explore</p>
            <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Fresh posts picked for you</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              A scrollable masonry feed of trending mock photos, reels, memes, food, design, and creator moments.
            </p>
          </header>

          <ExploreMasonry posts={explorePosts} />
        </div>
      </section>
    </main>
  );
}
