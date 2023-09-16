const LinkItem = () => {
  return (
    <article className='flex flex-col mx-auto lg:flex-row justify-items-center lg:justify-between items-center py-5 lg:px-6 w-[320px] sm:w-[480px] md:w-[560px] lg:w-[840px] xl:w-[1100px] gap-3.5 lg:gap-8 bg-white rounded-md mb-5'>
      <a className='lg:w-7/12 truncate'>https://www.youtube.com</a>
      <div className='border-t text-base border-gray-300 w-full lg:hidden'></div>
      <a className='text-right text-base lg:w-4/12 text-shortly-cyan truncate'>
        https:/yb.com
      </a>
      <button
        type='submit'
        disabled={false}
        className='bg-shortly-cyan hover:bg-shortly-hover-cyan text-center text-white cursor-pointer font-bold text-base lg:text-lg py-1 lg:px-5 rounded-md w-[90%] lg:w-[100px]'
      >
        Copy
      </button>
      {/* <button
        type='submit'
        disabled={false}
        className='bg-shortly-dark-violet text-white cursor-pointer font-bold  text-base lg:text-lg py-1 px-5 rounded-md w-[100px]'
      >
        Copied!
      </button> */}
    </article>
  );
};

export default LinkItem;
