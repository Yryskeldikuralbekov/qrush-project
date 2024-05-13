import React, { useState } from 'react';
import { ModalNewsWindow } from '../../../features';
export const NewsCard = ({ img, title, description, warning, date }) => {
  const [open, setOpen] = useState(false);

  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
  };
  const formatTitle = title.split('\n').slice(0, 5).join('\n');
  const formatTitleWithEllipsis =
    formatTitle.length > 50 ? `${formatTitle.slice(0, 50)}...` : formatTitle;
  const formattedDescription = description.split('\n').slice(0, 5).join('\n');
  const formattedDescriptionWithEllipsis =
    formattedDescription.length > 0
      ? formattedDescription.slice(0, 64)
      : formattedDescription;
  const setOpenWindow = () => {
    setOpen(true);
  };

  const formattedDate = formatDate(date);
  return (
    <section className='w-[100%] tablet:pb-0'>
      <div className='relative w-[100%] rounded-[20px] tablet:mb-[20px]'>
        <div className='relative w-full pt-[100%]'>
          <img
            className='absolute top-0 object-cover object-bottom rounded-[20px] w-full h-full'
            src={img}
            alt='newsImg'
          />
        </div>

        <div className='relative h-[100px] lg:h-[220px] w-full mb-[0px] sm:mb-[50px] md:mb-[30px] tablet:mb-[0px] py-[20px]'>
          <ul className='px-[2px]'>
            <div className='relative'>
              <h2 className='text-[17px] text-[#fff] md:text-[38px] tablet:text-[18px] lg:text-[20px] xl:text-[24px] font-[600] tablet:mb-[20px]'>
                {formatTitleWithEllipsis}
              </h2>
            </div>
            <h5 className='text-[15px] mt-[5px] leading-none tablet:text-[18px]'>
              {formattedDescriptionWithEllipsis}
              <span
                onClick={setOpenWindow}
                className='text-[#F93822] ml-[2px] text-[20px] cursor-pointer'
              >
                ...
              </span>
            </h5>
          </ul>
          <div className='flex justify-between mt-[10px] tablet:mt-0'>
            <p className='flex tablet:absolute -bottom-[15px] tablet:bottom-[10px] lg:bottom-[10px] xl:bottom-[15px] text-[#fff] text-[14px] tablet:text-[17px] lg:text-[20px] xl:text-[23px] italic'>
              {formattedDate}
            </p>
            <p
              onClick={setOpenWindow}
              className={
                'flex tablet:block  tablet:mt-0  tablet:absolute right-[0] -bottom-[15px] tablet:bottom-[10px] lg:bottom-[10px] xl:bottom-[15px] text-[#F93822] cursor-pointer text-[15px] tablet:text-[19px] lg:text-[23px]'
              }
            >
              Еще...
            </p>
          </div>
        </div>
      </div>
      <ModalNewsWindow
        openNewsModal={open}
        setOpenNewsModal={setOpen}
        img={img}
        title={title}
        description={description}
        warning={warning}
        date={formattedDate}
      />
    </section>
  );
};
