export const CardNewsHomePage = ({ item }) => {
  const formatTitle = item.title.split('\n').slice(0, 5).join('\n');
  const formatTitleWithEllipsis =
    formatTitle.length > 50 ? `${formatTitle.slice(0, 50)}...` : formatTitle;
  const formattedDescription = item.description
    .split('\n')
    .slice(0, 5)
    .join('\n');
  const formattedDescriptionWithEllipsis =
    formattedDescription.length > 40
      ? `${formattedDescription.slice(0, 70)}...`
      : formattedDescription;
  return (
    <li className=''>
      <div className='flex flex-col justify-between items-center py-[20px] sm:py-[100px] xl:py-[180px] text-center'>
        <div className='flex flex-col justify-space-between'>
          <p className='text-[#FFF] w-[70%] tablet:w-full mx-auto font-[Montserrat] pb-[10px] sm:pb-[30px] text-[15px] sm:text-[25px] tablet:text-[30px] not-italic font-semibold leading-[normal]'>
            {formatTitleWithEllipsis}
          </p>
          <h5 className='hidden tablet:block text-[#FFF] w-[70%] mx-auto font-[Montserrat] text-[16px] sm:text-[20px] not-italic font-semibold leading-[normal]'>
            {formattedDescriptionWithEllipsis}
          </h5>
        </div>
      </div>
      <p className='absolute right-[50%] translate-x-[50%] bottom-[10px] sm:bottom-[40px] text-[#FFF] font-[Montserrat] mt-[100px] text-[12px] sm:text-[20px] not-italic font-semibold leading-[normal]'>
        {item.created_et}
      </p>
    </li>
  );
};
