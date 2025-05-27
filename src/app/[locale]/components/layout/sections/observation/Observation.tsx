import {
  BodyLG,
  BodyMD,
  DisplayXSBold,
  TitleH2
} from '@/app/[locale]/components/Typos/Typos';
import observationIllustration from '@/lib/assets/images/observation-illustrationv2.png';
import observationIllustration2 from '@/lib/assets/images/observation-illustration-2.png';

import Image from 'next/image';
import { PointingArrowUp } from './PointingArrowUp';
import { CurlyLineBlack } from '../../../shared/CurlyLineBlack';
export function Observation() {
  return (
    <section className='bg-primary md:pb-[80px] md:px-[80px]'>
      <div className='flex justify-center items-center flex-col space-y-2'>
        <TitleH2>{'"Nous faisons beaucoup avec peu."'}</TitleH2>
        <div>
          <BodyLG className='md:w-[678px] text-center'>
            Des équipes engagées, des missions essentielles, mais des outils
            inadaptés.
          </BodyLG>
          <BodyLG className='md:w-[678px] text-center mb-8'>
            Et au quotidien, ce sont des efforts redoublés pour compenser ce qui
            manque.
          </BodyLG>
        </div>
      </div>
      <div className='bg-[#FFD6F6] rounded-[50px] md:mt-[40px] flex md:flex-row flex-col relative md:px-[70px] md:pb-0 items-center p-6 mb-8 md:mb-0'>
        <div className='absolute top-[-20px] right-0 hidden md:block'>
          <CurlyLineBlack />
        </div>
        <div className='overflow-hidden'>
          <Image
            src={observationIllustration}
            alt='Observation Illustration'
            width={365}
            height={379}
            className='transform translate-y-0 md:translate-y-[30px] md:mr-[96px] md:mt-0 mt-[20px] md:mb-0 mb-[20px]'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-6 relative'>
          <DisplayXSBold>Votre réalité c&apos;est :</DisplayXSBold>
          <ul>
            {[
              '❌ Des outils dispersés ou mal adaptés à vos réalités',
              '❌ Des informations qui se perdent entre les mains et les services',
              '❌ Une charge mentale constante, tout repose sur les personnes',
              '❌ Une difficulté à valoriser vos actions, par manque de temps ou de données'
            ].map((item, index) => (
              <li key={index}>
                <BodyLG className='mt-2'>{item}</BodyLG>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='bg-secondary rounded-[50px] md:pt-[40px] md:mt-[40px] flex md:flex-row md:px-[70px] overflow-hidden md:pb-0 p-6 flex-col-reverse'>
        <div>
          <div className='flex flex-col justify-center items-start gap-6 flex-1'>
            <DisplayXSBold>
              Grâce à notre accompagnent et nos solutions, tout change
            </DisplayXSBold>
            <ul>
              {[
                '✅ Moins de charge mentale, plus de sérénité au quotidien',
                '✅ Une équipe pleinement connectée, avec des repères partagés',
                '✅ Du temps retrouvé pour accompagner, pas pour chercher',
                '✅ Des actions visibles et valorisées, sans effort supplémentaire'
              ].map((item, index) => (
                <li key={index}>
                  <BodyLG className='mt-2'>{item}</BodyLG>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex-col hidden md:flex items-center transform md:translate-x-[40px]'>
          <BodyMD className='md:w-[131px]'>
            + de 150 000 associations engagées
          </BodyMD>
          <PointingArrowUp />
        </div>
        <Image
          src={observationIllustration2}
          alt='Observation Illustration'
          width={365}
          height={379}
          className='transform md:translate-y-0 translate-y-[-20px] md:mt-0 mt-[20px] md:mb-0 mb-[20px]'
        />
      </div>
    </section>
  );
}
