import React, { useEffect } from 'react';
import { NewsCard } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';

export const AllNewsCardSection = () => {
  const { getNewsPage, newsData } = useZustandStore();
  useEffect(() => {
    getNewsPage();
  }, []);
  const baseUrlImg = import.meta.env.VITE_IMG_URL;
  return (
    <section className='w-[90%] xl:w-[1720px] mx-auto text-[#fff] font-montserrat'>
      <div className='w-full my-[90px]'>
        <h2 className=' text-[32px] sm:text-[40px] font-[600] tablet:text-[80px] text-[#fff] tablet:font-[700]'>
          ВСЕ НОВОСТИ
        </h2>
      </div>
      <div className='w-full tablet:grid tablet:grid-cols-2 tablet:gap-[20px]'>
        {newsData?.map(el => (
          <div className='mb-[80px]' key={el.id}>
            <NewsCard
              img={`${baseUrlImg}${el.image}`}
              title={el.title}
              description={el.description}
              warning={el.warning}
              date={el.created_et}
            />
          </div>
        ))}
      </div>
    </section>
  );
};