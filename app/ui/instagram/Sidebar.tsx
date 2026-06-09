"use client";

import { Bell, Clapperboard, Compass, Home, Menu, MessageCircle, PlusSquare, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { currentUser } from "@/app/lib/instagram-feed-data";
import { Avatar } from "@/app/ui/avatar";
import clsx from "clsx";

const links = [
  {icon: Home, name: "Home", href: "/feed"}, 
  {icon: Search, name: "Search", href: "/search"}, 
  {icon: Compass, name: "Explore", href: "/explore"}, 
  {icon: Clapperboard, name: "Reels", href: "/reels"},
  {icon: MessageCircle, name: "Messages", href: "/messages"}, 
  {icon: Bell, name: "Notifications", href: "/notifications"}, 
  {icon: PlusSquare, name: "Create", href: "/create"}, 
  {icon: UserRound, name: "Profile", href: "/profile"},
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-76px border-r border-zinc-900 bg-black px-3 py-6 text-white sm:flex xl:w-60 xl:px-5">
      <div className="flex w-full flex-col">
        <div className="mb-8 px-2 text-lg font-black tracking-tight xl:text-2xl">Lensgram</div>
        <nav className="space-y-2">
          {links.map((link) => { 
            const LinkIcon = link.icon;
            return(
              <Link 
                key={link.name} 
                href={link.href}
                className={clsx(
                  "flex items-center gap-4 rounded-xl px-3 py-3 text-sm text-zinc-200 hover:bg-zinc-900",
                  {"font-bold" : pathname === link.href},     
                )} >
                  <LinkIcon className="w-6" />
                  <span className="hidden md:inline">{link.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto space-y-3">
          <div className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300">
            <Avatar src={currentUser.avatar} alt={currentUser.name} className="size-6" />
            <span className="hidden md:inline">{currentUser.username}</span>
          </div>
          <Link 
            href="#"
            className="flex items-center gap-4 rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-zinc-900"
          >
            <Menu className="size-6" />
            <span className="hidden xl:inline">More</span>
          </Link>
          <p className="hidden px-3 text-xs text-zinc-600 xl:block">Also from Meta</p>
        </div>
      </div>
    </aside>
  );
}
