import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';

export const MainSectionTrustUs = () => {
  const { getPages, trustUs } = useZustandStore();
  const filteredData = useFilteredData(trustUs, 5);
  useEffect(() => {
    getPages();
  }, []);
  return (
    <section className='bg-cover bg-no-repeat bg-center -mb-[20px]'>
      <div className='max-w-[90%]  mx-auto xl:container text-[#e2ded3] font-montserrat'>
        <div className=' mt-[25px] md:mt-[35px] tablet:mt-[55px] lg:mt-[75px]'>
          <h2 className='font-bold tablet:font-medium text-[48px] md:fond-semibold tablet:text-[60px] xl:text-[100px] lg:text-[70px]'>
            {filteredData[0]?.title}
          </h2>
        </div>
      </div>
    </section>
  );
};
