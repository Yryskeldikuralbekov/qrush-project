import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ViewAllLink from '../../../../shared/ui/viewAllLink/ViewAllLink';

export const VideoSectionHomePageMobile = ({
  src,
  secondSrc,
  thirdSrc,
  fourthSrc,
  fifthSrc,
  title,
  button,
}) => {
  const srcArr = [
    {
      src: src,
      isMain: true,
    },
    {
      src: secondSrc,
    },
    {
      src: thirdSrc,
    },
    {
      src: fourthSrc,
    },
    {
      src: fifthSrc,
    },
  ];
  return (
    <section className='pb-[40px] pt-[30px] sm:mt-[100px]'>
      <section className='mx-auto max-w-[90%] xl:container'>
        <div className='mb-[20px] sm:mb-0 pt-[50px] sm:pt-0 flex sm:block justify-between sm:justify-normal'>
          <h2 className='text-[#F5F5F5] font-[Montserrat]  text-[20px] sm:text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
            {title}
          </h2>
          <div className='flex justify-end mb-[40px]'>
            <ViewAllLink text={button} linkAddress={'news'} />
          </div>
        </div>
        <div className='w-full h-[170px] sm:h-[334px] mb-[25px]'>
          <iframe
            className='w-full h-full rounded-[10.906px] border-[0.5px] border-solid border-[rgba(255,255,255,0.50)]'
            src={src}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
        </div>
        <Swiper
          spaceBetween={15}
          initialSlide={1.4}
          slidesPerView={1.5}
          speed={400}
          navigation={true}
          modules={[Navigation]}
        >
          <ul className='max-w-[245px]'>
            {srcArr.map((item, index) =>
              item.isMain ? null : (
                <SwiperSlide key={index}>
                  <li className='w-full h-full sm:h-[250px]'>
                    <iframe
                      className='w-full h-full rounded-[10.906px] border-[0.5px] border-solid border-[rgba(255,255,255,0.50)]'
                      src={item.src}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    />
                  </li>
                </SwiperSlide>
              )
            )}
          </ul>
        </Swiper>
      </section>
    </section>
  );
};
