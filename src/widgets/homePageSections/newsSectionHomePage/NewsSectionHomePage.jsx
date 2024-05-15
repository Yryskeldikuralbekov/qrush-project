import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import '../../../app/styles/index.css';

import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';
import { useMediaQuery } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';
import { CardNewsHomePage } from './cardNewsHomePage/CardNewsHomePage.';

export const NewsSectionHomePage = () => {
  const { homePageData, getHomePage, getNewsPage, newsData } =
    useZustandStore();
  const ImageURL = import.meta.env.VITE_IMG_URL;
  useEffect(() => {
    getHomePage();
    getNewsPage();
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
  const isMobile = useMediaQuery('(max-width: 576px)');
  const isTablet = useMediaQuery('(max-width: 1000px)');
  return (
    <section
      className='bg-cover bg-no-repeat w-full h-[300px] sm:h-[700px] xl:h-[907px] lg:h-[700px]  bg-center '
      style={{ backgroundImage: `url(${studioData.background})` }}
    >
      <div className='mx-auto px-4 sm:px-10 tablet:px-0 tablet:max-w-[90%] xl:container pt-[38px] pb-[5px]'>
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
          spaceBetween={isMobile ? 20 : 40}
          slidesPerView={isMobile ? 1.8 : isTablet ? 1.3 : 1.8}
          navigation={true}
        >
          <ul className='mt-[65px] flex'>
            {newsData &&
              newsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className='relative bg-cover bg-no-repeat bg-center rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] !w-full sm:!w-full xl:!w-full lg:!w-full !h-[160px] sm:!h-[370px] xl:!h-[550px]'
                    style={{
                      backgroundImage: `url(${item.image})`,
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
