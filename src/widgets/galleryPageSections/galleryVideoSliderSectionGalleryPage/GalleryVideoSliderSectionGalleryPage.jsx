import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';

export const GalleryVideoSliderSectionGalleryPage = ({ videos }) => {
  return (
    <section className='bg-center max-w-full'>
      <section className='max-w-full xl:container items-center mx-auto h-[450px]'>
        <div className='container'>
          <Swiper
            className='container flex justify-center  '
            modules={[Autoplay, Navigation, Mousewheel]}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            spaceBetween={20}
            speed={1000}
            slidesPerView={3}
            initialSlide={0}
            centeredSlides={true}
            navigation={true}
          >
            <div className=' flex '>
              {videos &&
                videos?.map((link, index) => (
                  <SwiperSlide
                    key={index}
                    className='bg-cover bg-no-repeat  !flex justify-center items-center flex-col rounded-[30px] border-[1px] border-solid border-gray-500 !w-[705px] !h-[3  50px]'
                  >
                    <iframe
                      loading='lazy'
                      className='rounded-[30px] border-[2px] border-solid border-gray-500 '
                      width='705'
                      height='350'
                      src={link.video}
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                  </SwiperSlide>
                ))}
            </div>
          </Swiper>
        </div>
      </section>
    </section>
  );
};
