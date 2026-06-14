'use server';

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth';

export type LoginState = {
  message?: string;
};

export async function authenticate(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {message: 'Invalid username or password.'};
        default:
          return {message: 'Something went wrong.'} 
      }
    }
    throw error;
  }

  return {};
}

export async function logout() {
  await signOut({ redirectTo: '/' });
}