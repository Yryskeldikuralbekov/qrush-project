import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import qrushShop from '../../shared/img/shop/qrushShop.png';
import { useMediaQuery, Input } from '../../shared';
import searchEngine from '../../shared/img/shop/searchEngine.svg';
import xmark from '../../shared/img/shop/xmark1.svg';

import { useZustandStore } from '../../app/store/store';
import { ShopCardsSection } from '../../entities/shopCardsSection/ShopCardsSection';
import { useFilteredData } from '../../shared/hooks/useFilteredData';

export const BgQrushShop = () => {
  const { getShopCards, getPages, shopCards, shopBg } = useZustandStore();
  const filteredData = useFilteredData(shopBg, 7);
  useEffect(() => {
    getShopCards();
    getPages();
  }, []);
  const urlForImg = import.meta.env.VITE_IMG_URL;
  const bgImages1 =
    filteredData && filteredData[0]?.background
      ? filteredData[0]?.background.map(item => urlForImg + item.image)
      : [];
  const [indexQrushShop, setIndexQrushShop] = useState(0);
  const isChangingBg = false;
  const timeoutId = null;
  const intervalActive = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isChangingBg && intervalActive) {
        setIndexQrushShop(prevIndex => (prevIndex + 1) % bgImages1.length);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [bgImages1.length, timeoutId, isChangingBg, intervalActive]);

  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredShopCards = shopCards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const deleteInputValue = () => {
    setSearchTerm('');
  };

  const arrayImg = Array(4).fill(qrushShop);

  return (
    <section>
      <div className='max-w-[1920px] mx-auto flex justify-center bg-[#000] '>
        <motion.div
          className={`bg-cover bg-center w-[100%] h-[100dvh]  bg-[#000] bg-animation ${isMobile ? 'h-[560px]' : ''}`}
          style={{
            backgroundImage: `url(${bgImages1[indexQrushShop]})`,
            transition: 'background-image 1s ease-in-out',
          }}
        />
        <div className=' flex pt-[100px] justify-center items-center absolute '>
          <Marquee speed='100'>
            <div className='flex ml-[20px] gap-x-[20px] sm:ml-[30px] sm:gap-x-[30px] md:ml-[50px] md:gap-x-[50px] lg:ml-[80px] lg:gap-x-[80px] xl:ml-[100px] xl:gap-x-[100px]'>
              {arrayImg &&
                arrayImg?.map((img, index) => (
                  <img
                    key={index}
                    className='w-[100%] h-[70px] sm:h-[80px] md:h-[94px] tablet:h-[125px] lg:h-[160px] xl:h-[240px] '
                    src={img}
                    alt={`qrushShop${index + 1}`}
                  />
                ))}
            </div>
          </Marquee>
        </div>
        <div className=' mx-auto flex justify-center absolute mt-[257px] sm:mt-[307px] md:mt-[285px] tablet:mt-[330px] xl:mt-[494px] '>
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            variant={'filterInput'}
            placeholder='Поиск'
          />
          <div className='absolute top-3 sm:top-3.3 md:top-6 xl:top-8 right-5'>
            {searchTerm === '' ? (
              <div>
                <img
                  className='w-[26px] h-[29px] lg:w-[30px] lg:h-[31px]'
                  src={searchEngine}
                  alt='array_right'
                />
              </div>
            ) : (
              <div onClick={() => deleteInputValue()}>
                <img
                  className='w-[26px] h-[29px] lg:w-[30px] lg:h-[31px]'
                  src={xmark}
                  alt='array_right'
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {filteredShopCards.length > 0 ? (
        <ShopCardsSection
          shopCards={filteredShopCards}
          searchTerm={searchTerm}
        />
      ) : (
        <div
          className={`max-w-[82%] h-[150px] md:h-[200px] lg:h-[300px] text-[16px] sm:text-[20px] md:text-[25px] lg:text-[40px] flex justify-center items-center text-center mx-auto font-montserrat text-white ${isMobile ? 'text-[18px]' : ''}`}
        >
          <p>Введите другой запрос, такого товара нету!</p>
        </div>
      )}
    </section>
  );
};
