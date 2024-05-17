import { useEffect } from 'react';
import { useZustandStore } from '../../app/store/store';
import { Advertising, useMediaQuery } from '../../shared';
import {
  GalleryImageSectionGalleryPage,
  GalleryMobileVideoSection,
  GallerySecondSectionGalleryPage,
  GalleryVideoSectionGalleryPage,
  GalleryVideoSliderSectionGalleryPage,
  GalleryDesktopImageSectionGalleryPage,
} from '../../widgets';
import { useFilteredData } from '../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../shared/hooks/useFilteredNestedData';

export const GalleryPage = () => {
  const { pages, getVideos, videos } = useZustandStore();
  useEffect(() => {
    getVideos();
  }, []);
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const FilteredNewsPagesData = useFilteredData(pages, 6);
  const nestedBackgroundData = useFilteredNestedData(
    FilteredNewsPagesData,
    'background',
    14
  );
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  return (
    <section
      className='w-full bg-center bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url(${ImageURL}${nestedBackgroundData[0]?.image})`,
      }}
    >
      <div className='container mx-auto text-[#f5f5f5] font-montserrat mt-[100px] xl:text-[25px]  lg:text-[24px] tablet:text-[24px] md:text-[16px] sm:text-[16px]'>
        <h1 className='text-[35px] sm:text-[45px] md:text-[55px] font-bold tablet:text-[60px] lg:text-[65px] xl:[100px]'>
          {FilteredNewsPagesData[0]?.title}
        </h1>
      </div>
      {isDesktop ? (
        <GalleryDesktopImageSectionGalleryPage />
      ) : (
        <GalleryVideoSectionGalleryPage />
      )}

      {isMobile ? <GalleryImageSectionGalleryPage /> : null}
      <GallerySecondSectionGalleryPage />

      <GalleryVideoSectionGalleryPage videos={videos} />
      {isMobile ? (
        <GalleryMobileVideoSection videos={videos} />
      ) : (
        <GalleryVideoSliderSectionGalleryPage videos={videos} />
      )}

      <Advertising />
    </section>
  );
};
