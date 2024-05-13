import React, { useEffect } from 'react';

import { Advertising, useMediaQuery } from '../../shared';
import {
  AboutUsSectionHomePage,
  ServicesSectionHomePage,
  NewsSectionHomePage,
  TrustUsSectionHomePage,
  VideoSectionHomePage,
  GallerySectionHomePage,
  IntroductionSectionHomePage,
  VideoSectionHomePageMobile,
} from '../../widgets';

import { useZustandStore } from '../../app/store/store';
import { useFilteredData } from '../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../shared/hooks/useFilteredNestedData';

export const HomePage = () => {
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const {
    videos,
    getVideos,
    homePageData,
    getHomePage,
    galleryData,
    getGallery,
  } = useZustandStore();
  const isMobileAndTablet = useMediaQuery('(max-width: 1026px)');
  const secondFilteredVideoData = useFilteredData(homePageData, 6);
  const filteredGalleryData = useFilteredData(homePageData, 7);
  const filteredVideoData = useFilteredData(videos, 1);
  const filteredVideoDataSecond = useFilteredData(videos, 2);
  const filteredVideoDataThird = useFilteredData(videos, 3);
  const filteredVideoDataFourth = useFilteredData(videos, 4);
  const filteredVideoDataFifth = useFilteredData(videos, 5);
  const nestedGalleryData = useFilteredNestedData(
    filteredGalleryData,
    'background',
    11
  );
  const bgGalleryData = useFilteredNestedData(
    filteredGalleryData,
    'background',
    19
  );
  const nestedVideoData = useFilteredNestedData(
    secondFilteredVideoData,
    'background',
    18
  );

  const filteredGalleryImageData = useFilteredData(galleryData, 1);
  const secondFilteredGalleryImageData = useFilteredData(galleryData, 2);
  const thirdFilteredGalleryImageData = useFilteredData(galleryData, 3);
  const fourthFilteredGalleryImageData = useFilteredData(galleryData, 4);
  const fifthFilteredGalleryImageData = useFilteredData(galleryData, 5);
  const sixthFilteredGalleryImageData = useFilteredData(galleryData, 6);

  const videoProps = {
    bgImg: ImageURL + nestedVideoData[0]?.background,
    src: filteredVideoDataThird[0]?.video,
    secondSrc: filteredVideoDataSecond[0]?.video,
    thirdSrc: filteredVideoData[0]?.video,
    fourthSrc: filteredVideoDataFourth[0]?.video,
    fifthSrc: filteredVideoDataFifth[0]?.video,
    title: secondFilteredVideoData[0]?.title,
    button: secondFilteredVideoData[0]?.description,
  };
  const gallerySectionProps = {
    bgImg: ImageURL + bgGalleryData[0]?.background,
    title: filteredGalleryData[0]?.title,
    button: filteredGalleryData[0]?.description,
    firstImage: filteredGalleryImageData[0]?.image,
    secondImage: secondFilteredGalleryImageData[0]?.image,
    thirdImage: thirdFilteredGalleryImageData[0]?.image,
    fourthImage: fourthFilteredGalleryImageData[0]?.image,
    fifthImage: fifthFilteredGalleryImageData[0]?.image,
    sixthImage: sixthFilteredGalleryImageData[0]?.image,
  };
  useEffect(() => {
    getVideos();
    getHomePage();
    getGallery();
  }, []);
  return (
    <>
      <section>
        <IntroductionSectionHomePage />
        <AboutUsSectionHomePage />
        <ServicesSectionHomePage />
        <NewsSectionHomePage />
        <TrustUsSectionHomePage />
      </section>
      <section
        className='bg-center w-full bg-no-repeat bg-cover'
        style={{
          backgroundImage: `url(${ImageURL + nestedGalleryData[0]?.background})`,
        }}
      >
        <GallerySectionHomePage {...gallerySectionProps} />
        {isMobileAndTablet ? (
          <VideoSectionHomePageMobile {...videoProps} />
        ) : (
          <VideoSectionHomePage {...videoProps} />
        )}

        <Advertising />
      </section>
    </>
  );
};
