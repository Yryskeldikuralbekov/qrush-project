import React, { useState, useEffect } from 'react';
import { ImageModal } from '../../../shared/ui/imageModal/ImageModal';
import { useZustandStore } from '../../../app/store/store';

export const GalleryDesktopImageSectionGalleryPage = ({ title }) => {
  const { getGalleryImage, galleryImages } = useZustandStore();
  useEffect(() => {
    getGalleryImage();
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className='bg-center max-w-full'>
      <section className='max-w-[90%] xl:container items-center mx-auto'>
        <section className='grid grid-rows-[38.14%_39.20%_38.14%] tablet:grid-rows-[30.14%_30.20%_30.14%] grid-column gap-1 sm:gap-4 mt-[50px]'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-3 rounded-lg'>
            <img
              src={galleryImages[0]?.image}
              alt='first_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(galleryImages[1]?.image)}
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-1 col-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={galleryImages[1]?.image}
              alt='second_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(galleryImages[2]?.image)}
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-2 col-end-3 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={galleryImages[2]?.image}
              alt='third_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(galleryImages[3]?.image)}
            />
          </div>
          <div className='col-start-3 col-end-4 row-start-1 row-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={galleryImages[3]?.image}
              alt='fourth_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(galleryImages[4]?.image)}
            />
          </div>
          <div className='col-start-4 col-end-5 row-start-1 row-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={galleryImages[4]?.image}
              alt='fifth_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(galleryImages[5]?.image)}
            />
          </div>
          <div className='col-start-3 col-end-5 row-start-2 row-end-4 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={galleryImages[5]?.image}
              alt='sixth_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(galleryImages[6]?.image)}
            />
          </div>
        </section>
      </section>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          handleCloseModal={handleCloseModal}
        />
      )}
    </section>
  );
};
