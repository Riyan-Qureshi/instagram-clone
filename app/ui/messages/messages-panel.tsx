import { Edit3, Maximize2, X } from "lucide-react";
import { messages } from "@/app/lib/instagram-feed-data";
import { Avatar } from "@/app/ui/shared/avatar";
import { Button } from "@/app/ui/shared/button";

export function MessagesPanel({ onClose }: { onClose: () => void }) {
  return (
    <section className="absolute bottom-16 right-0 w-[min(360px,calc(100vw-24px))] overflow-hidden rounded-2xl border border-zinc-700 bg-[#1f2329] text-white shadow-2xl">
      <header className="flex items-center border-b border-zinc-700 px-4 py-3"><h2 className="flex-1 font-bold">Messages</h2><Maximize2 className="mr-4 size-4 text-zinc-300" /><button onClick={onClose} aria-label="Close messages"><X className="size-5" /></button></header>
      <div className="max-h-80 overflow-y-auto p-2">
        {messages.map((m) => <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-zinc-800" key={m.id}><Avatar src={m.avatar} alt={m.name} className="size-11" /><span className="min-w-0 flex-1"><span className="block font-semibold">{m.name}</span><span className="block truncate text-sm text-zinc-400">{m.status}</span></span>{m.unread && <span className="size-2 rounded-full bg-sky-500" />}</button>)}
      </div>
      <Button className="absolute bottom-4 right-4 size-12 rounded-full bg-sky-500 text-white"><Edit3 className="size-5" /></Button>
    </section>
  );
}
