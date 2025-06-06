import { BodyMD, TitleH3 } from '@/app/[locale]/components/Typos/Typos';
import support1 from '@/lib/assets/images/support/support-1.png';
import support2 from '@/lib/assets/images/support/support-2.png';
import support3 from '@/lib/assets/images/support/support-3.png';
import support4 from '@/lib/assets/images/support/support-4.png';
import Image from 'next/image';

const supportSteps = [
  {
    title: 'Nous écoutons votre contexte',
    description:
      'Chaque organisation a son rythme, ses réalités. Nous nous y adaptons.',
    image: support1
  },
  {
    title: 'Nous explorons des solutions',
    description:
      'avec vous. Une démonstration vivante, concrète, sans sur-promesse.',
    image: support2
  },
  {
    title: 'Nous mettons en place pas à pas.',
    description: 'Avec attention, avec clarté, avec vous',
    image: support3
  },
  {
    title: 'Nous restons disponibles dans la durée.',
    description: 'Un lien de confiance, pas un simple contrat.',
    image: support4
  }
];
export function Support() {
  return (
    <section className='w-full h-full flex flex-col md:pt-[80px] md:pb-[80px] items-center justify-center bg-[#FEFDF6] p-4'>
      <TitleH3 className='mb-6'>Un accompagnement pas à pas</TitleH3>
      <ul className='flex flex-col md:flex-row space-y-4'>
        {supportSteps.map((support, key) => (
          <li
            key={key}
            className='flex flex-col md:w-[250px] items-center justify-center space-y-2 mx-4'>
            <Image
              src={support.image}
              height={178}
              width={249}
              alt={support.title}
              className='w-[249px] h-[178px] object-contain rounded-lg mb-8'
            />
            <BodyMD className='font-bold text-center'>{support.title}</BodyMD>
            <BodyMD className='text-center'>{support.description}</BodyMD>
          </li>
        ))}
      </ul>
    </section>
  );
}
