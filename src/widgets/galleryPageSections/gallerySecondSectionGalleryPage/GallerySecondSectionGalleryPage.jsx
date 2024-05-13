import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';

import { useZustandStore } from '../../../app/store/store';
export const GallerySecondSectionGalleryPage = () => {
  const { getGalleryImage, galleryImages } = useZustandStore();
  useEffect(() => {
    getGalleryImage();
  }, []);
  return (
    <section className='bg-center max-w-full'>
      <section className='max-w-full xl:container items-center mx-auto mt-[100px]'>
        <Swiper
          className='gap-x-3'
          spaceBetween={15}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
        >
          <div className='mt-[65px] flex gap-x-3'>
            {galleryImages &&
              galleryImages?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='bg-cover bg-no-repeat bg-center flex-col rounded-[30px] border-[2px]  border-solid border-gray-500 !w-[600px] xl:!w-[860px] lg:!w-[700px] !h-[370px] xl:!h-[450px]'
                  style={{ backgroundImage: `url(${item.image})` }}
                ></SwiperSlide>
              ))}
          </div>
        </Swiper>
      </section>
    </section>
  );
};
