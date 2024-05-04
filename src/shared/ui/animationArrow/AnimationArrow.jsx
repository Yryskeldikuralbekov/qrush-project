import React, { useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';

export const AnimationArrow = () => {
  const [color, cycleColor] = useCycle('white', 'red');

  useEffect(() => {
    const intervalId = setInterval(() => {
      cycleColor();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [cycleColor]);

  return (
    <div>
      <motion.svg
        width='60'
        height='60'
        viewBox='0 0 60 60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.rect
          x='0.992'
          y='0.992'
          width='58.016'
          height='58.016'
          rx='29.008'
          stroke='#D4D4D4'
          strokeWidth='1.984'
          color={color}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.path
          fill={color}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          d='M28.5971 51.2431C29.3719 52.0179 30.6281 52.0179 31.4029 51.2431L44.029 38.617C44.8038 37.8422 44.8038 36.586 44.029 35.8112C43.2542 35.0364 41.998 35.0364 41.2232 35.8112L30 47.0344L18.7768 35.8112C18.002 35.0364 16.7458 35.0364 15.971 35.8112C15.1962 36.586 15.1962 37.8422 15.971 38.617L28.5971 51.2431ZM28.016 10.1602L28.016 49.8402H31.984L31.984 10.1602H28.016Z'
        />
      </motion.svg>
    </div>
  );
};
