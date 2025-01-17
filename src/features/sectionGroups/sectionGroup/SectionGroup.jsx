import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { CardSectionGroup, useMediaQuery } from '../../../shared';
import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';

export const SectionGroup = props => {
  const isMobileAndTablet = useMediaQuery('(max-width: 1026px)');
  const {
    firstDescription,
    secondDescription,
    thirdDescription,
    title,
    firstSubTitle,
    secondSubTitle,
    thirdSubTitle,
    linkAddress,
    thirdImg,
    firstImg,
    secondImg,
    background,
    button,
  } = props;

  const dataArr = [
    {
      title: firstSubTitle,
      description: firstDescription,
      img: firstImg,
      href: '/rehearsal-cost',
      button: button,
    },
    {
      title: secondSubTitle,
      description: secondDescription,
      img: secondImg,
      href: '/sound-recording',
      button: button,
    },
    {
      title: thirdSubTitle,
      description: thirdDescription,
      img: thirdImg,
      href: '/music-courses',
      button: button,
    },
  ];

  return (
    <section
      className='h-[336px] sm:h-[736px] xl:h-[974px]  lg:h-[650px] bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className='container'>
        <div className='flex px-4 sm:px-0  justify-between items-end pt-[0px] sm:pt-0'>
          <h2 className='text-[#F5F5F5] font-[Montserrat] text-[20px] sm:text-[64px] lg:text-[70px] not-italic font-medium pt-[10px] sm:pt-[60px] xl:pt-[100px] leading-[normal]'>
            {title}
          </h2>
          <div className='flex justify-end'>
            <ViewAllLink text={button} linkAddress={linkAddress} />
          </div>
        </div>
        {!isMobileAndTablet ? (
          <ul className='flex gap-x-[20px] mt-[30px] xl:mt-[63px] lg:mt-[43px] mb-[90px]'>
            {dataArr?.map((item, index) => (
              <CardSectionGroup item={item} key={index} />
            ))}
          </ul>
        ) : (
          <Swiper
            spaceBetween={10}
            centeredSlides
            initialSlide={1}
            slidesPerView={dataArr.length - 1}
            className='!mt-[30px] !w-full'
          >
            <ul className='!w-full gap-x-[20px]'>
              {dataArr?.map((item, index) => (
                <SwiperSlide className='!w-[47%]' key={index}>
                  <Link to={'/trust-us'}>
                    <CardSectionGroup item={item} />
                  </Link>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        )}
      </section>
    </section>
  );
};
