"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();
  
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  
  // Fecha os menus quando clicar fora deles
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Dashboard', href: '/homePage' },
    { name: 'Pacientes', href: '/pacientes' },
    { name: 'Dietas', href: '/dietgen' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Relatórios', href: '/analises' },
  ];

  // Notificações de exemplo
  const notifications = [
    {
      id: 1,
      title: 'Nova consulta agendada',
      message: 'Maria Silva agendou uma consulta para amanhã às 14h.',
      time: '10 min atrás',
      read: false
    },
    {
      id: 2,
      title: 'Dieta revisada',
      message: 'A dieta de João Santos foi revisada e está pronta para envio.',
      time: '1 hora atrás',
      read: false
    },
    {
      id: 3,
      title: 'Lembrete de consulta',
      message: 'Você tem 3 consultas agendadas para amanhã.',
      time: '5 horas atrás',
      read: true
    }
  ];

  return (
    <header className="fixed w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto px-4">
        {/* Aumentando a altura de h-16 para h-20 */}
        <div className="flex justify-between items-center h-20">
          {/* Logo - Aumentando o tamanho */}
          <div className="flex items-center">
            <Link href="/homePage" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="DietHub Logo" width={180} height={45} className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Aumentando o tamanho da fonte */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className={`text-base font-medium transition-colors ${
                  pathname === item.href 
                    ? 'text-emerald-400 border-b-2 border-emerald-400' 
                    : 'text-gray-300 hover:text-emerald-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right section - Aumentando o tamanho dos ícones */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-2 text-gray-300 hover:text-emerald-400 rounded-full hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button 
                className="p-2 text-gray-300 hover:text-emerald-400 rounded-full hover:bg-gray-800 relative"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {/* Badge para notificações não lidas */}
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-900"></span>
                )}
              </button>
              
              {/* Notification dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50 max-h-96 overflow-y-auto">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-gray-900">Notificações</h3>
                      <button className="text-xs text-emerald-600 hover:text-emerald-800">
                        Marcar todas como lidas
                      </button>
                    </div>
                  </div>
                  
                  {notifications.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                      Nenhuma notificação
                    </div>
                  ) : (
                    <div>
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className={`px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-emerald-50' : ''}`}
                        >
                          <div className="flex justify-between">
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                        </div>
                      ))}
                      <div className="px-4 py-2 border-t border-gray-100 text-center">
                        <button className="text-xs text-emerald-600 hover:text-emerald-800">
                          Ver todas as notificações
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Profile dropdown */}
            <div className="relative" ref={profileMenuRef}>
              <button 
                className="flex items-center space-x-3 focus:outline-none"
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
              >
                <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-medium">
                  AN
                </div>
                <span className="hidden md:block text-sm text-gray-300">Ana Nutricionista</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Profile menu dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">Ana Nutricionista</p>
                    <p className="text-xs text-gray-500 truncate">ana.nutri@example.com</p>
                  </div>
                  
                  <Link href="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Perfil
                  </Link>
                  <Link href="/configuracoes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Configurações
                  </Link>
                  <Link href="/ajuda" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Ajuda e suporte
                  </Link>
                  <div className="border-t border-gray-100"></div>
                  <button 
                    onClick={() => {
                      document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                      window.location.href = '/login';
                    }} 
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="p-2 rounded-md text-gray-300 hover:text-emerald-400 hover:bg-gray-800"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {showMobileMenu && (
          <div className="md:hidden py-3 border-t border-gray-800">
            <nav className="flex flex-col space-y-3 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href 
                      ? 'bg-gray-800 text-emerald-400' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-emerald-400'
                  }`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}