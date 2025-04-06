"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

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
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="DietHub Logo"
            width={200}
            height={200}
            className="mr-3"
          />
        </div>

        {/* Navegação centralizada */}
        <nav className="flex gap-6">
          <Link href="/homePage" className="text-green-600 font-medium hover:underline">
            Home
          </Link>
          <Link href="/planos" className="text-green-600 font-medium hover:underline">
            Planos
          </Link>
          <Link href="/dietgen" className="text-green-600 font-medium hover:underline">
            DietGen
          </Link>
        </nav>

        {/* Botão de perfil à direita */}
        <div className="relative">
          <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition"
          >
            Perfil
          </button>

          {/* Mini modal do perfil */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
              <ul className="py-2">
                <li>
                  <Link
                    href="/configuracoes"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Configurações
                  </Link>
                </li>
                <li>
                  <Link
                    href="/meu-plano"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Meu Plano
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* MAIN */}
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