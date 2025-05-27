import Image, { StaticImageData } from 'next/image';

type Props = {
  src: StaticImageData;
  partnerName: string;
};
export function Partner({ src, partnerName }: Props) {
  return (
    <Image
      width={90}
      height={28}
      src={src}
      alt={partnerName}
      className='max-h-full max-w-full'
    />
  );
}
