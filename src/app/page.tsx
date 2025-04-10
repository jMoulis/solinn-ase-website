import ContactSection from './components/Contact';
import HeroSection from './components/HeroSection';
import SolinnFeatures from './components/SolinnFeatures';

export default function Home() {
  return (
    <main className='flex flex-col overflow-x-hidden'>
      <HeroSection />
      <SolinnFeatures />
      <section className='bg-white py-16 px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <blockquote className='italic text-lg text-gray-600 mb-6'>
            « La technologie ne remplace pas l’humain. Elle le soutient, l’aide
            à mieux agir, à mieux décider, à mieux accompagner. »
          </blockquote>
          <p className='text-gray-700'>
            Chaque fonctionnalité de Solinn ASE a été pensée avec des juges, des
            travailleurs sociaux, des responsables de structures et des services
            départementaux. Elle vise à redonner du temps, de la clarté et du
            sens à celles et ceux qui accompagnent notre jeunesse.
          </p>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
