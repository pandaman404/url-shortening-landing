import Image from 'next/image';
import shortlyLogo from '../../public/logo.svg';
import HamburgerBtn from './HamburgerBtn';
import { headerLinks } from '@/utils/data';

const Header = () => {
  return (
    <header className='container mx-auto'>
      <div className='mt-10 mx-6 xl:mx-0 flex justify-between'>
        <nav className='flex gap-11 items-center'>
          <Image alt='logo' src={shortlyLogo} className='max-h-10' />
          <ul className='list-none hidden xl:flex gap-8 text-sm'>
            {headerLinks.map(({ id, name }) => {
              return (
                <li
                  key={id}
                  className='cursor-pointer text-shortly-grayish-violet hover:text-shortly-very-dark-blue'
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className='flex'>
          <ul className='list-none hidden xl:flex items-center gap-8 text-sm'>
            <li className='cursor-pointer text-shortly-grayish-violet hover:text-shortly-very-dark-blue'>
              Login
            </li>
            <li className='bg-shortly-cyan hover:opacity-60 text-white cursor-pointer font-bold text-base py-2.5 px-5 rounded-full'>
              Sign Up
            </li>
          </ul>
        </nav>
        <HamburgerBtn />
      </div>
    </header>
  );
};

export default Header;
