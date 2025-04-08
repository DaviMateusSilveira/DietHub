"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Formato de dados para consultas
type Appointment = {
  id: string;
  patientName: string;
  patientImage: string;
  date: Date;
  time: string;
  duration: number; // em minutos
  type: 'primeira_consulta' | 'retorno' | 'avaliacao';
  status: 'agendado' | 'confirmado' | 'concluido' | 'cancelado';
  notes?: string;
};

// Horários disponíveis para consultas
const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

export default function AgendaPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  
  // Dados para o novo agendamento
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    date: new Date(),
    time: "08:00",
    duration: 30,
    type: "retorno",
    notes: ""
  });

  useEffect(() => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='))
      ?.split('=')[1];

    if (authCookie === 'true') {
      setIsAuthenticated(true);
      // Carregar dados simulados de consultas
      loadDemoAppointments();
    } else {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    // Filtrar consultas com base na data selecionada e no filtro atual
    const filtered = appointments.filter((apt) => {
      const sameDate = isSameDay(apt.date, selectedDate);
      
      if (filter === "all") return sameDate;
      return sameDate && apt.status === filter;
    });
    
    setFilteredAppointments(filtered);
  }, [selectedDate, appointments, filter]);

  // Função para carregar dados simulados
  const loadDemoAppointments = () => {
    // Criar alguns dados de exemplo
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    const demoData: Appointment[] = [
      {
        id: "1",
        patientName: "Maria Silva",
        patientImage: "/profileGenerico.png",
        date: today,
        time: "09:00",
        duration: 60,
        type: "primeira_consulta",
        status: "confirmado",
        notes: "Primeira consulta. Paciente com hipertensão."
      },
      {
        id: "2",
        patientName: "João Santos",
        patientImage: "/profileGenerico.png",
        date: today,
        time: "11:00",
        duration: 30,
        type: "retorno",
        status: "agendado"
      },
      {
        id: "3",
        patientName: "Ana Oliveira",
        patientImage: "/profileGenerico.png",
        date: today,
        time: "14:30",
        duration: 45,
        type: "avaliacao",
        status: "agendado",
        notes: "Avaliação de composição corporal."
      },
      {
        id: "4",
        patientName: "Carlos Mendes",
        patientImage: "/profileGenerico.png",
        date: tomorrow,
        time: "10:00",
        duration: 60,
        type: "primeira_consulta",
        status: "confirmado"
      }
    ];
    
    setAppointments(demoData);
  };

  // Helpers para lidar com datas
  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() && 
           date1.getMonth() === date2.getMonth() && 
           date1.getFullYear() === date2.getFullYear();
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Renderização do calendário
  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Dias do mês anterior para preencher a primeira semana
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = 0; i < firstDayOfMonth; i++) {
      const day = prevMonthDays - firstDayOfMonth + i + 1;
      days.push(
        <div key={`prev-${day}`} className="text-center py-2 text-gray-400">
          {day}
        </div>
      );
    }
    
    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isToday = isSameDay(date, new Date());
      const isSelected = isSameDay(date, selectedDate);
      
      // Verificar se há consultas neste dia
      const hasAppointments = appointments.some(apt => isSameDay(apt.date, date));
      
      days.push(
        <div 
          key={`current-${i}`} 
          className={`
            text-center py-2 cursor-pointer rounded-full w-10 h-10 mx-auto flex items-center justify-center
            ${isToday ? 'border border-emerald-500 font-bold' : ''}
            ${isSelected ? 'bg-emerald-600 text-white' : ''}
            ${hasAppointments && !isSelected ? 'text-emerald-700 font-semibold' : ''}
            hover:bg-emerald-100
          `}
          onClick={() => setSelectedDate(date)}
        >
          {i}
          {hasAppointments && !isSelected && (
            <span className="absolute bottom-1 w-1 h-1 bg-emerald-500 rounded-full"></span>
          )}
        </div>
      );
    }
    
    // Dias do próximo mês
    const totalCells = 42; // 6 semanas * 7 dias
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <div key={`next-${i}`} className="text-center py-2 text-gray-400">
          {i}
        </div>
      );
    }
    
    return days;
  };

  // Funções para navegação do calendário
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today);
  };

  // Função para formatar hora de início/fim
  const formatTimeRange = (startTime: string, durationMinutes: number) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    let endHours = hours + Math.floor((minutes + durationMinutes) / 60);
    const endMinutes = (minutes + durationMinutes) % 60;
    
    return `${startTime} - ${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
  };

  // Função para adicionar nova consulta
  const handleAddAppointment = () => {
    const newId = (appointments.length + 1).toString();
    const appointmentDate = new Date(newAppointment.date);
    
    // Em um cenário real, esta parte enviaria os dados para a API
    const appointment: Appointment = {
      id: newId,
      patientName: newAppointment.patientName,
      patientImage: "/avatar-default.png",
      date: appointmentDate,
      time: newAppointment.time,
      duration: newAppointment.duration,
      type: newAppointment.type as any,
      status: "agendado",
      notes: newAppointment.notes
    };
    
    setAppointments([...appointments, appointment]);
    setShowAddModal(false);
    
    // Resetar o formulário
    setNewAppointment({
      patientName: "",
      date: new Date(),
      time: "08:00",
      duration: 30,
      type: "retorno",
      notes: ""
    });
    
    // Selecionar a data da nova consulta
    setSelectedDate(appointmentDate);
  };

  // Função para mostrar detalhes da consulta
  const showDetails = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setShowDetailsModal(true);
  };
  
  // Função para atualizar status da consulta
  const updateStatus = (id: string, status: string) => {
    const updatedAppointments = appointments.map(apt => {
      if (apt.id === id) {
        return { ...apt, status: status as any };
      }
      return apt;
    });
    
    setAppointments(updatedAppointments);
    setShowDetailsModal(false);
  };

  // Tradução para tipos de consulta
  const translateType = (type: string) => {
    switch (type) {
      case 'primeira_consulta': return 'Primeira Consulta';
      case 'retorno': return 'Consulta de Retorno';
      case 'avaliacao': return 'Avaliação';
      default: return type;
    }
  };
  
  // Tradução para status da consulta
  const translateStatus = (status: string) => {
    switch (status) {
      case 'agendado': return 'Agendado';
      case 'confirmado': return 'Confirmado';
      case 'concluido': return 'Concluído';
      case 'cancelado': return 'Cancelado';
      default: return status;
    }
  };
  
  // Estilo para cada status
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'agendado':
        return 'bg-blue-100 text-blue-800';
      case 'confirmado':
        return 'bg-emerald-100 text-emerald-800';
      case 'concluido':
        return 'bg-purple-100 text-purple-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-emerald-50">
      
      <main className="container mx-auto py-24 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Agenda de Consultas</h1>
          
          <div className="flex space-x-3">
            <button 
              className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
              onClick={() => goToToday()}
            >
              Hoje
            </button>
            
            <button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center"
              onClick={() => setShowAddModal(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nova Consulta
            </button>
          </div>
        </div>
        
        {/* Calendário e Lista de Consultas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendário */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6 border border-emerald-100">
            {/* Navegação do mês */}
            <div className="flex justify-between items-center mb-6">
              <button onClick={prevMonth} className="p-1 hover:bg-emerald-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <h2 className="text-lg font-semibold">
                {currentMonth.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
              </h2>
              
              <button onClick={nextMonth} className="p-1 hover:bg-emerald-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Dias da semana */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                <div key={index} className="text-center font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Dias do mês */}
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
            
            {/* Legenda */}
            <div className="mt-6 border-t pt-4 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 border border-emerald-500 rounded-full mr-2"></div>
                <span className="text-sm">Hoje</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-emerald-600 rounded-full mr-2"></div>
                <span className="text-sm">Selecionado</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 relative mr-2">
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></span>
                </div>
                <span className="text-sm">Com consultas</span>
              </div>
            </div>
          </div>
          
          {/* Lista de Consultas */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-emerald-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                </h2>
                
                <div className="flex">
                  <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white"
                  >
                    <option value="all">Todas</option>
                    <option value="agendado">Agendadas</option>
                    <option value="confirmado">Confirmadas</option>
                    <option value="concluido">Concluídas</option>
                    <option value="cancelado">Canceladas</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  {filteredAppointments.length} consulta{filteredAppointments.length !== 1 ? 's' : ''} para este dia
                </span>
              </div>
            </div>
            
            {/* Lista de consultas do dia */}
            <div className="overflow-y-auto" style={{ maxHeight: "60vh" }}>
              {filteredAppointments.length === 0 ? (
                <div className="p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-500">Nenhuma consulta agendada</h3>
                  <p className="text-gray-400 mt-2">Clique em "Nova Consulta" para agendar</p>
                </div>
              ) : (
                <div>
                  {filteredAppointments
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map((appointment) => (
                    <div 
                      key={appointment.id}
                      className="border-b border-gray-100 p-6 hover:bg-gray-50 cursor-pointer"
                      onClick={() => showDetails(appointment)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <div className="mr-3">
                            <Image 
                              src={appointment.patientImage} 
                              alt={appointment.patientName}
                              width={48}
                              height={48}
                              className="rounded-full border border-gray-200"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{appointment.patientName}</h3>
                            <p className="text-sm text-gray-500">{translateType(appointment.type)}</p>
                          </div>
                        </div>
                        
                        <div>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(appointment.status)}`}>
                            {translateStatus(appointment.status)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex text-sm text-gray-500">
                        <div className="flex items-center mr-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{formatTimeRange(appointment.time, appointment.duration)}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{appointment.duration} minutos</span>
                        </div>
                      </div>
                      
                      {appointment.notes && (
                        <p className="mt-3 text-sm text-gray-600 line-clamp-1">
                          {appointment.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      
      {/* Modal para adicionar nova consulta */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Agendar Nova Consulta</h2>
              <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); handleAddAppointment(); }}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Paciente
                </label>
                <input
                  type="text"
                  value={newAppointment.patientName}
                  onChange={(e) => setNewAppointment({...newAppointment, patientName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data
                  </label>
                  <input
                    type="date"
                    value={newAppointment.date.toISOString().split('T')[0]}
                    onChange={(e) => setNewAppointment({...newAppointment, date: new Date(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horário
                  </label>
                  <select
                    value={newAppointment.time}
                    onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  >
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duração (minutos)
                  </label>
                  <select
                    value={newAppointment.duration}
                    onChange={(e) => setNewAppointment({...newAppointment, duration: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="30">30</option>
                    <option value="45">45</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Consulta
                  </label>
                  <select
                    value={newAppointment.type}
                    onChange={(e) => setNewAppointment({...newAppointment, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="primeira_consulta">Primeira Consulta</option>
                    <option value="retorno">Consulta de Retorno</option>
                    <option value="avaliacao">Avaliação</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Observações
                </label>
                <textarea
                  value={newAppointment.notes}
                  onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={3}
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md mr-3 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                  Agendar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Modal de detalhes da consulta */}
      {showDetailsModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Detalhes da Consulta</h2>
              <button onClick={() => setShowDetailsModal(false)} className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center mb-6">
              <Image 
                src={selectedAppointment.patientImage} 
                alt={selectedAppointment.patientName}
                width={64}
                height={64}
                className="rounded-full border border-gray-200 mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">{selectedAppointment.patientName}</h3>
                <p className="text-gray-600">{translateType(selectedAppointment.type)}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Data</p>
                <p className="font-medium">{selectedAppointment.date.toLocaleDateString('pt-BR')}</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Horário</p>
                <p className="font-medium">{formatTimeRange(selectedAppointment.time, selectedAppointment.duration)}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Duração</p>
                <p className="font-medium">{selectedAppointment.duration} minutos</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Status</p>
                <p>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(selectedAppointment.status)}`}>
                    {translateStatus(selectedAppointment.status)}
                  </span>
                </p>
              </div>
            </div>
            
            {selectedAppointment.notes && (
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Observações</p>
                <p className="bg-gray-50 p-3 rounded-lg">{selectedAppointment.notes}</p>
              </div>
            )}
            
            <div className="border-t pt-4 flex flex-wrap justify-between">
              <div className="space-x-2">
                <button 
                  onClick={() => {
                    // Em um app real, aqui você abriria o formulário de edição
                    setShowDetailsModal(false);
                    alert('Função de edição seria aberta aqui');
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800"
                >
                  Editar
                </button>
                
                {selectedAppointment.status !== 'cancelado' && (
                  <button 
                    onClick={() => updateStatus(selectedAppointment.id, 'cancelado')}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-md"
                  >
                    Cancelar
                  </button>
                )}
              </div>
              
              <div className="space-x-2 mt-2 sm:mt-0">
                {selectedAppointment.status === 'agendado' && (
                  <button 
                    onClick={() => updateStatus(selectedAppointment.id, 'confirmado')}
                    className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md"
                  >
                    Confirmar
                  </button>
                )}
                
                {(selectedAppointment.status === 'agendado' || selectedAppointment.status === 'confirmado') && (
                  <button 
                    onClick={() => updateStatus(selectedAppointment.id, 'concluido')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                  >
                    Marcar como Concluído
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