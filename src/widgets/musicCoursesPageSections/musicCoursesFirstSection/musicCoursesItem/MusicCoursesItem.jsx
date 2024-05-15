import React from 'react';
import { CardMusicSection, SwiperPhotoItem } from '../../../../shared';

export const MusicCoursesItem = ({ item }) => {
  const arrayMusicCourses = item.mc_name;
  const arrayImg = item.image;
  return (
    <div>
      <div className='mx-[20px] mt-[30px] text-center'>
        <h4 className='text-[18px] font-[500] pb-[22px] md:pb-[38px] xl:text-[35px] lg:text-[23px] tablet:text-[20px]'>
          {item.title}
        </h4>
        <h5 className='text-[14px] sm:text-[18px] font-[500] pb-[10px] md:pb-[25px] text-[#FFFFFF] sm:text-[#B4B4B4] xl:text-[35px] lg:text-[23px] tablet:text-[20px]'>
          {item.desc}
        </h5>
      </div>

      <div className='ml-[20px] sm:mx-auto w-[95%] xl:w-[1820px]'>
        <SwiperPhotoItem arrayImg={arrayImg} />
      </div>
      <div className='text-left mb-[40px] mx-[20px] md:w-full sm:mx-auto mt-[27px] md:mt-[50px] tablet:mt-[100px] md:text-center'>
        <div className='w-[90%] sm:mx-auto lg:flex lg:justify-between text-left'>
          <section className='w-[100%] tablet:grid tablet:grid-cols-2 tablet:gap-[80px] lg:gap-[100px]'>
            {arrayMusicCourses &&
              arrayMusicCourses?.map(el => (
                <div
                  key={el.id}
                  className='-mb-[0px] tablet:-mb-[50px] sm:mx-auto text-[18px] text-[#B4B4B4] xl:text-[25px]  lg:text-[23px] tablet:text-[20px]'
                >
                  <h2 className='text-[#F5F5F5] mb-[8px] tablet:mb-[10px]'>
                    {el.course_name}
                  </h2>
                  <CardMusicSection description={el.description} />
                </div>
              ))}
          </section>
        </div>
      </div>
    </div>
  );
};
