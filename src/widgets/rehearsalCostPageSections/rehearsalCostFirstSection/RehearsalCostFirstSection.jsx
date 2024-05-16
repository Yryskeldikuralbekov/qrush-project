import React, { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';
import { RehearsalSectionItem } from './rehearsalSectionItem/RehearsalSectionItem';

export const RehearsalCostFirstSection = ({ item }) => {
  const { getPages, pages } = useZustandStore();
  useEffect(() => {
    getPages();
  }, []);
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const FilteredNewsPagesData = useFilteredData(pages, 9);
  const nestedBackgroundData = useFilteredNestedData(
    FilteredNewsPagesData,
    'background',
    12
  );
  const length = item.description.length;
  return (
    <section
      className='w-full mx-auto font-montserrat text-[#E2DED3] pb-[30px] md:pb-[44px] tablet:pb-[54px] lg:pb-[74px] bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url(${ImageURL}${nestedBackgroundData[0]?.image})`,
      }}
    >
      <div className='pt-[100px] container'>
        <h1 className='w-[350px] text-[40px] sm:w-[355px] sm:text-[40px] font-[600] sm:ml-[15px] tablet:w-[835px] tablet:text-[70px] xl:text-[80px] xl:w-[975px] text-[#fff] tablet:font-[700] '>
          {item.service_name}
        </h1>
      </div>
      {item.description &&
        item.description?.map(item => (
          <RehearsalSectionItem key={item.id} item={item} length={length} />
        ))}
    </section>
  );
};
