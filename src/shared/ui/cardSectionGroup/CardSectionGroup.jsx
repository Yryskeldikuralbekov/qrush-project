import { Link } from 'react-router-dom';

import { Button } from '../button/Button';
import { scrollToTop } from '../../utils/scrollToTop';

export const CardSectionGroup = ({ item }) => {
  return (
    <li className='rounded-[30px] p-[10px] border-[1px] border-[solid] border-[#F5F5F5] bg-none bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-full'>
      <div className='p-0 sm:p-[5px] flex item-center h-full sm:h-[400px] md:h-[450px] lg:h-[400px] xl:h-full flex-col'>
        <img
          src={item.img}
          alt={`employer`}
          className={
            'w-full h-[148px] sm:h-[293px] xl:h-[563px] lg:h-[310px] mb-[5px] rounded-[30px] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'
          }
        />
        <p className='font-bold text-[14px] sm:text-[24px] lg:text-[21px] mb-[5px]  text-center  mt-[5px] sm:mt-[5px] text-[#fff]'>
          {item.title}
          {item.description && <br />}
          {item.description ? (
            <span className='font-thin text-[20px]'>{item.description}</span>
          ) : null}
        </p>
        {!item.description && (
          <Link
            to={item.href}
            className='flex justify-center'
            onClick={scrollToTop}
          >
            <Button className='hidden sm:block' variant='serviceButton'>
              {item.button}
            </Button>
          </Link>
        )}
      </div>
    </li>
  );
};
