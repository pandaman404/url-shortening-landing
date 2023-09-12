interface Props {
  links: { id: number; name: string }[];
  toggleMobileNavbar: () => void;
}

const MobileNavbar = ({ links, toggleMobileNavbar }: Props) => {
  return (
    <>
      <div
        className='fixed top-0 z-10 h-full w-full xl:hidden'
        onClick={toggleMobileNavbar}
      ></div>
      <nav className='absolute z-10 top-24 right-1/2 translate-x-1/2 bg-shortly-dark-violet h-[380px] w-[320px] rounded-xl px-5 py-9 flex flex-col items-center sm:translate-x-0 sm:right-6 md:right-10  xl:hidden'>
        {links.map(({ id, name }) => {
          return (
            <a key={id} className='text-white font-bold mb-7'>
              {name}
            </a>
          );
        })}
        <div className='h-[1px] w-full bg-gray-100 opacity-20 mb-7'></div>
        <a className='text-white font-bold mb-7'>Login</a>
        <a className='bg-shortly-cyan hover:bg-shortly-hover-cyan w-full text-center text-white cursor-pointer font-bold text-base py-2.5 px-5 rounded-full'>
          Sign Up
        </a>
      </nav>
    </>
  );
};

export default MobileNavbar;
