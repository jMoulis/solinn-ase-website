import { TitleH2 } from '@/app/[locale]/components/Typos/Typos';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import faqIllustration from '@/lib/assets/images/faq-illustration.png';

import Image from 'next/image';

const faqs = [
  {
    title: "A qui s'address Solinn",
    content:
      'Solinn s’adresse aux associations, aux départements, et plus largement à toutes les structures engagées dans l’aide, le soin ou l’accompagnement des personnes en situation de vulnérabilité.'
  },
  {
    title: 'Quelle est la différence entre Solinn ASE et Solinn ASSO ?',
    content:
      'Solinn ASE est dédié aux services de l’Aide Sociale à l’Enfance : suivi des jeunes, coordination entre établissements et départements, tableaux de bord, etc. Solinn ASSO est conçu pour les associations : gestion des bénéficiaires, projets, équipes, dons et valorisation des actions.'
  },
  {
    title: "Est-ce que Solinn s'adapte à notre façon de travailler ?",
    content:
      'Oui. Solinn ne propose pas un modèle imposé, mais co-construit des solutions sur-mesure, à partir de vos pratiques, vos besoins et votre rythme.'
  },
  {
    title: "Faut-il être à l'aise avec le numérique pour utiliser Solinn ?",
    content:
      'Non. Les interfaces sont pensées pour être simples, accessibles à tous les profils, et rassurantes pour les équipes de terrain comme pour la direction.'
  },
  {
    title: 'Est-ce que Solinn convient aux petites structures ?',
    content:
      'Absolument. Nos solutions sont pensées pour être utiles, sobres et efficaces, quelle que soit la taille de votre structure. Pas de superflu, juste l’essentiel.'
  },
  {
    title: 'Comment démarrer avec Solinn ?',
    content:
      'Absolument. Nos solutions sont pensées pour être utiles, sobres et efficaces, quelle que soit la taille de votre structure. Pas de superflu, juste l’essentiel.'
  },
  {
    title: 'Est-ce que Solinn est sécurisé et respecte les données sensibles ?',
    content:
      'Oui, Solinn est conçu pour respecter les normes de sécurité et de confidentialité les plus strictes, en particulier pour les données sensibles des personnes accompagnées.'
  },
  {
    title: 'Puis-je réslier quand je le souhaite ?',
    content:
      'Oui, vous pouvez résilier votre abonnement à tout moment. Nous croyons en la transparence et la confiance, pas en des engagements contraignants.'
  }
];
export function Faq() {
  return (
    <section
      id='faq'
      className='flex flex-col bg-primary w-full h-full py-10 md:px-[80px] px-6'>
      <TitleH2 className='text-center'>FAQ</TitleH2>
      <Accordion type='single' collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem
            className='border border-t-0 border-b-black border-b-2 last:border-b-2 border-x-0'
            key={index}
            value={`item-${index}`}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className='mt-[80px]'>
        <Image
          src={faqIllustration}
          height={361}
          width={1268}
          alt='Une femme assise sur le logo solinn en face à face avec une petite fille, en train de peindre'
        />
      </div>
    </section>
  );
}
