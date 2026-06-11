import { messages } from "@/app/lib/instagram-feed-data";
import { Avatar } from "@/app/ui/shared/avatar";

export function AvatarStack() {
  return <div className="flex -space-x-2">{messages.slice(0, 3).map((m) => <Avatar key={m.id} src={m.avatar} alt={m.name} className="size-7 border-2 border-zinc-900" />)}</div>;
}
