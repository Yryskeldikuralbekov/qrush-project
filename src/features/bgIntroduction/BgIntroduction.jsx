import { useEffect, useState } from 'react';
import { useZustandStore } from '../../app/store/store';
import { useFilteredData } from '../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../shared/hooks/useFilteredNestedData';

export const BgIntroduction = () => {
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const { getHomePage, homePageData } = useZustandStore();

  const [selectedBackgroundId, setSelectedBackgroundId] = useState(1);
  const filteredData = useFilteredData(homePageData, 1);
  const filteredBackgroundData = useFilteredNestedData(
    homePageData,
    'background',
    selectedBackgroundId
  );
  useEffect(() => {
    getHomePage();
  }, []);
  useEffect(() => {
    if (filteredData.length > 0) {
      const intervalId = setInterval(() => {
        setSelectedBackgroundId(prevId => {
          const nextId = (prevId % filteredData[0]?.background?.length) + 1;
          return nextId;
        });
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [filteredData]);

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
        </section>
        <div
          className={
            'absolute bottom-0 sm:bottom-0 tablet:bottom-0  lg:bottom-0 left-0 mb-[71px] pl-[20px] sm:pl-[40px] gap-x-[12px] flex mx-0 container'
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
