import Image from 'next/image';
import notFound from '@/lib/assets/images/404.png';
import Link from 'next/link';
import { BodyMD, TitleH1 } from './[locale]/components/Typos/Typos';
import './globals.css'; // Ensure global styles are imported
import localFont from 'next/font/local';
import SolinnLogoHeader from './[locale]/components/layout/SolinnLogoHeader';

const dxRigraf = localFont({
  variable: '--font-dxRigraf',
  src: [
    {
      path: './[locale]/fonts/DX-Rigraf/DXRigraf-SemiBold.otf',
      weight: '600',
      style: 'normal'
    }
  ]
});
function NotFound() {
  return (
    <div className={`${dxRigraf.variable} p-4`}>
      <SolinnLogoHeader />
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
      <BodyMD className='text-center text-gray-600 mt-2'>
        <Link href='/' className='text-blue-500 hover:underline'>
          Retour page d&apos;accueil
        </Link>{' '}
      </BodyMD>
    </div>
  );
}
export default NotFound;
