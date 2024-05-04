export const CardNewsHomePage = ({ item }) => {
  return (
    <li className='relative'>
      <div className='flex flex-col justify-between items-center py-[20px] sm:py-[50px] text-center'>
        <div className='flex flex-col justify-space-between'>
          <p className='text-[#FFF] font-[Montserrat] pb-[10px] sm:pb-[30px] text-[15px] sm:text-[30px] not-italic font-semibold leading-[normal]'>
            {item.title}
          </p>
          <h5 className='text-[#FFF] font-[Montserrat] text-[16px] sm:text-[20px] not-italic font-semibold leading-[normal]'>
            {item.subtitle}
          </h5>
        </div>
        <p className='text-[#FFF] font-[Montserrat] mt-[150px] text-[12px] sm:text-[20px] not-italic font-semibold leading-[normal]'>
          {item.date}
        </p>
      </div>
      <div className='absolute bottom-0 left-0 right-0'></div>
    </li>
  );
};
