import plateformAse from '@/lib/assets/images/plateforme-ase.png';
import plateformAsso from '@/lib/assets/images/plateforme-asso.png';
import SolutionCard from './SolutionCard';

const solutionCards = [
  {
    image: plateformAse,
    title: 'Plateforme ASE',
    description:
      'Accompagner les services de l’Aide Sociale à l’Enfance avec une plateforme claire, collaborative et sécurisée, pour suivre les parcours des jeunes, faciliter la coordination entre professionnels, et libérer du temps pour l’humain.',
    items: [
      'Suivi complet des jeunes : évolution, scolarité, insertion pro, santé, bien-être',
      'Coordination fluide entre départements, établissements et partenaires'
    ],
    bgColor: 'bg-primary'
  },
  {
    image: plateformAsso,
    title: 'Plateforme Asso',
    description:
      'Soutenir les associations sociales, éducatives et solidaires avec un outil simple, structurant et accessible, pour suivre les bénéficiaires, piloter les projets, coordonner les équipes et valoriser les actions.',
    items: [
      'Suivi des bénéficiaires et des actions menées',
      'Fiches complètes pour les membres (salariés, bénévoles, partenaires)',
      'Tableaux de bord projets, objectifs et priorités',
      'Partage sécurisé de documents et de notes internes'
    ],
    bgColor: 'bg-secondary'
  }
];
function SolutionCards() {
  return (
    <ul className='flex space-x-4 flex-wrap justify-center'>
      {solutionCards.map((card, index) => (
        <SolutionCard key={index} {...card} />
      ))}
    </ul>
  );
}
export default SolutionCards;
