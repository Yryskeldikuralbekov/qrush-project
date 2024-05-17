import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../hooks/useFilteredData';

export const Advertising = ({ className }) => {
  const { getAdverts, adverts } = useZustandStore();
  const filteredData = useFilteredData(adverts, 1);
  const filteredData2 = useFilteredData(adverts, 2);
  useEffect(() => {
    getAdverts();
  }, []);
  return (
    <section
      className={`bg-cover bg-no-repeat  bg-center h-[130px] sm:h-[150px] md:h-[258px] tablet:h-[270px] xl:h-[300px] text-center ${className === 'shop' ? '-mt-[150px] sm:-mt-0' : null}`}
      style={{
        background:
          'linear-gradient(360deg, rgba(67, 11, 12, 1) 0%, rgba(21, 4, 4, 1) 8%, rgba(14, 0, 0, 1) 30%,  rgba(3, 1, 1, 1) 50.5%, rgba(15, 3, 3, 0.8) 75%, rgba(20, 3, 4, 0.8) 95%, rgba(53, 7, 8, 0.9) 100%)',
      }}
    >
      <div className='min-w-[343px] max-w-[90%] mx-auto xl:container flex justify-center items-center font-montserrat text-[#e2ded3]'>
        <div className=' text-center flex justify-center flex-col md:mt-[37px] tablet:mt-0'>
          <h6 className='font-medium mt-[34px] md:w-[727px] tablet:w-full tablet:mt-[89px] text-[14px] sm:text-[18px] md:text-[27px] tablet:text-[25px] xl:text-[35px]'>
            {filteredData[0]?.text}
          </h6>

          <p className='font-bold mt-[10px] tablet:mt-[25px] lg:mt-[36px] text-center leading-[normal] text-[14px] sm:text-[18px] md:text-[27px] tablet:text-[25px] xl:text-[35px]'>
            {filteredData2[0]?.text}
          </p>
        </div>
      </div>
    </section>
  );
};
