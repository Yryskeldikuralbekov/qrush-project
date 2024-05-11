import React from 'react';

export const CardMusicSection = ({ description }) => {
  return (
    <>
      {description?.map(item => (
        <ul
          className='text-[18px] text-[#B4B4B4] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'
          key={item.id}
        >
          <li className='mb-[8px] tablet:mb-[16px] w-auto tablet:w-[420px] lg:w-[540px]'>
            <p>{item.naming}</p>
          </li>
        </ul>
      ))}
    </>
  );
};
