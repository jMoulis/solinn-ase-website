import {
  faMapMarkerAlt,
  faFolderOpen,
  faBuilding,
  faUsers,
  faShieldAlt
} from '@awesome.me/kit-126ba6d052/icons/duotone/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const CurveLoop = () => (
//   <svg
//     viewBox='0 0 200 300'
//     preserveAspectRatio='none'
//     className='w-full max-w-[150px] h-72 text-[#cc6600] mx-auto'>
//     <path
//       d='
//         M100 0
//         C 100 80, 180 80, 180 150
//         C 180 220, 20 220, 20 150
//         C 20 80, 100 80, 100 300
//       '
//       stroke='currentColor'
//       strokeWidth='3'
//       fill='none'
//       strokeLinecap='round'
//     />
//   </svg>
// );
const LongWavyLine = () => (
  <svg
    viewBox='0 0 600 800'
    preserveAspectRatio='none'
    className='w-[400px] h-[1300px] text-[#cc6600] mx-auto'>
    <path
      d='
        M300 0
        C 600 100, 0 200, 300 300
        C 600 400, 0 500, 300 600
        C 600 700, 0 800, 300 900
      '
      stroke='currentColor'
      strokeWidth='3'
      fill='none'
      strokeLinecap='round'
    />
  </svg>
);
export default function SolinnFeatures() {
  const features = [
    {
      title: 'Visualisation des places en temps réel',
      subtitle: "Réduire l'attente et fluidifier les parcours",
      bullets: [
        'Accès immédiat aux places disponibles dans les structures d’accueil.',
        'Réduction des délais de placement.',
        'Diminution du recours à l’hébergement temporaire.'
      ],
      icon: faMapMarkerAlt
    },
    {
      title: 'Suivi centralisé des dossiers des jeunes',
      subtitle: 'Faciliter l’accompagnement et éviter les ruptures',
      bullets: [
        'Un dossier unique, partagé et mis à jour par les professionnels habilités.',
        'Suivi continu de la santé, de la scolarité, du parcours et des décisions.',
        'Favorise la continuité de l’accompagnement, même en cas de changement d’intervenants.'
      ],

      icon: faFolderOpen
    },
    {
      title: 'Suivi et pilotage des établissements',
      subtitle: 'Favoriser l’équité et la qualité d’accueil',
      bullets: [
        'Indicateurs mesurables (taux de scolarisation, insertion, stabilité…).',
        'Outil d’aide à la décision pour les départements et les financeurs publics.'
      ],
      icon: faBuilding
    },
    {
      title: 'Travail collaboratif facilité',
      subtitle: 'Remettre le collectif au cœur de la mission',
      bullets: [
        'Partage sécurisé des informations entre services.',
        'Encourage une vision commune et des décisions concertées.',
        'Crée un environnement de travail plus fluide, humain et efficace.'
      ],
      icon: faUsers
    },
    {
      title: 'Sécurité et confidentialité des données',
      subtitle: 'Respecter la dignité et la protection des enfants',
      bullets: [
        'Conformité stricte au RGPD et recommandations de la CNIL.',
        'Accès restreints, journalisation des actions, données chiffrées.',
        'Respect absolu de la vie privée des jeunes accompagnés.'
      ],
      icon: faShieldAlt
    }
  ];

  return (
    <section className='bg-[#fff9e6] text-[#2a1d0f] py-20 px-6 font-sans rounded-lg relative'>
      <div className='max-w-4xl mx-auto text-center mb-16'>
        <h2 className='text-3xl font-bold text-[#cc6600] mb-2'>
          Ce que nous apportons avec Solinn ASE
        </h2>
        <p className='text-lg text-gray-700'>
          Une réponse humaine, concrète et collaborative aux défis de la
          protection de l’enfance
        </p>
      </div>

      <div className='max-w-5xl mx-auto space-y-12 relative'>
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={feature.title}
              className={`flex  flex-col-reverse md:flex-row items-center gap-2 relative ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}>
              {/* Colonne de texte */}
              <div className=' bg-white rounded-xl p-4 relative z-10 mx-4'>
                <h3 className='text-xl font-semibold text-[#b35400] mb-1'>
                  {feature.title}
                </h3>
                <h4 className='text-md font-medium text-gray-700 mb-3'>
                  {feature.subtitle}
                </h4>
                <ul className='list-disc list-inside space-y-2 text-gray-800'>
                  {feature.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              {/* Colonne de visuel / bulle numérotée */}
              <div className='flex justify-center items-center mb-4'>
                <FontAwesomeIcon
                  icon={feature.icon}
                  size='9x'
                  style={
                    {
                      '--fa-primary-color': '#cc6600',
                      '--fa-secondary-color': '#dfcd72'
                    } as never
                  }
                />
              </div>
            </div>
          );
        })}
        <div className='absolute top-0 left-[100px]'>
          <LongWavyLine />
        </div>
      </div>
    </section>
  );
}
