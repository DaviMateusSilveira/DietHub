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
    <div 
      className="relative min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: "url('/nutricionistas.png')",
      }}
    >
      {/* Overlay otimizado - suavizado */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(220, 252, 231, 0.5), rgba(255, 255, 255, 0.7))',
          backdropFilter: 'blur(1px)',
          zIndex: 1
        }}
      />

      {/* Conteúdo principal com animações */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* HEADER com animação de entrada */}
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 backdrop-blur-sm bg-white/80 shadow-md py-4 px-6 flex justify-between items-center"
        >
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="DietHub Logo"
              width={180}
              height={60}
              className="mr-3 transition transform group-hover:scale-105"
              priority
            />
          </Link>
          <nav className="flex gap-6">
            <Link href="/login" className="relative text-green-600 font-medium hover:text-green-800 transition-colors px-4 py-2">
              Login
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <Link 
              href="/register" 
              className="bg-white text-green-600 border border-green-600 rounded-full px-5 py-2 font-medium transition hover:bg-green-50 hover:shadow-md"
            >
              Cadastre-se
            </Link>
          </nav>
        </motion.header>

        {/* HERO SECTION com animações de entrada */}
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12"
        >
          <motion.div 
            className="backdrop-blur-sm bg-white/40 p-8 md:p-12 rounded-xl shadow-lg max-w-4xl border border-white/50"
            whileHover={{ boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" 
              style={{ color: '#1f4533', textShadow: '0px 1px 2px rgba(255,255,255,0.8)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transforme sua <span className="text-green-600">Alimentação</span> com o DietHub
            </motion.h1>
            <motion.p 
              className="text-lg max-w-2xl mb-10 mx-auto" 
              style={{ color: '#333', fontWeight: '500' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              O DietHub é a sua plataforma de nutrição personalizada, impulsionada por inteligência artificial. 
              Alcance seus objetivos de saúde com planos alimentares feitos sob medida para você.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link
                href="/register"
                className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 hover:scale-105 transition shadow-md"
              >
                Cadastre-se Agora
              </Link>
              <Link
                href="/login"
                className="bg-white border border-green-600 text-green-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-green-50 hover:shadow-lg transition"
              >
                Já tenho conta
              </Link>
            </motion.div>
          </motion.div>
        </motion.main>

        {/* FEATURES SECTION com cards animados */}
        <motion.section 
          className="py-16"
          style={{ backgroundColor: 'transparent' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Por que escolher o DietHub?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: "/customPlans.png",
                  alt: "Personalização",
                  title: "Planos Personalizados",
                  description: "Receba planos alimentares adaptados às suas necessidades e objetivos."
                },
                {
                  image: "/healthyIcon.png",
                  alt: "Saúde",
                  title: "Saúde em Primeiro Lugar",
                  description: "Cuide do seu corpo com recomendações baseadas em ciência e tecnologia."
                },
                {
                  image: "/community.png",
                  alt: "Comunidade",
                  title: "Comunidade de Suporte",
                  description: "Junte-se a uma comunidade de pessoas com os mesmos objetivos que você."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="h-32 flex items-center justify-center mb-4">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FOOTER com animação */}
        <motion.footer 
          className="py-6 text-center shadow-inner"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500">© 2025 DietHub. Todos os direitos reservados.</p>
        </motion.footer>
      </div>
    </div>
  );
}