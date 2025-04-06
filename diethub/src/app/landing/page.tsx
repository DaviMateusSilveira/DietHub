"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col">
      {/* HEADER */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="DietHub Logo"
            width={50}
            height={50}
            className="mr-3"
          />
          <h1 className="text-2xl font-bold text-green-600">DietHub</h1>
        </div>
        <nav className="flex gap-6">
          <Link href="/login" className="text-green-600 font-medium hover:underline">
            Login
          </Link>
          <Link href="/register" className="text-green-600 font-medium hover:underline">
            Cadastre-se
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Transforme sua <span className="text-green-600">Alimentação</span> com o DietHub
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          O DietHub é a sua plataforma de nutrição personalizada, impulsionada por inteligência artificial. 
          Alcance seus objetivos de saúde com planos alimentares feitos sob medida para você.
        </p>
        <div className="flex gap-4">
          <Link
            href="/register"
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition shadow-md"
          >
            Cadastre-se Agora
          </Link>
          <Link
            href="/login"
            className="bg-white border border-green-600 text-green-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-green-50 transition shadow-md"
          >
            Já tenho conta
          </Link>
        </div>
      </main>

      {/* FEATURES SECTION */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Por que escolher o DietHub?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/feature1.png"
                alt="Personalização"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-green-600 mb-2">Planos Personalizados</h4>
              <p className="text-gray-600">
                Receba planos alimentares adaptados às suas necessidades e objetivos.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/feature2.png"
                alt="Saúde"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-green-600 mb-2">Saúde em Primeiro Lugar</h4>
              <p className="text-gray-600">
                Cuide do seu corpo com recomendações baseadas em ciência e tecnologia.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/feature3.png"
                alt="Comunidade"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-green-600 mb-2">Comunidade de Suporte</h4>
              <p className="text-gray-600">
                Junte-se a uma comunidade de pessoas com os mesmos objetivos que você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-6 text-center shadow-inner">
        <p className="text-sm text-gray-500">© 2025 DietHub. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}