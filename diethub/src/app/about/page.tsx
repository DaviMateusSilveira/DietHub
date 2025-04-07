"use client";

import Image from 'next/image';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Nossa Missão no <span className="text-green-600">DietHub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Transformando o trabalho de nutricionistas e a vida de pacientes através de tecnologia nutricional avançada.
          </p>
          <div className="w-32 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>
      </section>
      
      {/* Nossa História */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                O DietHub nasceu da percepção de que os profissionais de nutrição poderiam se beneficiar enormemente da tecnologia avançada 
                para automatizar tarefas complexas, como a geração de planos alimentares personalizados.
              </p>
              <p className="text-gray-600 mb-4">
                Fundado em 2023 por uma equipe de nutricionistas e desenvolvedores de software, 
                nosso objetivo era criar uma plataforma que combinasse expertise nutricional com o poder da inteligência artificial.
              </p>
              <p className="text-gray-600">
                Hoje, estamos orgulhosos de oferecer um ecossistema completo que ajuda profissionais a economizar tempo
                e pacientes a alcançarem seus objetivos de saúde de forma mais eficiente e personalizada.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/about-image.jpg" 
                alt="Nossa equipe DietHub" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Nossos Valores */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Nossos Valores</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              title="Inovação"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              description="Buscamos constantemente novas formas de aplicar tecnologia para melhorar a precisão e eficiência dos planos nutricionais."
            />
            
            <ValueCard 
              title="Personalização"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              description="Reconhecemos que cada pessoa é única e criamos ferramentas que respeitam e se adaptam às necessidades individuais."
            />
            
            <ValueCard 
              title="Excelência"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              }
              description="Comprometemo-nos com os mais altos padrões de qualidade em nossas recomendações nutricionais e experiência do usuário."
            />
          </div>
        </div>
      </section>
      
      {/* Equipe */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Nossa Equipe</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <TeamMember 
              name="Dra. Ana Silva"
              role="Nutricionista Chefe"
              image="/team-1.jpg"
            />
            
            <TeamMember 
              name="Lucas Mendes"
              role="Desenvolvedor Lead"
              image="/team-2.jpg"
            />
            
            <TeamMember 
              name="Carla Santos"
              role="Especialista em IA"
              image="/team-3.jpg"
            />
            
            <TeamMember 
              name="Rafael Costa"
              role="UX Designer"
              image="/team-4.jpg"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Junte-se a nós na revolução da nutrição digital</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Experimente o DietHub hoje e descubra como podemos transformar sua prática nutricional.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-white text-green-600 font-medium rounded-full hover:bg-green-50 transition-colors">
              Comece agora
            </button>
            <button className="px-8 py-3 border border-white text-white font-medium rounded-full hover:bg-green-700 transition-colors">
              Agendar demonstração
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-10 md:mb-0">
              <Image 
                src="/logo-white.png" 
                alt="DietHub Logo" 
                width={150} 
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
                  <li><a href="#" className="hover:text-green-400 transition">Sobre Nós</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Carreiras</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Recursos</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-green-400 transition">Diet Gen</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Biblioteca de Receitas</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Calculadora Nutricional</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-green-400 transition">Suporte</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Contato</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 DietHub. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-400 transition">Termos</a>
              <a href="#" className="hover:text-green-400 transition">Privacidade</a>
              <a href="#" className="hover:text-green-400 transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ValueCard({ title, icon, description }: { title: string, icon: React.ReactNode, description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
      <div className="text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, image }: { name: string, role: string, image: string }) {
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
      <div className="relative h-64">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-green-600">{role}</p>
      </div>
    </div>
  );
}