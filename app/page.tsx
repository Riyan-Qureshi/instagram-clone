import Link from "next/link";
import { Check, Heart, Star } from "lucide-react";
import { LoginForm } from "@/app/ui/login/login-form";

const footerLinks = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Consumer Health Privacy",
  "Terms",
  "Locations",
  "Popular",
  "Instagram Lite",
  "Meta AI",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
];

const photoCards = [
  {
    className: "left-0 top-22 z-10 w-48 -rotate-7 sm:w-56 lg:w-64",
    gradient: "from-cyan-950 via-emerald-700 to-yellow-200",
    label: "night portrait",
  },
  {
    className: "left-24 top-4 z-20 w-52 sm:left-28 sm:w-64 lg:left-36 lg:w-72",
    gradient: "from-stone-200 via-zinc-300 to-orange-200",
    label: "friends laughing",
  },
  {
    className: "right-0 top-22 z-0 w-48 rotate-5 sm:w-56 lg:w-64",
    gradient: "from-zinc-200 via-rose-200 to-amber-700",
    label: "music moment",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col bg-[#080d12] text-zinc-50">
      <section className="grid flex-1 lg:grid-cols-[minmax(0,1fr)_minmax(420px,34vw)]">
        <div className="relative flex min-h-155 flex-col overflow-hidden border-zinc-700/70 px-6 py-8 sm:px-10 lg:border-r lg:px-14">
          <InstagramMark />

          <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center pb-10 pt-10 text-center lg:pt-2">
            <h1 className="max-w-3xl text-balance text-4xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              See everyday moments from your close friends.
            </h1>

            <HeroPlaceholder />
          </div>
        </div>

        <aside className="flex items-center justify-center bg-[#202024] px-5 py-10 sm:px-10 lg:px-12">
          <div className="w-full max-w-xl lg:max-w-none">
            <h2 className="text-lg font-bold text-white">Log into Instagram</h2>

            <LoginForm />

            <Link className="mx-auto mt-7 block w-fit text-sm font-bold text-white transition hover:text-zinc-300" href="#">
              Forgot password?
            </Link>

            <div className="mt-16 space-y-3">
              <Link
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-zinc-600 text-sm font-bold text-white transition hover:border-zinc-400 hover:bg-white/5"
                href="/feed"
              >
                <span className="flex size-4 items-center justify-center rounded-full bg-[#0095f6] text-[11px] font-black text-white">f</span>
                Log in with Facebook
              </Link>

              <Link
                className="flex h-11 w-full items-center justify-center rounded-full border border-[#3797f0] text-sm font-bold text-[#37a8ff] transition hover:bg-[#3797f0]/10"
                href="#"
              >
                Create new account
              </Link>
            </div>

            <p className="mt-7 text-center text-base font-semibold text-zinc-200">
              Meta
            </p>
          </div>
        </aside>
      </section>

      <footer className="border-t border-zinc-700/70 bg-[#080d12] px-5 py-6 text-center text-xs text-zinc-400">
        <nav aria-label="Footer links" className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-5 gap-y-3">
          {footerLinks.map((link) => (
            <Link className="transition hover:text-zinc-100" href="#" key={link}>
              {link}
            </Link>
          ))}
        </nav>
        <p className="mt-6">English &nbsp; &copy; 2026 Instagram from Meta</p>
      </footer>
    </main>
  );
}

function InstagramMark() {
  return (
    <div aria-label="Instagram" className="relative size-18 rounded-[1.4rem] bg-linear-to-br from-purple-600 via-pink-500 to-yellow-400 p-1.5 shadow-2xl shadow-pink-950/30">
      <div className="flex size-full items-center justify-center rounded-[1.05rem] bg-[#080d12]">
        <div className="size-9 rounded-full border-[7px] border-pink-500" />
      </div>
      <div className="absolute right-4 top-4 size-2 rounded-full bg-pink-400" />
    </div>
  );
}

function HeroPlaceholder() {
  return (
    <div className="relative mt-16 h-107.5 w-full max-w-140 sm:mt-14">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl" />

      {photoCards.map((card) => (
        <article
          aria-label={card.label}
          className={`absolute aspect-7/9 overflow-hidden rounded-[1.65rem] bg-linear-to-br ${card.gradient} ${card.className} shadow-[0_30px_80px_rgba(0,0,0,.45)] ring-1 ring-white/15`}
          key={card.label}
        >
          <div className="absolute inset-x-5 top-6 h-1 rounded-full bg-white/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_30%,rgba(255,255,255,.45),transparent_18%),radial-gradient(circle_at_43%_58%,rgba(0,0,0,.35),transparent_20%),linear-gradient(to_top,rgba(0,0,0,.42),transparent_48%)]" />
          <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-5 text-white">
            <div className="h-7 flex-1 rounded-full border-2 border-white/90" />
            <Heart className="size-7" />
          </div>
        </article>
      ))}

      <div className="absolute left-3 top-56 z-30 size-16 -rotate-12 rounded-[1.1rem] bg-linear-to-br from-red-500 via-pink-500 to-fuchsia-600 shadow-2xl shadow-pink-950/40" />

      <div className="absolute left-20 top-8 z-30 flex -rotate-12 items-center gap-1 rounded-2xl bg-white px-4 py-2 shadow-xl">
        <span className="size-7 rounded-full bg-linear-to-br from-purple-300 via-white to-pink-300 ring-2 ring-purple-900/10" />
        <span className="size-7 rounded-full bg-linear-to-br from-rose-200 via-white to-fuchsia-300 ring-2 ring-purple-900/10" />
        <span className="size-7 rounded-full bg-linear-to-br from-yellow-200 via-white to-orange-300 ring-2 ring-purple-900/10" />
      </div>

      <div className="absolute right-2 top-36 z-30 flex items-center gap-2 rounded-full bg-[#21c75b] px-4 py-3 text-white shadow-2xl shadow-emerald-950/50">
        <Star className="size-5 fill-white" />
        <Check className="size-4 stroke-4" />
      </div>

      <div className="absolute right-0 top-64 z-30 size-16 rounded-full bg-linear-to-br from-amber-400 via-pink-500 to-orange-600 p-1 shadow-2xl shadow-orange-950/40">
        <div className="size-full rounded-full bg-linear-to-br from-lime-200 via-emerald-200 to-rose-200" />
      </div>
    </div>
  );
}
