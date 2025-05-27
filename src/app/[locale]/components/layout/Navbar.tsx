import { useTranslations } from 'next-intl';
import Link from 'next/link';
import SolinnLogoHeader from './SolinnLogoHeader';
import Image from 'next/image';
import { ContactButton } from '../Contact/ContactButton';

function Navbar() {
  const t = useTranslations('HomePage.navbar');
  const keys = ['solutions', 'testimonials', 'whoAreWe', 'faq'];
  return (
    <header className='flex fixed right-0 left-0 items-center z-50 justify-between md:px-20 px-6 py-8 bg-primary'>
      <div className='hidden md:block'>
        <SolinnLogoHeader />
      </div>
      <div className='md:hidden'>
        <Image
          src='/images/logo-xs-black.png'
          alt='Solinn Logo'
          width={137}
          height={37}
          priority
          className='w-[137px] h-[37px]'
        />
      </div>
      <nav className='flex items-center'>
        <ul className='md:flex hidden space-x-4'>
          {keys.map((key) => (
            <li key={key}>
              <Link href={`#${key}`}>{t(key)}</Link>
            </li>
          ))}
        </ul>
        <div className='ml-4'>
          <ContactButton />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
