import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#fff9e6] text-[#2a1d0f] border-t border-[#f0ead4]'>
      <div className='max-w-6xl mx-auto md:px-6 md:py-12 p-4 grid md:gap-8 md:grid-cols-3'>
        {/* Bloc 1 : Nom + phrase */}
        <div>
          <h2 className='text-2xl font-bold text-[#cc6600] md:mb-2'>
            Solinn ASE
          </h2>
          <p className='text-sm text-gray-700'>
            La technologie au service des acteurs sociaux.
          </p>
        </div>

        {/* Bloc 3 : Liens */}
        <div>
          <h3 className='text-md font-semibold text-[#b35400] md:mb-2'>
            Liens utiles
          </h3>
          <ul className='text-sm md:space-y-1'>
            <li>
              <a href='#demo' className='hover:underline'>
                Demander une démo
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:underline'>
                Contact
              </a>
            </li>
            <li>
              <Link href='/legal' className='hover:underline'>
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mention / copyright */}
      <div className='text-center text-xs text-gray-500 py-4 border-t border-[#f0ead4]'>
        © {new Date().getFullYear()} Solinn. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
