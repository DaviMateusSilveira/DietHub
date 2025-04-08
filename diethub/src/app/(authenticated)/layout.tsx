"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Verificar autenticação
  useEffect(() => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='))
      ?.split('=')[1];

    if (authCookie === 'true') {
      setIsAuthenticated(true);
    } else {
      window.location.href = '/login';
    }
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Ajustado de pt-16 para pt-20 para compensar o header maior */}
      <main className="flex-grow pt-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}