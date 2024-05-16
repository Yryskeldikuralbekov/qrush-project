import React, { useEffect } from 'react';
import { t } from 'i18next';
import { Button } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';

export const SoundRecordingSection = () => {
  const { getSoundRecordingStudioPage, soundRecordingData, getPages, pages } =
    useZustandStore();
  useEffect(() => {
    getSoundRecordingStudioPage();
    getPages();
  }, []);
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const FilteredNewsPagesData = useFilteredData(pages, 8);
  const nestedBackgroundData = useFilteredNestedData(
    FilteredNewsPagesData,
    'background',
    11
  );
  return (
    <section
      className='relative w-full font-montserrat h-[520px] sm:h-[600px] tablet:h-[800px] xl:h-[815px] bg-[#0000008a] xl:flex xl:justify-end lg:h-[735px] lg:flex lg:justify-end bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url(${ImageURL}${nestedBackgroundData[0]?.image})`,
      }}
    >
      <div className='mx-[20px] pt-[100px] sm:w-[700px] text-[#fff] sm:pt-[90px] tablet:pt-[0px] sm:mx-[50px] tablet:top-[90px] absolute lg:left-[100px] lg:top-[100px] lg:z-10'>
        <h1 className='w-full md:w-full text-[40px] tablet:text-[60px] lg:text-[50px] xl:text-[80px] xl:font-bold tablet:w-[500px] lg:w-full xl:w-[1090px] font-[500] mb-[24px]'>
          {soundRecordingData.service_name}
        </h1>
        {soundRecordingData.description &&
          soundRecordingData.description?.map(el => (
            <ul key={el.id}>
              <li>
                <p className='text-[14px] md:text-[20px] w-[330px] md:w-[450px] tablet:text-[25px] xl:text-[36px] xl:w-[828px] xl:leading-[130%] xl:font-medium tablet:w-full font-[400] text-[#FFFFFF] md:text-[#B4B4B4] mb-[10px] md:mb-[12px] tablet:mb-[24px] lg:w-full'>
                  {el.desc}
                </p>
              </li>
            </ul>
          ))}
        <div className='w-full text-center flex items-start justify-start mt-[20px]'>
          <Button variant='soundRecordButton'>
            {t('trustUsPage.fourthSection.buttonInner')}
          </Button>
        </div>
      </div>
    </section>
  );
};
