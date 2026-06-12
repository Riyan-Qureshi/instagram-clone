import { FloatingMessagesShell } from "@/app/ui/messages/floating-messages-shell";
import { Sidebar } from "@/app/ui/shared/sidebar";

export default function ActiveRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex-1 overflow-x-hidden bg-[#05080b] text-white">
      <Sidebar />
      {children}
      <FloatingMessagesShell />
    </div>
  );
}
