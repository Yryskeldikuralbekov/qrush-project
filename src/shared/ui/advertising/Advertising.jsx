export const Advertising = props => {
  return (
    <section className='bg-cover bg-no-repeat  bg-center h-[130px] tablet:h-[300px]  bg-gradient-to-b from-[#360D08] from-1%  via-[#140503] via-20% to-[#2E0B07] to-100% '>
      <div className='min-w-[343px] max-w-[90%] mx-auto xl:container flex items-center justify-center font-montserrat text-[#e2ded3]'>
        <div className=' text-center flex justify-center flex-col'>
          <h3 className='font-medium mt-[34px] md:w-[727px] tablet:w-full tablet:mt-[89px] text-[14px] md:text-[18px] tablet:text-[30px] xl:text-[35px]'>
            {props.title}
          </h3>
          <p className='font-bold md:font-medium mt-[10px] tablet:mt-[25px] lg:mt-[36px] text-center leading-[normal] text-[14px] md:text-[17px] tablet:text-[30px] xl:text-[35px]'>
            {props.description}
          </p>
        </div>
      </div>
    </section>
  );
};