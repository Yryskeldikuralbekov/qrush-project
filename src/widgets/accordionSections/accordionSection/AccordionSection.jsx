import { useState, useEffect } from 'react';
import { AccordionItems } from '../../../features';
import { useZustandStore } from '../../../app/store/store';

export const AccordionSection = ({ title }) => {
  const [flag, setFlag] = useState('');
  const { getFaqPage, faqData } = useZustandStore();
  useEffect(() => {
    getFaqPage();
  }, []);

  return (
    <section className='relative text-[#FFFFFF]'>
      <div className='font-[600] sm:font-normal w-full pb-[80px] pt-[100px] mx-[16px] max-w-[600px] xl:max-w-[1300px] lg:max-w-[900px] sm:mx-auto'>
        <h1 className='text-[48px] sm:text-[50px] w-[360px] lg:w-full lg:text-center text-left'>
          {title}
        </h1>
      </div>
      <div className='max-w-[600px] mx-[16px] mb-[50px] sm:mx-auto sm:mb-[120px] xl:max-w-[1300px] lg:max-w-[900px] lg:mb-[80px]'>
        {faqData &&
          faqData?.map(el => {
            return (
              <div key={el.id}>
                <AccordionItems
                  title={el.id}
                  text={el.question}
                  description={el.answer}
                  flag={flag}
                  setFlag={setFlag}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};
