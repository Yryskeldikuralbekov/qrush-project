import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import firstCardBg from '../../../shared/img/first_news_bg.png';
import secondCardBg from '../../../shared/img/second_news_bg.jpg';
import thirdCardBg from '../../../shared/img/third_news_bg.jpg';
import qRush from '../../../shared/img/q_rush_news_section.svg';
import bgNews from '../../../shared/img/main_page_bg.webp';
import '../../../app/styles/index.css';

import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';
import { useMediaQuery } from '../../../shared';
import { CardNewsHomePage } from './cardNewsHomePage/CardNewsHomePage.';

const cards = [
  {
    bgImage: firstCardBg,
    title: 'РОЗЫГРЫШ',
    subtitle: 'ХОЧУ РЕПЕТИЦИЮ В',
    image: qRush,
    date: 'до 31.10.2023 (вторник)',
  },
  {
    bgImage: secondCardBg,
    title: 'Q · RUSH FEST',
    subtitle:
      'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля ',
    image: null,
    date: null,
  },
  {
    bgImage: thirdCardBg,
    title: 'Q · RUSH FEST',
    subtitle:
      'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля',
    image: null,
    date: null,
  },
  {
    bgImage: firstCardBg,
    title: 'Q · RUSH FEST',
    subtitle:
      'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля ',
  },
];
export const NewsSectionHomePage = () => {
  const isMobile = useMediaQuery('(max-width: 576px)');
  return (
    <section
      className='bg-cover bg-no-repeat w-full h-[269px] sm:h-[700px] xl:h-[907px] lg:h-[800px]  bg-center '
      style={{ backgroundImage: `url(${bgNews})` }}
    >
      <div className='mx-auto px-4  sm:px-10 tablet:px-0 tablet:max-w-[90%] xl:container pt-[38px]  sm:pt-[100px] pb-[66px]'>
        <div className='mb-[17px]  flex sm:block justify-between sm:justify-normal'>
          <h2 className='text-[#F5F5F5] font-[Montserrat]  text-[20px] sm:text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
            Новости
          </h2>
          <div className='flex justify-end mb-0 sm:mb-[40px]'>
            <ViewAllLink linkAddress={'news'} />
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={isMobile ? 20 : 30}
          slidesPerView={1.6}
          navigation={true}
        >
          <ul className='mt-[65px] flex'>
            {cards.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ backgroundImage: `url(${item.bgImage})` }}
                className='bg-cover bg-no-repeat flex justify-center items-center flex-col rounded-[30px]  border-[1px] border-[solid] border-[#F5F5F5] !w-[310px] sm:!w-[600px] xl:!w-[860px] lg:!w-[700px] !h-[160px] sm:!h-[370px] xl:!h-[450px]'
              >
                <CardNewsHomePage item={item} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};
