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
  const { videos, getVideos, homePageData, getHomePage } = useZustandStore();
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
  const videoProps = {
    src: filteredVideoDataThird[0]?.video,
    secondSrc: filteredVideoDataSecond[0]?.video,
    thirdSrc: filteredVideoData[0]?.video,
    fourthSrc: filteredVideoDataFourth[0]?.video,
    fifthSrc: filteredVideoDataFifth[0]?.video,
    title: secondFilteredVideoData[0]?.title,
    button: secondFilteredVideoData[0]?.description,
  };
  const gallerySectionProps = {
    title: filteredGalleryData[0]?.title,
    button: filteredGalleryData[0]?.description,
  };
  useEffect(() => {
    getVideos();
    getHomePage();
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
