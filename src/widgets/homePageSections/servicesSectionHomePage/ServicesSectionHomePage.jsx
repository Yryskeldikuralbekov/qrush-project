import { SectionGroup } from '../../../features';

import { useMediaQuery } from '../../../shared';
import { SectionGroupMobile } from '../../../features/sectionGroups/sectionGroupMobile/SectionGroupMobile';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';

export const ServicesSectionHomePage = () => {
  const { homePageData } = useZustandStore();
  const ImageURL = import.meta.env.VITE_IMG_URL;

  const filteredData = useFilteredData(homePageData, 4);
  const filteredNestedData = useFilteredNestedData(
    filteredData,
    'background',
    10
  );
  const filteredImg = useFilteredNestedData(filteredData, 'background', 7);
  const filteredImgSecond = useFilteredNestedData(
    filteredData,
    'background',
    8
  );
  const filteredImgThird = useFilteredNestedData(filteredData, 'background', 9);
  const filteredText = useFilteredNestedData(filteredData, 'next_text', 10);
  const filteredTextSecond = useFilteredNestedData(
    filteredData,
    'next_text',
    11
  );
  const filteredTextThird = useFilteredNestedData(
    filteredData,
    'next_text',
    12
  );
  const filteredTextFourth = useFilteredNestedData(
    filteredData,
    'next_text',
    13
  );
  const isTabletAndMobile = useMediaQuery('(max-width: 1024px)');
  const studioData = {
    background: ImageURL + filteredNestedData[0]?.background,
    linkAddress: '/services',
    title: filteredData[0]?.title,
    firstImg: ImageURL + filteredImg[0]?.background,
    secondImg: ImageURL + filteredImgSecond[0]?.background,
    thirdImg: ImageURL + filteredImgThird[0]?.background,
    firstSubTitle: filteredText[0]?.text,
    secondSubTitle: filteredTextSecond[0]?.text,
    thirdSubTitle: filteredTextThird[0]?.text,
    button: filteredTextFourth[0]?.text,
  };
  return (
    <>
      {isTabletAndMobile ? (
        <SectionGroupMobile {...studioData} />
      ) : (
        <SectionGroup {...studioData} />
      )}
    </>
  );
};
