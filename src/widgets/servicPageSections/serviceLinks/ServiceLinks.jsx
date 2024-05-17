import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, scrollToTop } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';

export const ServiceLinks = () => {
  const { homePageData, getHomePage } = useZustandStore();
  const ImageURL = import.meta.env.VITE_IMG_URL;
  useEffect(() => {
    getHomePage();
  }, []);
  const filteredData = useFilteredData(homePageData, 4);
  const filteredNestedData = useFilteredNestedData(
    filteredData,
    'background',
    10
  );
  const filteredImg = useFilteredNestedData(filteredData, 'background', 8);
  const filteredImgSecond = useFilteredNestedData(
    filteredData,
    'background',
    8
  );
  const filteredImgThird = useFilteredNestedData(filteredData, 'background', 9);
  const filteredText = useFilteredNestedData(filteredData, 'next_text', 10);
  const filteredTextSecond = useFilteredNestedData(
    filteredData,
    'next_text',
    11
  );
  const filteredTextThird = useFilteredNestedData(
    filteredData,
    'next_text',
    12
  );
  const filteredTextFourth = useFilteredNestedData(
    filteredData,
    'next_text',
    13
  );
  const studioData = {
    background: ImageURL + filteredNestedData[0]?.background,
    title: filteredData[0]?.title,
    firstImg: ImageURL + filteredImg[0]?.background,
    secondImg: ImageURL + filteredImgSecond[0]?.background,
    thirdImg: ImageURL + filteredImgThird[0]?.background,
    firstSubTitle: filteredText[0]?.text,
    secondSubTitle: filteredTextSecond[0]?.text,
    thirdSubTitle: filteredTextThird[0]?.text,
  };
  const arrayLinks = [
    {
      img: studioData.secondImg,
      title: studioData.secondSubTitle,
      links: '/sound-recording',
      button: filteredTextFourth[0]?.text,
    },
    {
      img: studioData.thirdImg,
      title: studioData.thirdSubTitle,
      links: '/music-courses',
      button: filteredTextFourth[0]?.text,
    },
    {
      img: studioData.firstImg,
      title: studioData.firstSubTitle,
      links: '/rehearsal-cost',
      button: filteredTextFourth[0]?.text,
    },
  ];
  return (
    <section className='relative w-full h-[600px] sm:h-[1100px] tablet:h-[750px] lg:h-[700px] xl:h-[910px] text-[#F5F5F5]'>
      <img
        className='absolute z-[-1] w-full h-[100%] object-cover'
        src={studioData.background}
        alt='Задний-фон'
      />
      <div className='mx-auto pt-[120px] sm:pt-[100px] w-[335px] mb-[232px] tablet:mb-[150px] sm:w-[565px] tablet:w-[1000px] tablet:pt-[100px] xl:w-[1720px] lg:w-[1200px]'>
        <h1 className='mb-[20px] text-[35px] sm:text-[45px] md:text-[55px] font-bold tablet:text-[60px] lg:text-[65px] xl:[100px]'>
          {studioData.title}
        </h1>
        <section className='tablet:flex tablet:justify-between tablet:gap-[20px]'>
          {arrayLinks &&
            arrayLinks?.map((item, index) => (
              <div
                key={index}
                className='w-full h-full bg-[rgba(0,0,0,0.60)] border-[1px] border-solid border-[#7a7a7a] rounded-[6px] lg:rounded-[30px] flex justify-between tablet:block px-[10px] py-[12px] mb-[10px] sm:p-[25px] tablet:p-[15px] tablet:w-[33%]'
              >
                <img
                  className='w-[175px] h-[95px] rounded-[6px] tablet:w-[550px] sm:w-[375px] sm:h-[226px] tablet:h-[320px] xl:w-[900px] lg:w-[700px] lg:h-[280px] xl:h-[493px] object-cover border-[1px] border-solid border-[#7a7a7a] lg:rounded-[30px]'
                  src={item.img}
                  alt='rectangl'
                />
                <div className='mx-[auto] text-center my-[13px] sm:my-[20px]'>
                  <h2 className='text-[11px] mb-[20px] sm:w-[195px] sm:text-[26px] tablet:w-[300px] tablet:text-[22px] lg:font-[500] tablet:mx-auto lg:w-[350px] xl:w-[450px] tablet:mb-[20px]'>
                    {item.title}
                  </h2>
                  <Link to={item.links}>
                    <Button onClick={scrollToTop} variant='serviceButton'>
                      {item.button}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
        </section>
      </div>
    </section>
  );
};
