"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function AboutPage() {
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
            <Link href="/planos" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Planos
            </Link>
            <Link href="/about" className="text-emerald-400 hover:text-emerald-300 transition-colors">
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
        <section className="py-16 md:py-20 px-6 md:px-10">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur px-4 py-1.5 rounded-full shadow-sm border border-emerald-100 mb-6">
                <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-emerald-700">Nossa Jornada</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
                Transformando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">nutrição</span> através da tecnologia
              </h1>
              <p className="text-xl text-gray-600 mx-auto">
                Conheça a equipe por trás do DietHub e nossa missão de revolucionar o atendimento nutricional
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto"
            >
              <Image
                src="/team-hero.jpg"
                alt="Equipe DietHub"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2">
                  <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
                  <span className="text-sm font-semibold uppercase text-emerald-600">Nossa História</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">De um projeto acadêmico a uma revolução nutricional</h2>
                <p className="text-lg text-gray-600">
                  O DietHub começou em 2022 como um projeto acadêmico de pós-graduação de Ana Souza, nutricionista e entusiasta de tecnologia. 
                  Frustrada com as limitações dos softwares tradicionais para nutricionistas, Ana desenvolveu uma solução que combinava 
                  inteligência artificial com conhecimentos nutricionais sólidos.
                </p>
                <p className="text-lg text-gray-600">
                  O que começou como um projeto para facilitar seu próprio trabalho rapidamente despertou interesse de outros profissionais. 
                  Em 2023, junto com uma equipe multidisciplinar, o DietHub foi oficialmente lançado com a missão de tornar o trabalho dos 
                  nutricionistas mais eficiente e os atendimentos mais personalizados.
                </p>
                <p className="text-lg text-gray-600">
                  Hoje, ajudamos mais de 3.500 nutricionistas em todo o Brasil a otimizarem seus atendimentos e oferecerem 
                  planos nutricionais verdadeiramente personalizados para seus pacientes.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-emerald-500 rounded-2xl transform rotate-3"></div>
                <Image
                  src="/about-story.jpg"
                  alt="Fundadores do DietHub"
                  width={600}
                  height={700}
                  className="relative rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-20 px-6 md:px-10 bg-emerald-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2">
                <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
                <span className="text-sm font-semibold uppercase text-emerald-600">Nossos princípios</span>
                <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
                Missão, Visão e Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossos princípios fundamentais guiam cada decisão e desenvolvimento que fazemos na plataforma
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Missão</h3>
                <p className="text-gray-600">
                  Transformar o atendimento nutricional com tecnologia inovadora, permitindo que nutricionistas ofereçam planos 
                  personalizados e eficazes, melhorando a saúde e bem-estar de pessoas em todo o mundo.
                </p>
              </motion.div>
              
              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Visão</h3>
                <p className="text-gray-600">
                  Ser a plataforma líder mundial para nutricionistas, estabelecendo um novo padrão na nutrição personalizada 
                  e tornando o acompanhamento nutricional de qualidade acessível para todos.
                </p>
              </motion.div>
              
              {/* Values */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossos Valores</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                    <span>Excelência científica</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                    <span>Inovação responsável</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                    <span>Ética e transparência</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                    <span>Foco no cliente</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                    <span>Inclusão e diversidade</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2">
                <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
                <span className="text-sm font-semibold uppercase text-emerald-600">Nossa Equipe</span>
                <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
                Conheça nossos líderes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma equipe multidisciplinar apaixonada por nutrição e tecnologia
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Ana Souza",
                  role: "CEO & Fundadora",
                  bio: "Nutricionista com especialização em Nutrição Esportiva e Mestrado em Tecnologia da Informação na Saúde.",
                  image: "/team-1.jpg"
                },
                {
                  name: "Rafael Mendes",
                  role: "CTO",
                  bio: "Engenheiro de Software com mais de 10 anos de experiência em desenvolvimento de soluções para a área da saúde.",
                  image: "/team-2.jpg"
                },
                {
                  name: "Carla Oliveira",
                  role: "Diretora Científica",
                  bio: "Doutora em Nutrição com foco em nutrigenômica e algoritmos de personalização nutricional.",
                  image: "/team-3.jpg"
                },
                {
                  name: "Marcos Santos",
                  role: "Diretor de Operações",
                  bio: "Especialista em gestão com experiência em empresas de tecnologia de rápido crescimento.",
                  image: "/team-4.jpg"
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="h-64 overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nosso impacto em números
              </h2>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                Desde nosso lançamento, temos ajudado milhares de profissionais a transformar sua prática nutricional
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "3.500+", label: "Nutricionistas" },
                { value: "120.000+", label: "Pacientes atendidos" },
                { value: "450.000+", label: "Dietas geradas" },
                { value: "97%", label: "Taxa de satisfação" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{stat.value}</div>
                  <div className="text-emerald-200 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2">
                <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
                <span className="text-sm font-semibold uppercase text-emerald-600">Nossa Trajetória</span>
                <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
                O caminho até aqui
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma jornada de inovação e crescimento
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-200 transform md:translate-x-0 translate-x-4"></div>
              
              <div className="space-y-12">
                {[
                  {
                    year: "2022",
                    title: "A ideia nasce",
                    description: "Ana Souza desenvolve o protótipo inicial do DietHub como projeto de pós-graduação."
                  },
                  {
                    year: "2022",
                    title: "Formação da equipe",
                    description: "Os primeiros membros da equipe se juntam para transformar o projeto em um produto viável."
                  },
                  {
                    year: "2023",
                    title: "Lançamento oficial",
                    description: "Primeira versão do DietHub é lançada para o público, com foco em nutricionistas clínicos."
                  },
                  {
                    year: "2023",
                    title: "Primeira rodada de investimento",
                    description: "Captação de investimento seed para acelerar o desenvolvimento da plataforma."
                  },
                  {
                    year: "2024",
                    title: "Expansão nacional",
                    description: "DietHub ultrapassa a marca de 1.000 nutricionistas ativos na plataforma."
                  },
                  {
                    year: "2025",
                    title: "Hoje",
                    description: "Com mais de 3.500 profissionais ativos, continuamos nossa missão de transformar a nutrição através da tecnologia."
                  }
                ].map((milestone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex md:flex-row ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    } items-start`}
                  >
                    <div className={`flex-grow-0 flex-shrink-0 w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}>
                      <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-emerald-500 font-bold mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute top-2 md:top-4 left-4 md:left-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow transform md:-translate-x-1/2 -translate-x-12 z-10"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 md:px-10 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2">
                <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
                <span className="text-sm font-semibold uppercase text-emerald-600">Depoimentos</span>
                <span className="h-1 w-12 bg-emerald-500 rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
                O que dizem nossos clientes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Histórias reais de nutricionistas que transformaram sua prática com o DietHub
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "O DietHub revolucionou meu atendimento. Consigo criar dietas personalizadas em minutos, com qualidade superior aos métodos tradicionais.",
                  name: "Dra. Marina Costa",
                  role: "Nutricionista Clínica",
                  image: "/testimonial-1.jpg"
                },
                {
                  quote: "A economia de tempo é impressionante. O que antes levava horas, agora faço em minutos. Isso me permite focar mais tempo no que realmente importa: o atendimento personalizado.",
                  name: "Dr. Paulo Henrique",
                  role: "Nutricionista Esportivo",
                  image: "/testimonial-2.jpg"
                },
                {
                  quote: "Meus pacientes ficam impressionados com os planos alimentares. A capacidade da IA de considerar preferências e restrições é incrível e aumentou significativamente a adesão às dietas.",
                  name: "Dra. Juliana Mendes",
                  role: "Nutróloga",
                  image: "/testimonial-3.jpg"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <svg className="h-10 w-10 text-emerald-400 mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v12H6a4 4 0 01-4-4v-2a4 4 0 014-4h.5V8H10zm12 0v12h-4a4 4 0 01-4-4v-2a4 4 0 014-4h.5V8H22z" />
                  </svg>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
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
                  Junte-se à comunidade DietHub
                </h2>
                <p className="text-emerald-100 text-lg mb-6">
                  Transforme sua prática nutricional com nossa plataforma inovadora e faça parte do futuro da nutrição personalizada
                </p>
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
                  14 dias grátis. Sem cartão de crédito.
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
                  <li><Link href="/planos" className="hover:text-white transition">Planos e Preços</Link></li>
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