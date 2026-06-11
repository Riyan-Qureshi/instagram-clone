import { Bell } from "lucide-react";
import { NavbarRoutePage } from "@/app/ui/shared/navbar-route-page";

export default function NotificationsPage() {
  return <NavbarRoutePage title="Notifications" description="Review likes, follows, comments, and recent account activity." icon={Bell} />;
}
