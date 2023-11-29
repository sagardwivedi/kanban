import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from './app/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { response, supabase } = createClient(request);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if there is a session and the user is on the login page
  if (session && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/board', request.url));
  }
  // Check if there is no session and the user is not on the login page
  if (!session && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return response;
}

export const config = {
  matcher: ['/board/:path*', '/login'],
};
