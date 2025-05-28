import logoFooter from '@/lib/assets/images/logo-footer.png';
import iconSolinn from '@/lib/assets/images/solinn-icon-purple.png';
import Image from 'next/image';
import { BodyMD } from '../Typos/Typos';
import Link from 'next/link';

const links = [
  {
    label: 'Mentions légales',
    href: '/legal'
  }
];
const socialLinks = [
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/julien-moulis'
  }
];
function Footer() {
  return (
    <footer
      id='footer'
      className='bg-black flex flex-col md:flex-row md:justify-between md:p-[80px] p-6'>
      <div className='flex-1'>
        <Image
          src={logoFooter}
          alt='Solinn Logo'
          width={207}
          height={56}
          className='w-[207px] h-[56] mb-12'
        />
        <BodyMD className='text-white md:w-[540px]'>
          Solinn est une structure à impact qui conçoit des outils numériques
          sur-mesure pour les acteurs de l’aide et du soin. Nous développons des
          solutions pensées avec le terrain, pour simplifier le suivi,
          fluidifier la coordination et renforcer le lien humain.P Aujourd’hui,
          Solinn propose deux plateformes dédiées : l’une pour l’Aide Sociale à
          l’Enfance (Solinn ASE), l’autre pour les associations sociales et
          solidaires (Solinn ASSO).
        </BodyMD>
      </div>
      <div className='flex-1 flex md:items-end items-center mt-10 md:mt-0 flex-col space-y-4'>
        <Image
          src={iconSolinn}
          alt='Solinn Icon'
          width={85}
          height={89}
          className='w-[85px] h-[89px]'
        />
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className='text-white underline'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                target='_blank'
                referrerPolicy='no-referrer'
                href={link.href}
                className='text-white underline'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <BodyMD className='text-white'>
          © {new Date().getFullYear()} Créée avec 💛 Solinn. Tous droits
          réservés.
        </BodyMD>
      </div>
    </footer>
  );
}
export default Footer;
