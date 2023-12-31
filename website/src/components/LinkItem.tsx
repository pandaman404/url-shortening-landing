import { Link } from '@/utils/types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  link: Link;
  copyToClipboard: (copiedLink: string) => void;
}

const LinkItem = ({ link, copyToClipboard }: Props) => {
  return (
    <article className='flex flex-col mx-auto lg:flex-row justify-items-center lg:justify-between items-center py-5 lg:px-6 w-[320px] sm:w-[480px] md:w-[560px] lg:w-[840px] xl:w-[1100px] gap-3.5 lg:gap-8 bg-white rounded-md mb-5'>
      <a className='w-fit max-w-[90%] text-base lg:w-7/12 truncate'>
        {link.originalLink}
      </a>
      <div className='border-t border-gray-300 w-full lg:hidden'></div>
      <a className='text-right text-base w-fit max-w-[90%] lg:w-4/12  text-shortly-cyan truncate'>
        {link.shortLink}
      </a>
      <CopyToClipboard
        text={link.shortLink}
        onCopy={(text) => copyToClipboard(text)}
      >
        {link.copied ? (
          <button
            type='button'
            className='bg-shortly-dark-violet text-white text-center cursor-pointer font-bold text-base lg:text-lg py-1 rounded-md w-[90%] lg:w-[120px]'
          >
            Copied!
          </button>
        ) : (
          <button
            type='button'
            className='bg-shortly-cyan hover:bg-shortly-hover-cyan text-center text-white cursor-pointer font-bold text-base lg:text-lg py-1 rounded-md w-[90%] lg:w-[120px]'
          >
            Copy
          </button>
        )}
      </CopyToClipboard>
    </article>
  );
};

export default LinkItem;
