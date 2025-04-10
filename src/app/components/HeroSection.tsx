import Image from 'next/image';
import mask from '../mask2.svg';

const HeroSection = () => {
  return (
    <section className='flex w-full h-[350px] md:h-[600px] p-6'>
      {/* Contenu centré */}
      <div className='flex flex-col justify-center  mx-4'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-2'>
          Solinn ASE
        </h1>
        <p className='text-xl md:text-2xl font-light'>
          La technologie au service des acteurs sociaux
        </p>
        <p className='text-xl md:text-2xl font-light'>
          {"de l'aide sociale à l'enfance"}
        </p>
        <a
          href='#contact'
          className='mt-4 cursor-pointer bg-indigo-500 w-fit text-2xl text-white py-2 px-8 rounded-lg hover:bg-indigo-700 transition duration-300'>
          Demander une démo
        </a>
      </div>
      <div className='flex-1 relative w-full'>
        <div className='relative w-full flex h-[400px] md:h-full overflow-hidden'>
          <Image
            src='/images/hero-background.png'
            alt='Illustration sociale'
            fill
            sizes='600px'
            className='w-full'
            style={{
              objectFit: 'cover',
              maskImage: `url(${mask.src})`,
              WebkitMaskImage: `url(${mask.src})`,
              maskSize: '137%',
              maskRepeat: 'no-repeat',
              maskPosition: '-6px -115px'
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
