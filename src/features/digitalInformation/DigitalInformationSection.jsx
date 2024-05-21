import React, { useEffect, useRef, useState, useCallback } from 'react';
import CountUp from 'react-countup';
import { useZustandStore } from '../../app/store/store';
import { useFilteredData } from '../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../shared/hooks/useFilteredNestedData';

export const DigitalInformationSection = () => {
  const { homePageData } = useZustandStore();
  const [hasAppeared, setHasAppeared] = useState(false);
  const ref = useRef(null);
  const filteredData = useFilteredData(homePageData, 3);
  const filteredNestedData = useFilteredNestedData(
    filteredData,
    'next_text',
    5
  );
  const secondFilteredNestedData = useFilteredNestedData(
    filteredData,
    'next_text',
    6
  );
  const thirdFilteredNestedData = useFilteredNestedData(
    filteredData,
    'next_text',
    7
  );
  const fourthFilteredNestedData = useFilteredNestedData(
    filteredData,
    'next_text',
    8
  );
  const fifthFilteredNestedData = useFilteredNestedData(
    filteredData,
    'next_text',
    9
  );

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom >= 0;
      if (isVisible && !hasAppeared) {
        setHasAppeared(true);
      }
    }
  }, [hasAppeared]);

  let timeoutId = null;

  const delayedHandleScroll = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(handleScroll, 15);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', delayedHandleScroll);
    return () => {
      window.removeEventListener('scroll', delayedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [delayedHandleScroll, timeoutId]);

  return (
    <section className='pt-[28px] sm:pt-[70px] pb-[16px] sm:pb-[126px] xl:pt-[126px] flex justify-center items-center'>
      <section
        ref={ref}
        className='px-[16px] sm:px-10 max-w-full sm:max-w-[90%] xl:container mx-auto flex justify-center flex-col items-center align-middle'
      >
        <h4 className='text-[#F5F5F5] font-[Montserrat] text-[26px] sm:text-[50px] not-italic font-medium leading-[normal]'>
          {filteredData[0]?.title}
        </h4>
        <section className='flex flex-wrap justify-between sm:justify-between gap-x-[10px] xl:gap-x-[110px] lg:gap-x-[70px] tablet:gap-x-[50px] md:gap-x-[90px] items-center mt-[25px] sm:mt-[60px]'>
          <div className='inline-flex flex-col w-[50%] sm:w-auto'>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              redraw={true}
              start={hasAppeared ? null : 0}
              end={hasAppeared ? filteredData[0]?.description : 0}
              suffix='+'
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] text-[20px] sm:text-[60px] md:text-[80px] inline-block text-center xl:text-[88px] lg:text-[85px] not-italic font-semibold leading-5 xl:leading-[50px]  text-[#F93822]'
                >
                  {filteredData[0]?.description}
                </h5>
              )}
            </CountUp>
            <p className='text-center text-[#F5F5F5] font-[Montserrat] text-[12px] sm:text-[18px] md:text-[23px] xl:[27px] lg:text-[25px] mt-0 sm:mt-[30px] not-italic font-medium leading-5 sm:leading-[34px]'>
              {filteredNestedData[0]?.text}
            </p>
          </div>
          <div className='inline-flex flex-col'>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              suffix='+'
              redraw={true}
              start={hasAppeared ? null : 0}
              end={hasAppeared ? secondFilteredNestedData[0]?.text : 0}
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] text-[20px] sm:text-[60px] md:text-[80px] inline-block  text-center  xl:text-[88px] lg:text-[85px] not-italic font-semibold leading-5 xl:leading-[50px]  text-[#F93822]'
                >
                  {secondFilteredNestedData[0]?.text}
                </h5>
              )}
            </CountUp>
            <p className='text-center text-[#F5F5F5] font-[Montserrat] text-[12px] sm:text-[18px]  md:text-[23px] xl:[27px] lg:text-[25px]   mt-0 sm:mt-[30px] not-italic font-medium leading-5 sm:leading-[34px]'>
              {thirdFilteredNestedData[0]?.text}
            </p>
          </div>
          <div className='inline-flex flex-col mx-auto mt-[20px] sm:mt-16 tablet:mt-0'>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              redraw={true}
              start={hasAppeared ? null : 0}
              end={hasAppeared ? fourthFilteredNestedData[0]?.text : 0}
              suffix='+'
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] text-[20px] sm:text-[60px] md:text-[80px] inline-block  text-center  xl:text-[88px] lg:text-[85px] not-italic font-semibold leading-5 xl:leading-[50px]  text-[#F93822]'
                >
                  {fourthFilteredNestedData[0]?.text}
                </h5>
              )}
            </CountUp>

            <p className='text-center text-[#F5F5F5]   font-[Montserrat] text-[12px] sm:text-[18px]  md:text-[23px] xl:[27px] lg:text-[25px]   mt-0 sm:mt-[30px] not-italic font-medium leading-5 sm:leading-[34px]'>
              {fifthFilteredNestedData[0]?.text}
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};
