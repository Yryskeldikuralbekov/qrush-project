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
      className='w-full pb-[50px] mx-auto text-[#fff] font-montserrat bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url(${ImageURL}${nestedBackgroundData[0]?.image})`,
      }}
    >
      <div className='w-[90%] xl:w-[1720px] pb-[50px] mx-auto text-[#fff] font-montserrat'>
        <div className='w-full mt-[90px] mb-[30px] pt-[150px] sm:pt-[150px] tablet:pt-[0px]'>
          <h2
            onClick={() => setOpen(true)}
            className='text-[60px] sm:text-[56px] font-[600] tablet:text-[50px] text-[#fff] tablet:font-[700]'
          >
            {FilteredNewsPagesData[0]?.title}
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
