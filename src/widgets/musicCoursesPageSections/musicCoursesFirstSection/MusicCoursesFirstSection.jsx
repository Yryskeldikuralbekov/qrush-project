import React, { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';
import { MusicCoursesItem } from './musicCoursesItem/MusicCoursesItem';

export const MusicCoursesFirstSection = ({ item }) => {
  const { getPages, pages } = useZustandStore();
  useEffect(() => {
    getPages();
  }, []);
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const FilteredNewsPagesData = useFilteredData(pages, 10);
  const nestedBackgroundData = useFilteredNestedData(
    FilteredNewsPagesData,
    'background',
    13
  );
  return (
    <section
      className='mx-auto font-montserrat text-[#E2DED3] md:pb-[90px] tablet:pb-[154px] bg-cover'
      style={{
        backgroundImage: `url(${ImageURL}${nestedBackgroundData[0]?.image})`,
      }}
    >
      <div className='mx-auto w-none xl:w-[1920px] pt-[120px]'>
        <h1 className='w-[280px] text-[32px] ml-[16px] sm:w-[355px] sm:text-[40px] font-[600] sm:ml-[15px] tablet:w-[835px] tablet:text-[70px] text-[#fff] tablet:font-[600] tablet:ml-[80px]'>
          {item.service_name}
        </h1>
      </div>
      {item.description &&
        item.description?.map(item => (
          <MusicCoursesItem key={item.id} item={item} />
        ))}
    </section>
  );
};
