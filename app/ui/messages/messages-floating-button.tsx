"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { AvatarStack } from "@/app/ui/messages/avatar-stack";
import { MessagesPanel } from "@/app/ui/messages/messages-panel";

export function MessagesFloatingButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-4 z-40 sm:right-6">
      {open && <MessagesPanel onClose={() => setOpen(false)} />}
      <button onClick={() => setOpen((value) => !value)} className="flex items-center gap-3 rounded-full border border-zinc-700 bg-[#262a31] px-4 py-3 text-sm font-bold text-white shadow-2xl hover:bg-zinc-800">
        <Send className="size-5" /> Messages <AvatarStack />
      </button>
    </div>
  );
}
