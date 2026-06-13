"use client";

import type { ElementType } from "react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Activity,
  Bell,
  Bookmark,
  Clapperboard,
  Compass,
  Home,
  Menu,
  MessageCircle,
  MessageSquareWarning,
  Moon,
  PlusSquare,
  Search,
  Settings,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { currentUser } from "@/app/lib/instagram-feed-data";
import { logout } from "@/app/lib/actions";
import { Avatar } from "@/app/ui/shared/avatar";

const links = [
  { icon: Home, name: "Home", href: "/feed" },
  { icon: Search, name: "Search", href: "/search" },
  { icon: Compass, name: "Explore", href: "/explore" },
  { icon: Clapperboard, name: "Reels", href: "/reels" },
  { icon: MessageCircle, name: "Messages", href: "/messages" },
  { icon: Bell, name: "Notifications", href: "/notifications" },
  { icon: PlusSquare, name: "Create", href: "/create" },
  { icon: UserRound, name: "Profile", href: "/profile" },
];

const menuItems: { icon: ElementType; name: string }[] = [
  { icon: Settings, name: "Settings" },
  { icon: Activity, name: "Your activity" },
  { icon: Bookmark, name: "Saved" },
  { icon: Moon, name: "Switch appearance" },
  { icon: MessageSquareWarning, name: "Report a problem" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMoreMenuOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (!moreMenuRef.current?.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMoreMenuOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMoreMenuOpen]);

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-76px border-r border-zinc-900 bg-black px-3 py-6 text-white sm:flex xl:w-60 xl:px-5">
      <div className="flex w-full flex-col">
        <div className="mb-8 px-2 text-lg font-black tracking-tight xl:text-2xl">Lensgram</div>
        <nav className="space-y-2">
          {links.map((link) => {
            const LinkIcon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex items-center gap-4 rounded-xl px-3 py-3 text-sm text-zinc-200 hover:bg-zinc-900",
                  { "font-bold": pathname === link.href },
                )}
              >
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
          <div className="relative" ref={moreMenuRef}>
            {isMoreMenuOpen && (
              <div
                className="absolute bottom-full left-0 mb-4 w-66 overflow-hidden rounded-2xl bg-[#26282b] py-2 text-sm text-zinc-100 shadow-2xl shadow-black/60 ring-1 ring-white/5"
                id="sidebar-more-menu"
                role="menu"
              >
                <div className="space-y-1 px-2">
                  {menuItems.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <button
                        className="flex h-12 w-full items-center gap-3 rounded-lg px-3 text-left font-medium text-zinc-100 transition hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-500"
                        key={item.name}
                        onClick={() => setIsMoreMenuOpen(false)}
                        role="menuitem"
                        type="button"
                      >
                        <ItemIcon className="size-5 text-zinc-300" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="my-2 h-1 bg-zinc-900/35" />

                <div className="space-y-1 px-2">
                  <button
                    className="flex h-14 w-full items-center rounded-lg px-3 text-left font-medium text-zinc-100 transition hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-500"
                    onClick={() => setIsMoreMenuOpen(false)}
                    role="menuitem"
                    type="button"
                  >
                    Switch accounts
                  </button>
                </div>

                <div className="my-2 h-px bg-zinc-700/70" />

                <form action={logout} className="px-2">
                  <button
                    className="flex h-14 w-full items-center rounded-lg px-3 text-left font-medium text-zinc-100 transition hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-500"
                    role="menuitem"
                    type="submit"
                  >
                    Log out
                  </button>
                </form>
              </div>
            )}

            <button
              aria-controls="sidebar-more-menu"
              aria-expanded={isMoreMenuOpen}
              aria-haspopup="menu"
              className={clsx(
                "flex w-full items-center gap-4 rounded-xl px-3 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900",
                { "bg-zinc-900 text-white": isMoreMenuOpen },
              )}
              onClick={() => setIsMoreMenuOpen((isOpen) => !isOpen)}
              type="button"
            >
              <Menu className="size-6" />
              <span className="hidden xl:inline">More</span>
            </button>
          </div>
          <p className="hidden px-3 text-xs text-zinc-600 xl:block">Also from Meta</p>
        </div>
      </div>
    </aside>
  );
}
