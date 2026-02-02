import plateformAse from "@/lib/assets/images/plateforme-ase.png";
import SolutionCard from "./SolutionCard";

const solutionCards = [
  {
    image: plateformAse,
    title: "Plateforme ASE",
    description:
      "Accompagner les services de l’Aide Sociale à l’Enfance avec une plateforme claire, collaborative et sécurisée, pour suivre les parcours des jeunes, faciliter la coordination entre professionnels, et libérer du temps pour l’humain.",
    items: [
      "Suivi complet des jeunes : évolution, scolarité, insertion pro, santé, bien-être",
      "Coordination fluide entre départements, les lieux d'accueil et les partenaires",
      "Suivi des parcours d'accueil et des disponibilités en temps réel",
      "Tableaux de bord partagés et actualisés",
      "Outils collaboratifs internes et sécurisés",
      "Gestion documentaire et notes internes",
      "Données confidentielles, hébergement en France, RGPD respecté",
      "Outil statistique complet permettant un soutien lors des prises de décisions. (ex: Elaboration du schéma social)",
      "Interface intuitive",
    ],
    bgColor: "bg-primary",
    button: {
      topic: "demo",
      app: "ase",
      label: "Demander une démo",
    },
  },
];
function SolutionCards() {
  return (
    <ul className="flex md:space-x-20 md:max-w-[80%] space-y-4 flex-wrap justify-center">
      {solutionCards.map((card, index) => (
        <SolutionCard key={index} {...card} />
      ))}
    </ul>
  );
}
export default SolutionCards;
