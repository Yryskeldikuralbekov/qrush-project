import React, { useEffect, useState } from 'react';
import { NewsCard } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';
import { ModalNewsWindow } from '../../../features/modalNewsWindow/ModalNewsWindow';

export const AllNewsCardSection = () => {
  const [open, setOpen] = useState(false);
  const { getNewsPage, newsData } = useZustandStore();
  console.log(newsData);
  useEffect(() => {
    getNewsPage();
  }, []);
  return (
    <section className='w-[90%] xl:w-[1720px] mx-auto text-[#fff] font-montserrat'>
      <div className='w-full mt-[90px] mb-[30px] pt-[150px] sm:pt-[150px] tablet:pt-[00px]'>
        <h2
          onClick={() => setOpen(true)}
          className='text-[60px] sm:text-[56px] font-[600] tablet:text-[50px] text-[#fff] tablet:font-[700]'
        >
          ВСЕ НОВОСТИ
        </h2>
      </div>
      <div className='w-full tablet:grid tablet:grid-cols-3 tablet:gap-[20px]'>
        {newsData &&
          newsData?.map((element, index) => (
            <div className='mb-[75px]' key={index}>
              <NewsCard
                key={element.id}
                img={element.image}
                title={element.title}
                description={element.description}
                warning={element.warning}
                date={element.created_et}
              />
            </div>
          ))}
      </div>
      <ModalNewsWindow open={open} setOpen={setOpen} />
    </section>
  );
};
