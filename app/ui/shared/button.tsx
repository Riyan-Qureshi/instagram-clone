import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("inline-flex items-center justify-center rounded-lg font-semibold transition hover:opacity-85", className)}
      {...props}
    />
  );
}
