"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';

// Interfaces para tipagem
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeTerms?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    let tempErrors: FormErrors = {};
    if (!formData.name) tempErrors.name = "Nome é obrigatório";
    if (!formData.email) tempErrors.email = "Email é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email inválido";
    if (!formData.password) tempErrors.password = "Senha é obrigatória";
    else if (formData.password.length < 6) tempErrors.password = "Senha deve ter pelo menos 6 caracteres";
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Senhas não coincidem";
    if (!formData.agreeTerms) tempErrors.agreeTerms = "Você deve concordar com os termos";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulação de chamada de API
      setTimeout(() => {
        // Mock do registro bem-sucedido
        document.cookie = 'auth=mockAuthToken; path=/; max-age=86400;'; // 24 horas
        setIsLoading(false);
        router.push('/homePage'); // Redireciona para a home page após "registro"
      }, 1500);
    }
  };

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
        {/* HEADER sem framer-motion */}
        <header 
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
            <Link href="/login" className="relative text-green-600 font-medium hover:text-green-800 transition-colors px-4 py-2 group">
              Login
              <span 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </Link>
          </nav>
        </header>

        {/* FORM SECTION */}
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex flex-col items-center justify-center px-4 py-12"
        >
          <motion.div 
            className="backdrop-blur-sm bg-white/60 p-8 md:p-10 rounded-xl shadow-lg max-w-md w-full border border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Cadastre-se no DietHub</h1>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Form fields remain the same */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Mínimo 6 caracteres"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirme sua senha</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Confirme sua senha"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 rounded focus:ring-green-500 border-gray-300"
                  />
                  <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                    Concordo com os <Link href="/terms" className="text-green-600 hover:underline">Termos de Uso</Link> e <Link href="/privacy" className="text-green-600 hover:underline">Política de Privacidade</Link>
                  </label>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeTerms}</p>}

                <motion.button
                  type="submit"
                  className="w-full bg-green-600 text-white rounded-lg py-3 font-medium hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processando...
                    </div>
                  ) : (
                    'Cadastrar'
                  )}
                </motion.button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Já tem uma conta?{' '}
                <Link href="/login" className="text-green-600 hover:underline font-medium">
                  Faça login
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.main>

        {/* FOOTER com animação */}
        <motion.footer 
          className="py-4 text-center shadow-inner"
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