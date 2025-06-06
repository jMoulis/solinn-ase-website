import { Partner } from './Airbnb';
// import airbnb from '@/lib/assets/images/airbnb.png';
// import google from '@/lib/assets/images/google.png';
// import microsoft from '@/lib/assets/images/microsoft.png';
// import hubspot from '@/lib/assets/images/hubspot.png';
import idCube from '@/lib/assets/images/idCube.png';
import noyers from '@/lib/assets/images/centreNoyers.png';

const partners = [
  // {
  //   src: airbnb,
  //   partnerName: 'Airbnb'
  // },
  // {
  //   src: google,
  //   partnerName: 'Google'
  // },
  {
    src: noyers,
    partnerName: 'Centre Noyers'
  },
  {
    src: idCube,
    partnerName: 'idCube'
  }
];
const TrustedPartners = () => {
  return (
    <section className='bg-primary flex justify-center text-red items-center text-2xl md:py-[60px] md:pb-[100px] md:px-[80px] px-6 py-[60px]'>
      <ul className='flex max-w-[100vw] overflow-x-auto items-center'>
        {partners.map((partner) => (
          <li
            key={partner.partnerName}
            className='min-h-[50pw] min-w-[90px] ml-8 '>
            <Partner {...partner} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TrustedPartners;
