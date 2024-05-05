import React from 'react';
import { RehearsalSectionItem } from './rehearsalSectionItem/RehearsalSectionItem';

export const RehearsalCostFirstSection = ({ item }) => {
  const length = item.description.length;
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[10px] md:mb-[34px] tablet:mb-[94px] lg:mb-[154px]'>
      <div className='w-[1720px] mx-auto mb-[47px] sm:mb-[78px] tablet:mb-[125px] pt-[135px] sm:pt-[185px] tablet:pt-[200px]'>
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
