import { useMediaQuery } from '../../shared';

export const CelebritiesSection = ({ celebrities }) => {
  const isMobile1 = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  const isMobile2 = useMediaQuery('(min-width: 700px) and (max-width: 767px)');
  return (
    <section>
      <ul className=' max-w-[90%] xl:container mx-auto flex justify-between flex-wrap text-[#e2ded3] md:gap-x-[20px] gap-y-[36px] md:gap-y-[87px] tablet:gap-y-[100px] mt-[32px] md:mt-[22px]  mb-[28px] tablet:mb-[200px] '>
        {celebrities?.map(celeb => (
          <li
            className={`w-[343px] h-[499px] mx-auto border-[1px] sm:w-[524px] sm:h-[674px] md:w-[667px] md:h-[796px] tablet:w-[288px] tablet:h-[430px] xl:w-[560px] xl:h-[660px] lg:w-[376px] lg:h-[540px] flex justify-center md:bg-[url("/src/shared/img/TrustUs/lightFon.jpg")] bg-cover bg-no-repeat bg-center rounded-[16px] md:rounded-[17px] tablet:rounded-[20px] lg:rounded-[30px] ${isMobile1 ? 'w-[410px] h-[560px]' : isMobile2 ? 'w-[637px] h-[787px]' : ''}`}
            key={celeb.id}
          >
            <img
              className={`w-full h-[357px] sm:w-full sm:h-[540px] md:w-[645px] md:h-[682px]  tablet:w-[266px] tablet:h-[293px] mx-auto xl:w-[520px] xl:h-[493px] lg:w-[356px] lg:h-[393px] rounded-t-[16px]  md:rounded-[17px] lg:rounded-[30px] md:mt-[20px] ${isMobile1 ? 'w-[410px] h-[425px]' : isMobile2 ? 'w-[637px] h-[652px]' : ''}`}
              src={celeb.img}
              alt='celebImg'
            />
            <div
              className={` bg-black bg-opacity-50 w-[343px] h-[74px] flex justify-center items-center flex-col sm:w-[510px] sm:mt-[564px] md:bg-opacity-0 md:w-[645px] tablet:w-[281px] lg:w-[381px] absolute text-center rounded-[5px] mt-[381px] md:mt-[696px] tablet:mt-[333px] xl:mt-[533px] lg:mt-[433px] ${isMobile1 ? 'w-[410px] mt-[450px]' : isMobile2 ? 'w-[627px]' : ''}`}
            >
              <h4
                className={`font-bold text-[20px] text-[#f93822] md:text-[#e2ded3] sm:text-[22px] md:text-[24px] lg:text-[27px] xl:text-[30px] text-center`}
              >
                {celeb.name}
              </h4>
              <p
                className={`w-[302px] md:w-[402px] tablet:w-full lg:w-[370px] mx-auto text-[16px] text-center sm:text-[17px] md:text-[19px] lg:text-[20px] md:font-semibold font-medium tablet:font-bold`}
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
