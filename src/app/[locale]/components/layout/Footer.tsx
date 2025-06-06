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
    href: 'https://www.linkedin.com/company/solinn-fr/'
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
          className='md:w-[207px] md:h-[56] md:mb-8 mb-6 w-[150px] h-[40px]'
        />
        <BodyMD className='text-white md:w-[540px]'>
          Solinn est une structure à impact qui conçoit des outils numériques
          sur-mesure pour les acteurs de l’aide et du soin. Nous développons des
          solutions pensées avec le terrain, pour simplifier le suivi,
          fluidifier la coordination et renforcer le lien humain.
        </BodyMD>
        <BodyMD className='text-white'>
          Aujourd’hui, Solinn propose deux plateformes dédiées : l’une pour
          l’Aide Sociale à l’Enfance (Solinn ASE), l’autre pour les associations
          sociales et solidaires (Solinn ASSO).
        </BodyMD>
      </div>
      <div className='flex-1 flex md:items-end items-center mt-10 md:mt-0 flex-col space-y-4'>
        <div>
          <Image
            src={iconSolinn}
            alt='Solinn Icon'
            width={85}
            height={89}
            className='w-[85px] h-[89px]'
          />
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                title={link.label}
                className='text-white underline'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                title={link.label}
                rel='noopener noreferrer'
                target='_blank'
                referrerPolicy='no-referrer'
                href={link.href}
                className='text-white underline'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='relative flex items-center space-x-2'>
          <BodyMD className='text-white'>
            © {new Date().getFullYear()} Créée avec
          </BodyMD>
          <BodyMD className='text-white/60 line-through'>Solinn</BodyMD>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:underline cursor-pointer'
            title='LinkedIn Claire Lavergne'
            href='https://www.linkedin.com/in/claire-lavergne-%F0%9F%8C%9E-26278542?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDZ2g0ID9SsCIOqpiQdjqRg%3D%3De'>
            <BodyMD className='text-white '>💛 Claire</BodyMD>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
