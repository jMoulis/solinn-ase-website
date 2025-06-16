import Image, { StaticImageData } from 'next/image';

type Props = {
  src: StaticImageData;
  partnerName: string;
};
export function Partner({ src, partnerName }: Props) {
  return (
    <Image
      width={150}
      height={150}
      src={src}
      alt={partnerName}
      // className='max-h-full w-[150px] max-w-full'
    />
  );
}
