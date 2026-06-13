import type { NextAuthConfig } from 'next-auth';

const protectedRoutes = [
  '/create',
  '/explore',
  '/feed',
  '/messages',
  '/notifications',
  '/profile',
  '/reels',
  '/search',
];

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute = protectedRoutes.some((route) => nextUrl.pathname.startsWith(route));

      if (isProtectedRoute) return isLoggedIn;

      if (isLoggedIn && nextUrl.pathname === '/') {
        return Response.redirect(new URL('/feed', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
