import { useEffect } from 'react';
import { SectionGroup } from '../../../features';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';

export const TrustUsSectionHomePage = () => {
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const { homePageData, getHomePage, celebrities, getTrustUsCelebrities } =
    useZustandStore();

  const filteredCelebrities = useFilteredData(celebrities, 1);

  const secondFilteredCelebrities = useFilteredData(celebrities, 2);
  const thirdFilteredCelebrities = useFilteredData(celebrities, 3);
  const filteredData = useFilteredData(homePageData, 8);
  const filteredNestedData = useFilteredNestedData(
    filteredData,
    'background',
    17
  );

  const singersData = {
    background: ImageURL + filteredNestedData[0]?.background,
    linkAddress: '/trust-us',
    title: filteredData[0]?.title,
    button: filteredData[0]?.description,
    firstImg: filteredCelebrities[0]?.image,
    secondImg: secondFilteredCelebrities[0]?.image,
    thirdImg: thirdFilteredCelebrities[0]?.image,
    firstSubTitle: filteredCelebrities[0]?.first_name,
    firstDescription: filteredCelebrities[0]?.role,
    secondSubTitle: secondFilteredCelebrities[0]?.first_name,
    secondDescription: secondFilteredCelebrities[0]?.role,
    thirdSubTitle: thirdFilteredCelebrities[0]?.first_name,
    thirdDescription: thirdFilteredCelebrities[0]?.role,
  };
  useEffect(() => {
    getHomePage();
    getTrustUsCelebrities();
  }, []);
  return (
    <>
      <SectionGroup {...singersData} />
    </>
  );
};
