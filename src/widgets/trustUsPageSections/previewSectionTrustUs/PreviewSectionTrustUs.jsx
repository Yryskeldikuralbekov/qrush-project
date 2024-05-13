import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { CelebritiesSection } from '../../../entities';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';

export const PreviewSectionTrustUs = () => {
  const { getTrustUsCelebrities, celebrities, getPages, trustUs } =
    useZustandStore();
  useEffect(() => {
    getTrustUsCelebrities();
    getPages();
  }, []);

  const filteredData = useFilteredData(trustUs, 5);
  const urlForImg = import.meta.env.VITE_IMG_URL;
  const urlBg = urlForImg + filteredData[0]?.background[0]?.image;
  return (
    <section
      style={{
        backgroundImage: `url(${urlBg})`,
      }}
      className='bg-cover bg-no-repeat'
    >
      <section className='bg-cover bg-no-repeat bg-center -mb-[20px]'>
        <div className='max-w-[90%]  mx-auto xl:container text-[#e2ded3] font-montserrat'>
          <div className=' mt-[112px] tablet:mt-[105px] lg:mt-[115px]'>
            <h2 className='font-bold text-[40px] md:text-[56px] tablet:text-[60px] xl:text-[80px] lg:text-[70px]'>
              {filteredData[0]?.title}
            </h2>
          </div>
        </div>
      </section>
      <CelebritiesSection celebrities={celebrities} />
    </section>
  );
};
