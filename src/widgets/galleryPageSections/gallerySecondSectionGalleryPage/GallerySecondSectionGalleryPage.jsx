import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { ImageModal } from '../../../shared/ui/imageModal/ImageModal';

import { useZustandStore } from '../../../app/store/store';
export const GallerySecondSectionGalleryPage = () => {
  const { getGalleryImage, galleryImages } = useZustandStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    getGalleryImage();
  }, []);
  return (
    <section className='bg-center max-w-[90%] mx-auto tablet:max-w-90% xl:container'>
      <section className='items-center mx-auto mt-[80px]'>
        <Swiper
          className='gap-x-3'
          spaceBetween={40}
          slidesPerView={1.8}
          navigation={true}
          pagination={true}
          modules={[Pagination, Navigation]}
        >
          <div className='mt-[65px] flex gap-x-3'>
            {galleryImages &&
              galleryImages?.map(item => (
                <SwiperSlide
                  key={item.id}
                  className='bg-cover bg-no-repeat bg-center flex-col rounded-[30px] border-[2px] border-solid border-gray-500 h-[100px]  sm:h-[300px] tablet:h-[250px] lg:h-[350px] xl:h-[500px]'
                  style={{ backgroundImage: `url(${item.image})` }}
                  onClick={() => handleOpenModal(item.image)}
                />
              ))}
          </div>
        </Swiper>
        {selectedImage && (
          <ImageModal
            imageUrl={selectedImage}
            handleCloseModal={handleCloseModal}
          />
        )}
      </section>
    </section>
  );
};
