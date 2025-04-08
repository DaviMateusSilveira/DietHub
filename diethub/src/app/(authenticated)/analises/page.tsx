"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Dados fictícios para os gráficos e relatórios
const demoChartData = {
  weightProgress: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Média de Peso (kg)',
        data: [75.2, 74.8, 74.3, 73.9, 73.5, 73.1],
        color: '#059669'
      }
    ]
  },
  patientObjectives: {
    labels: ['Perda de Peso', 'Ganho de Massa', 'Saúde', 'Performance', 'Outros'],
    data: [42, 18, 25, 10, 5],
    colors: ['#047857', '#059669', '#10B981', '#34D399', '#6EE7B7']
  },
  dietTypes: {
    labels: ['Convencional', 'Low Carb', 'Cetogênica', 'Vegetariana', 'Vegana', 'Outras'],
    data: [35, 25, 15, 12, 8, 5],
    colors: ['#047857', '#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0']
  }
};

export default function AnalyticsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dateRange, setDateRange] = useState('month');
  const [isLoading, setIsLoading] = useState(true);
  
  // Dados para os cards de visão geral
  const [overviewData, setOverviewData] = useState({
    totalPatients: 42,
    activePatients: 36,
    averageProgress: 8.3, // em porcentagem
    successRate: 78, // em porcentagem
    monthlyGrowth: 5, // em porcentagem
    appointmentsCompleted: 128
  });
  
  // Dados para a tabela de pacientes com melhor progresso
  const [topPatients, setTopPatients] = useState([
    {
      id: '1',
      name: 'Maria Silva',
      avatar: '/avatar1.png',
      objective: 'Perda de Peso',
      initialWeight: 72.5,
      currentWeight: 65.5,
      progressPercentage: 9.7
    },
    {
      id: '4',
      name: 'Carlos Mendes',
      avatar: '/avatar4.png',
      objective: 'Ganho de Massa',
      initialWeight: 68.2,
      currentWeight: 75.8,
      progressPercentage: 11.1
    },
    {
      id: '5',
      name: 'Patricia Lima',
      avatar: '/avatar5.png',
      objective: 'Saúde Intestinal',
      initialWeight: 61.3,
      currentWeight: 58.6,
      progressPercentage: 4.4
    },
    {
      id: '2',
      name: 'João Santos',
      avatar: '/avatar2.png',
      objective: 'Ganho de Massa',
      initialWeight: 75.1,
      currentWeight: 82.3,
      progressPercentage: 9.6
    }
  ]);

  // Fetch de autenticação
  useEffect(() => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='))
      ?.split('=')[1];

    if (authCookie === 'true') {
      setIsAuthenticated(true);
      // Simulação de carregamento de dados
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      router.push('/login');
    }
  }, [router]);

  // Alterar intervalo de datas dos relatórios
  const handleDateRangeChange = (range: string) => {
    setDateRange(range);
    setIsLoading(true);
    
    // Simulando carregamento de novos dados
    setTimeout(() => {
      // Aqui teríamos uma chamada API real para buscar dados do período selecionado
      setIsLoading(false);
    }, 800);
  };

  // Componente de gráfico de linha (simulado)
  const LineChart = ({ data, title, description }: any) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      
      <div className="relative h-64 w-full">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          // Aqui seria renderizado o gráfico real com uma biblioteca como Chart.js
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-500">Visualização de gráfico simulada</p>
              <p className="mt-2 text-xs text-gray-400">{data.labels.join(' → ')}</p>
              <p className="mt-1 text-xs font-medium text-emerald-600">
                {data.datasets[0].label}: {data.datasets[0].data[0]} → {data.datasets[0].data[data.datasets[0].data.length - 1]}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
  // Componente de gráfico de pizza/rosca (simulado)
  const PieChart = ({ data, title, description }: any) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      
      <div className="relative h-64 w-full">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          // Aqui seria renderizado o gráfico real com uma biblioteca como Chart.js
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="w-full max-w-xs">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {data.colors.map((color: string, index: number) => (
                  <span 
                    key={index} 
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">Visualização de gráfico simulada</p>
                <div className="mt-3 space-y-2">
                  {data.labels.map((label: string, index: number) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <div className="flex items-center">
                        <span 
                          className="inline-block w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: data.colors[index] }}
                        ></span>
                        <span>{label}</span>
                      </div>
                      <span className="font-medium">{data.data[index]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Cartão de métrica resumida
  const MetricCard = ({ title, value, unit, icon, trend, trendValue }: any) => {
    const isTrendPositive = trend === 'up';
    const isTrendNeutral = trend === 'neutral';
    
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <div className="flex items-baseline">
              <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
              {unit && <span className="ml-1 text-sm text-gray-500">{unit}</span>}
            </div>
          </div>
          
          {icon && (
            <div className="p-2 bg-emerald-100 rounded-lg">
              {icon}
            </div>
          )}
        </div>
        
        {trend && (
          <div className="mt-4 flex items-center">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
              isTrendPositive ? 'bg-emerald-100 text-emerald-800' : 
              isTrendNeutral ? 'bg-gray-100 text-gray-800' : 
              'bg-red-100 text-red-800'
            }`}>
              {isTrendPositive ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : isTrendNeutral ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
              {trendValue}
            </span>
            <span className="ml-2 text-xs text-gray-500">em relação ao período anterior</span>
          </div>
        )}
      </div>
    );
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-emerald-50">
      
      <main className="container mx-auto py-24 px-4 md:px-6">
        {/* Título e controles */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Relatórios e Análises</h1>
          
          <div className="flex bg-white rounded-lg shadow-sm border border-gray-200">
            <button 
              onClick={() => handleDateRangeChange('week')} 
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${dateRange === 'week' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Semana
            </button>
            <button 
              onClick={() => handleDateRangeChange('month')} 
              className={`px-4 py-2 text-sm font-medium ${dateRange === 'month' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Mês
            </button>
            <button 
              onClick={() => handleDateRangeChange('quarter')} 
              className={`px-4 py-2 text-sm font-medium ${dateRange === 'quarter' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Trimestre
            </button>
            <button 
              onClick={() => handleDateRangeChange('year')} 
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${dateRange === 'year' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Ano
            </button>
          </div>
        </div>
        
        {/* Métricas resumidas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard 
            title="Total de Pacientes"
            value={overviewData.totalPatients}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            trend="up"
            trendValue="12%"
          />
          
          <MetricCard 
            title="Taxa de Sucesso"
            value={overviewData.successRate}
            unit="%"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            }
            trend="up"
            trendValue="5%"
          />
          
          <MetricCard 
            title="Progresso Médio"
            value={overviewData.averageProgress}
            unit="%"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
            trend="up"
            trendValue="1.2%"
          />
          
          <MetricCard 
            title="Pacientes Ativos"
            value={overviewData.activePatients}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            trend="neutral"
            trendValue="0%"
          />
          
          <MetricCard 
            title="Crescimento Mensal"
            value={overviewData.monthlyGrowth}
            unit="%"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            trend="up"
            trendValue="2%"
          />
          
          <MetricCard 
            title="Consultas Realizadas"
            value={overviewData.appointmentsCompleted}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            trend="down"
            trendValue="3%"
          />
        </div>
        
        {/* Gráficos principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LineChart 
            data={demoChartData.weightProgress} 
            title="Evolução do Peso Médio" 
            description="Média de peso dos pacientes ao longo do tempo"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-rows-2 h-full">
            <PieChart 
              data={demoChartData.patientObjectives} 
              title="Objetivos dos Pacientes" 
            />
            
            <PieChart 
              data={demoChartData.dietTypes} 
              title="Tipos de Dietas" 
            />
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 sm:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Resumo de Resultados</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Perda de Peso</span>
                    <span className="font-medium">85% sucesso</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Ganho de Massa</span>
                    <span className="font-medium">72% sucesso</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Saúde Geral</span>
                    <span className="font-medium">90% sucesso</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Performance</span>
                    <span className="font-medium">68% sucesso</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lista de pacientes com melhor progresso */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Pacientes com Melhor Progresso</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Paciente
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Objetivo
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dados iniciais
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dados atuais
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progresso
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={patient.avatar}
                            alt={patient.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.objective}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.initialWeight} kg</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.currentWeight} kg</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          patient.objective.includes('Perda') 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {patient.progressPercentage}%
                        </span>
                        <div className="ml-4 w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${
                              patient.objective.includes('Perda') 
                                ? 'bg-emerald-600' 
                                : 'bg-blue-600'
                            } h-2 rounded-full`} 
                            style={{ width: `${Math.min(patient.progressPercentage * 4, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-right text-sm font-medium">
            <Link href="/pacientes" className="text-emerald-600 hover:text-emerald-800">
              Ver todos os pacientes →
            </Link>
          </div>
        </div>
        
        {/* Botões para exportar ou compartilhar relatórios */}
        <div className="flex justify-center space-x-4">
          <button className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Exportar para PDF
          </button>
          
          <button className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar por E-mail
          </button>
          
          <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            Gerar Relatório Completo
          </button>
        </div>
      </main>
      
    </div>
  );
}