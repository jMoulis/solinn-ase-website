'use client';

import { BodyMD } from '@/app/[locale]/components/Typos/Typos';
import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
  name: string;
  role: string;
  text: string;
  open: boolean;
  onClick: () => void;
};
function TestimonialCard({ image, name, role, text, open, onClick }: Props) {
  return (
    <li
      className='bg-white rounded-[50px] mb-2 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.05)] cursor-pointer transition-all overflow-hidden '
      style={{ display: 'flex', flexDirection: 'row' }}
      onClick={onClick}
      tabIndex={0}>
      <Image
        // ref={imgRef as any}
        alt={name}
        src={image}
        className='w-[230] h-[350px] rounded-[50px] object-cover'
        width={230}
        height={350}
        priority
      />

      {/* Panel */}
      {open && (
        <div
          className='flex flex-col justify-between p-6 rounded-r-[50px] min-w-[250px] max-w-[350px]'
          style={{ transition: 'width 0.3s' }}>
          <BodyMD className='font-semibold'>{`"${text}"`}</BodyMD>
          <div className='flex items-baseline mt-4'>
            <span className='font-bold whitespace-nowrap mr-2'>{`— ${name}, `}</span>
            <span>{role}</span>
          </div>
        </div>
      )}
    </li>
  );
}

export default TestimonialCard;
