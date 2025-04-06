import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
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

      {/* MAIN */}
      <main className="container mx-auto py-24 px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Personalize a sua <span className="text-green-600">Dieta</span> Hoje
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          A DietHub oferece planos de nutrição personalizados impulsionados por IA para ajudar você a alcançar seus objetivos de saúde de forma mais inteligente e fácil.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition shadow-md">
          Escolha seu plano
        </button>

        <div className="mt-16 flex justify-center animate-fade-in">
          <Image
            src="/healthy-food.png"
            alt="Healthy food"
            width={650}
            height={450}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-6 text-center shadow-inner">
        <p className="text-sm text-gray-500">© 2025 DietHub. All rights reserved.</p>
      </footer>
    </div>
  );
}