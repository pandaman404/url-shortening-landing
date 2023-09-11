import Image from 'next/image';
import shortlyLogo from '@/images/logo-white.svg';
import { footerLinks, socialLinks } from '@/utils/data';

const Footer = () => {
  return (
    <footer className='bg-shortly-very-dark-violet w-full p-12 xl:p-20 xl:h-[310px]'>
      <div className='container mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-items-center gap-12 xl:justify-between'>
        <Image alt='logo' src={shortlyLogo} />
        <div className='relative flex flex-col sm:flex-row gap-5 sm:gap-28 xl:justify-self-end xl:left-10'>
          {footerLinks.map(({ id, name, subLinks }) => {
            return (
              <ul
                className='cursor-pointer flex flex-col justify-start list-none text-center xl:text-left'
                key={id}
              >
                <h5 className='text-base font-bold text-white mb-3'>{name}</h5>
                {subLinks.map((i) => (
                  <li
                    key={i}
                    className='text-[15px] text-shortly-gray hover:text-shortly-cyan mb-2 last:mb-0'
                  >
                    {i}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
        <div className='flex gap-5 sm:gap-8 xl:justify-self-end'>
          {socialLinks.map(({ id, alt, logo }) => {
            return (
              <Image
                alt={alt}
                src={logo}
                key={id}
                width={25}
                className='cursor-pointer'
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
