import { Advertising, useMediaQuery } from '../../shared';
import {
  GalleryImageSectionGalleryPage,
  GalleryMobileVideoSection,
  GallerySecondSectionGalleryPage,
  GalleryVideoSectionGalleryPage,
  GalleryVideoSliderSectionGalleryPage,
  GalleryDesktopImageSectionGalleryPage,
} from '../../widgets';

export const Galery = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <section className='w-full bg-center'>
      {isDesktop ? (
        <GalleryDesktopImageSectionGalleryPage />
      ) : (
        <GalleryVideoSectionGalleryPage />
      )}

      {isMobile ? (
        <GalleryImageSectionGalleryPage />
      ) : (
        <GallerySecondSectionGalleryPage />
      )}
      <GalleryVideoSectionGalleryPage />
      {isMobile ? (
        <GalleryMobileVideoSection />
      ) : (
        <GalleryVideoSliderSectionGalleryPage />
      )}

      <Advertising />
    </section>
  );
};
