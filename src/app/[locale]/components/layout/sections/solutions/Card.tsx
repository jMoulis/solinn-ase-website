import Image, { StaticImageData } from 'next/image';

type Props = { title: string; image: StaticImageData; items: string[] };
function Card({ image, title, items }: Props) {
  return (
    <div className='md:w-[260px]'>
      <Image
        src={image}
        alt='Card Image'
        width={300}
        height={200}
        className='w-full h-auto'
      />
      <h3 className='text-lg font-semibold mt-4'>{title}</h3>
      <ul className='list-item pl-5 mt-2'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Card;
