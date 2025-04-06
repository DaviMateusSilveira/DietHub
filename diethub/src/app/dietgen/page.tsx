"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function DietGenPage() {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* HEADER com novo background */}
      <header className="bg-gradient-to-r from-emerald-50 via-white to-green-50 py-6 shadow-xl flex flex-col items-center border-b-2 border-emerald-100">
        {/* Logo grande centralizada */}
        <Image
          src="/logo.png"
          alt="DietHub Logo"
          width={300}
          height={300}
          className="object-contain mb-2"
          priority
        />

        {/* Navegação centralizada */}
        <nav className="flex gap-10 font-medium text-black text-lg">
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/planos" className="hover:text-green-600 transition">Planos</Link>
          <Link href="/contato" className="hover:text-green-600 transition">Contato</Link>
          <Link href="/dietgen" className="hover:text-green-600 transition">DietGen</Link>
        </nav>
      </header>

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">
          Diet Gen - Crie sua dieta personalizada
        </h1>

        {/* Wrapper com bordas mais expressivas */}
        <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-xl 
            border-[3px] border-green-600/30 
            ring-4 ring-green-500/20 ring-offset-4 ring-offset-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Informações Pessoais */}
              <div className="col-span-2">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Informações Pessoais</h2>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Nome do paciente</label>
                <input
                  type="text"
                  placeholder="Ex: Maria Souza"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Objetivo</label>
                <input
                  type="text"
                  placeholder="Ex: emagrecimento"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Sexo</label>
                <select className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option value="">Selecione</option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Idade</label>
                <input
                  type="number"
                  placeholder="Ex: 30"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="Ex: 64"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Altura (m)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Ex: 1.65"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Informações Nutricionais */}
              <div className="col-span-2 mt-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Informações Nutricionais</h2>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Condições clínicas</label>
                <textarea
                  placeholder="Ex: resistência à insulina"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 h-20"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Preferências e restrições alimentares</label>
                <textarea
                  placeholder="Ex: não consome leite e derivados"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 h-20"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Calorias totais (kcal)</label>
                <input
                  type="number"
                  placeholder="Ex: 1800"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Proteína total (g)</label>
                <input
                  type="number"
                  placeholder="Ex: 120"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Refeições por dia</label>
                <input
                  type="number"
                  placeholder="Ex: 5"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Água recomendada (L)</label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="Ex: 2.5"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            {/* New expandable section */}
            <div className="col-span-2 mt-6">
              <button
                type="button"
                onClick={() => setShowSuggestions(!showSuggestions)}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                <span className="text-xl">{showSuggestions ? '−' : '+'}</span>
                Sugerir opções de refeições e alimentos ao plano
              </button>

              {showSuggestions && (
                <div className="mt-4 space-y-2">
                  <textarea
                    placeholder="Ex: Pão com ovo ou panqueca de banana no café da manhã..."
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 h-20"
                  />
                  <p className="text-sm text-gray-500">
                  Sugira alimentos que você gostaria de incluir no plano alimentar
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition shadow-md"
              >
                Gerar Dieta
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}