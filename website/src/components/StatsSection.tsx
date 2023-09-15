import { stats } from '@/utils/data';
import Image from 'next/image';
import ShortenLink from './ShortenLink';

const StatsSection = () => {
  return (
    <section className='w-full flex flex-col bg-gray-100  lg:pb-24 xl:pb-32'>
      <ShortenLink />
      <div className='container mx-auto px-6 md:px-10 xl:px-0 flex flex-col items-center pt-26 xl:pt-28 pb-10 xl:pb-20'>
        <h2 className='text-shortly-very-dark-blue font-bold text-[28px] sm:text-4xl text-center mb-5'>
          Advanced Statistics
        </h2>
        <p className='text-base text-center leading-relaxed text-shortly-grayish-violet max-w-xs sm:max-w-lg mb-20 xl:mb-28'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className='flex flex-col xl:flex-row xl:justify-between items-center xl:items-start w-full xl:h-[350px] xl:[&>*:nth-child(2)]:place-self-center xl:[&>*:nth-child(3)]:place-self-end'>
          {stats.map(({ id, name, desc, img }, index) => {
            return (
              <article
                key={id}
                className='bg-white mb-20 xl:mb-0 rounded-md relative flex flex-col items-center xl:items-start max-w-sm px-9 pb-8 pt-[70px] gap-4 xl:w-[340px] xl:h-min'
              >
                <div className='bg-shortly-dark-violet p-5 rounded-full absolute top-[-45px]'>
                  <Image src={img} alt={name} />
                </div>
                <h3 className='text-shortly-very-dark-blue font-bold text-xl'>
                  {name}
                </h3>
                <p className='text-shortly-grayish-violet max-w-xs text-sm text-center xl:text-left leading-relaxed'>
                  {desc}
                </p>
                {index + 1 < stats.length && (
                  <span className='h-10 w-2 bg-shortly-cyan absolute bottom-[-40px] xl:bottom-20 xl:rotate-90 xl:right-[-25px]'></span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
