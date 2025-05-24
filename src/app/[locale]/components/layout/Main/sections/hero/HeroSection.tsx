import heroImage from '@/lib/assets/images/hero-background.jpg';
import heroMask from '@/lib/assets/images/hero-mask.svg';
import SunRays from '@/lib/assets/images/sun-rays.png';
import curlyLine from '@/lib/assets/images/curly-line.png';

import Image from 'next/image';
import PointingArrow from './PointingArrow';
import {
  BodyMD,
  BodyXLMD,
  TitleH1
} from '@/app/[locale]/components/Typos/Typos';
import Button from '@/app/[locale]/components/buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <section className='flex bg-primary justify-between md:pt-[80px] md:px-[80px]'>
      <article className='space-y-6 md:w-[50%]'>
        <BodyXLMD className='md:w-[494px]'>
          Vous êtes une association, un département, une structure d’aide
          engagée.
        </BodyXLMD>
        <TitleH1>solinn,</TitleH1>
        <TitleH1 className='md:w-[600px]'>
          la technologie au service du lien humain
        </TitleH1>
        <BodyMD>
          Chez Solinn, nous concevons des produits numériques sur-mesure pour
          les acteurs de l’accompagnement des personnes en situation de
          vulnérabilités. Des outils ancrés dans vos réalités de terrain, pensés
          pour fluidifier vos actions, renforcer vos liens, et libérer du temps
          pour ce qui compte vraiment : l’humain. Des solutions simples,
          efficaces, respectueuses de vos pratiques.
        </BodyMD>
        <Button className='mt-6'>
          <span>Nos solutions</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className='ml-2'
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
              width: '16px',
              height: '16px'
            }}
          />
        </Button>
      </article>
      <article className='w-[50%] relative md:flex  hidden flex-col transform translate-y-[30px] translate-x-[100px]'>
        <Image
          src={curlyLine}
          alt='Curly Line'
          width={150}
          height={150}
          className='absolute z-50 top-[0px] right-[200px]'
        />
        <div
          className='min-h-[685px] w-auto relative'
          style={{
            maskImage: `url(${heroMask.src})`,
            maskSize: 'cover',
            maskPosition: 'center',
            maskRepeat: 'no-repeat'
          }}>
          <Image
            src={heroImage}
            alt='Hero Image'
            fill
            priority={true}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className='flex transform translate-y-[-60px] justify-center'>
          <div className='flex-1 flex justify-center items-center'>
            <Image
              src={SunRays}
              alt='Sun Rays'
              width={130}
              height={56}
              priority={true}
            />
          </div>
          <div className='flex space-x-2 flex-1 transform translate-y-[40px]'>
            <PointingArrow />
            <p className='md:!w-[147px]'>
              + de xxxx enfants sont lorem ipsum dolor isi amet data{' '}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
export default HeroSection;
