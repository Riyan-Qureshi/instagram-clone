import { UserRound } from "lucide-react";
import { NavbarRoutePage } from "@/app/ui/shared/navbar-route-page";

export default function ProfilePage() {
  return <NavbarRoutePage title="Profile" description="View your posts, saved moments, and profile details." icon={UserRound} />;
}
