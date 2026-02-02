import { TitleH2 } from "@/app/[locale]/components/Typos/Typos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqIllustration from "@/lib/assets/images/faq-illustration.png";

import Image from "next/image";

const faqs = [
  {
    title: "A qui s'adresse Solinn ?",
    content: "Solinn s’adresse aux services de l'aide sociale à l'enfance.",
  },
  {
    title: "Est-ce que Solinn s'adapte à notre façon de travailler ?",
    content:
      "Oui. Solinn ne propose pas un modèle imposé, mais co-construit des solutions sur-mesure, à partir de vos pratiques, vos besoins et votre rythme.",
  },
  {
    title: "Faut-il être à l'aise avec le numérique pour utiliser Solinn ?",
    content:
      "Non. Les interfaces sont pensées pour être simples, accessibles à tous les profils, et rassurantes pour les équipes de terrain comme pour la direction.",
  },
  {
    title: "Comment démarrer avec Solinn ?",
    content:
      "Tout commence par une conversation. Écrivez-nous, et découvrons ensemble comment Solinn peut vous soutenir dans vos missions.",
  },
  {
    title: "Est-ce que Solinn est sécurisé et respecte les données sensibles ?",
    content:
      "Oui, Solinn est conçu pour respecter les normes de sécurité et de confidentialité les plus strictes, en particulier pour les données sensibles des personnes accompagnées.",
  },
  {
    title: "Puis-je réslier quand je le souhaite ?",
    content:
      "Oui, vous pouvez résilier votre abonnement à tout moment. Nous croyons en la transparence et la confiance, pas en des engagements contraignants.",
  },
];
export function Faq() {
  return (
    <section
      id="faq"
      className="flex flex-col bg-primary w-full h-full py-10 md:px-[80px] px-6 items-center"
    >
      <TitleH2 className="text-center">FAQ</TitleH2>
      <Accordion
        type="single"
        collapsible
        className="w-full md:max-w-4xl m-auto cursor-pointer"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            className="cursor-pointer border border-t-0 border-b-black border-b-2 last:border-b-2 border-x-0"
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger className="cursor-pointer">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-[80px]">
        <Image
          src={faqIllustration}
          height={361}
          width={1268}
          alt="Une femme assise sur le logo solinn en face à face avec une petite fille, en train de peindre"
        />
      </div>
    </section>
  );
}
