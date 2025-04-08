"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

export default function PlansPage() {
  const [isAnnualBilling, setIsAnnualBilling] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-200 to-white overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-teal-200/40 to-emerald-300/40 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-20 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-emerald-200/30 to-teal-300/30 rounded-full filter blur-3xl transform -translate-x-1/4"></div>
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2320a67f' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: '180px 180px'
          }}
        ></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header/Navigation */}
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 backdrop-blur-md bg-gray-900 shadow-md py-4 px-6 md:px-10 flex justify-between items-center z-50"
        >
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="DietHub Logo"
              width={220}
              height={54}
              className="mr-3 transition transform group-hover:scale-105"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Planos
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Sobre nós
            </Link>
            <Link href="/login" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition hover:shadow-lg hover:from-teal-600 hover:to-emerald-700"
            >
              Começar Agora
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="p-2 md:hidden rounded-lg text-gray-300 hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-6 md:px-10"
        >
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur px-4 py-1.5 rounded-full shadow-sm border border-emerald-100 mb-6">
              <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-700">Planos flexíveis para seu negócio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
              Preços <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">transparentes</span> e sem surpresas
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Escolha o plano ideal para o seu consultório e potencialize seus atendimentos com tecnologia de ponta.
            </p>
            
            {/* Billing toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-base ${!isAnnualBilling ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Mensal
              </span>
              
              <button 
                onClick={() => setIsAnnualBilling(!isAnnualBilling)} 
                className="mx-4 relative inline-flex h-6 w-12 items-center rounded-full"
              >
                <span className="sr-only">Toggle billing frequency</span>
                <span 
                  className={`
                    inline-block h-6 w-12 rounded-full transition
                    ${isAnnualBilling ? 'bg-emerald-600' : 'bg-gray-300'}
                  `}
                />
                <span 
                  className={`
                    inline-block h-4 w-4 transform rounded-full bg-white transition
                    ${isAnnualBilling ? 'translate-x-7' : 'translate-x-1'}
                  `}
                />
              </button>
              
              <div>
                <span className={`text-base ${isAnnualBilling ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                  Anual
                </span>
                <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  20% OFF
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pricing Cards */}
        <section className="py-8 px-6 md:px-10 mb-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Starter Plan */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="p-8 bg-slate-50">
                  <h3 className="text-lg font-semibold text-gray-500 mb-2">Iniciante</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">R$ {isAnnualBilling ? '79' : '99'}</span>
                    <span className="text-gray-500 ml-1">/{isAnnualBilling ? 'mês' : 'mês'}</span>
                  </div>
                  {isAnnualBilling && (
                    <p className="text-sm text-gray-500 mb-4">Cobrado anualmente como R$ 948</p>
                  )}
                  <p className="text-gray-600">Para nutricionistas solo começando a digitalizar seu atendimento.</p>
                </div>
                
                <div className="p-8 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Até 25 pacientes ativos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>10 dietas com IA por mês</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Agendamento online</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Prontuários básicos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Suporte por email</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <X className="h-5 w-5 text-gray-400 shrink-0 mr-3 mt-0.5" />
                      <span>Relatórios avançados</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <X className="h-5 w-5 text-gray-400 shrink-0 mr-3 mt-0.5" />
                      <span>Área personalizada do paciente</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <X className="h-5 w-5 text-gray-400 shrink-0 mr-3 mt-0.5" />
                      <span>Integração com wearables</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <Link 
                    href="/register?plan=starter" 
                    className="block w-full bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-center py-3 rounded-lg font-medium transition"
                  >
                    Começar gratuitamente
                  </Link>
                </div>
              </motion.div>

              {/* Pro Plan (Highlighted) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-emerald-500 rounded-2xl shadow-xl overflow-hidden flex flex-col relative md:-mt-4 md:mb-4"
              >
                {/* Popular badge */}
                <div className="absolute top-0 right-0">
                  <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MAIS POPULAR
                  </div>
                </div>

                <div className="p-8 bg-emerald-50">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Profissional</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold text-gray-900">R$ {isAnnualBilling ? '179' : '229'}</span>
                    <span className="text-gray-500 ml-1">/{isAnnualBilling ? 'mês' : 'mês'}</span>
                  </div>
                  {isAnnualBilling && (
                    <p className="text-sm text-gray-500 mb-4">Cobrado anualmente como R$ 2.148</p>
                  )}
                  <p className="text-gray-700">Para nutricionistas que desejam escalar seu atendimento com tecnologia.</p>
                </div>
                
                <div className="p-8 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span><strong>Até 100 pacientes ativos</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span><strong>50 dietas com IA por mês</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Agendamento online avançado</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Prontuários completos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span><strong>Suporte prioritário</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Relatórios avançados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Área personalizada do paciente</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <X className="h-5 w-5 text-gray-400 shrink-0 mr-3 mt-0.5" />
                      <span>Integração com wearables</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <Link 
                    href="/register?plan=pro" 
                    className="block w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white text-center py-3.5 rounded-lg font-medium transition shadow-md hover:shadow-lg"
                  >
                    Escolher Profissional
                  </Link>
                </div>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="p-8 bg-slate-50">
                  <h3 className="text-lg font-semibold text-gray-500 mb-2">Enterprise</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">R$ {isAnnualBilling ? '349' : '449'}</span>
                    <span className="text-gray-500 ml-1">/{isAnnualBilling ? 'mês' : 'mês'}</span>
                  </div>
                  {isAnnualBilling && (
                    <p className="text-sm text-gray-500 mb-4">Cobrado anualmente como R$ 4.188</p>
                  )}
                  <p className="text-gray-600">Para clínicas ou equipes de nutricionistas.</p>
                </div>
                
                <div className="p-8 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span><strong>Pacientes ilimitados</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span><strong>Dietas ilimitadas com IA</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span><strong>Multiusuários (até 5)</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Agendamento completo</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Prontuários avançados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Suporte VIP</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Relatórios avançados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>Integração com wearables</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <Link 
                    href="/register?plan=enterprise" 
                    className="block w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white text-center py-3 rounded-lg font-medium transition"
                  >
                    Fale com nossa equipe
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature comparison table */}
        <section className="py-12 px-6 md:px-10 bg-emerald-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Compare os recursos</h2>
              <p className="text-gray-600 text-lg">
                Veja em detalhes o que cada plano oferece para escolher a melhor opção para você
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="py-4 px-6 text-left">Recurso</th>
                    <th className="py-4 px-6 text-center">Iniciante</th>
                    <th className="py-4 px-6 text-center bg-emerald-700">Profissional</th>
                    <th className="py-4 px-6 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Pacientes ativos</td>
                    <td className="py-3 px-6 text-center">25</td>
                    <td className="py-3 px-6 text-center bg-emerald-50 font-medium">100</td>
                    <td className="py-3 px-6 text-center">Ilimitado</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Dietas com IA por mês</td>
                    <td className="py-3 px-6 text-center">10</td>
                    <td className="py-3 px-6 text-center bg-emerald-50 font-medium">50</td>
                    <td className="py-3 px-6 text-center">Ilimitado</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Usuários</td>
                    <td className="py-3 px-6 text-center">1</td>
                    <td className="py-3 px-6 text-center bg-emerald-50 font-medium">1</td>
                    <td className="py-3 px-6 text-center">Até 5</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Prontuários de pacientes</td>
                    <td className="py-3 px-6 text-center">Básico</td>
                    <td className="py-3 px-6 text-center bg-emerald-50 font-medium">Completo</td>
                    <td className="py-3 px-6 text-center">Avançado</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Portal do paciente</td>
                    <td className="py-3 px-6 text-center">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center bg-emerald-50">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Agendamento online</td>
                    <td className="py-3 px-6 text-center">Básico</td>
                    <td className="py-3 px-6 text-center bg-emerald-50 font-medium">Avançado</td>
                    <td className="py-3 px-6 text-center">Completo</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Lembretes automáticos</td>
                    <td className="py-3 px-6 text-center">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center bg-emerald-50">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Relatórios de progresso</td>
                    <td className="py-3 px-6 text-center">Básico</td>
                    <td className="py-3 px-6 text-center bg-emerald-50 font-medium">Avançado</td>
                    <td className="py-3 px-6 text-center">Avançado</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Biblioteca de receitas</td>
                    <td className="py-3 px-6 text-center">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center bg-emerald-50">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Suporte</td>
                    <td className="py-3 px-6 text-center">Email</td>
                    <td className="py-3 px-6 text-center bg-emerald-50 font-medium">Prioritário</td>
                    <td className="py-3 px-6 text-center">VIP (24/7)</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Integrações com wearables</td>
                    <td className="py-3 px-6 text-center">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center bg-emerald-50">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-6 text-left font-medium">Personalização de marca</td>
                    <td className="py-3 px-6 text-center">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center bg-emerald-50">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Perguntas frequentes</h2>
              <p className="text-gray-600 text-lg">
                Tire suas dúvidas sobre nossos planos e serviços
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "Como funciona o período de teste gratuito?",
                  answer: "Oferecemos 14 dias de teste gratuito para todos os novos usuários, sem necessidade de cartão de crédito. Durante esse período, você terá acesso a todas as funcionalidades do plano Profissional para avaliar se o DietHub atende às necessidades do seu negócio."
                },
                {
                  question: "Posso trocar de plano a qualquer momento?",
                  answer: "Sim, você pode atualizar seu plano a qualquer momento, e o valor será ajustado proporcionalmente ao tempo restante da sua assinatura atual. Para downgrade de plano, a alteração será aplicada no próximo ciclo de cobrança."
                },
                {
                  question: "O que acontece se eu exceder o limite de pacientes ou dietas?",
                  answer: "Caso você exceda o limite de pacientes ativos ou dietas do seu plano, você receberá uma notificação para fazer upgrade. Não haverá interrupção imediata do serviço, mas é recomendável atualizar seu plano para continuar utilizando todos os recursos sem restrições."
                },
                {
                  question: "Como funciona o faturamento anual?",
                  answer: "No plano anual, você recebe um desconto de 20% em comparação ao pagamento mensal. O valor total é cobrado de uma vez no início do período, garantindo economia e acesso ininterrupto à plataforma por 12 meses."
                },
                {
                  question: "Posso solicitar reembolso?",
                  answer: "Oferecemos garantia de reembolso de 30 dias para todos os planos. Se você não estiver satisfeito com o DietHub nos primeiros 30 dias após a compra, entre em contato com nosso suporte para solicitar o reembolso integral."
                },
                {
                  question: "Quais métodos de pagamento são aceitos?",
                  answer: "Aceitamos pagamentos por cartão de crédito (Visa, Mastercard, American Express), boleto bancário e PIX. Para planos Enterprise, também oferecemos opções de faturamento direto mediante contrato."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <button 
                    className="flex justify-between items-center w-full px-6 py-4 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <span>
                      {activeFaq === index ? (
                        <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  
                  {activeFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pronto para revolucionar sua prática nutricional?
                </h2>
                <p className="text-emerald-100 text-lg mb-6">
                  Junte-se a mais de 3.500 nutricionistas que já transformaram seu atendimento com o DietHub
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Sem taxas ocultas", "Cancele quando quiser", "Suporte dedicado"].map((item, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 text-sm">
                      <Check className="h-4 w-4 mr-1" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3">
                <Link 
                  href="/register" 
                  className="w-full bg-white text-emerald-800 hover:bg-emerald-50 py-4 px-8 rounded-xl font-medium text-lg flex items-center justify-center transition shadow-lg hover:shadow-xl"
                >
                  Começar teste gratuito
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <p className="text-center mt-4 text-sm text-emerald-100">
                  Não é necessário cartão de crédito
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <Image
                  src="/logo.png"
                  alt="DietHub Logo"
                  width={200}
                  height={200}
                  className="mb-6"
                />
                <p className="text-gray-400 mb-6">
                  A plataforma nutricional inteligente que ajuda nutricionistas a criar dietas personalizadas com IA.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Plataforma</h3>
                <ul className="space-y-3">
                  <li><Link href="/features" className="hover:text-white transition">Recursos</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition">Planos e Preços</Link></li>
                  <li><Link href="/demo" className="hover:text-white transition">Demonstração</Link></li>
                  <li><Link href="/ai" className="hover:text-white transition">Nossa Tecnologia</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Recursos</h3>
                <ul className="space-y-3">
                  <li><Link href="/diet-generator" className="hover:text-white transition">Gerador de Dietas</Link></li>
                  <li><Link href="/patient-tracking" className="hover:text-white transition">Acompanhamento de Pacientes</Link></li>
                  <li><Link href="/nutrition-database" className="hover:text-white transition">Base de Alimentos</Link></li>
                  <li><Link href="/reports" className="hover:text-white transition">Relatórios</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
                <ul className="space-y-3">
                  <li><Link href="/about" className="hover:text-white transition">Sobre nós</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contato</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition">Trabalhe Conosco</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
              <p>© 2025 DietHub. Todos os direitos reservados.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacidade</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">Termos</Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition">Cookies</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}