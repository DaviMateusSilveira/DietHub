import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('auth')?.value === 'true'; // Verifica se o cookie de autenticação existe
  const loginPath = '/login';

  // Redireciona para o login se o usuário não estiver autenticado e não estiver na página de login
  if (!isAuthenticated && request.nextUrl.pathname !== loginPath) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  // Permite acesso às páginas se o usuário estiver autenticado ou na página de login
  return NextResponse.next();
}