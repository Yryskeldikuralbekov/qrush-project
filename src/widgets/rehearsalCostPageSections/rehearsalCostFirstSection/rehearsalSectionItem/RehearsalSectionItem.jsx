import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Button,
  CardRehearsalSection,
  SwiperPhotoItem,
} from '../../../../shared';
import arrow from '../../../../shared/img/Frame.png';

export const RehearsalSectionItem = ({ item, length }) => {
  const [openList, setOpenList] = useState(false);
  const { t } = useTranslation();
  const changeList = () => {
    setOpenList(!openList);
  };

  const arrayImg = item.image;
  const arrayEquipment = item.tech_name;
  return (
    <>
      <div className='mx-[20px] mt-[5px] sm:mx-auto text-center'>
        <h4 className='text-[18px] font-[500] pb-[22px] sm:text-[27px] sm:pb-[20px] xl:text-[40px] lg:text-[23px] pt-[30px] sm:pt-[40px] tablet:text-[20px]  tablet:pt-[10px] lg:pt-[40px] xl:pt-[60px]'>
          {item.title}
        </h4>
        {item.id === 1 ? (
          <h5 className='text-[14px] sm:text-[24px] font-[500] pb-[10px] sm:pb-[30px] tablet:pb-[40px] text-[#FFFFFF] sm:text-[#B4B4B4] xl:text-[32px] lg:text-[23px] tablet:text-[20px]'>
            {t('rehealBase.firstDescriptionBase')} {length}
            {t('rehealBase.secondDescriptionBase')}
          </h5>
        ) : null}
      </div>

      <section id={item.id} className=''>
        <SwiperPhotoItem arrayImg={arrayImg} />
      </section>
      <div className='hidden tablet:block mt-[5px] sm:mt-[10px] text-right sm:mb-[30px] sm:text-right tablet:text-center mr-[14px]'>
        <Button onClick={changeList} variant='listButton'>
          <h3 className='flex items-center text-[20px] font-[600] sm:text-[30px] lg:text-[30px] tablet:text-[22px]'>
            {item.list_tech}
            <img
              className={
                openList
                  ? 'w-[20px] h-[20px] rotate-[0deg] transition-all ml-[10px]'
                  : !openList
                    ? 'w-[20px] h-[20px] rotate-[-90deg] transition-all ml-[10px]'
                    : ''
              }
              src={arrow}
              alt='arrow'
            />
          </h3>
        </Button>
      </div>
      <div className='flex flex-col items-center justify-center mx-auto w-[365px] sm:w-[560px] text-center md:w-[700px] tablet:w-full mt-[0px]'>
        <AnimatePresence>
          {openList && (
            <motion.section
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              key={item.id}
              className='tablet:mb-[40px] sm:w-[95%] xl:w-[1570px] tablet:mx-auto tablet:grid tablet:grid-cols-3 tablet:gap-x-[70px] lg:gap-x-[200px]'
            >
              {arrayEquipment &&
                arrayEquipment?.map(item => (
                  <ul
                    key={item.id}
                    className='text-[18px] text-center text-[#B4B4B4] sm:text-[25px] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'
                  >
                    <li>
                      <p className='mb-[16px] mt-[16px] text-[#E2DED3]'>
                        {item.tech_name}
                      </p>
                    </li>
                    <CardRehearsalSection
                      item={item.description}
                      openList={openList}
                    />
                  </ul>
                ))}
            </motion.section>
          )}
        </AnimatePresence>
        <p
          className='tablet:hidden underline text-[#F93822] text-[24px] md:text-[28px] underline-offset-4 mb-[20px] mt-[20px] text-center'
          onClick={() => changeList()}
        >
          {openList ? (
            <a href={`#${item.id}`}>
              <Button variant='listButton'>{item.list_tech}</Button>
            </a>
          ) : (
            <Button variant='listButton'>{item.list_tech}</Button>
          )}
        </p>
        <p className='text-center tablet:text-center mx-auto sm:mx-0 tablet:mx-auto text-[20px] sm:text-[30px] md:w-[425px] font-[500] xl:text-[25px] xl:w-[1000px] lg:text-[23px] lg:w-[900px] tablet:text-[20px] tablet:w-[600px] tablet:mb-[40px]'>
          {item.desc1}
        </p>

        <div className='block'>
          <a
            target='_blank'
            href='https://api.whatsapp.com/send/?phone=996700763736&text&type=phone_number&app_absent=0'
            rel='noreferrer'
          >
            <Button
              variant='rehearsalButton'
              className='mt-[15px] tablet:mt-[-10px]'
            >
              {t('trustUsPage.fourthSection.buttonInner')}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};
