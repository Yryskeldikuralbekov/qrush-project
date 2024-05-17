import { useEffect } from 'react';
import { useZustandStore } from '../../app/store/store';
import { FormFeedback } from '../../features';
import { Advertising } from '../../shared';
import { AccordionSection } from '../../widgets';
import { useFilteredData } from '../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../shared/hooks/useFilteredNestedData';

export const FaqPage = () => {
  const { homePageData } = useZustandStore();
  const filteredData = useFilteredData(homePageData, 9);
  const filteredFirstText = useFilteredNestedData(
    filteredData,
    'next_text',
    24
  );
  const filteredSecondText = useFilteredNestedData(
    filteredData,
    'next_text',
    25
  );
  const filteredThirdText = useFilteredNestedData(
    filteredData,
    'next_text',
    26
  );
  const filteredFourthText = useFilteredNestedData(
    filteredData,
    'next_text',
    27
  );
  const filteredFifthText = useFilteredNestedData(
    filteredData,
    'next_text',
    28
  );
  const filteredSixthText = useFilteredNestedData(
    filteredData,
    'next_text',
    29
  );
  const filteredModalWindow = useFilteredNestedData(
    filteredData,
    'next_text',
    30
  );
  const filteredSeventhText = useFilteredNestedData(
    filteredData,
    'next_text',
    31
  );
  const textArr = {
    title: filteredSecondText[0]?.text,
    firstInput: filteredThirdText[0]?.text,
    secondInput: filteredFourthText[0]?.text,
    thirdInput: filteredSeventhText[0]?.text,
    policyPrivacy: filteredFifthText[0]?.text,
    buttonText: filteredSixthText[0]?.text,
    modalWindow: filteredModalWindow[0]?.text,
  };
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const filteredBGImg = useFilteredNestedData(filteredData, 'background', 20);
  useEffect(() => {}, []);
  return (
    <section
      className='mx-[auto] mt-[0px] font-montserrat bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#190604] via-[#190604] to-[#000000] bg-cover bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(${ImageURL}${filteredBGImg[0]?.background})`,
      }}
    >
      <AccordionSection title={filteredFirstText[0]?.text} />
      <FormFeedback textArr={textArr} />
      <Advertising />
    </section>
  );
};
