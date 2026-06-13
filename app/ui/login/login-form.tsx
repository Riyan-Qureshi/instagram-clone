'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { authenticate, type LoginState } from '@/app/lib/actions';

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction] = useActionState(authenticate, initialState);

  return (
    <form action={formAction} className="mt-7 space-y-3">
      <label className="sr-only" htmlFor="username">
        Username
      </label>
      <input
        id="username"
        name="username"
        autoComplete="username"
        className="h-14 w-full rounded-xl border border-zinc-600 bg-transparent px-4 text-sm font-medium text-white outline-none transition placeholder:text-zinc-400 focus:border-zinc-300"
        placeholder="Username"
        type="text"
        required
      />

      <label className="sr-only" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        autoComplete="current-password"
        className="h-14 w-full rounded-xl border border-zinc-600 bg-transparent px-4 text-sm font-medium text-white outline-none transition placeholder:text-zinc-400 focus:border-zinc-300"
        placeholder="Password"
        type="password"
        required
      />

      {state.message ? (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200" role="alert">
          {state.message}
        </p>
      ) : null}

      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-6! h-11 w-full rounded-full bg-[#1c4f8f] text-sm font-bold text-zinc-400 transition hover:bg-[#2463ad] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#202024] disabled:cursor-not-allowed disabled:opacity-70"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Logging in...' : 'Log in'}
    </button>
  );
}
