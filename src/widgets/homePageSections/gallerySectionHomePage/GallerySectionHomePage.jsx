import firstGalleryImg from '../../../shared/img/first_gallery_home_page.png';
import secondGalleryImg from '../../../shared/img/second_gallery_home_page.png';
import thirdGalleryImg from '../../../shared/img/third_gallery_home_page.png';
import fourthGalleryImg from '../../../shared/img/fourth_gallery_home_page.png';
import fifthGalleryImg from '../../../shared/img/fifth_gallery_home_page.png';
import sixthGalleryImg from '../../../shared/img/sixth_gallery_home_page.png';

import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';

export const GallerySectionHomePage = ({
  title,
  button,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
}) => {
  return (
    <section>
      <section className='max-w-[90%] xl:container mx-auto '>
        <div className='mb-[20px]  sm:mb-0 pt-[8%] flex sm:block justify-between sm:justify-normal'>
          <h2 className='text-[#F5F5F5] font-[Montserrat]  text-[20px] sm:text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
            {title}
          </h2>
          <div className='flex justify-end mb-0 sm:mb-[40px]'>
            <ViewAllLink text={button} linkAddress={'gallery'} />
          </div>
        </div>
        <section className='grid grid-rows-[40.14%_41.20%_40.14%] tablet:grid-rows-[33.14%_31.20%_33.14%]   grid-column gap-1 sm:gap-4'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-3'>
            <img
              src={firstImage}
              alt='first_gallery_image'
              className='w-full h-full'
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-1 col-end-2'>
            <img
              src={secondImage}
              alt='second_gallery_image'
              className='w-full h-full'
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-2 col-end-3'>
            <img
              src={thirdImage}
              alt='third_gallery_image'
              className='w-full h-full'
            />
          </div>
          <div className='col-start-3 col-end-4 row-start-1 row-end-2'>
            <img
              src={fourthImage}
              alt='fourth_gallery_image'
              className='w-full h-full'
            />
          </div>
          <div className='col-start-4 col-end-5 row-start-1 row-end-2'>
            <img
              src={fifthImage}
              alt='fifth_gallery_image'
              className='w-full h-full'
            />
          </div>
          <div className='col-start-3 col-end-5 row-start-2 row-end-4'>
            <img
              src={sixthImage}
              alt='sixth_gallery_image'
              className='w-full h-full '
            />
          </div>
        </section>
      </section>
    </section>
  );
};
