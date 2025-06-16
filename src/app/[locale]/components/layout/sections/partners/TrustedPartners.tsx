import { Partner } from './Partner';
import idCube from '@/lib/assets/images/idCube.png';
import noyers from '@/lib/assets/images/centreNoyers.png';
import mut from '@/lib/assets/images/mut.png';

const partners = [
  {
    src: mut,
    partnerName: 'Mut',
    href: 'https://agence-mut.fr/'
  },
  {
    src: noyers,
    partnerName: 'Centre Noyers',
    href: 'https://centredesnoyers.org/'
  },
  {
    src: idCube,
    partnerName: 'idCube',
    href: 'https://www.innovales.fr/metiers/id-cube/'
  }
];
const TrustedPartners = () => {
  return (
    <section className='bg-primary flex justify-center text-red items-center text-2xl md:py-[60px] md:pb-[80px] md:px-[80px] px-6 py-[60px]'>
      <ul className='flex max-w-[100vw] overflow-x-auto items-center'>
        {partners.map((partner) => (
          <li
            key={partner.partnerName}
            className='min-h-[50pw] min-w-[90px] ml-8 transform grayscale-100'>
            <Partner {...partner} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TrustedPartners;
