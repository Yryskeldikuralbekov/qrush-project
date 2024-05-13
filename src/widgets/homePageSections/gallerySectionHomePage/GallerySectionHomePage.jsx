import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';

export const GallerySectionHomePage = ({
  bgImg,
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
      <section
        className='xl:container bg-cover bg-center'
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className='max-w-[90%] mx-auto'>
          <div className='mb-[20px]  sm:mb-[40px] pt-[2%] flex justify-between items-end'>
            <h2 className='text-[#F5F5F5] font-[Montserrat]  text-[20px] sm:text-[80px] lg:text-[70px] not-italic font-medium leading-[normal]'>
              {title}
            </h2>
            <div className='flex justify-end '>
              <ViewAllLink text={button} linkAddress={'gallery'} />
            </div>
          </div>
          <section className='grid grid-rows-[38.14%_39.20%_38.14%] tablet:grid-rows-[20.14%_22.20%_20.14%] grid-column gap-1 sm:gap-4'>
            <div className='col-start-1 col-end-3 row-start-1 row-end-3 rounded-lg'>
              <img
                src={firstImage}
                alt='first_gallery_image'
                className='w-full h-full rounded-3xl object-cover'
              />
            </div>
            <div className='row-start-3 row-end-4 col-start-1 col-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
              <img
                src={secondImage}
                alt='second_gallery_image'
                className='w-full h-full rounded-3xl object-cover'
              />
            </div>
            <div className='row-start-3 row-end-4 col-start-2 col-end-3 rounded-3xl border-[1px] border-[#606060] border-solid'>
              <img
                src={thirdImage}
                alt='third_gallery_image'
                className='w-full h-full rounded-3xl object-cover'
              />
            </div>
            <div className='col-start-3 col-end-4 row-start-1 row-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
              <img
                src={fourthImage}
                alt='fourth_gallery_image'
                className='w-full h-full rounded-3xl object-cover'
              />
            </div>
            <div className='col-start-4 col-end-5 row-start-1 row-end-2 rounded-3xl border-[1px] border-[#606060] border-solid'>
              <img
                src={fifthImage}
                alt='fifth_gallery_image'
                className='w-full h-full rounded-3xl object-cover'
              />
            </div>
            <div className='col-start-3 col-end-5 row-start-2 row-end-4 rounded-3xl border-[1px] border-[#606060] border-solid'>
              <img
                src={sixthImage}
                alt='sixth_gallery_image'
                className='w-full h-full rounded-3xl object-cover'
              />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};
