import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CardRehearsalSection = ({ item, openList }) => {
  return (
    <>
      {item.map(item => (
        <div key={item.id}>
          <ul className='invisible h-0 tablet:visible tablet:h-auto text-[18px] text-[#B4B4B4] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'>
            <li>
              <p>{item.naming}</p>
            </li>
          </ul>
          <AnimatePresence>
            {openList && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                key={item.id}
              >
                <li className='visible tablet:hidden'>
                  <p>{item.naming}</p>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};
