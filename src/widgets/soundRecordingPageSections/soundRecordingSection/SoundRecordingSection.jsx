import React, { useEffect } from 'react';
import { Button } from '../../../shared';
import studioRecording from '../../../shared/img/first_gallery_home_page.png';
import { useZustandStore } from '../../../app/store/store';

export const SoundRecordingSection = () => {
  const { getSoundRecordingStudioPage, soundRecordingData } = useZustandStore();
  useEffect(() => {
    getSoundRecordingStudioPage();
  }, []);
  return (
    <section className='relative w-full font-montserrat mb-[20px] md:mb-[164px] h-[520px] sm:h-[600px] tablet:h-[800px] bg-[#0000008a] xl:flex xl:justify-end lg:h-[1300px] lg:flex lg:justify-end'>
      <div className='bg-[#0000008a]'>
        <img
          className='object-cover w-full h-full mx-auto mb-[50px] absolute z-[-1] right-[0px] mt-[0px]'
          src={studioRecording}
          alt='studioRecording'
        />
      </div>
      <div className='mx-[20px] pt-[140px] sm:w-[700px] text-[#fff] sm:pt-[145px] tablet:pt-[0px] sm:mx-[50px] tablet:top-[90px] absolute lg:left-[100px] lg:top-[200px] lg:z-10'>
        <h1 className='w-[100px] md:w-full text-[32px] tablet:text-[60px] lg:text-[70px] tablet:w-[500px] lg:w-full font-[500] mb-[24px]'>
          {soundRecordingData.service_name}
        </h1>
        {soundRecordingData.description &&
          soundRecordingData.description?.map(el => (
            <ul key={el.id}>
              <li>
                <p className='text-[14px] md:text-[20px] w-[330px] md:w-[450px] tablet:text-[30px] tablet:w-full font-[400] text-[#FFFFFF] md:text-[#B4B4B4] mb-[10px] md:mb-[12px] tablet:mb-[24px] lg:w-full'>
                  {el.desc}
                </p>
              </li>
            </ul>
          ))}
        <div className='w-full text-center mt-[20px]'>
          <Button variant='serviceButton'>Отправить</Button>
        </div>
      </div>
    </section>
  );
};
