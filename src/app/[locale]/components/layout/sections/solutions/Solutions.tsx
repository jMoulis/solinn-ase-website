import {
  BodyLG,
  BodyMD,
  BodyXLMD,
  TitleH2,
  TitleH4
} from '@/app/[locale]/components/Typos/Typos';
import workersImage from '@/lib/assets/images/workers.png';
import Image from 'next/image';
import { PointingArrow } from './PointingArrow';
import Card from './Card';
import directionProfile from '@/lib/assets/images/direction-profile.png';
import managerProfile from '@/lib/assets/images/manager-profile.png';
import teamProfile from '@/lib/assets/images/team-profile.png';
import SolutionCards from './SolutionCards';

const cards = [
  {
    image: directionProfile,
    title: 'Pour la direction',
    items: [
      "Une vision claire et partagée de l'activité",
      'Des indicateurs fiables pour piloter sereinement'
    ]
  },
  {
    image: managerProfile,
    title: 'Pour les coordinateur-ices',
    items: [
      'Une continuité totale des suivis et des liens',
      'Un outil qui structure sans contraintes'
    ]
  },
  {
    image: teamProfile,
    title: 'Pour les équipes terrain',
    items: [
      'Plus de temps pour les personnes',
      'Un espace de travail intuitif et rassurant',
      'Une complète circulation de l’info, entre les différents intervenants'
    ]
  }
];

export function Solutions() {
  return (
    <section
      id='solutions'
      className='flex flex-col items-center justify-center bg-[#FEFDF6] py-[80px] px-6 md:px-[80px]'>
      <article>
        <header className='flex flex-col items-center justify-center'>
          <BodyXLMD>Ce que nous proposons :</BodyXLMD>
          <TitleH2 className='md:w-[800px] text-center mt-[16px]'>
            Des outils numériques conçus avec vous, pour vous.
          </TitleH2>
        </header>
        <div className='flex md:mt-20 mt-8 md:space-x-16 space-x-8 relative'>
          <Image
            src={workersImage}
            alt='Workers collaborating'
            className='w-full h-auto hidden md:block'
            style={{ maxWidth: '800px', height: 'auto' }}
          />
          <div className='space-y-6 relative'>
            <BodyLG>
              Chez Solinn, nous accompagnons les associations, départements et
              structures d’aide en concevant des solutions numériques
              sur-mesure, ancrées dans vos réalités de terrain. Pas de modèle
              figé. Nous partons de vos besoins, de vos pratiques, de votre
              façon de travailler.
            </BodyLG>
            <BodyXLMD>Résultat</BodyXLMD>
            <BodyLG>
              Des outils simples, efficaces, qui fluidifient vos actions,
              renforcent les liens,et vous libèrent du temps pour ce qui compte
              vraiment : l’humain. Des fonctionnalités utiles, rien de superflu.
              L’essentiel, au bon endroit, au bon moment
            </BodyLG>
            <div className='relative hidden md:block'>
              <div className='absolute right-0 top-0 flex items-center space-x-4'>
                <PointingArrow />
                <BodyMD className='md:w-[150px] transform translate-y-[40px]'>
                  Recherche de disponibilité en moins de 30 secondes
                </BodyMD>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className='md:mt-16 mt-8 space-y-4 flex flex-col items-center border-b-2 md:pb-[100px] pb-[60px]'>
        <TitleH4>Des impacts concret sur votre organisation</TitleH4>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 mt-8'>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </article>
      <article className='space-y-4 md:pt-[100px] pt-[60px]'>
        <header className='flex flex-col items-center justify-center space-y-4'>
          <BodyXLMD>Nos solutions</BodyXLMD>
          <TitleH2 className='text-center'>
            Deux plateformes, une même intention
          </TitleH2>
          <div>
            <BodyLG className='md:w-[800px] text-center'>
              Solinn s’adresse à celles et ceux qui accompagnent des personnes
              en situation de vulnérabilité.
            </BodyLG>
            <BodyLG className='md:w-[800px] text-center'>
              Nous avons conçu deux espaces complémentaires, portés par une même
              envie : soulager, structurer, relier.
            </BodyLG>
          </div>
        </header>
        <SolutionCards />
      </article>
    </section>
  );
}
