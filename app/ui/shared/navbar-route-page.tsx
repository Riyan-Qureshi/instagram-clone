import type { LucideIcon } from "lucide-react";
import { Sidebar } from "@/app/ui/shared/sidebar";

type NavbarRoutePageProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function NavbarRoutePage({ title, description, icon: Icon }: NavbarRoutePageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05080b] text-white">
      <Sidebar />
      <section className="mx-auto flex min-h-screen w-full max-w-4xl items-center px-4 pb-28 pt-5 sm:pl-24 lg:px-8 xl:pl-64">
        <div className="w-full rounded-3xl border border-zinc-900 bg-zinc-950/70 p-8 shadow-2xl shadow-black/40 sm:p-12">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-black">
            <Icon className="size-7" />
          </div>
          <h1 className="mt-8 text-3xl font-black tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
        </div>
      </section>
    </main>
  );
}
