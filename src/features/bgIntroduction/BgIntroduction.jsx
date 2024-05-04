import { useEffect, useState } from 'react';
import { useZustandStore } from '../../app/store/store';
import { useFilteredData } from '../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../shared/hooks/useFilteredNestedData';

export const BgIntroduction = () => {
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const { getHomePage, homePageData } = useZustandStore();

  const [selectedBackgroundId, setSelectedBackgroundId] = useState(1); // Изменено на 1
  const filteredData = useFilteredData(homePageData, 1);
  const filteredBackgroundData = useFilteredNestedData(
    homePageData,
    'background',
    selectedBackgroundId
  );

  useEffect(() => {
    getHomePage();
  }, []);

  const handleArrowClick = direction => {
    if (homePageData) {
      const totalBackgrounds = filteredData[0]?.background?.length;
      let newId;

      if (direction === 'left') {
        newId =
          selectedBackgroundId === 1
            ? totalBackgrounds
            : selectedBackgroundId - 1;
      } else {
        newId =
          selectedBackgroundId === totalBackgrounds
            ? 1
            : selectedBackgroundId + 1;
      }

      setSelectedBackgroundId(newId);
    }
  };

  const backgroundImageUrl = ImageURL + filteredBackgroundData[0]?.background;
  return (
    <section
      className={
        'bg-cover h-[706px] sm:h-[100vh] tablet:h-[100vh] relative  w-full flex justify-center flex-col bg-center bg-no-repeat [transition:background-image_1s_ease-in-out] '
      }
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <>
        <section className='w-[100%] max-w-[1720px] px-0 sm:px-[40px] mx-auto  relative'>
          <div className='block tablet:flex justify-center px-4 sm:px-0 items-end'>
            <h2 className='text-[#E2DED3] tablet:text-[#F5F5F5] font-[Montserrat] mt-[53px] sm:mt-0 tablet:max-w-[4000px] max-w-[336px] sm:max-w-[660px]  mb-[150px] lg:mb-0 text-start tablet:text-center text-[48px] sm:text-[70px] xl:text-[60px] tablet:text-[49px]  not-italic font-bold sm:font-bold leading-[normal]  '>
              {filteredData[0]?.title}
            </h2>
          </div>
          <button
            className='arrow-right absolute flex justify-center items-center left-[25px] tablet:left-[40px] xl:left-[10px] lg:left-[60px] top-[350px] sm:top-[310px] tablet:top-[150px]  xl:top-[190px] lg:top-[140px] rounded-[40px] w-[33px] sm:w-[55px] h-[33px] sm:h-[55px] backdrop-filter backdrop-blur-2xl bg-[rgba(255,255,255,0.5)] cursor-pointer transform lg:hover:scale-110 '
            onClick={() => handleArrowClick('left')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-[26px] sm:w-[42px] h-[25px] sm:h-[41px]'
              width='45'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M15.75 4.5L8.25 12L15.75 19.5'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            className='arrow-right absolute flex justify-center items-center right-[25px] tablet:right-[40px] xl:right-[10px] lg:right-[60px] top-[350px] sm:top-[310px] tablet:top-[150px]  xl:top-[190px] lg:top-[140px] rounded-[40px] w-[33px] sm:w-[55px] h-[33px] sm:h-[55px] backdrop-filter backdrop-blur-2xl bg-[rgba(255,255,255,0.5)] cursor-pointer transform lg:hover:scale-110 '
            onClick={() => handleArrowClick('right')}
          >
            <svg
              className='w-[19px] sm:w-[35px] h-[19px] sm:h-[30px]'
              width='35'
              height='30'
              viewBox='0 0 10 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.25 1.5L8.75 9L1.25 16.5'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </section>
        <div
          className={
            'absolute -bottom-[5vh] sm:-bottom-[1vh] tablet:-bottom-0  lg:-bottom-[7vh] left-0   mb-[71px] pl-[20px] sm:pl-[40px] gap-x-[12px] flex mx-0 container'
          }
        >
          {filteredData[0]?.background?.map(bg => (
            <div
              className={`w-[30px] sm:w-[104px] h-1 rounded-sm  ${
                selectedBackgroundId === bg.id
                  ? 'bg-[#F93822] w-[50px] sm:w-[104px] sm:bg-[#FFF]'
                  : 'bg-[#FFF]  sm:bg-[#4B4B4B]'
              }`}
              key={bg.id}
            />
          ))}
        </div>
      </>
    </section>
  );
};
