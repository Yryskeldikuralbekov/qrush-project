import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
// import firstCardBg from '../../../shared/img/first_news_bg.png';
// import secondCardBg from '../../../shared/img/second_news_bg.jpg';
// import thirdCardBg from '../../../shared/img/third_news_bg.jpg';
// import qRush from '../../../shared/img/q_rush_news_section.svg';
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
    15
  );
  const filteredImg = useFilteredNestedData(filteredData, 'background', 11);
  const filteredImgSecond = useFilteredNestedData(
    filteredData,
    'background',
    12
  );
  const filteredImgThird = useFilteredNestedData(
    filteredData,
    'background',
    13
  );
  const filteredImgFourth = useFilteredNestedData(
    filteredData,
    'background',
    14
  );
  const filterImgCard = useFilteredNestedData(filteredData, 'background', 16);
  const filtertitle = useFilteredNestedData(filteredData, 'next_text', 14);
  const filterSubtitle = useFilteredNestedData(filteredData, 'next_text', 15);
  const filterDate = useFilteredNestedData(filteredData, 'next_text', 16);
  const filterFirsttext = useFilteredNestedData(filteredData, 'next_text', 17);
  const filterSecondttext = useFilteredNestedData(
    filteredData,
    'next_text',
    19
  );
  const filterThirdtext = useFilteredNestedData(filteredData, 'next_text', 21);
  const filterFirstsubtitle = useFilteredNestedData(
    filteredData,
    'next_text',
    20
  );
  const filterSecondsubtitle = useFilteredNestedData(
    filteredData,
    'next_text',
    20
  );
  const filterThirdsubtitle = useFilteredNestedData(
    filteredData,
    'next_text',
    22
  );
  const filterLinkText = useFilteredNestedData(filteredData, 'next_text', 23);
  const button = filterLinkText[0]?.text;
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
      subtitle: filterFirstsubtitle[0]?.text,
      image: null,
      date: null,
    },
    {
      bgImage: studioData.thirdImg,
      title: filterSecondttext[0]?.text,
      subtitle: filterSecondsubtitle[0]?.text,
      image: null,
      date: null,
    },
    {
      bgImage: studioData.fourthImg,
      title: filterThirdtext[0]?.text,
      subtitle: filterThirdsubtitle[0]?.text,
    },
  ];
  const isMobile = useMediaQuery('(max-width: 576px)');
  return (
    <section
      className='bg-cover bg-no-repeat w-full bg-center '
      style={{ backgroundImage: `url(${studioData.background})` }}
    >
      <div className='mx-auto px-4  sm:px-10 tablet:px-0 tablet:max-w-[90%] xl:container pt-[38px]  pb-[10px]'>
        <div className='mb-[17px]  flex sm:block justify-between sm:justify-normal'>
          <h2 className='text-[#F5F5F5] font-[Montserrat]  text-[20px] sm:text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
            {filteredData[0]?.title}
          </h2>
          <div className='flex justify-end mb-0 sm:mb-[40px]'>
            <ViewAllLink linkAddress={'news'} text={button} />
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
              <SwiperSlide key={index}>
                <div
                  className='relative bg-cover bg-no-repeat rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] !w-[310px] sm:!w-[600px] xl:!w-[1060px] lg:!w-[750px] !h-[160px] sm:!h-[370px] xl:!h-[550px]'
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                  }}
                >
                  <CardNewsHomePage item={item} />
                </div>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};
