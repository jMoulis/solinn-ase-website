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
      'Coordination fluide entre départements, établissements et partenaires',
      'Suivi des admissions et des places disponibles en temps réel',
      'Tableaux de bord partagés et actualisés',
      'Outils collaboratif interne et sécurisé',
      'Gestion documentaire et notes internes',
      'Données confidentielles, hébergement en France, RGPD respecté',
      'Outil statistique complet permettant un soutien lors des prises de décisions. (ex: Elaboration du schéma social)',
      'Interface intuitive'
    ],
    bgColor: 'bg-primary',
    button: {
      action: 'any',
      label: 'Demander une démo'
    }
  },
  {
    image: plateformAsso,
    title: 'Plateforme Asso',
    subtitle: 'En cours de développement',
    description:
      'Soutenir les associations sociales, éducatives et solidaires avec un outil simple, structurant et accessible, pour suivre les bénéficiaires, piloter les projets, coordonner les équipes et valoriser les actions.',
    items: [
      'Suivi des bénéficiaires et des actions menées',
      'Fiches complètes pour les membres (salariés, bénévoles, partenaires)',
      'Tableaux de bord projets, objectifs et priorités',
      'Partage sécurisé de documents et de notes internes',
      'Accueil et intégration des nouveaux membres',
      'Suivi des dons et mécénat',
      'Statistiques pour valoriser vos actions',
      'Navigation simple, pensée pour toutes les équipes'
    ],
    bgColor: 'bg-secondary',
    button: {
      action: 'any',
      label: 'Tenez-moi au courant'
    }
  }
];
function SolutionCards() {
  return (
    <ul className='flex md:space-x-4 space-y-4 flex-wrap justify-center'>
      {solutionCards.map((card, index) => (
        <SolutionCard key={index} {...card} />
      ))}
    </ul>
  );
}
export default SolutionCards;
