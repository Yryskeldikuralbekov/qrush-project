export const GalleryMobileVideoSection = ({ videos }) => {
  return (
    <section className='bg-center max-w-full mt-[50px] mb-[50px]'>
      <div className='max-w-[90%] xl:container grid grid-cols-2 gap-4 items-center mx-auto p-[16px] sm:p-[0px] '>
        {videos &&
          videos?.map((link, index) => (
            <iframe
              key={index}
              className='rounded-[30px] flex items-center justify-center border-[2px] border-solid border-gray-500  md:w-[100%] sm:w-[100%] w-[100%] h-[180px] '
              src={link.video}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          ))}
      </div>
    </section>
  );
};
