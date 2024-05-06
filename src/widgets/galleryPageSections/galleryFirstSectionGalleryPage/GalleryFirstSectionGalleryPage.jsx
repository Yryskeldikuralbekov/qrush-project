import backImg from '../../../shared/img/galleryPage/first.jpg';

export const GalleryFirstSectionGalleryPage = () => {
  return (
    <section
      className='h-[100dvh] bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className='container mx-auto text-[#f5f5f5] font-montserrat mt-[70px] font-medium xl:text-[25px]  lg:text-[24px] tablet:text-[24px] md:text-[16px]sm:text-[16px]'>
        <h2 className='xl:text-[100px] lg:text-[100px] tablet:text-[40px] md:text-[48px] sm:text-[48px] font-medium  mb-[25px]'>
          Галерея
        </h2>
      </div>
    </section>
  );
};
