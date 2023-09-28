import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 bg-black px-5 z-30'>
      <div className=' w-32 h-auto sm:w-36 md:w-[80px]'>
        <Image src={`/assets/logo_batman.png`} width={300} height={64} alt={`Logo`} />
      </div>
      <nav className='hidden sm:block'>
        <ul className='flex justify-end items-center gap-4 text-yellow-300'>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='sm:hidden'>
        <RxHamburgerMenu size={20} color={`#ffffff`} />
      </div>
    </div>
  );
};

export default Navbar;
