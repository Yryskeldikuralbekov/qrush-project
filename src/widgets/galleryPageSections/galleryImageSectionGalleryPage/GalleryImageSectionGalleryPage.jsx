import { useState, useEffect } from 'react';
import { ImageModal } from '../../../shared';

import { useZustandStore } from '../../../app/store/store';
const GalleryImage = ({ image, onClick }) => {
  const urlForImages = import.meta.env.VITE_IMG_URL;
  return (
    <div onClick={onClick} className='w-full h-full'>
      <img
        src={`${image.image}`} // Объединяем базовый URL с путем к изображению
        alt='gallery_image'
        className='w-[100%] mb-[20px] md:mb-0 h-[400px] md:h-[250px] tablet:h-[300px] lg:h-[400px] object-cover border-[1px] border-solid border-gray-500 rounded-[60px] xl:rounded-[65px] tablet:rounded-[55px]'
      />
    </div>
  );
};

const GalleryImageWrapper = ({ image, onClick }) => {
  return (
    <div>
      <GalleryImage image={image} onClick={onClick} />
    </div>
  );
};

export const GalleryImageSectionGalleryPage = () => {
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
      <section>
        <section className='max-w-[90%] xl:container items-center mx-auto'>
          <section className='md:grid md:grid-cols-2 xl:grid-cols-2 md:gap-5 mt-[4vh]'>
            {galleryImages.map((image, index) => (
              <GalleryImageWrapper
                key={index}
                image={image}
                onClick={() => handleOpenModal(image.image)}
              />
            ))}
          </section>
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
