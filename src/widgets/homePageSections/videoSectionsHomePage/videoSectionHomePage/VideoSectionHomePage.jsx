import React from 'react';

import ViewAllLink from '../../../../shared/ui/viewAllLink/ViewAllLink';

export const VideoSectionHomePage = ({
  bgImg,
  src,
  secondSrc,
  thirdSrc,
  fourthSrc,
  fifthSrc,
  title,
  button,
}) => {
  return (
    <section
      className='pb-[70px] xl:pb-[150px] -pt-[100px] bg-cover bg-center'
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <section className='mx-auto max-w-[90%] xl:container'>
        <div className='mb-[20px] sm:mb-[40px] pt-[50px] sm:pt-[60px] flex justify-between items-end'>
          <h2 className='text-[#F5F5F5] font-[Montserrat]  text-[20px] sm:text-[80px] lg:text-[70px] not-italic font-medium leading-[normal]'>
            {title}
          </h2>
          <div className='flex justify-end mb-0 sm:mb-[10px]'>
            <ViewAllLink text={button} linkAddress={'gallery'} />
          </div>
        </div>
        <section className='grid grid-rows-[48%_50%] grid-cols-4 gap-2 sm:gap-5'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-3'>
            <iframe
              loading='lazy'
              className='w-full h-full'
              src={src}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </div>

          <div className='col-start-3 col-end-4 row-start-1 row-end-2'>
            <iframe
              loading='lazy'
              className='w-full h-full'
              src={secondSrc}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
          <div className='col-start-4 col-end-5 row-start-1 row-end-2'>
            <iframe
              loading='lazy'
              className='w-full h-full'
              src={thirdSrc}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
          <div className='col-start-3 col-end-4 row-start-2 row-end-3'>
            <iframe
              loading='lazy'
              className='w-full h-full'
              src={fourthSrc}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
          <div className='col-start-4 col-end-5  row-start-2 row-end-3'>
            <iframe
              loading='lazy'
              className='w-full h-full'
              src={fifthSrc}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
        </section>
      </section>
    </section>
  );
};
