import {
  BodyMD,
  TitleH2,
  TitleH3
} from '@/app/[locale]/components/Typos/Typos';
import Image from 'next/image';
import whoAreWe from '@/lib/assets/images/whoAreWe.png';
import { CurlyLineBlack } from '@/app/[locale]/components/shared/CurlyLineBlack';
import clapHands from '@/lib/assets/images/clap-hands.png';
import { ContactButton } from '../../../Contact/ContactButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function WhoAreWe() {
  return (
    <section
      id='whoAreWe'
      className='bg-primary md:px-[80px] md:py-[60px] px-6 py-[20px]'>
      <div className='flex flex-col items-center justify-center py-10 space-y-4'>
        <BodyMD>Qui sommes-nous ?</BodyMD>
        <TitleH2 className='text-center md:max-w-[70%]'>
          Solinn, Une structure à impatct au service du lien humain
        </TitleH2>
      </div>
      <div className='flex space-x-20 items-center mb-12'>
        <Image
          src={whoAreWe}
          alt="Image de l'équipe Solinn"
          className='w-[420px] h-[500px] hidden md:block'
        />
        <div className='flex flex-col space-y-8'>
          <BodyMD>
            Solinn est le fruit d’une amitié de plus de 20 ans entre Elias,
            responsable d’un Lieu de Vie engagé auprès des jeunes, Julien,
            développeur d’applications web. Portés par une même conviction —
            celle que la technologie peut servir l’humain — nous avons décidé de
            rassembler nos forces pour créer un outil à la hauteur des enjeux du
            secteur social. Ainsi est né Solinn. Une structure à impact au
            service du lien humain Solinn conçoit des outils numériques
            sur-mesure pour les acteurs de l’aide et du soin. Notre équipe
            réunit des profils complémentaires : développeurs, designers,
            coordinateurs, spécialistes métier.
          </BodyMD>
          <BodyMD className='mb-0'>
            <strong>Notre mission</strong> est de mettre la technologie au
            service du lien, en soutenant celles et ceux qui soutiennent les
            autres. Solinn, c’est aussi une manière d’agir à notre place, pour
            vous aider à tenir la vôtre.
          </BodyMD>
          <BodyMD className='mb-0'>Deux plateformes dédiées</BodyMD>
          <ul className='mb-0'>
            <li className='list-disc ml-6'>
              <BodyMD>
                Solinn ASE : pour les services de l’Aide Sociale à l’Enfance
              </BodyMD>
            </li>
            <li className='list-disc ml-6'>
              <BodyMD>
                Solinn ASSO : pour les associations sociales, éducatives et
                solidaires
              </BodyMD>
            </li>
          </ul>
          <BodyMD>
            Ces plateformes ont été conçues main dans la main avec les
            professionnels de terrain, pour respecter vos usages, alléger votre
            quotidien et renforcer la continuité de vos actions.
          </BodyMD>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='bg-white rounded-[50px] md:p-[40px] p-6 md:mr-8 flex-2 relative mb-8 md:mb-0'>
          <div className='absolute top-[-30px] right-0 hidden md:block'>
            <CurlyLineBlack />
          </div>
          <TitleH3 className='md:mb-8 mb-4 text-left'>Pourquoi nous ?</TitleH3>
          <BodyMD>
            Chez Solinn, nous privilégions une écoute active plutôt qu’un modèle
            imposé : nous vous aidons à structurer le vôtre. Notre technologie
            est sobre et utile, sans gadgets, pensée pour simplifier votre
            quotidien. Le lien humain est essentiel : pas de robots, nous sommes
            là, vraiment. Nous adoptons une démarche éthique, avec un
            hébergement en France, le respect strict du RGPD et zéro
            exploitation de vos données. Enfin, Solinn repose sur une mission
            sociale forte : aider celles et ceux qui aident.
          </BodyMD>
        </div>

        <div className='bg-[#FFD6F6] rounded-[50px] md:p-[40px] p-6 flex-1'>
          <TitleH3 className='md:mb-8 mb-4  text-left'>
            Notre conviction
          </TitleH3>
          <BodyMD>
            Il y a des gens biens, qui font des choses bien. Et ils méritent
            d’être soutenus. Chaque fonctionnalité, chaque mot de l’interface,
            chaque mode de collaboration a été pensé pour respecter vos usages,
            alléger votre quotidien, et renforcer le lien entre vous.
          </BodyMD>
        </div>
      </div>
      <div className='bg-secondary rounded-[50px] md:p-[40px] p-6 flex items-center justify-between mt-8'>
        <div>
          <TitleH3 className=' text-left'>
            Libérez du temps pour ce qui compte vraiment: l&apos;humain.
          </TitleH3>
          <BodyMD>
            Chaque fois que vous êtes soutenus, vous pouvez continuer à soutenir
            les autres.
          </BodyMD>
          <BodyMD>
            C’est ça, l’effet Solinn : une onde de soin, de lien, de continuité.
          </BodyMD>
          <BodyMD>Et tout commence par une conversation.</BodyMD>
          <ContactButton
            className='bg-black text-white mt-4'
            label='Demandez une démo'
            topic='demo'>
            <FontAwesomeIcon icon={faArrowRight} />
          </ContactButton>
        </div>
        <Image
          alt='Des mains qui se clap'
          src={clapHands}
          className='hidden md:block'
          width={358}
          height={327}
        />
      </div>
    </section>
  );
}
