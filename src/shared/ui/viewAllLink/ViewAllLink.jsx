// ViewAllLink.js
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import i18n from '../../../i18n';

const ViewAllLink = ({ linkAddress, text }) => {
  const locale = i18n.language;

  return (
    <Link
      className='flex justify-normal items-center'
      to={linkAddress}
      onClick={scrollToTop}
    >
      <button
        className={`font-[Montserrat] ${locale === 'ky' ? 'text-[15px] sm:text-[20px] lg:text-[32px]' : 'text-[17px] sm:text-[23px] lg:text-[33px]'} not-italic text-#F5F5F5 font-medium leading-[1.3] transition-colors duration-300 hover:text-[#F93822]`}
      >
        {text}
      </button>
      <svg
        className='ml-2'
        xmlns='http://www.w3.org/2000/svg'
        width='6'
        height='13'
        viewBox='0 0 6 13'
        fill='none'
      >
        <path d='M6 6.5L0 12.5V0.5L6 6.5Z' fill='#F5F5F5' />
      </svg>
    </Link>
  );
};

export default ViewAllLink;
