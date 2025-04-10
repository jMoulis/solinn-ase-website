import { faArrowLeft } from '@awesome.me/kit-126ba6d052/icons/duotone/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solinn ASE - mentions légales',
  description:
    "La technologie au service des acteurs sociaux de l'Aide Sociale à l'Enfance"
};

export default function LegalPage() {
  return (
    <main className='bg-[#fffdf6] text-[#2a1d0f] px-6 font-sans max-w-4xl mx-auto space-y-10'>
      <Link href={'/'} className='text-[#cc6600] hover:underline my-4 block'>
        <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
        Retour à l&apos;accueil
      </Link>

      <h1 className='text-3xl font-bold text-[#cc6600] mb-4'>
        Mentions légales
      </h1>

      <section>
        <h2 className='text-xl font-semibold text-[#b35400] mb-2'>
          Éditeur du site
        </h2>
        <p>
          Le présent site est édité par la société <strong>Solinn</strong>,
          spécialisée dans le développement de solutions numériques à
          destination des acteurs sociaux et des structures d’accompagnement.
        </p>
        <p className='mt-2'>
          <strong>Raison sociale :</strong> Solinn SARL
          <br />
          <strong>Adresse :</strong> 2521 route de bonneville 74800 Arenthon
          <br />
          <strong>Email :</strong> contact@solinn.fr
          <br />
          <strong>Téléphone :</strong> +33 6 43 39 07 14
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-[#b35400] mb-2'>
          Hébergement
        </h2>
        <p>
          Le site est hébergé par :<br />
          <strong>Vercel Inc.</strong>
          <br />
          340 S Lemon Ave #4133, Walnut, CA 91789, USA
          <br />
          <a
            href='https://vercel.com'
            className='text-blue-700 hover:underline'>
            www.vercel.com
          </a>
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-[#b35400] mb-2'>
          Propriété intellectuelle
        </h2>
        <p>
          Tous les contenus présents sur le site (textes, illustrations, images,
          logos, vidéos, etc.) sont la propriété exclusive de Solinn, sauf
          mentions contraires. Toute reproduction, représentation ou diffusion,
          intégrale ou partielle, est interdite sans autorisation préalable.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-[#b35400] mb-2'>
          Protection des données personnelles
        </h2>
        <p>
          Conformément au RGPD (Règlement Général sur la Protection des
          Données), les informations collectées via nos formulaires sont
          destinées uniquement à un usage interne et ne sont jamais transmises à
          des tiers sans votre consentement.
        </p>
        <p className='mt-2'>
          Vous disposez d’un droit d’accès, de rectification et de suppression
          de vos données personnelles. Pour exercer ces droits, contactez-nous à
          l’adresse :{' '}
          <a
            href='mailto:contact@solinn.fr'
            className='text-blue-700 hover:underline'>
            contact@solinn.fr
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-[#b35400] mb-2'>Cookies</h2>
        <p>
          Ce site n’utilise pas de cookies à des fins publicitaires. Des cookies
          techniques peuvent être utilisés pour garantir le bon fonctionnement
          du site. Vous pouvez configurer votre navigateur pour les refuser si
          vous le souhaitez.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-[#b35400] mb-2'>
          Responsabilité
        </h2>
        <p>
          Solinn décline toute responsabilité en cas d’erreurs, d’inexactitudes
          ou d’omissions sur le contenu du site. Les informations présentées
          sont fournies à titre indicatif et peuvent évoluer sans préavis.
        </p>
      </section>

      <p className='text-sm text-gray-500 pt-10'>
        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
      </p>
    </main>
  );
}
