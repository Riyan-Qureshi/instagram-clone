import { UserRound } from "lucide-react";
import { NavbarRoutePage } from "@/app/ui/instagram/NavbarRoutePage";

export default function ProfilePage() {
  return <NavbarRoutePage title="Profile" description="View your posts, saved moments, and profile details." icon={UserRound} />;
}
