import React, { useEffect, useState } from 'react';
import { NewsCard } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';
import { ModalNewsWindow } from '../../../features/modalNewsWindow/ModalNewsWindow';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';

export const AllNewsCardSection = () => {
  const [open, setOpen] = useState(false);
  const { getNewsPage, newsData, getPages, pages } = useZustandStore();
  useEffect(() => {
    getNewsPage();
    getPages();
  }, []);
  const FilteredNewsPagesData = useFilteredData(pages, 4);
  const nestedBackgroundData = useFilteredNestedData(
    FilteredNewsPagesData,
    'background',
    10
  );
  const ImageURL = import.meta.env.VITE_IMG_URL;
  return (
    <section
      className='w-full mx-auto text-[#fff] font-montserrat bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url(${ImageURL}${nestedBackgroundData[0]?.image})`,
      }}
    >
      <div className='container sm:pb-[20px] tablet:pb-[50px] mx-auto text-[#fff] font-montserrat'>
        <div className='w-full mt-[100px] mb-[30px] pt-[0px]'>
          <h1
            onClick={() => setOpen(true)}
            className='text-[20px] sm:text-[45px] tablet:text-[75px] xl:text-[100px] lg:text-[70px] font-bold'
          >
            {FilteredNewsPagesData[0]?.title}
          </h1>
        </div>
        <div className='w-full tablet:grid tablet:grid-cols-3 tablet:gap-[30px]'>
          {newsData &&
            newsData?.map((element, index) => (
              <div className='mb-[75px]' key={index}>
                <NewsCard
                  key={element.id}
                  img={element.image}
                  title={element.title}
                  description={element.description}
                  warning={element.admin_bron}
                  date={element.created_et}
                />
              </div>
            ))}
        </div>
        <ModalNewsWindow open={open} setOpen={setOpen} />
      </div>
    </section>
  );
};
