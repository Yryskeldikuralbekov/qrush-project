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
        <div className='container text-[#e2ded3] font-montserrat'>
          <div className='mt-[100px]'>
            <h1 className='text-[20px] sm:text-[45px] tablet:text-[75px] xl:text-[100px] lg:text-[70px] font-bold'>
              {filteredData[0]?.title}
            </h1>
          </div>
        </div>
      </section>
      <CelebritiesSection celebrities={celebrities} />
    </section>
  );
};
