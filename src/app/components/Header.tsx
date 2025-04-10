import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-[#fffdf6] border-b border-[#f0ead4] sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo / nom */}
        <Link href='/' className='text-2xl font-bold text-[#cc6600]'>
          Solinn ASE
        </Link>

        {/* Navigation */}
        <nav className='hidden md:flex gap-6 text-sm font-medium text-[#5a4d1a] items-center'>
          <a
            href='#demo'
            className='cursor-pointer bg-indigo-500 w-fit text-white py-2 px-8 rounded-lg hover:bg-indigo-700 transition duration-300'>
            Demander une démo
          </a>
          <a href='#contact' className='hover:text-[#cc6600] transition'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
