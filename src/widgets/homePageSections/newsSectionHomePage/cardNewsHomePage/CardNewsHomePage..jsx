export const CardNewsHomePage = ({ item }) => {
  return (
    <li>
      <div className='flex justify-center items-center flex-col py-[20px] sm:py-[55px] text-center '>
        <div className='flex flex-col justify-center  items-center '>
          <p className='text-[#FFF]  font-[Montserrat] pb-[10px] sm:pb-[30px] text-[15px] sm:text-[30px] not-italic font-semibold leading-[normal]'>
            {item.title}
          </p>

          <h5 className='text-[#FFF]  font-[Montserrat] text-[16px] sm:text-[40px] not-italic font-semibold leading-[normal]'>
            {item.subtitle}
          </h5>

          {item.image && (
            <img
              src={item.image}
              className='[inline-flex box-shadow:0_0_20px_rgba(255,_255,_255,_0.8)] h-[20px] w-auto'
              alt='Q-rush logo'
            />
          )}
        </div>

        <p className='text-[#FFF] font-[Montserrat] mt-[10px] sm:mt-[40px] text-[12px] sm:text-[20px] not-italic font-semibold leading-[normal]'>
          {item.date}
        </p>
      </div>
    </li>
  );
};
