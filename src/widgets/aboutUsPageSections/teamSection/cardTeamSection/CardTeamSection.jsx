export const CardTeamSection = ({ item }) => {
  return (
    <li className='flex-row tablet:items-start border-solid sm:border-transparent sm:flex-row flex md:flex-col lg:flex'>
      <div className='bg-[#010101] border-[#7B0001] border-[2px] md:border-[4px] lg:border-[5px] text-center h-[500px] w-[337px] sm:w-[518px] sm:h-[700px] md:w-[691px] md:h-[1000px] tablet:block sm:text-center tablet:w-[319px] tablet:h-[690px] lg:w-[400px] lg:h-[743px] xl:w-[548px] xl:h-[863px] rounded-[16px] md:rounded-[32px] tablet:rounded-[26px] mx-auto'>
        <img
          src={item.image}
          alt='photos_1'
          className='w-[90%] h-[355px] mx-auto sm:h-[485px] md:h-[711px] tablet:h-[450px] lg:max-w-[400px] xl:max-w-[507px] xl:h-[574px] mt-[24px] sm:mt-[35px] md:mt-[49px] tablet:mt-[30px] xl:mt-[40px] rounded-[16px] md:rounded-[32px] tablet:rounded-[26px] '
        />
        <div className='flex flex-col justify-center items-center mt-[24px] md:mt-[49px] tablet:mt-[24px]'>
          <h3 className='text-[#F93822] font-bold text-xl text-[20px] sm:text-[25px] md:text-[32px] '>
            {item.first_name}
          </h3>
          <p className='font-medium max-w-[90%] text-[#E2DED3] sm:mt-[16px] text-base  sm:text-[20px] md:text-[32px] md:leading-10 '>
            {item.role}
          </p>
        </div>
      </div>
    </li>
  );
};
