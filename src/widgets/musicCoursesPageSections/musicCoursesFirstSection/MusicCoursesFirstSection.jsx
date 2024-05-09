import React from 'react';
import { MusicCoursesItem } from './musicCoursesItem/MusicCoursesItem';

export const MusicCoursesFirstSection = ({ item }) => {
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] md:mb-[90px] tablet:mb-[154px]'>
      <div className='mx-auto pt-[120px]'>
        <h1 className='w-[280px] text-[32px] ml-[16px] sm:w-[355px] sm:text-[40px] font-[600] sm:ml-[15px] tablet:w-[835px] tablet:text-[70px] text-[#fff] tablet:font-[600] tablet:ml-[80px]'>
          {item.service_name}
        </h1>
      </div>
      {item.description &&
        item.description?.map(item => (
          <MusicCoursesItem key={item.id} item={item} />
        ))}
    </section>
  );
};
