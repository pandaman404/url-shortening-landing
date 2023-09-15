const LinkItem = () => {
  return (
    <article className='flex flex-col lg:flex-row justify-between items-center py-5  lg:px-6 w-[320px] lg:w-full gap-8 bg-white rounded-md mb-5'>
      <a className='w-7/12'>https://www.youtube.com/</a>
      <a className='text-right w-4/12 text-shortly-cyan'>https:/yb.com</a>
      <button
        type='submit'
        disabled={false}
        className='bg-shortly-cyan px- hover:bg-shortly-hover-cyan text-center text-white cursor-pointer font-bold  text-base lg:text-lg py-1 px-5 rounded-md w-[100px]'
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
