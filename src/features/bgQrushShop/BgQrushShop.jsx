import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import blueGuitar from '../../shared/img/shop/blueGuitar.png';
import drumStickBg from '../../shared/img/shop/drumSticksBg.jpg';
import qrushShop from '../../shared/img/shop/qrushShop.png';
import { AnimationTitle, useMediaQuery, Input } from '../../shared';
import blackGuitar from '../../shared/img/shop/blackGuitar.png';
import secondDrumStickBg from '../../shared/img/shop/secondDrumStickBg.png';
import promark from '../../shared/img/shop/promark.png';
import heartFire from '../../shared/img/shop/heartFire.png';
import array_right from '../../shared/img/shop/right_arrow.svg';

export const BgQrushShop = () => {
  const bgImages1 = [blueGuitar, promark, secondDrumStickBg];
  const bgImages2 = [drumStickBg, blackGuitar, heartFire];

  const [indexQrushShop, setIndexQrushShop] = useState(0);
  const isChangingBg = false;
  const timeoutId = null;
  const intervalActive = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isChangingBg && intervalActive) {
        setIndexQrushShop(prevIndex => (prevIndex + 1) % bgImages2.length);
        setIndexQrushShop(prevIndex => (prevIndex + 1) % bgImages1.length);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [
    bgImages1.length,
    bgImages2.length,
    timeoutId,
    isChangingBg,
    intervalActive,
  ]);

  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');

  return (
    <section>
      <div className='max-w-[1920px] mx-auto flex justify-center items-center bg-[#000] '>
        <motion.div
          className={`bg-cover bg-center w-[50%] h-[764px] tablet:h-[620px] lg:h-[800px] xl:h-[960px] bg-[#000] bg-animation ${isMobile ? 'h-[260px]' : ''}`}
          style={{
            backgroundImage: `url(${bgImages1[indexQrushShop]})`,
            transition: 'background-image 1s ease-in-out',
          }}
        />
        <div className=' flex justify-center items-center absolute '>
          <AnimationTitle value={qrushShop} />
        </div>
        <div className='min-w-[300px] sm:min-w-[500px] max-w-[44%] mx-auto flex justify-center absolute mt-[287px]'>
          <Input variant={'filterInput'} placeholder='Поиск' />
          <div className='absolute top-3 sm:top-4 md:top-6 right-5'>
            <img src={array_right} alt='array_right' />
          </div>
        </div>
        <motion.div
          className={`bg-cover bg-center w-[50%] h-[764px] tablet:h-[620px] lg:h-[800px] xl:h-[960px] bg-[#000] bg-animation ${isMobile ? 'h-[260px]' : ''}`}
          style={{
            backgroundImage: `url(${bgImages2[indexQrushShop]})`,
            transition: 'background-image 1s ease-in-out',
          }}
        />
      </div>
    </section>
  );
};
