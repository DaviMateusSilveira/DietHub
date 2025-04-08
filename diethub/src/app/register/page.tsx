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
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is being edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-teal-50 relative overflow-hidden">
      {/* Elementos decorativos no fundo */}
      <div className="absolute inset-0 z-0">
        {/* Círculo superior direito */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-200 to-emerald-300 rounded-full opacity-30 blur-3xl"></div>
        {/* Círculo inferior esquerdo */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-200 to-teal-300 rounded-full opacity-30 blur-3xl"></div>
        {/* Padrão sutil */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2320a67f' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 backdrop-blur-md bg-white/90 shadow-sm py-4 px-6 md:px-10 flex justify-between items-center z-50"
        >
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="DietHub Logo"
              width={160}
              height={54}
              className="mr-3 transition transform group-hover:scale-105"
              priority
            />
          </Link>
          
          <nav className="flex gap-6">
            <Link 
              href="/login" 
              className="text-teal-600 font-medium hover:text-teal-800 transition-colors px-4 py-2 group"
            >
              Login
              <span 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </Link>
          </nav>
        </motion.header>

        {/* Main content */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Left side - Promotional content */}
          <motion.div 
            className="hidden md:flex md:w-1/2 p-10 items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative z-10 max-w-xl">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit mb-8">
                <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <p className="text-teal-800 font-medium text-sm">Comece sua jornada</p>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                Transforme seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">atendimento</span> com a primeira plataforma de nutrição com IA
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Junte-se a milhares de nutricionistas que já estão economizando tempo e melhorando seus resultados com o DietHub.
              </p>
              
              {/* Benefits section */}
              <div className="space-y-4">
                {[
                  {
                    title: "Crie dietas personalizadas em segundos",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  },
                  {
                    title: "Acesse do desktop ou dispositivos móveis",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Comece grátis, sem cartão de crédito",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      {benefit.icon}
                    </div>
                    <p className="font-medium text-gray-700">{benefit.title}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-teal-100 to-emerald-50 rounded-full filter blur-3xl opacity-70 -z-10"></div>
          </motion.div>

          {/* Right side - Registration form */}
          <motion.div 
            className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Decorative elements */}
            <div className="absolute right-10 top-24 w-64 h-64 bg-teal-400/10 rounded-full filter blur-3xl"></div>
            <div className="absolute left-1/4 bottom-10 w-72 h-72 bg-emerald-300/10 rounded-full filter blur-3xl"></div>
            
            {/* Form container */}
            <div className="w-full max-w-md relative">
              {/* Decorative outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-2xl blur-sm"></div>
              
              {/* Main form card */}
              <div className="relative backdrop-blur-sm bg-white/90 p-8 rounded-2xl shadow-lg border border-emerald-100">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-b-lg"></div>
                
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">Crie sua conta</h1>
                  <p className="text-gray-500">E comece a criar dietas com IA</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="seu@email.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  
                  {/* Password field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Senha
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition-all ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Mínimo 6 caracteres"
                      />
                      <button 
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>
                  
                  {/* Confirm Password field */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirme sua senha
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Confirme sua senha"
                      />
                      <button 
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                      >
                        {confirmPasswordVisible ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>
                  
                  {/* Terms agreement */}
                  <div className="flex items-start mt-6">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeTerms" className="text-gray-600">
                        Concordo com os <Link href="/terms" className="text-teal-600 hover:text-teal-800 underline font-medium">Termos de Uso</Link> e <Link href="/privacy" className="text-teal-600 hover:text-teal-800 underline font-medium">Política de Privacidade</Link>
                      </label>
                    </div>
                  </div>
                  {errors.agreeTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeTerms}</p>}

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 disabled:opacity-70 mt-6"
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
                      'Começar a usar'
                    )}
                  </motion.button>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Já tem uma conta?{' '}
                    <Link href="/login" className="text-teal-600 hover:text-teal-800 font-medium">
                      Faça login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <footer className="py-4 px-6 text-center border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <p className="text-sm text-gray-500">© 2025 DietHub. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}