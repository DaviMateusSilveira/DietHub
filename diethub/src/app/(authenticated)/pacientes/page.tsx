"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Tipo de dados para pacientes
type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  birthDate: Date;
  gender: 'masculino' | 'feminino' | 'outro';
  status: 'ativo' | 'inativo' | 'em_pausa';
  lastAppointment: Date | null;
  nextAppointment: Date | null;
  weight: number;
  height: number;
  metrics: {
    bmi: number; // IMC
    bodyFat?: number;
    muscleMass?: number;
  };
  objectives: string;
  dietaryRestrictions: string[];
  notes: string;
  createdAt: Date;
};

export default function PatientsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState<{field: string, direction: 'asc' | 'desc'}>({
    field: 'name',
    direction: 'asc'
  });
  
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
  const [showPatientDetailsModal, setShowPatientDetailsModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'card'>('list');
  
  // Formulário para novo paciente
  const [newPatient, setNewPatient] = useState<{
    name: string;
    email: string;
    phone: string;
    birthDate: Date;
    gender: string;
    weight: number;
    height: number;
    objectives: string;
    dietaryRestrictions: string[];
    notes: string;
  }>({
    name: '',
    email: '',
    phone: '',
    birthDate: new Date(),
    gender: 'masculino',
    weight: 0,
    height: 0,
    objectives: '',
    dietaryRestrictions: [],
    notes: '',
  });
  
  // Fetch de autenticação
  useEffect(() => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='))
      ?.split('=')[1];

    if (authCookie === 'true') {
      setIsAuthenticated(true);
      loadDemoPatients();
    } else {
      router.push('/login');
    }
  }, [router]);
  
  // Filtros e ordenação
  useEffect(() => {
    let result = [...patients];
    
    // Aplicar busca
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        patient => 
          patient.name.toLowerCase().includes(lowerSearch) || 
          patient.email.toLowerCase().includes(lowerSearch) ||
          patient.phone.includes(searchTerm)
      );
    }
    
    // Aplicar filtro de status
    if (statusFilter !== 'all') {
      result = result.filter(patient => patient.status === statusFilter);
    }
    
    // Ordenação
    result.sort((a, b) => {
      const field = sortOrder.field;
      let valueA: any;
      let valueB: any;
      
      // Acessar os campos aninhados ou simples
      if (field === 'metrics.bmi') {
        valueA = a.metrics.bmi;
        valueB = b.metrics.bmi;
      } else if (field === 'lastAppointment') {
        valueA = a.lastAppointment ? a.lastAppointment.getTime() : 0;
        valueB = b.lastAppointment ? b.lastAppointment.getTime() : 0;
      } else if (field === 'nextAppointment') {
        valueA = a.nextAppointment ? a.nextAppointment.getTime() : Infinity;
        valueB = b.nextAppointment ? b.nextAppointment.getTime() : Infinity;
      } else {
        valueA = (a as any)[field];
        valueB = (b as any)[field];
      }
      
      // Comparação baseada no tipo de dado
      if (typeof valueA === 'string') {
        const comparison = valueA.localeCompare(valueB);
        return sortOrder.direction === 'asc' ? comparison : -comparison;
      } else {
        const comparison = valueA - valueB;
        return sortOrder.direction === 'asc' ? comparison : -comparison;
      }
    });
    
    setFilteredPatients(result);
  }, [patients, searchTerm, statusFilter, sortOrder]);
  
  // Carregar dados de exemplo
  const loadDemoPatients = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    
    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);
    
    const demoData: Patient[] = [
      {
        id: '1',
        name: 'Maria Silva',
        email: 'maria.silva@email.com',
        phone: '(11) 98765-4321',
        avatar: '/profileGenerico.png',
        birthDate: new Date('1985-03-12'),
        gender: 'feminino',
        status: 'ativo',
        lastAppointment: lastMonth,
        nextAppointment: tomorrow,
        weight: 65.5,
        height: 165,
        metrics: {
          bmi: 24.1,
          bodyFat: 28.5,
          muscleMass: 45.2
        },
        objectives: 'Perda de peso e controle da ansiedade alimentar',
        dietaryRestrictions: ['Lactose', 'Frutos do mar'],
        notes: 'Paciente com histórico de hipertensão na família.',
        createdAt: new Date('2023-08-15')
      },
      {
        id: '2',
        name: 'João Santos',
        email: 'joao.santos@email.com',
        phone: '(11) 99876-5432',
        avatar: '/profileGenerico.png',
        birthDate: new Date('1990-07-22'),
        gender: 'masculino',
        status: 'ativo',
        lastAppointment: today,
        nextAppointment: nextWeek,
        weight: 82.3,
        height: 178,
        metrics: {
          bmi: 26.0,
          bodyFat: 22.3,
          muscleMass: 63.1
        },
        objectives: 'Ganho de massa muscular e definição',
        dietaryRestrictions: [],
        notes: 'Paciente pratica musculação 5x por semana.',
        createdAt: new Date('2023-10-05')
      },
      {
        id: '3',
        name: 'Ana Oliveira',
        email: 'ana.oliveira@email.com',
        phone: '(11) 97654-3210',
        avatar: '/profileGenerico.png',
        birthDate: new Date('1978-11-30'),
        gender: 'feminino',
        status: 'inativo',
        lastAppointment: new Date('2023-12-15'),
        nextAppointment: null,
        weight: 71.2,
        height: 162,
        metrics: {
          bmi: 27.1,
          bodyFat: 31.2
        },
        objectives: 'Reeducação alimentar para diabetes tipo 2',
        dietaryRestrictions: ['Açúcar', 'Carboidratos refinados'],
        notes: 'Paciente com diagnóstico recente de diabetes tipo 2.',
        createdAt: new Date('2022-04-22')
      },
      {
        id: '4',
        name: 'Carlos Mendes',
        email: 'carlos.mendes@email.com',
        phone: '(11) 96543-2109',
        avatar: '/profileGenerico.png',
        birthDate: new Date('1995-05-18'),
        gender: 'masculino',
        status: 'em_pausa',
        lastAppointment: new Date('2024-01-10'),
        nextAppointment: null,
        weight: 75.8,
        height: 182,
        metrics: {
          bmi: 22.9,
          bodyFat: 19.8,
          muscleMass: 61.4
        },
        objectives: 'Melhora de desempenho esportivo',
        dietaryRestrictions: ['Glúten'],
        notes: 'Atleta amador (corrida).',
        createdAt: new Date('2023-06-17')
      },
      {
        id: '5',
        name: 'Patricia Lima',
        email: 'patricia.lima@email.com',
        phone: '(11) 95432-1098',
        avatar: '/profileGenerico.png',
        birthDate: new Date('1987-09-03'),
        gender: 'feminino',
        status: 'ativo',
        lastAppointment: lastMonth,
        nextAppointment: nextWeek,
        weight: 58.6,
        height: 158,
        metrics: {
          bmi: 23.5,
          bodyFat: 26.7
        },
        objectives: 'Manutenção de peso e saúde intestinal',
        dietaryRestrictions: ['Laticínios'],
        notes: 'Histórico de problemas gastrointestinais.',
        createdAt: new Date('2022-11-23')
      }
    ];
    
    setPatients(demoData);
  };
  
  // Calcular idade a partir da data de nascimento
  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };
  
  // Formatar status para exibição
  const formatStatus = (status: string) => {
    switch (status) {
      case 'ativo': return 'Ativo';
      case 'inativo': return 'Inativo';
      case 'em_pausa': return 'Em pausa';
      default: return status;
    }
  };
  
  // Estilizar status
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'ativo':
        return 'bg-emerald-100 text-emerald-800';
      case 'inativo':
        return 'bg-red-100 text-red-800';
      case 'em_pausa':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Adicionar novo paciente
  const handleAddPatient = () => {
    // Aqui enviaria os dados para a API em um cenário real
    const newId = (patients.length + 1).toString();
    
    const patientToAdd: Patient = {
      id: newId,
      name: newPatient.name,
      email: newPatient.email,
      phone: newPatient.phone,
      avatar: '/avatar-default.png',
      birthDate: newPatient.birthDate,
      gender: newPatient.gender as any,
      status: 'ativo',
      lastAppointment: null,
      nextAppointment: null,
      weight: newPatient.weight,
      height: newPatient.height,
      metrics: {
        bmi: newPatient.weight / ((newPatient.height / 100) ** 2)
      },
      objectives: newPatient.objectives,
      dietaryRestrictions: newPatient.dietaryRestrictions as string[],
      notes: newPatient.notes,
      createdAt: new Date()
    };
    
    setPatients([...patients, patientToAdd]);
    setShowAddPatientModal(false);
    
    // Resetar o formulário
    setNewPatient({
      name: '',
      email: '',
      phone: '',
      birthDate: new Date(),
      gender: 'masculino',
      weight: 0,
      height: 0,
      objectives: '',
      dietaryRestrictions: [],
      notes: '',
    });
  };
  
  // Mostrar detalhes do paciente
  const showPatientDetails = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowPatientDetailsModal(true);
  };
  
  // Atualizar status do paciente
  const updatePatientStatus = (id: string, status: string) => {
    const updatedPatients = patients.map(patient => {
      if (patient.id === id) {
        return { ...patient, status: status as any };
      }
      return patient;
    });
    
    setPatients(updatedPatients);
    setShowPatientDetailsModal(false);
  };
  
  // UI para alternar ordenação
  const toggleSort = (field: string) => {
    if (sortOrder.field === field) {
      setSortOrder({
        field,
        direction: sortOrder.direction === 'asc' ? 'desc' : 'asc'
      });
    } else {
      setSortOrder({
        field,
        direction: 'asc'
      });
    }
  };
  
  // Ícone de ordenação
  const renderSortIcon = (field: string) => {
    if (sortOrder.field !== field) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    
    return sortOrder.direction === 'asc' ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  // Se não autenticado, não renderizar nada
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-emerald-50">
      
      <main className="container mx-auto py-24 px-4 md:px-6">
        {/* Título e ações principais */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Pacientes</h1>
          
          <div className="flex space-x-3">
            <button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center"
              onClick={() => setShowAddPatientModal(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Novo Paciente
            </button>
          </div>
        </div>
        
        {/* Filtros e pesquisa */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/3">
              <label htmlFor="search" className="sr-only">Pesquisar</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  id="search"
                  type="search"
                  placeholder="Buscar paciente..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-emerald-500 focus:border-emerald-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/4">
              <label htmlFor="status" className="sr-only">Filtrar por status</label>
              <select
                id="status"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-emerald-500 focus:border-emerald-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">Todos os status</option>
                <option value="ativo">Ativos</option>
                <option value="inativo">Inativos</option>
                <option value="em_pausa">Em pausa</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-gray-500">Visualização:</span>
              <button 
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setViewMode('list')}
                title="Visualização em lista"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
              <button 
                className={`p-2 rounded-md ${viewMode === 'card' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setViewMode('card')}
                title="Visualização em cards"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-3 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Exibindo <span className="font-medium">{filteredPatients.length}</span> de <span className="font-medium">{patients.length}</span> pacientes
            </p>
          </div>
        </div>
        
        {/* Lista de pacientes - visualização tabela */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button className="flex items-center space-x-1" onClick={() => toggleSort('name')}>
                        <span>Paciente</span>
                        {renderSortIcon('name')}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button className="flex items-center space-x-1" onClick={() => toggleSort('metrics.bmi')}>
                        <span>Dados</span>
                        {renderSortIcon('metrics.bmi')}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button className="flex items-center space-x-1" onClick={() => toggleSort('lastAppointment')}>
                        <span>Última Consulta</span>
                        {renderSortIcon('lastAppointment')}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button className="flex items-center space-x-1" onClick={() => toggleSort('nextAppointment')}>
                        <span>Próxima Consulta</span>
                        {renderSortIcon('nextAppointment')}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button className="flex items-center space-x-1" onClick={() => toggleSort('status')}>
                        <span>Status</span>
                        {renderSortIcon('status')}
                      </button>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Ações</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPatients.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <h3 className="text-lg font-medium">Nenhum paciente encontrado</h3>
                        <p className="mt-2">Tente ajustar seus filtros ou adicione novos pacientes.</p>
                      </td>
                    </tr>
                  ) : (
                    filteredPatients.map((patient) => (
                      <tr 
                        key={patient.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => showPatientDetails(patient)}
                      >
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
                              <div className="text-xs text-gray-500">
                                {patient.gender === 'masculino' ? 'M' : patient.gender === 'feminino' ? 'F' : 'O'}, {calculateAge(patient.birthDate)} anos
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{patient.weight} kg | {patient.height} cm</div>
                          <div className="text-xs text-gray-500">IMC: {patient.metrics.bmi.toFixed(1)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {patient.lastAppointment ? (
                            <div className="text-sm text-gray-900">
                              {patient.lastAppointment.toLocaleDateString('pt-BR')}
                            </div>
                          ) : (
                            <div className="text-xs text-gray-500">Não há registros</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {patient.nextAppointment ? (
                            <div className="text-sm text-gray-900">
                              {patient.nextAppointment.toLocaleDateString('pt-BR')}
                            </div>
                          ) : (
                            <div className="text-xs text-gray-500">Não agendada</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(patient.status)}`}>
                            {formatStatus(patient.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            className="text-emerald-600 hover:text-emerald-900 mr-3"
                            onClick={(e) => {
                              e.stopPropagation();
                              showPatientDetails(patient);
                            }}
                          >
                            Ver
                          </button>
                          <button 
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Lógica para editar (seria implementada em um app real)
                              alert(`Editar paciente ${patient.name}`);
                            }}
                          >
                            Editar
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Lista de pacientes - visualização em cards */}
        {viewMode === 'card' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPatients.length === 0 ? (
              <div className="col-span-full bg-white rounded-xl shadow-md p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-500">Nenhum paciente encontrado</h3>
                <p className="text-gray-400 mt-2">Tente ajustar seus filtros ou adicione novos pacientes.</p>
              </div>
            ) : (
              filteredPatients.map((patient) => (
                <div 
                  key={patient.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => showPatientDetails(patient)}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Image 
                        className="h-12 w-12 rounded-full"
                        src={patient.avatar} 
                        alt={patient.name}
                        width={48}
                        height={48}
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
                        <p className="text-sm text-gray-500">
                          {patient.gender === 'masculino' ? 'M' : patient.gender === 'feminino' ? 'F' : 'O'}, {calculateAge(patient.birthDate)} anos
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(patient.status)}`}>
                          {formatStatus(patient.status)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Peso / Altura</p>
                        <p className="text-sm font-medium">{patient.weight} kg / {patient.height} cm</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">IMC</p>
                        <p className="text-sm font-medium">{patient.metrics.bmi.toFixed(1)}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Última consulta</p>
                        <p className="text-sm font-medium">
                          {patient.lastAppointment ? patient.lastAppointment.toLocaleDateString('pt-BR') : 'Não há registros'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Próxima consulta</p>
                        <p className="text-sm font-medium">
                          {patient.nextAppointment ? patient.nextAppointment.toLocaleDateString('pt-BR') : 'Não agendada'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t px-6 py-3 bg-gray-50 flex justify-end space-x-3">
                    <button 
                      className="text-sm text-emerald-600 hover:text-emerald-800 font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        showPatientDetails(patient);
                      }}
                    >
                      Ver detalhes
                    </button>
                    <button 
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Lógica para editar (seria implementada em um app real)
                        alert(`Editar paciente ${patient.name}`);
                      }}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
      
      
      {/* Modal para adicionar novo paciente */}
      {showAddPatientModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Cadastrar Novo Paciente</h2>
              <button onClick={() => setShowAddPatientModal(false)} className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); handleAddPatient(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Informações Básicas */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">Informações Básicas</h3>
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={newPatient.name}
                    onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    value={newPatient.birthDate.toISOString().split('T')[0]}
                    onChange={(e) => setNewPatient({...newPatient, birthDate: new Date(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gênero
                  </label>
                  <select
                    value={newPatient.gender}
                    onChange={(e) => setNewPatient({...newPatient, gender: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={newPatient.email}
                    onChange={(e) => setNewPatient({...newPatient, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={newPatient.phone}
                    onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                {/* Informações Físicas */}
                <div className="md:col-span-2 border-t pt-4 mt-2">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">Informações Físicas</h3>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={newPatient.weight || ''}
                    onChange={(e) => setNewPatient({...newPatient, weight: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    value={newPatient.height || ''}
                    onChange={(e) => setNewPatient({...newPatient, height: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Objetivos
                  </label>
                  <textarea
                    value={newPatient.objectives}
                    onChange={(e) => setNewPatient({...newPatient, objectives: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    rows={2}
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Restrições Alimentares
                  </label>
                  <input
                    type="text"
                    placeholder="Separadas por vírgula (ex: Lactose, Glúten, Frutos do mar)"
                    value={newPatient.dietaryRestrictions.join(', ')}
                    onChange={(e) => setNewPatient({
                      ...newPatient, 
                      dietaryRestrictions: e.target.value.split(',').map(item => item.trim()).filter(Boolean)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Observações
                  </label>
                  <textarea
                    value={newPatient.notes}
                    onChange={(e) => setNewPatient({...newPatient, notes: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    rows={3}
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end mt-8">
                <button 
                  type="button" 
                  onClick={() => setShowAddPatientModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md mr-3 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                  Cadastrar Paciente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Modal de detalhes do paciente */}
      {showPatientDetailsModal && selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Detalhes do Paciente</h2>
              <button onClick={() => setShowPatientDetailsModal(false)} className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center mb-6 pb-4 border-b">
              <Image 
                src={selectedPatient.avatar} 
                alt={selectedPatient.name}
                width={80}
                height={80}
                className="rounded-full border border-gray-200 mr-4"
              />
              <div>
                <h3 className="font-bold text-xl text-gray-900">{selectedPatient.name}</h3>
                <p className="text-gray-600">
                  {selectedPatient.gender === 'masculino' ? 'Masculino' : 
                   selectedPatient.gender === 'feminino' ? 'Feminino' : 'Outro'}, {calculateAge(selectedPatient.birthDate)} anos
                </p>
                <p className="text-sm text-gray-500">
                  Paciente desde {selectedPatient.createdAt.toLocaleDateString('pt-BR')}
                </p>
              </div>
              <div className="ml-auto">
                <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusStyle(selectedPatient.status)}`}>
                  {formatStatus(selectedPatient.status)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Informações de Contato</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-800">{selectedPatient.email}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-800">{selectedPatient.phone}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Métricas Corporais</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Peso</p>
                      <p className="font-medium text-gray-800">{selectedPatient.weight} kg</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Altura</p>
                      <p className="font-medium text-gray-800">{selectedPatient.height} cm</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">IMC</p>
                      <p className="font-medium text-gray-800">{selectedPatient.metrics.bmi.toFixed(1)}</p>
                    </div>
                    
                    {selectedPatient.metrics.bodyFat && (
                      <div>
                        <p className="text-xs text-gray-500">Gordura Corporal</p>
                        <p className="font-medium text-gray-800">{selectedPatient.metrics.bodyFat}%</p>
                      </div>
                    )}
                    
                    {selectedPatient.metrics.muscleMass && (
                      <div>
                        <p className="text-xs text-gray-500">Massa Muscular</p>
                        <p className="font-medium text-gray-800">{selectedPatient.metrics.muscleMass}%</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Consultas</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="mb-3">
                    <p className="text-xs text-gray-500">Última consulta</p>
                    <p className="font-medium text-gray-800">
                      {selectedPatient.lastAppointment ? selectedPatient.lastAppointment.toLocaleDateString('pt-BR') : 'Não há registros'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Próxima consulta</p>
                    <p className="font-medium text-gray-800">
                      {selectedPatient.nextAppointment ? selectedPatient.nextAppointment.toLocaleDateString('pt-BR') : 'Não agendada'}
                    </p>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <Link 
                      href={`/agenda?patient=${selectedPatient.id}`} 
                      className="text-sm text-emerald-600 hover:text-emerald-800 font-medium"
                    >
                      Ver histórico de consultas
                    </Link>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Restrições Alimentares</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  {selectedPatient.dietaryRestrictions.length === 0 ? (
                    <p className="text-gray-500">Nenhuma restrição registrada</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {selectedPatient.dietaryRestrictions.map((restriction, index) => (
                        <span 
                          key={index} 
                          className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
                        >
                          {restriction}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Objetivos</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800">{selectedPatient.objectives}</p>
                </div>
              </div>
              
              {selectedPatient.notes && (
                <div className="md:col-span-2">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Observações</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-800">{selectedPatient.notes}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="border-t pt-6 flex justify-between">
              <div>
                <button 
                  onClick={() => {
                    // Em um app real, aqui você abriria o formulário de edição
                    setShowPatientDetailsModal(false);
                    alert('Função de edição seria aberta aqui');
                  }}
                  className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 mr-3"
                >
                  Editar Dados
                </button>
                
                <Link
                  href={`/dietgen?patient=${selectedPatient.id}`}
                  className="px-4 py-2 bg-white border border-emerald-300 text-emerald-700 rounded-md hover:bg-emerald-50"
                >
                  Criar Dieta
                </Link>
              </div>
              
              <div className="space-x-2">
                {selectedPatient.status === 'ativo' && (
                  <button 
                    onClick={() => updatePatientStatus(selectedPatient.id, 'em_pausa')}
                    className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-md"
                  >
                    Pausar Acompanhamento
                  </button>
                )}
                
                {selectedPatient.status === 'em_pausa' && (
                  <button 
                    onClick={() => updatePatientStatus(selectedPatient.id, 'ativo')}
                    className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-md"
                  >
                    Reativar
                  </button>
                )}
                
                {selectedPatient.status !== 'inativo' && (
                  <button 
                    onClick={() => updatePatientStatus(selectedPatient.id, 'inativo')}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-md"
                  >
                    Inativar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}