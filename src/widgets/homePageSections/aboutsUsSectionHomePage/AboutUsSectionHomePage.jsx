import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { DigitalInformationSection } from '../../../features';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';

export const AboutUsSectionHomePage = () => {
  const ImageURL = import.meta.env.VITE_IMG_URL;
  const { getHomePage, homePageData } = useZustandStore();
  const filteredData = useFilteredData(homePageData, 2);
  const filteredText = useFilteredNestedData(filteredData, 'next_text', 1);
  const secondFilteredText = useFilteredNestedData(
    filteredData,
    'next_text',
    7
  );
  console.log(filteredText);
  useEffect(() => {
    getHomePage();
  }, []);
  const backgroundUrl = ImageURL + filteredData[0]?.background[0].background;

  return (
    <section
      className='bg-cover bg-no-repeat -mt-[9px] bg-center h-auto '
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <section className='px-4 sm:px-10 max-w-full tablet:max-w-[92%] xl:container mx-auto flex justify-center items-center '>
        <div className='flex flex-col items-center pt-[5%] sm:pt-[100px]'>
          <h3 className='font-[Montserrat] text-[#F5F5F5]  max-w-[341px]   sm:max-w-[1176px] lg:max-w-[1356px] text-center  text-[12px] sm:text-[25px] not-italic font-medium leading-[normal]'>
            <span className='text-[#F93822] mr-[10px]'>
              {secondFilteredText[0]?.text}
            </span>
            {filteredData[0]?.title}
          </h3>
          <h3 className='font-[Montserrat] text-[#F5F5F5] text-center px-[14px] pt-[19px] sm:pt-[30px] text-[13px] sm:text-[25px] not-italic font-medium leading-[normal]'>
            {filteredData[0]?.description}
          </h3>
          <a
            target='_blank'
            href='https://api.whatsapp.com/send/?phone=996700763736&text&type=phone_number&app_absent=0'
            className='font-[Montserrat] text-center text-nowrap lg:mt-0 text-[#F93822] text-[13px] sm:text-[25px] not-italic font-medium leading-[normal] [text-decoration-line:underline] hover:text-[#F5F5F5]'
            rel='noreferrer'
          >
            {filteredText[0]?.text}
          </a>
        </div>
      </section>
      <DigitalInformationSection />
    </section>
  );
};
