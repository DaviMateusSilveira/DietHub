"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Hook para redirecionamento

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'davi' && password === 'davi') {
      document.cookie = 'auth=true; path=/'; // Define o cookie de autenticação
      alert('Login bem-sucedido!');
      router.push('/homePage'); // Redireciona para a página inicial
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border-[3px] border-green-600/30 ring-4 ring-green-500/20 ring-offset-4 ring-offset-white">
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="DietHub Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold text-green-600 mt-4">Bem-vindo ao DietHub</h1>
          <p className="text-gray-600 mt-2">Faça login para continuar</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Digite sua senha"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full text-lg font-medium hover:bg-green-700 transition shadow-md"
          >
            Entrar
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <Link href="/register" className="text-green-600 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}