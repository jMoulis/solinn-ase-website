import { useTranslations } from 'next-intl';
import Link from 'next/link';
import SolinnLogoHeader from './SolinnLogoHeader';

function Navbar() {
  const t = useTranslations('HomePage.navbar');
  const keys = ['solutions', 'testimonials', 'whoAreWe', 'faq'];
  return (
    <header className='flex fixed right-0 left-0 items-center z-50 justify-between md:px-20 md:py-8 bg-primary'>
      <SolinnLogoHeader />
      <nav>
        <ul className='md:flex hidden space-x-4'>
          {keys.map((key) => (
            <li key={key}>
              <Link href={`#${key}`}>{t(key)}</Link>
            </li>
          ))}
          <li>{t('contactUs')}</li>
        </ul>
        <button className='md:hidden'>{t('contactUs')}</button>
      </nav>
    </header>
  );
}
export default Navbar;
