import { currentUser, suggestions } from "@/app/lib/instagram-feed-data";
import { Avatar } from "@/app/ui/avatar";

export function RightSidebar() {
  return (
    <aside className="hidden w-80 shrink-0 pt-9 text-sm lg:block">
      <div className="flex items-center gap-3">
        <Avatar src={currentUser.avatar} alt={currentUser.name} className="size-11" />
        <div className="min-w-0 flex-1"><p className="font-semibold text-white">{currentUser.username}</p><p className="text-zinc-500">{currentUser.name}</p></div>
        <a className="text-xs font-bold text-sky-500" href="#">Switch</a>
      </div>
      <div className="mt-6 flex items-center justify-between"><p className="font-semibold text-zinc-500">Suggested for you</p><a className="text-xs font-bold text-white" href="#">See All</a></div>
      <div className="mt-4 space-y-4">
        {suggestions.map((s) => <div className="flex items-center gap-3" key={s.id}><Avatar src={s.avatar} alt={s.name} className="size-9" /><div className="min-w-0 flex-1"><p className="truncate font-semibold text-white">{s.username}</p><p className="truncate text-xs text-zinc-500">{s.reason}</p></div><a className="text-xs font-bold text-sky-500" href="#">Follow</a></div>)}
      </div>
      <p className="mt-8 leading-5 text-zinc-700">About Help Press API Jobs Privacy Terms Locations Language Meta Verified</p>
      <p className="mt-5 text-xs uppercase text-zinc-700">© 2026 Lensgram from Meta-inspired UI</p>
    </aside>
  );
}
