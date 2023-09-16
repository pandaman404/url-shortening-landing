import Image from 'next/image';
import ilustrationWorking from '@/images/illustration-working.svg';

const HeroSection = () => {
  return (
    <section className='container mx-auto mb-40 lg:mb-[250px] flex flex-col gap-16 lg:gap-0 lg:mt-32 overflow-x-hidden'>
      <Image
        src={ilustrationWorking}
        alt='ilustration working'
        className='relative h-[320px] lg:h-[420px] xl:h-[440px] max-w-min top-6 left-5 mx-auto lg:absolute lg:left-[50%] xl:left-[58%] lg:top-[120px] xl:top-[160px]'
      />
      <div className=' mx-6 md:mx-10 lg:mx-0 text-center lg:text-left'>
        <h1 className='text-shortly-very-dark-blue font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-tight xl:leading-[1.1] sm:max-w-lg xl:max-w-xl mx-auto lg:mx-10 xl:mx-0 mb-4 sm:mb-5 lg:mb-1'>
          More than just shorter links
        </h1>
        <p className='text-shortly-grayish-violet text-base leading-relaxed lg:text-lg xl:text-xl sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto xl:mx-0 lg:mx-10 mb-5 sm:mb-6 lg:mb-10'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          type='button'
          className='bg-shortly-cyan text-white font-bold px-8 lg:px-10 py-2 lg:py-3 rounded-full hover:bg-shortly-hover-cyan lg:mx-10 xl:mx-0 xl:text-xl'
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
