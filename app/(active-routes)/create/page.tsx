import { PlusSquare } from "lucide-react";
import { NavbarRoutePage } from "@/app/ui/shared/navbar-route-page";

export default function CreatePage() {
  return <NavbarRoutePage title="Create" description="Start a new post, reel, or story for your followers." icon={PlusSquare} />;
}
