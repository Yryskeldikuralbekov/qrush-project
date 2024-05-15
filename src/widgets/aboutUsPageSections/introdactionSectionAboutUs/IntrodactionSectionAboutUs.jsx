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
      className='bg-cover bg-no-repeat 7xl text-[#F5F5F5] leading-[100px] h-[464px] sm:h-[494px] md:h-[590px] tablet:h-[560px] xl:h-[760px]'
    >
      <div className='container mx-auto flex flex-col'>
        <div className='mx-auto tablet:mx-0 mt-[80px] md:mt-[112px] tablet:mt-[105px] lg:mt-[115px] xl:mt-[80px]'>
          <h1 className='text-[48px] sm:text-[55px] md:text-[70px] font-bold lg:text-7xl lg:text-[#F5F5F5] lg:leading-[100px] xl:text-[#E2DED3] xl:text-[80px] xl:leading-[150%]'>
            {filteredData[0]?.title}
          </h1>
          <p className='text-[#E2DED3] font-medium text-[16px] md:text-[24px] xl:text-2xl xl:leading-10 sm:text-[18px] leading-[130%] max-w-[343px] sm:max-w-[411px] md:max-w-[664px] tablet:max-w-[1015px] mt-[2%]'>
            {filteredData[0]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
