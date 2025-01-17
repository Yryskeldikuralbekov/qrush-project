import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import { useMediaQuery } from '../../../shared';

export const GalleryVideoSliderSectionGalleryPage = ({ videos }) => {
  const istablet = useMediaQuery('(max-width: 1300px)');
  return (
    <section className='bg-center'>
      <section className='max-w-[90%] mx-auto xl:container h-[450px]'>
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={30}
          slidesPerView={istablet ? 1.5 : 2.8}
          navigation={true}
        >
          <div className=' flex'>
            {videos &&
              videos?.map((link, index) => (
                <SwiperSlide key={index}>
                  <iframe
                    loading='lazy'
                    className='rounded-[30px] border-[2px] border-solid border-gray-500 '
                    width='100%'
                    height='350'
                    src={link.video}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  ></iframe>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </section>
    </section>
  );
};
