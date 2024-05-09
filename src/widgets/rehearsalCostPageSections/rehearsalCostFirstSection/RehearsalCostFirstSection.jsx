import React from 'react';
import { RehearsalSectionItem } from './rehearsalSectionItem/RehearsalSectionItem';

export const RehearsalCostFirstSection = ({ item }) => {
  const length = item.description.length;
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[10px] md:mb-[34px] tablet:mb-[94px] lg:mb-[154px]'>
      <div className='mx-auto pt-[140px]'>
        <h1 className='w-[350px] text-[32px] ml-[16px] sm:w-[355px] sm:text-[40px] font-[600] sm:ml-[15px] tablet:w-[835px] tablet:text-[70px] text-[#fff] tablet:font-[600] tablet:ml-[80px]'>
          {item.service_name}
        </h1>
      </div>
      {item.description &&
        item.description?.map(item => (
          <RehearsalSectionItem key={item.id} item={item} length={length} />
        ))}
    </section>
  );
};
