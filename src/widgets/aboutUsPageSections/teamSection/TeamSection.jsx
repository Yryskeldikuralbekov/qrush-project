import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { CardTeamSection } from './cardTeamSection/CardTeamSection';

export const Team = () => {
  const { aboutUsArtist, getAboutUsArtist, getPages, aboutUs } =
    useZustandStore();
  const filteredData = useFilteredData(aboutUs, 2);
  const filteredData2 = useFilteredData(aboutUs, 2);
  useEffect(() => {
    getAboutUsArtist();
    getPages();
  }, []);
  const urlForBgImage = import.meta.env.VITE_IMG_URL;
  const urlBg = urlForBgImage + filteredData2[0]?.background[0].image;
  return (
    <section
      style={{
        backgroundImage: `url(${urlBg})`,
      }}
      className='bg-cover bg-no-repeat '
    >
      <div className='container mx-auto'>
        <div className='max-w-[90%] mx-auto tablet:max-w-[99%] flex flex-col justify-center tablet:justify-start text-center tablet:text-left tablet:items-start items-center gap-y-[20px] tablet:gap-y-[10px] md:gap-y-[17px]'>
          <h2
            className='flex tablet:w-full tablet:text-left pt-[3%] sm:text-[34px] tablet:text-[56px] sm:font-bold sm:text-[#E2DED3] xl:text-left text-[30px] md:text-[64px] xl:text-8xl text-[#F5F5F5]
                xl:pt-16 xl:font-medium xl:leading-[122px]'
          >
            {filteredData[0]?.title}
          </h2>
          <p className='w-full tablet:max-w-[1140px] tablet:text-left text-base sm:text-[18px] md:text-[32px] tablet:text-[22px] xl:text-[25px] xl:leading-[160%] font-medium leading-[130%] text-slate-100 '>
            {filteredData[0]?.description}
          </p>
        </div>
        <ul className='flex flex-wrap sm:flex-wrap items-center mb-[32px] md:mb-[170px] tablet:mb-[100px] mt-[24px] md:mt-[47px] tablet:mt-[78px] text-center xl:flex-row  mx-auto gap-y-[32px] md:gap-[80px] tablet:gap-0 tablet:gap-y-[60px] tablet:max-w-[99%] xl:container justify-center tablet:justify-between'>
          {aboutUsArtist?.map(item => (
            <CardTeamSection key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
