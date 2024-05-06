export const CardTeamSection = ({ item }) => {
  return (
    <li className='flex-row border-solid sm:border-transparent sm:flex-row flex md:flex-col lg:flex'>
      <div className='bg-[rgb(1,1,1)] border-[#7B0001] border-[2px] md:border-[4px] lg:border-[1px] text-center h-[500px] w-[311px] sm:w-[411px] sm:h-[600px] md:w-[687px] md:h-[1000px] tablet:block sm:text-center tablet:w-[290px] tablet:h-[410px] lg:w-[390px] lg:h-[503px] xl:w-[560px] xl:h-[814px] rounded-[16px] md:rounded-[32px] tablet:rounded-[26px] mx-auto'>
        <img
          src={item.image}
          alt='photos_1'
          className='w-[90%] h-[355px] mx-auto sm:h-[405px] md:h-[711px] tablet:h-[203px] lg:max-w-[90%] lg:h-[340px] xl:max-w-[90%] xl:h-[579px] mt-[24px] sm:mt-[35px] md:mt-[49px] tablet:mt-[15px] xl:mt-[40px] rounded-[16px] md:rounded-[32px] tablet:rounded-[26px] '
        />
        <div className='flex flex-col justify-center items-center mt-[24px] md:mt-[49px] tablet:mt-[10px] xl:mt-[24px]'>
          <h3 className='text-[#F93822] font-bold text-[20px] sm:text-[25px] md:text-[32px] tablet:text-[26px] lg:text-[25px] xl:text-[33px] '>
            {item.first_name}
          </h3>
          <p className='font-medium max-w-[90%] text-[#E2DED3] sm:mt-[16px] tablet:mt-[0px] text-base sm:text-[20px] md:text-[32px] tablet:text-[23px] lg:text-[20px] xl:text-[26px] md:leading-10 '>
            {item.role}
          </p>
        </div>
      </div>
    </li>
  );
};
