import React, { useState } from 'react';
import { Button } from '../button/Button';
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
  const formattedDescription = description.split('\n').slice(0, 5).join('\n');
  const formattedDescriptionWithEllipsis =
    formattedDescription.length > 1
      ? formattedDescription.slice(0, 70)
      : formattedDescription;
  const setOpenWindow = () => {
    setOpen(true);
  };

  const formattedDate = formatDate(date);
  return (
    <section className='w-[100%]'>
      <div className='relative w-[100%] rounded-[20px] mb-[20px]'>
        <img
          className='object-cover object-bottom rounded-[20px] w-full h-full'
          src={img}
          alt='newImg'
        />
        <div className='relative w-full h-[160px] py-[20px]'>
          <ul className='px-[2px]'>
            <div className='relative '>
              <h2 className='sm:text-[30px] text-[#fff] md:text-[38px] tablet:text-[14px] lg:text-[20px] xl:text-[30px] font-[600]'>
                {title}
              </h2>
            </div>
            <p className='text-[#F93822] sm:text-[26px] md:w-[90%] md:text-[34px] tablet:text-[24px] lg:text-[20px] xl:text-[40px] mt-[50px] font-[600] w-[90%]'>
              {warning}
            </p>
            <h5 className='absolute top-[100px] left-0'>
              {formattedDescriptionWithEllipsis}
              <span
                onClick={setOpenWindow}
                className='text-[#F93822] ml-[2px] text-[20px] cursor-pointer'
              >
                ...
              </span>
            </h5>
          </ul>
          <p className='text-[#fff] sm:text-[24px] md:text-[] tablet:text-[24px] lg:text-[15px] xl:text-[40px] absolute italic left-0 -bottom-[45px]'>
            {formattedDate}
          </p>
          <p
            onClick={setOpenWindow}
            className={
              'absolute -bottom-[45px] right-4 text-[#F93822] cursor-pointer'
            }
          >
            Еще...
          </p>
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
