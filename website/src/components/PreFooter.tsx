import Image from 'next/image';
import bgMobile from '@/images/bg-boost-mobile.svg';
import bgDesktop from '@/images/bg-boost-desktop.svg';

const PreFooter = () => {
  return (
    <section className='relative w-full h-[300px] sm:h-[250px] bg-shortly-dark-violet flex items-center justify-center'>
      <Image
        src={bgMobile}
        alt=''
        className='object-cover w-full h-full flex sm:hidden'
      />
      <Image
        src={bgDesktop}
        alt=''
        className='hidden object-cover w-full h-full sm:flex'
      />
      <div className=' text-center absolute z-3'>
        <h3 className='text-white mb-6 text-2xl xl:text-3xl font-bold'>
          Boost your links today
        </h3>
        <button className='relative bg-shortly-cyan text-white font-bold px-10 lg:px-10 py-3 lg:py-3 rounded-full hover:bg-shortly-hover-cyan lg:mx-10 xl:mx-0 xl:text-xl xl:top-5'>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default PreFooter;
