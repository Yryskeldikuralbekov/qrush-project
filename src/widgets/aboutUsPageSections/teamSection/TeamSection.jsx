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
        <div className='tablet:max-w-[90%] flex flex-col justify-start tablet:text-left gap-y-12'>
          <h2
            className='flex text-center pt-[3%] sm:text-6xl sm:font-bold sm:text-[#E2DED3] xl:text-left text-3xl xl:text-7xl text-[#F5F5F5]
                xl:pt-16 xl:font-medium xl:leading-[122px]'
          >
            {filteredData[0]?.title}
          </h2>
          <p className='w-full text-dm sm:text-2xl sm:text-start xl:text-left font-medium leading-6 sm:leading-10 text-slate-100 '>
            {filteredData[0]?.description}
          </p>
        </div>
        <ul className='flex flex-wrap sm:flex-wrap items-center mb-[32px] md:mb-[170px] mt-[24px] md:mt-[47px] tablet:mt-[78px] text-center xl:flex-row  mx-auto gap-y-[32px] md:gap-[80px] tablet:gap-x-[29px] tablet:gap-y-[100px] tablet:max-w-[99%] lg:flex-row justify-center lg:justify-center'>
          {aboutUsArtist?.map(item => (
            <CardTeamSection key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
