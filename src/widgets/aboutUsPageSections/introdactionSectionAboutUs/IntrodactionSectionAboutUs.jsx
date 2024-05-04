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
      className='font-normal bg-cover bg-no-repeat 7xl text-[#F5F5F5] leading-[100px] sm:min-h-[200px]'
    >
      <div className='pt-2 sm:-pt-[40px] sm:w-full gap-2 pl-[5%] flex flex-col w-11/12 sm:w-11/12'>
        <div className='h-[460px] pt-36 sm:pt-0'>
          <h2 className='sm:max-w-[70%] pt-2 text-2xl font-regular lg:font-regular lg:text-7xl lg:text-[#F5F5F5] lg:pt-2 lg:leading-[100px] xl:pt-16 xl:text-[#E2DED3] xl:font-medium xl:text-8xl xl:leading-[122px] text-8xl mt-[5%]'>
            {filteredData[0]?.title}
          </h2>
          <p className='leading-5 text-[#E2DED3] font-medium text-sm xl:text-2xl xl:leading-10 text-[#F5F5F5] font-medium text-3xl sm:text-2xl leading-8 max-w-[1015px] mt-[2%]'>
            {filteredData[0]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
