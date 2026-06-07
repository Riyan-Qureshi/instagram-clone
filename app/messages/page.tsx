import { MessageCircle } from "lucide-react";
import { NavbarRoutePage } from "@/app/ui/instagram/NavbarRoutePage";

export default function MessagesPage() {
  return <NavbarRoutePage title="Messages" description="Keep up with chats, reactions, and shared posts." icon={MessageCircle} />;
}
