import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageModal } from '../../../shared/ui/imageModal/ImageModal';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';

export const GalleryDesktopImageSectionGalleryPage = ({ title }) => {
  const { t } = useTranslation();
  const { getGalleryImage, galleryImages } = useZustandStore();
  useEffect(() => {
    getGalleryImage();
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const filteredData = useFilteredData(galleryImages, 1);
  const secondFilteredData = useFilteredData(galleryImages, 2);
  const thirdFilteredData = useFilteredData(galleryImages, 3);
  const fourthFilteredData = useFilteredData(galleryImages, 4);
  const fifthFilteredData = useFilteredData(galleryImages, 5);
  const sixthFilteredData = useFilteredData(galleryImages, 6);
  const handleOpenModal = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className='bg-center max-w-full'>
      <section className='max-w-[90%] xl:container items-center mx-auto'>
        <h2 className='w-full text-[50px] lg:text-[55px] xl:text-[60px] font-bold text-center text-[#e2ded3] font-montserrat'>
          {t('galleryPage.galleryPageItems.photo')}
        </h2>
        <section className='grid grid-rows-[38.14%_39.20%_38.14%] tablet:grid-rows-[30.14%_30.20%_30.14%] grid-column gap-1 sm:gap-4 mt-[50px]'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-3 rounded-lg'>
            <img
              src={filteredData[0]?.image}
              alt='first_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(filteredData[0]?.image)}
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-1 col-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={secondFilteredData[0]?.image}
              alt='second_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(secondFilteredData[0]?.image)}
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-2 col-end-3 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={thirdFilteredData[0]?.image}
              alt='third_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(thirdFilteredData[0]?.image)}
            />
          </div>
          <div className='col-start-3 col-end-4 row-start-1 row-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={fourthFilteredData[0]?.image}
              alt='fourth_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(fourthFilteredData[0]?.image)}
            />
          </div>
          <div className='col-start-4 col-end-5 row-start-1 row-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={fifthFilteredData[0]?.image}
              alt='fifth_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(fifthFilteredData[0]?.image)}
            />
          </div>
          <div className='col-start-3 col-end-5 row-start-2 row-end-4 rounded-3xl border-[1px] border-[#606060] border-solid'>
            <img
              src={sixthFilteredData[0]?.image}
              alt='sixth_gallery_image'
              className='w-full h-full rounded-3xl object-cover'
              onClick={() => handleOpenModal(sixthFilteredData[0]?.image)}
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
