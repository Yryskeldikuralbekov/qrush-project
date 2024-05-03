import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import firstCardBg from '../../../shared/img/first_news_bg.png';
import secondCardBg from '../../../shared/img/second_news_bg.jpg';
import thirdCardBg from '../../../shared/img/third_news_bg.jpg';
import qRush from '../../../shared/img/q_rush_news_section.svg';
import bgNews from '../../../shared/img/main_page_bg.webp';
import '../../../app/styles/index.css';

import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';
import { useMediaQuery } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';
import { CardNewsHomePage } from './cardNewsHomePage/CardNewsHomePage.';

export const NewsSectionHomePage = () => {
  const { homePageData, getHomePage } = useZustandStore();
  const ImageURL = import.meta.env.VITE_IMG_URL;
  useEffect(() => {
    getHomePage();
  }, []);
  const filteredData = useFilteredData(homePageData, 5);
  const filteredNestedData = useFilteredNestedData(
    filteredData,
    'background',
    12
  );
  const filteredImg = useFilteredNestedData(filteredData, 'background', 13);
  const filteredImgSecond = useFilteredNestedData(
    filteredData,
    'background',
    14
  );
  const filteredImgThird = useFilteredNestedData(
    filteredData,
    'background',
    15
  );
  const filteredImgFourth = useFilteredNestedData(
    filteredData,
    'background',
    16
  );
  const filterImgCard = useFilteredNestedData(filteredData, 'background', 18);
  const filtertitle = useFilteredNestedData(filteredData, 'next_text', 15);
  const filterSubtitle = useFilteredNestedData(filteredData, 'next_text', 20);
  const filterDate = useFilteredNestedData(filteredData, 'next_text', 14);
  const filterFirsttext = useFilteredNestedData(filteredData, 'next_text', 12);
  const filterSecondttext = useFilteredNestedData(
    filteredData,
    'next_text',
    18
  );
  const filterThirdtext = useFilteredNestedData(filteredData, 'next_text', 19);
  const studioData = {
    background: ImageURL + filteredNestedData[0]?.background,
    firstImg: ImageURL + filteredImg[0]?.background,
    secondImg: ImageURL + filteredImgSecond[0]?.background,
    thirdImg: ImageURL + filteredImgThird[0]?.background,
    fourthImg: ImageURL + filteredImgFourth[0]?.background,
    cardImg: ImageURL + filterImgCard[0]?.background,
  };
  const cards = [
    {
      bgImage: studioData.firstImg,
      title: filtertitle[0]?.text,
      subtitle: filterSubtitle[0]?.text,
      image: studioData.cardImg,
      date: filterDate[0]?.text,
    },
    {
      bgImage: studioData.secondImg,
      title: filterFirsttext[0]?.text,
      subtitle:
        'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля ',
      image: null,
      date: null,
    },
    {
      bgImage: studioData.thirdImg,
      title: filterSecondttext[0]?.text,
      subtitle:
        'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля',
      image: null,
      date: null,
    },
    {
      bgImage: studioData.fourthImg,
      title: filterThirdtext[0]?.text,
      subtitle:
        'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля ',
    },
  ];
  console.log(filteredData);
  const isMobile = useMediaQuery('(max-width: 576px)');
  return (
    <section
      className='bg-cover bg-no-repeat w-full h-[269px] sm:h-[700px] xl:h-[907px] lg:h-[800px]  bg-center '
      style={{ backgroundImage: `url(${studioData.background})` }}
    >
      <div className='mx-auto px-4  sm:px-10 tablet:px-0 tablet:max-w-[90%] xl:container pt-[38px]  sm:pt-[100px] pb-[66px]'>
        <div className='mb-[17px]  flex sm:block justify-between sm:justify-normal'>
          <h2 className='text-[#F5F5F5] font-[Montserrat]  text-[20px] sm:text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
            {filteredData[0]?.title}
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
