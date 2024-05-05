import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styleSwiper/swiper.css';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ImageModal } from '../imageModal/ImageModal';

export const SwiperPhotoItem = ({ arrayImg }) => {
  const mobileScreen = useMediaQuery('(max-width: 576px)');
  const tabletScreen = useMediaQuery('(max-width: 1024px)');
  const baseUrlImg = import.meta.env.VITE_IMG_URL;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <Swiper
        slidesPerView={mobileScreen ? 2 : tabletScreen ? 2.3 : 3.1}
        navigation={true}
        loop={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <section className='flex justify-center text-white'>
          {arrayImg &&
            arrayImg?.map((element, index) => (
              <SwiperSlide key={index}>
                <div className='w-[90%] h-[120px] sm:w-[95%] sm:h-[200px] md:h-[237px] xl:h-[320px] lg:h-[260px]'>
                  <img
                    className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                    src={`${baseUrlImg}${element.image}`}
                    alt='rectangle'
                    onClick={() => handleOpenModal(baseUrlImg + element.image)}
                  />
                </div>
              </SwiperSlide>
            ))}
        </section>
      </Swiper>
      <div className='swiper-custom-pagination' />
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
