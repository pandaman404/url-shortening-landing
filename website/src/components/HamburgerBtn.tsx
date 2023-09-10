'use client';
const HamburgerBtn = () => {
  return (
    <button
      onClick={() => console.log('open mobile Navbar')}
      className='h-5 w-6 flex flex-col justify-between relative top-2 xl:hidden'
    >
      <span className='h-[3px] w-full bg-shortly-grayish-violet'></span>
      <span className='h-[3px] w-full bg-shortly-grayish-violet'></span>
      <span className='h-[3px] w-full bg-shortly-grayish-violet'></span>
    </button>
  );
};

export default HamburgerBtn;
