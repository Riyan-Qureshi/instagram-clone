import Image from "next/image";
import { cn } from "@/app/lib/utils";

export function Avatar({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} width={64} height={64} unoptimized className={cn("block rounded-full bg-zinc-800 object-cover", className)} />;
}
