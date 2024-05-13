export const CardNewsHomePage = ({ item }) => {
  return (
    <li className=''>
      <div className='flex flex-col justify-between items-center py-[20px] sm:py-[50px] text-center'>
        <div className='flex flex-col justify-space-between'>
          <p className='text-[#FFF] font-[Montserrat] pb-[10px] sm:pb-[30px] text-[15px] sm:text-[30px] not-italic font-semibold leading-[normal]'>
            {item.title}
          </p>
          <h5 className='text-[#FFF] w-[70%] mx-auto font-[Montserrat] text-[16px] sm:text-[20px] not-italic font-semibold leading-[normal]'>
            {item.subtitle}
          </h5>
        </div>
      </div>
      <p className='absolute right-[50%] translate-x-[50%] bottom-3 sm:bottom-[40px] text-[#FFF] font-[Montserrat] mt-[100px] text-[12px] sm:text-[20px] not-italic font-semibold leading-[normal]'>
        {item.date}
      </p>
    </li>
  );
};
