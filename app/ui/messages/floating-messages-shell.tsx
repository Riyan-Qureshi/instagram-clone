"use client";

import { usePathname } from "next/navigation";
import { MessagesFloatingButton } from "@/app/ui/messages/messages-floating-button";

export function FloatingMessagesShell() {
  const pathname = usePathname();

  if (pathname === "/messages") return null;

  return <MessagesFloatingButton />;
}
