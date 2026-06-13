'use server';

import { AuthError } from 'next-auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { z } from 'zod';

import { signIn } from '@/auth';

const loginSchema = z.object({
  username: z.string().trim().min(1, 'Enter your username.'),
  password: z.string().min(1, 'Enter your password.'),
});

export type LoginState = {
  message?: string;
};

export async function authenticate(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const parsedCredentials = loginSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  });

  if (!parsedCredentials.success) {
    return { message: parsedCredentials.error.issues[0]?.message ?? 'Invalid login details.' };
  }

  try {
    await signIn('credentials', {
      ...parsedCredentials.data,
      redirectTo: '/feed',
    });
  } catch (error) {
    if (isRedirectError(error)) throw error;

    if (error instanceof AuthError) {
      return { message: 'Invalid username or password.' };
    }

    throw error;
  }

  return {};
}
