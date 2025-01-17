import { useMediaQuery } from '../../shared';

export const CelebritiesSection = ({ celebrities }) => {
  const isMobile1 = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  const isMobile2 = useMediaQuery('(min-width: 700px) and (max-width: 767px)');
  return (
    <section>
      <ul className='container flex justify-between flex-wrap text-[#e2ded3] md:gap-x-[20px] gap-y-[36px] md:gap-y-[87px] tablet:gap-y-[100px] mt-[60px] md:mt-[22px] mb-[28px] md:mb-[150px] tablet:mb-[150px] '>
        {celebrities &&
          celebrities?.map(celeb => (
            <li
              className={`w-[343px] h-[450px] mx-auto border-[1px] sm:w-[450px] bg-black sm:h-[570px] md:w-[667px] md:h-[776px] tablet:w-[288px] tablet:h-[430px] xl:w-[560px] xl:h-[660px] lg:w-[376px] lg:h-[490px] flex justify-center md:bg-cover md:bg-no-repeat md:bg-center rounded-[16px] md:rounded-[17px] tablet:rounded-[20px] lg:rounded-[30px] ${isMobile1 ? 'w-[410px] h-[510px]' : isMobile2 ? 'w-[637px] h-[787px]' : ''}`}
              key={celeb.id}
            >
              <img
                className={`w-full h-[357px] sm:w-full sm:h-[450px] md:w-[645px] md:h-[675px] tablet:w-[266px] tablet:h-[293px] mx-auto xl:w-[520px] xl:h-[493px] lg:w-[350px] lg:h-[353px] rounded-t-[16px] md:rounded-[17px] lg:rounded-[30px] md:mt-[20px] ${isMobile1 ? 'w-[410px] h-[425px]' : isMobile2 ? 'w-[637px] h-[652px]' : ''}`}
                src={celeb.image}
                alt='celebImg'
              />
              <div
                className={`w-[333px] h-[10px] flex justify-center items-center flex-col sm:w-[510px] sm:mt-[500px] md:bg-opacity-0 md:w-[645px] tablet:w-[281px] lg:w-[381px] absolute text-center rounded-[5px] mt-[381px] md:mt-[716px] tablet:mt-[363px] xl:mt-[549px] lg:mt-[413px] ${isMobile1 ? 'w-[410px] mt-[450px]' : isMobile2 ? 'w-[627px]' : ''}`}
              >
                <h4
                  className={`font-bold text-[20px] text-[#f93822] sm:text-[22px] md:text-[25px] lg:text-[23px] xl:text-[30px] text-center`}
                >
                  {celeb.first_name}
                </h4>
                <p
                  className={`w-[302px] md:w-[402px] tablet:w-full lg:w-[370px] mx-auto text-[16px] text-center sm:text-[17px] md:text-[19px] xl:text-[20px] font-medium`}
                >
                  {celeb.role}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};
