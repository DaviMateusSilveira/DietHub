"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email === 'davi' && password === 'davi') {
        const maxAge = rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60;
        document.cookie = `auth=true; path=/; max-age=${maxAge}`;
        router.push('/homePage');
      } else {
        setError('Email ou senha incorretos. Tente novamente.');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      {/* AI-themed background elements */}
      <div className="absolute inset-0 -skew-x-12 transform origin-top-right">
        <div className="absolute inset-0 right-1/2 bg-gradient-to-tl from-emerald-600 to-teal-700"></div>
      </div>

      {/* Decorative AI pattern overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '80px 80px'
          }}>
        </div>
      </div>

      {/* Return button */}
      <div className="absolute top-6 left-6 z-30">
        <Link 
          href="/" 
          className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl transition text-white hover:bg-white/30 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Página inicial
        </Link>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
        {/* Left side - AI Diet Generation Showcase */}
        <div className="hidden md:flex md:w-[70%] relative z-10">
          {/* Background with nutritionist/AI theme */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Background image - nutrition and technology themed */}
            <div className="absolute inset-0">
              <Image 
                src="/nutrition-bg.png" 
                alt="Nutricionista usando IA"
                fill
                className="object-cover" 
                priority
              />
            </div>
            
            {/* Dark overlay for text readability with AI-themed gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/60 to-teal-900/80"></div>
            
            {/* Subtle circuit-like pattern overlay suggesting AI */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                backgroundSize: '60px 60px'
              }}></div>
          </div>

          {/* AI Diet Generation content */}
          <div className="w-full h-full flex flex-col justify-center items-start px-12 md:px-16 lg:px-20 py-20 relative z-10">
            <div className="max-w-3xl space-y-8">
              {/* AI Pills indicator */}
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <p className="text-teal-100 font-medium text-sm">Potencializado por IA</p>
              </div>
              
              {/* Main heading focused on AI Diet Generation */}
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none mb-4 tracking-tight">
                  Gere <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-300">dietas personalizadas</span>
                </h2>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none mb-4 tracking-tight">
                  em segundos com IA
                </h2>
              </div>
              
              {/* Separator line */}
              <div className="w-full max-w-md h-px bg-gradient-to-r from-teal-400/40 to-transparent my-8"></div>
              
              {/* Specific AI benefits for nutritionists */}
              <div className="space-y-6">
                {/* Benefit 1: AI Diet Plans */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 p-2 rounded-lg mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Dietas com base em IA</h3>
                    <p className="text-teal-100/90 mt-1">Crie planos nutricionais personalizados para cada paciente considerando suas necessidades específicas, preferências e restrições.</p>
                  </div>
                </div>
                
                {/* Benefit 2: Time Saving */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 p-2 rounded-lg mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Economia de tempo</h3>
                    <p className="text-teal-100/90 mt-1">Reduza o tempo de criação de dietas de horas para segundos, permitindo atender mais pacientes com maior qualidade.</p>
                  </div>
                </div>
                
                {/* Benefit 3: Scientific Approach */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 p-2 rounded-lg mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Base científica atualizada</h3>
                    <p className="text-teal-100/90 mt-1">Acesse dietas baseadas nas mais recentes pesquisas científicas e diretrizes nutricionais atualizadas constantemente.</p>
                  </div>
                </div>
              </div>
              
              {/* AI Diet Generation Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
                  <p className="text-3xl font-bold text-white">70%</p>
                  <p className="text-sm text-teal-100">Menos tempo na criação de dietas</p>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
                  <p className="text-3xl font-bold text-white">3x</p>
                  <p className="text-sm text-teal-100">Maior satisfação dos pacientes</p>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-teal-100">Acesso à assistente nutricional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-[30%] relative z-20 flex items-center justify-center p-4 md:p-6">
          {/* Decorative circles behind form */}
          <div className="absolute right-0 top-20 w-64 h-64 bg-teal-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute left-10 bottom-10 w-72 h-72 bg-emerald-300/20 rounded-full filter blur-3xl"></div>
          
          {/* Form container with enhanced border */}
          <div className="w-full max-w-md relative z-10">
            {/* Decorative outer border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/50 to-teal-500/50 rounded-[28px] blur-sm"></div>
            
            {/* Main form with double border effect */}
            <div className="w-full backdrop-blur-md bg-white/95 p-8 md:p-10 rounded-3xl 
                shadow-[0_20px_50px_rgba(8,_112,_84,_0.2)] 
                border-2 border-emerald-100 
                outline outline-1 outline-offset-4 outline-teal-200/50
                animate-fadeIn relative">
              
              {/* Subtle accent line at the top of the form */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-b-lg"></div>
              
              <div className="text-center mb-8">
                <div className="relative">
                  {/* Logo with enhanced shadow and subtle animation */}
                  <Image 
                    src="/logo.png" 
                    alt="DietHub" 
                    width={200} 
                    height={54}
                    className="mx-auto mb-6 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  {/* Optional subtle glow behind logo */}
                  <div className="absolute -inset-1 bg-teal-400/10 rounded-full filter blur-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-1">Acesse sua conta</h1>
                <p className="text-gray-600 mt-2">E crie dietas incríveis com IA</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email ou Nome de Usuário
                  </label>
                  <div className="mt-1 relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-3 focus:ring-teal-500/30 focus:bg-white focus:border-teal-500 outline-none transition-all"
                      placeholder="Digite seu email ou usuário"
                      autoComplete="username"
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <div className="mt-1 relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-3 focus:ring-teal-500/30 focus:bg-white focus:border-teal-500 outline-none transition-all"
                      placeholder="Digite sua senha"
                      autoComplete="current-password"
                      required
                    />
                    <button 
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
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
                </div>

                {/* Remember me & Forgot password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Lembrar-me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="/reset-password" className="text-teal-600 hover:text-teal-800 font-medium">
                      Esqueceu a senha?
                    </Link>
                  </div>
                </div>
                
                {/* Login button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Entrando...
                      </div>
                    ) : "Começar a criar dietas"}
                  </button>
                </div>
              </form>
              
              {/* Register link */}
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Ainda não é um nutricionista DietHub?{' '}
                  <Link href="/register" className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center hover:underline">
                    Cadastre-se agora
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}