"use client";

import { usePathname } from "next/navigation";
import { MessagesFloatingButton } from "@/app/ui/instagram/MessagesFloatingButton";

export function FloatingMessagesShell() {
  const pathname = usePathname();

  if (pathname === "/messages") return null;

  return <MessagesFloatingButton />;
}
