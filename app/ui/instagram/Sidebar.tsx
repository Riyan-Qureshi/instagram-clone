"use client";

import { Bell, Clapperboard, Compass, Home, Menu, MessageCircle, PlusSquare, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { currentUser } from "@/app/lib/instagram-feed-data";
import { Avatar } from "@/app/ui/avatar";

const items = [
  [Home, "Home", "/feed"], [Search, "Search", "/search"], [Compass, "Explore", "/explore"], [Clapperboard, "Reels", "/reels"],
  [MessageCircle, "Messages", "/messages"], [Bell, "Notifications", "/notifications"], [PlusSquare, "Create", "/create"], [UserRound, "Profile", "/profile"],
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-76px border-r border-zinc-900 bg-black px-3 py-6 text-white sm:flex xl:w-60 xl:px-5">
      <div className="flex w-full flex-col">
        <div className="mb-8 px-2 text-lg font-black tracking-tight xl:text-2xl">Lensgram</div>
        <nav className="space-y-2">
          {items.map(([Icon, label, href]) => (
            <Link key={href} className={`flex items-center gap-4 rounded-xl px-3 py-3 text-sm ${pathname === href ? "font-bold" : "text-zinc-200 hover:bg-zinc-900"}`} href={href}>
              <Icon className="size-6" />
              <span className="hidden xl:inline">{label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-3">
          <div className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300">
            <Avatar src={currentUser.avatar} alt={currentUser.name} className="size-6" />
            <span className="hidden xl:inline">{currentUser.username}</span>
          </div>
          <a className="flex items-center gap-4 rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-zinc-900" href="#"><Menu className="size-6" /><span className="hidden xl:inline">More</span></a>
          <p className="hidden px-3 text-xs text-zinc-600 xl:block">Also from Meta</p>
        </div>
      </div>
    </aside>
  );
}
