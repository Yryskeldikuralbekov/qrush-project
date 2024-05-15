export const GalleryVideoSectionGalleryPage = ({ videos }) => {
  if (!videos) return;
  return (
    <section className='bg-center max-w-full'>
      <div className='max-w-full w-full mb-[-40px] p-[5%]'>
        <iframe
          className='rounded-[30px] border-[2px] border-solid border-gray-500  xl:h-[700px] w-full  lg:h-[700px] tablet:h-[718px] h-[280px] sm:h-[515px]'
          loading='lazy'
          src={videos[0]?.video}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      </div>
    </section>
  );
};
