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
      className='font-montserrat text-[#E2DED3] md:pb-[80px] tablet:pb-[100px] bg-cover'
      style={{
        backgroundImage: `url(${ImageURL}${nestedBackgroundData[0]?.image})`,
      }}
    >
      <div className='container pt-[100px]'>
        <h1 className='w-[280px] text-[40px] sm:w-[355px] sm:text-[40px] font-[600] tablet:w-[835px] xl:w-[900px] tablet:text-[70px] text-[#fff] tablet:font-[600] '>
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
