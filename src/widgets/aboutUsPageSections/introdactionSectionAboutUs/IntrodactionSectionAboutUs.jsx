import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';

export const IntrodactionSectionAboutUs = () => {
  const { getPages, aboutUs } = useZustandStore();
  const urlForImg = import.meta.env.VITE_IMG_URL;
  const filteredData = useFilteredData(aboutUs, 1);
  useEffect(() => {
    getPages();
  }, []);
  return (
    <section
      style={{
        backgroundImage: `url(${urlForImg + filteredData[0]?.background[0]?.image})`,
      }}
      className='font-normal mt-[40px] lg:mt-[30px] bg-cover bg-no-repeat 7xl text-[#F5F5F5] leading-[100px] h-[464px] sm:h-[494px] md:h-[490px] tablet:h-[560px] xl:h-[760px]'
    >
      <div className='container mx-auto flex flex-col'>
        <div className=''>
          <h2 className='pt-2 text-[48px] sm:text-[55px] md:text-[70px] font-regular lg:font-regular lg:text-7xl lg:text-[#F5F5F5] lg:pt-2 lg:leading-[100px] xl:pt-16 xl:text-[#E2DED3] xl:font-medium xl:text-[100px] xl:leading-[150%] mt-[5%]'>
            {filteredData[0]?.title}
          </h2>
          <p className='text-[#E2DED3] font-medium text-[16px] md:text-[24px] xl:text-2xl xl:leading-10 sm:text-[18px] leading-[130%] max-w-[1015px] mt-[2%]'>
            {filteredData[0]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
