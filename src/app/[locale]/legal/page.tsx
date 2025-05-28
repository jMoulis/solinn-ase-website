// app/mentions-legales/page.tsx
import React from 'react';
import { BodyMD, TitleH2, TitleH3 } from '../components/Typos/Typos';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function MentionsLegales() {
  return (
    <main className='relative text-neutral-800 bg-[#FEFDF6]'>
      <Link
        href='/'
        className='m-4 flex items-center text-neutral-600 hover:text-neutral-800 transition-colors'>
        <FontAwesomeIcon icon={faArrowLeft} className='mr-2 h-5' />
        <BodyMD>Retour à l&apos;accueil</BodyMD>
      </Link>
      <div className='relative flex flex-col items-center'>
        <TitleH2 className='text-3xl font-bold mb-8 text-center z-20'>
          Mentions légales
        </TitleH2>
        <Image
          src='/images/techno-underline.png'
          alt='underline'
          width={200}
          height={20}
          priority
          className='inline-block absolute md:w-[480px] w-[240px] z-10 md:top-[30px] top-[15px]'
        />
      </div>
      <section className='mb-8 m-4 md:mx-20'>
        <TitleH3 className='text-start'>1. Éditeur du site</TitleH3>
        <BodyMD className='mb-1 font-medium'>SOLINN</BodyMD>
        <BodyMD>SARL au capital de 5 000 €</BodyMD>
        <BodyMD>
          Siège social : 2521 route de bonneville, 74800 Arenthon, France
        </BodyMD>
        <BodyMD>SIRET : 941 601 221 00018</BodyMD>
        <BodyMD>Directeur de la publication : Julien Moulis</BodyMD>
        <BodyMD>
          Email :{' '}
          <a
            href='mailto:contact@solinn.fr'
            className='text-blue-600 underline'>
            contact@solinn.fr
          </a>
        </BodyMD>
        <BodyMD>Téléphone : +33 6 43 39 07 14</BodyMD>
      </section>

      <section className='mb-8 m-4 md:mx-20'>
        <TitleH3 className='text-start'>2. Hébergeur du site</TitleH3>
        <BodyMD className='mb-1 font-medium'>Vercel Inc.</BodyMD>
        <BodyMD>440 N Barranca Ave #4133</BodyMD>
        <BodyMD>Covina, CA 91723</BodyMD>
        <BodyMD>États-Unis</BodyMD>
        <BodyMD>
          Site web :{' '}
          <a
            href='https://vercel.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline'>
            https://vercel.com
          </a>
        </BodyMD>
      </section>

      <section className='mb-8 m-4 md:mx-20'>
        <TitleH3 className='text-start'>3. Propriété intellectuelle</TitleH3>
        <BodyMD>
          L’ensemble du contenu du site (textes, images, graphismes, logo,
          icônes, etc.) est la propriété exclusive de Solinn, sauf mention
          contraire. Toute reproduction, distribution, modification, adaptation,
          retransmission ou publication, même partielle, de ces différents
          éléments est strictement interdite sans l’accord écrit de Solinn.
        </BodyMD>
      </section>

      <section className='mb-8 m-4 md:mx-20'>
        <TitleH3 className='text-start'>4. Données personnelles</TitleH3>
        <BodyMD>
          Aucune donnée personnelle n’est collectée sans votre consentement. Le
          site Solinn ne collecte des informations personnelles relatives à
          l’utilisateur que pour le besoin de certains services proposés
          (formulaire de contact, newsletter). Conformément à la loi «
          Informatique et Libertés » et au RGPD, vous disposez d’un droit
          d’accès, de rectification et d’opposition aux données personnelles
          vous concernant. Pour exercer ce droit, contactez-nous à l’adresse :{' '}
          <a
            href='mailto:contact@solinn.fr'
            className='text-blue-600 underline'>
            contact@solinn.fr
          </a>
          .
        </BodyMD>
      </section>

      <section className='mb-8 m-4 md:mx-20'>
        <TitleH3 className='text-start'>5. Cookies</TitleH3>
        <BodyMD>
          Le site Solinn n&apos;utilise pas de cookies pour collecter des
          données personnelles.
        </BodyMD>
      </section>

      <section className='mb-8 m-4 md:mx-20'>
        <TitleH3 className='text-start'>6. Responsabilité</TitleH3>
        <BodyMD>
          Solinn s’efforce d’assurer au mieux de ses possibilités, l’exactitude
          et la mise à jour des informations diffusées sur le site. Toutefois,
          Solinn ne saurait être tenu pour responsable des omissions, des
          inexactitudes et des carences dans la mise à jour.
        </BodyMD>
      </section>

      <section className='mb-8 m-4 md:mx-20'>
        <TitleH3 className='text-start'>7. Liens externes</TitleH3>
        <BodyMD>
          Le site Solinn peut contenir des liens vers d’autres sites. Solinn ne
          peut être tenu responsable du contenu et de la politique de
          confidentialité de ces sites.
        </BodyMD>
      </section>

      <div className='text-sm text-neutral-500 mt-12 text-right'>
        Dernière mise à jour : 28 mai 2025
      </div>
    </main>
  );
}
