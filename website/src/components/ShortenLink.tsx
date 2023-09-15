import Image from 'next/image';
import bgMobile from '@/images/bg-shorten-mobile.svg';
import bgDesktop from '@/images/bg-shorten-desktop.svg';
import LinkItem from './LinkItem';

const ShortenLink = () => {
  return (
    <section className='container w-[76%] mx-auto relative bottom-20'>
      <div className=' bg-black-300 relative z-1 flex justify-center bg-shortly-dark-violet h-[180px] w-80 sm:w-[480px] md:w-[560px] lg:w-[840px] xl:w-[1100px] mx-auto rounded-lg object-right-bottom overflow-hidden mb-7'>
        <Image
          src={bgMobile}
          alt=''
          className='object-cover absolute right-0 lg:hidden'
        />
        <Image
          src={bgDesktop}
          alt=''
          className='hidden object-cover lg:block'
        />
        <form className='absolute z-1 top-7 xl:top-14 h-50 w-[88%] flex flex-col xl:flex-row gap-8'>
          <div className='relative w-full xl:w-10/12'>
            <input
              type='text'
              placeholder='Shorten a link here...'
              className='h-12 xl:h-16 w-full outline-none rounded-md px-5 text-sm lg:text-lg placeholder-shortly-gray'
            />

            {false && (
              <span className='text-red-400 text-sm absolute w-full -bottom-6 xl:-bottom-7 -left-0'>
                Please add a link
              </span>
            )}
          </div>
          <button
            type='submit'
            disabled={false}
            className='bg-shortly-cyan hover:bg-shortly-hover-cyan w-full xl:w-2/12 text-center text-white cursor-pointer font-bold  text-base lg:text-lg py-2.5 px-5 rounded-md'
          >
            Shorten It!
          </button>
        </form>
      </div>
      <LinkItem />
    </section>
  );
};

export default ShortenLink;
