"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('Nutricionista');
  const [upcomingAppointments, setUpcomingAppointments] = useState(3);
  const [pendingDiets, setPendingDiets] = useState(5);

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
    <div className="min-h-screen bg-emerald-50">

      {/* Dashboard Content */}
      <main className="container mx-auto py-24 px-4">
        {/* Welcome Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Bem-vindo(a), <span className="text-emerald-600">{userName}</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Aqui está seu painel de atividades e ferramentas
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Consultas Hoje</p>
                <h3 className="text-2xl font-bold text-emerald-600">{upcomingAppointments}</h3>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/agenda" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Ver agenda completa →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Dietas para Revisar</p>
                <h3 className="text-2xl font-bold text-emerald-600">{pendingDiets}</h3>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/dietas/pendentes" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Revisar dietas →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Total de Pacientes</p>
                <h3 className="text-2xl font-bold text-emerald-600">42</h3>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/pacientes" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Ver todos pacientes →
              </Link>
            </div>
          </div>
        </div>

        {/* Main Feature Cards */}
        <h3 className="text-xl font-bold text-gray-700 mb-6">Ferramentas principais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* DietGen Card */}
          <Link href="/dietgen" className="group">
            <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 h-full transition-all duration-300 hover:shadow-lg hover:border-emerald-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800">DietGen AI</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Crie dietas personalizadas em segundos utilizando nossa inteligência artificial avançada.
              </p>
              <span className="text-emerald-600 font-medium group-hover:text-emerald-800">
                Criar nova dieta →
              </span>
            </div>
          </Link>

          {/* Pacientes Card */}
          <Link href="/pacientes" className="group">
            <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 h-full transition-all duration-300 hover:shadow-lg hover:border-emerald-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800">Gestão de Pacientes</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Gerencie fichas, histórico, avaliações e acompanhamento nutricional de seus pacientes.
              </p>
              <span className="text-emerald-600 font-medium group-hover:text-emerald-800">
                Gerenciar pacientes →
              </span>
            </div>
          </Link>

          {/* Agenda Card */}
          <Link href="/agenda" className="group">
            <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 h-full transition-all duration-300 hover:shadow-lg hover:border-emerald-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800">Agenda de Consultas</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Organize suas consultas, receba lembretes e gerencie sua disponibilidade de horários.
              </p>
              <span className="text-emerald-600 font-medium group-hover:text-emerald-800">
                Ver agenda →
              </span>
            </div>
          </Link>

          {/* Análises Card */}
          <Link href="/analises" className="group">
            <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 h-full transition-all duration-300 hover:shadow-lg hover:border-emerald-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800">Análises e Métricas</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Visualize o progresso dos pacientes, resultados de tratamentos e desempenho da sua clínica.
              </p>
              <span className="text-emerald-600 font-medium group-hover:text-emerald-800">
                Ver relatórios →
              </span>
            </div>
          </Link>

          {/* Biblioteca Card */}
          <Link href="/biblioteca" className="group">
            <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 h-full transition-all duration-300 hover:shadow-lg hover:border-emerald-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800">Biblioteca de Recursos</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Acesse materiais científicos, tabelas nutricionais e modelos de dietas pré-definidos.
              </p>
              <span className="text-emerald-600 font-medium group-hover:text-emerald-800">
                Acessar biblioteca →
              </span>
            </div>
          </Link>

          {/* Configurações Card */}
          <Link href="/configuracoes" className="group">
            <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 h-full transition-all duration-300 hover:shadow-lg hover:border-emerald-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800">Configurações</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Personalize sua conta, preferências de notificação e integrações com outros sistemas.
              </p>
              <span className="text-emerald-600 font-medium group-hover:text-emerald-800">
                Ajustar configurações →
              </span>
            </div>
          </Link>
        </div>

        {/* Recent Patients Section */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Pacientes Recentes</h3>
            <Link href="/pacientes" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
              Ver todos →
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-3 font-medium">Nome</th>
                  <th className="pb-3 font-medium">Última Consulta</th>
                  <th className="pb-3 font-medium">Próxima Consulta</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">
                    <div className="flex items-center">
                      <Image src="/profileGenerico.png" alt="Avatar" width={32} height={32} className="rounded-full mr-3" />
                      <span>Maria Silva</span>
                    </div>
                  </td>
                  <td className="py-3">15 Mar 2025</td>
                  <td className="py-3">29 Abr 2025</td>
                  <td className="py-3">
                    <span className="bg-emerald-100 text-emerald-700 text-xs py-1 px-2 rounded-full">Ativo</span>
                  </td>
                  <td className="py-3">
                    <button className="text-emerald-600 hover:text-emerald-800 mr-3">Ver</button>
                    <button className="text-emerald-600 hover:text-emerald-800">Editar</button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">
                    <div className="flex items-center">
                      <Image src="/profileGenerico.png" alt="Avatar" width={32} height={32} className="rounded-full mr-3" />
                      <span>João Santos</span>
                    </div>
                  </td>
                  <td className="py-3">22 Mar 2025</td>
                  <td className="py-3">08 Abr 2025</td>
                  <td className="py-3">
                    <span className="bg-amber-100 text-amber-700 text-xs py-1 px-2 rounded-full">Pendente</span>
                  </td>
                  <td className="py-3">
                    <button className="text-emerald-600 hover:text-emerald-800 mr-3">Ver</button>
                    <button className="text-emerald-600 hover:text-emerald-800">Editar</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">
                    <div className="flex items-center">
                      <Image src="/profileGenerico.png" alt="Avatar" width={32} height={32} className="rounded-full mr-3" />
                      <span>Ana Oliveira</span>
                    </div>
                  </td>
                  <td className="py-3">05 Abr 2025</td>
                  <td className="py-3">12 Abr 2025</td>
                  <td className="py-3">
                    <span className="bg-emerald-100 text-emerald-700 text-xs py-1 px-2 rounded-full">Ativo</span>
                  </td>
                  <td className="py-3">
                    <button className="text-emerald-600 hover:text-emerald-800 mr-3">Ver</button>
                    <button className="text-emerald-600 hover:text-emerald-800">Editar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 text-center shadow-inner">
        <p className="text-sm text-gray-500">© 2025 DietHub. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}