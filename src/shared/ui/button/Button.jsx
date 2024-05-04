export const Button = ({
  children,
  variant,
  onClick,
  type = 'button',
  className,
}) => {
  const styles = {
    buyButton:
      'bg-[#FE0002] w-[247px] h-[50px] text-center flex justify-center items-center sm:w-[384px] sm:h-[66px] py-[10px] px-[24px] md:w-[478px] md:h-[96px] md:py-[19px] md:px-[46px] tablet:w-[200px] lg:w-[250px] xl:w-[344px] tablet:h-[50px] lg:h-[70px] font-montserrat font-semibold text-[12px] sm:text-[22px] md:text-[32px] tablet:text-[20px] lg:text-[22px] xl:text-[25px] rounded-[30px] md:rounded-[58px]',
    orangeButton:
      'px-[31px] transition-all duration-300 text-center rounded-[20px] lg:px-[65px] py-[7px] bg-[#FE0002] font-normal text-[25px] text-[#F5F5F5] hover:opacity-80',
    customButton:
      'h-[50px] text-[#FE0002] text-center btn font-medium font-montserrat rounded-[30px] mt-[50px]',
    headerButton:
      'py-[10px] transition-all duration-300 hover:opacity-80 bg-[#FE0002]  rounded-full  text-[white] font-montserrat font-medium xl:w-[200px] xl:h-[60px] xl:text-[20px] xl:px-[24px]  xl:ml-[20px] w-[120px] lg:w-[160px] h-[40px] lg:h-[50px] text-[14px] lg:text-[16px] ml-[12px] lg:ml-[15px]  px-[16px] lg:px-[20px]',
    viewAllButton: 'viewAllButton',
    moreInfoButton:
      'flex px-[24px] sm:px-[50px] py-[10px] sm:py-[20px] justify-center w-[248px] sm:w-[490px] h-[50px] sm:h-[100px] items-center gap-[10px] flex-shrink-0 rounded-[40px] text-[#E2DED3] bg-[var(--orange-600,_#FE0002)] font-[Montserrat] text-[20px] sm:text-[40px] not-italic font-medium leading-[normal]',
    serviceButton:
      'sm:w-auto sm:h-auto text-center font-[300] rounded-[500px] text-[12px] py-[10.5px] px-[30px] md:text-[24px] sm:text-[28px] tablet:text-[12px] lg:rounded-[50px] bg-[#FE0002] font-normal lg:text-[12px] xl:text-[16px] text-[#F5F5F5] lg:py-[5px] xl:py-[14px] lg:px-[37px] xl:px-[75px] transition-all duration-300 hover:opacity-80',
  };

  const classNames = [variant && styles[variant], className];

  const combinedClassName = classNames.filter(Boolean).join(' ');

  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
