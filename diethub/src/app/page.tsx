"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-200 to-white overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Decorative circle elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-teal-200/40 to-emerald-300/40 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-20 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-emerald-200/30 to-teal-300/30 rounded-full filter blur-3xl transform -translate-x-1/4"></div>
        
        {/* Subtle pattern overlay */}
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
            <Link href="/planos" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Planos
            </Link>
            <Link href="/login" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
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
          className="relative py-16 md:py-28 px-6 md:px-10 overflow-hidden"
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="lg:w-1/2 space-y-6"
              >
                <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur px-4 py-1.5 rounded-full shadow-sm border border-emerald-100">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-emerald-700">Plataforma nutricional com IA</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
                  Crie dietas com IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">em segundos</span> para seus pacientes
                </h1>
                
                <p className="text-lg text-gray-600 max-w-2xl">
                  O DietHub é uma plataforma inteligente que ajuda nutricionistas a criar planos alimentares personalizados, baseados em evidências científicas, e acompanhar o progresso de seus pacientes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    href="/register" 
                    className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3.5 rounded-full font-medium text-lg transition hover:shadow-lg hover:from-teal-600 hover:to-emerald-700 flex items-center justify-center group"
                  >
                    Começar Gratuitamente
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/demo" 
                    className="border border-gray-300 hover:border-emerald-500 bg-white text-gray-700 px-8 py-3.5 rounded-full font-medium text-lg transition flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Assista ao vídeo
                  </Link>
                </div>
              </motion.div>
              
              {/* Right Image/Animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  {/* Main image */}
                  <div className="relative bg-white p-3 rounded-2xl shadow-xl">
                    <Image 
                      src="/interfaceDiethub.png" 
                      alt="Interface do DietHub" 
                      width={600} 
                      height={400}
                      className="rounded-xl border border-gray-200"
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg shadow-lg text-white">
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="font-medium">IA avançada</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="text-emerald-600 font-bold text-xl">70%</div>
                        <div className="text-xs text-gray-600">mais rápido que<br/>métodos tradicionais</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats/Metrics Section */}
        <section className="py-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div 
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold">3.500+</p>
                <p className="text-emerald-100">Nutricionistas</p>
              </motion.div>
              
              <motion.div 
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold">25.000+</p>
                <p className="text-emerald-100">Dietas geradas</p>
              </motion.div>
              
              <motion.div 
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold">70%</p>
                <p className="text-emerald-100">Economia de tempo</p>
              </motion.div>
              
              <motion.div 
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold">95%</p>
                <p className="text-emerald-100">Satisfação dos pacientes</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <motion.section 
          className="py-20 px-6 md:px-10 bg-gradient-to-b from-emerald-200 to-emerald-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                A plataforma completa para nutricionistas
              </h2>
              <p className="text-gray-600 text-lg">
                O DietHub combina ciência nutricional e inteligência artificial para ajudar você a oferecer o melhor atendimento aos seus pacientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Dietas com IA",
                  description: "Gere planos alimentares personalizados em segundos com base nos objetivos, preferências e restrições de cada paciente."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Acompanhamento de Progresso",
                  description: "Acompanhe o progresso de todos os seus pacientes em um único dashboard, com gráficos e métricas claras."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Economia de Tempo",
                  description: "Reduza o tempo gasto com tarefas administrativas e foque no atendimento de qualidade para seus pacientes."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ),
                  title: "Base Científica",
                  description: "Acesse uma base de conhecimento atualizada com as mais recentes pesquisas científicas e diretrizes nutricionais."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Comunicação Integrada",
                  description: "Envie dietas, recomendações e material educativo diretamente para seus pacientes através da plataforma."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Privacidade e Segurança",
                  description: "Seus dados e de seus pacientes estão protegidos com a mais alta tecnologia de criptografia e conformidade com a LGPD."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-emerald-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How it Works Section */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-emerald-100 to-emerald-100">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Como o DietHub funciona
              </h2>
              <p className="text-gray-600 text-lg">
                Transforme seu atendimento em 3 passos simples
              </p>
            </div>
            
            <div className="relative">
              {/* Progress line */}
              <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-1 bg-emerald-100 transform -translate-x-1/2"></div>
              
              <div className="space-y-24">
                {[
                  {
                    step: "01",
                    title: "Cadastre o paciente",
                    description: "Insira as informações do paciente como idade, peso, altura, objetivos e preferências alimentares.",
                    image: "/pacienteCadastro.png"
                  },
                  {
                    step: "02",
                    title: "Gere planos alimentares com IA",
                    description: "Com um clique, nossa IA cria dietas personalizadas com base nas necessidades nutricionais específicas.",
                    image: "/dietgen.png"
                  },
                  {
                    step: "03",
                    title: "Acompanhe e ajuste",
                    description: "Monitore o progresso, colete feedback e faça ajustes nas dietas para obter os melhores resultados.",
                    image: "/relatorio.png"
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:w-1/2 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-extrabold text-emerald-500">{step.step}</span>
                        <div className="h-px flex-grow bg-emerald-200"></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                    
                    <div className="md:w-1/2">
                      <div className="relative">
                        
                        <div className="bg-white p-2 md:p-4 rounded-xl shadow-lg">
                          <Image 
                            src={step.image} 
                            alt={step.title}
                            width={700}
                            height={420}
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-emerald-100 to-emerald-300">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nutricionistas que confiam no DietHub
              </h2>
              <p className="text-gray-600 text-lg">
                Veja o que nossos usuários estão dizendo sobre a plataforma
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "O DietHub revolucionou minha clínica. Agora consigo atender 50% mais pacientes com a mesma qualidade, graças à rapidez na geração de dietas.",
                  author: "Dra. Mariana Costa",
                  position: "Nutricionista Esportiva",
                  image: "/nutri2.png"
                },
                {
                  quote: "A precisão das dietas geradas pela IA é impressionante. Meus pacientes perceberam resultados mais rápidos e isso aumentou significativamente sua satisfação.",
                  author: "Dr. Ricardo Mendes",
                  position: "Nutricionista Clínico",
                  image: "/nutri1.png"
                },
                {
                  quote: "Como nutricionista que atende online, o DietHub se tornou meu maior aliado. A comunicação integrada e o acompanhamento simplificado são fantásticos.",
                  author: "Dra. Juliana Alves",
                  position: "Nutricionista Digital",
                  image: "/nutri3.png"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg className="h-8 w-8 text-emerald-400 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 mb-8">{testimonial.quote}</p>
                  <div className="flex items-center space-x-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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