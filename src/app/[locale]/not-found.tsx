import Image from 'next/image';
import notFound from '@/lib/assets/images/404.png';
import { BodyMD, TitleH1 } from './components/Typos/Typos';

function NotFound() {
  return (
    <div className={`p-4`}>
      <Image
        src={notFound}
        alt='Page Not Found'
        width={500}
        height={500}
        className='mx-auto mt-20'
      />
      <TitleH1 className='text-center text-2xl font-bold mt-4'>
        Page non trouvée
      </TitleH1>
      <BodyMD className='text-center text-gray-600 mt-2'>
        Désolé, la page que vous cherchez n&apos;existe pas ou a été déplacée.
      </BodyMD>
    </div>
  );
}
export default NotFound;
