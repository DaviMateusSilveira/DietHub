import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <Image 
              src="/logo.png" 
              alt="DietHub Logo" 
              width={200} 
              height={50} 
              className="mb-4"
            />
            <p className="max-w-xs text-gray-400">
              Transformando a nutrição através da tecnologia e personalização.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-green-400 transition">Sobre Nós</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition">Carreiras</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><Link href="/dietgen" className="hover:text-green-400 transition">Diet Gen</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition">Biblioteca de Receitas</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition">Calculadora Nutricional</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-400 transition">Suporte</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition">Contato</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 DietHub. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-green-400 transition">Termos</Link>
            <Link href="#" className="hover:text-green-400 transition">Privacidade</Link>
            <Link href="#" className="hover:text-green-400 transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}