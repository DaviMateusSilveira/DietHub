"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
// Importação do componente Header compartilhado
import Header from '@/components/Header';

export default function HomePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='))
      ?.split('=')[1];

    if (authCookie === 'true') {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    router.push('/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Usando o componente Header compartilhado */}
      <Header />

      {/* MAIN - Ajustado com padding-top para compensar o header fixo */}
      <main className="container mx-auto py-24 px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Personalize a sua <span className="text-green-600">Dieta</span> Hoje
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          A DietHub oferece planos de nutrição personalizados impulsionados por IA para ajudar você a alcançar seus objetivos de saúde de forma mais inteligente e fácil.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition shadow-md">
          Escolha seu plano
        </button>

        <div className="mt-16 flex justify-center animate-fade-in">
          <Image
            src="/healthy-food.png"
            alt="Healthy food"
            width={650}
            height={450}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-6 text-center shadow-inner">
        <p className="text-sm text-gray-500">© 2025 DietHub. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}