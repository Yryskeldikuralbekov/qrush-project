import React from 'react';
import { Button } from '../button/Button';
export const NewsCard = ({ img, title, description, warning, date }) => {
  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
  };

  const formattedDate = formatDate(date);
  return (
    <section className='w-[100%]'>
      <div className='relative w-[100%] pt-[0%] border-solid border-[1px] border-[#fff] rounded-[20px] mb-[20px]'>
        <img
          className='absolute top-0 object-cover object-bottom rounded-[20px] w-full h-full'
          src={img}
          alt='newImg'
        />

        <div className=' w-full pt-[100%] border-solid border-[1px] border-[#F93822] rounded-[20px] px-[15px] bg-[#d9d9d92d] py-[20px]'>
          <ul className='absolute top-0 py-[20px] px-[2px]'>
            <div className='relative bg-[#F93822] blur-md'>
              <h2 className='sm:text-[30px] text-[#0000] md:text-[38px] z-10 tablet:text-[24px] lg:text-[20px] xl:text-[48px] font-[600]'>
                {title}
              </h2>
            </div>
            <p className='text-[#F93822] sm:text-[26px] md:w-[90%] md:text-[34px] tablet:text-[24px] lg:text-[20px] xl:text-[40px] mt-[50px] font-[600] w-[90%]'>
              {warning}
            </p>
          </ul>
          <p className='absolute sm:text-[24px] md:text-[] tablet:text-[24px] lg:text-[20px] xl:text-[40px] italic bottom-[20px]'>
            {formattedDate}
          </p>
          <Button
            className={'absolute bottom-[20px] right-4'}
            variant='serviceButton'
          >
            Подробнее...
          </Button>
        </div>
      </div>
    </section>
  );
};
